import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "milk", price: 10 },
    { id: 2, name: "Bread", price: 15 },
    { id: 3, name: "egg", price: 21 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const Validation = schema.safeParse(body);
  if (!Validation.success)
    return NextResponse.json(Validation.error.errors, { status: 400 });
  return NextResponse.json(
    { id: 1, name: body.name, price: body.price },
    { status: 201 }
  );
}
