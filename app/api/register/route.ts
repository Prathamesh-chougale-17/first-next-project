import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import bcrypt from 'bcrypt'

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(5).max(20)
});

export async function POST(req: NextRequest) {
    const body = await req.json();

    const Validation = schema.safeParse(body);
    if (!Validation.success)
        return NextResponse.json(Validation.error.errors, {
            status: 400
        });

    const user = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    });

    if (user)
        return NextResponse.json({ message: "Email already exists" }, {
            status: 400
        });

    const hashedPassword = await bcrypt.hash(body.password, 10)
    const newUser = await prisma.user.create({
        data: {
            email: body.email,
            hashedPassword
        }
    });
    return NextResponse.json({ email: newUser.email })
}