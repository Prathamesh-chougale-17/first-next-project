// route handler is a function that handle the http request and response
//DELETE - delete data
//PATCH - update part of data - replace part of data

//GET - get all data
import { NextRequest, NextResponse } from "next/server";
import userSchema from "../schema";

//we pass request object to the function for preventing caching
export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // In real application we will fetch data from database
  return NextResponse.json({ id: params.id, name: "lol" });
}

//PUT - update data - replace all data
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //validate the request body
  //if the data is not valid we will return 400 status code
  //fetch the data with 200 status code
  //If data don't exist , we will return 404 status code
  //update the user
  //return the updated user with 200 status code
  const body = await request.json(); //get the body of the request
  // if (!body.name)
  //   return NextResponse.json({ error: "Name is required" }, { status: 400 });
  // if (params.id > 10)
  //   return NextResponse.json({ error: "User not found" }, { status: 404 });
  const Validation = userSchema.safeParse(body);
  if (!Validation.success)
    return NextResponse.json(Validation.error.errors, { status: 400 });
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ id: params.id, name: body.name }, { status: 200 });
}

//DELETE - delete data
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //validate the request body
  //If data don't exist , we will return 404 status code
  //delete the user
  //return the deleted user with 200 status code
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({}, { status: 200 });
}
