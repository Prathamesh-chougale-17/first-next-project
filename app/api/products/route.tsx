import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany();
  // return NextResponse.json([
  //   { id: 1, name: "milk", price: 10 },
  //   { id: 2, name: "Bread", price: 15 },
  //   { id: 3, name: "egg", price: 21 },
  // ]);
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json(); //get the body of the request
  // In real application we will insert data into database
  //In real world we needed to validate the data
  //if the data is not valid we will return 400 status code
  //else return the data with 201 status code
  const Validation = schema.safeParse(body);
  if (!Validation.success)
    return NextResponse.json(Validation.error.errors, { status: 400 });

  const newUser = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(newUser, { status: 201 });
  // return NextResponse.json({ id: 1, name: body.name ,price:body.price}, { status: 201 });
}
