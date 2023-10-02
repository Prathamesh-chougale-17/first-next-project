// route handler is a function that handle the http request and response
//DELETE - delete data
//PATCH - update part of data - replace part of data

//GET - get all data
import { NextRequest, NextResponse } from "next/server";
import userSchema from "../schema";
import prisma from "@/prisma/client";

//we pass request object to the function for preventing caching
export async function GET(
  request: NextRequest,
  // { params }: { params: { id: number } }
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });
  // In real application we will fetch data from database
  // return NextResponse.json({ id: params.id, name: "lol" });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json(user);
}

//PUT - update data - replace all data
export async function PUT(
  request: NextRequest,
  // { params }: { params: { id: number } }
  { params }: { params: { id: string } }
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

  const users = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!users) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: users.id,
    },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  // if (params.id > 10)
  if (parseInt(params.id) > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // return NextResponse.json({ id: params.id, name: body.name }, { status: 200 });
  return NextResponse.json(updatedUser, { status: 200 });
}

//DELETE - delete data
export async function DELETE(
  request: NextRequest,
  // { params }: { params: { id: number } }
  { params }: { params: { id: string } }
) {
  const users = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!users) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const DeletedUser = await prisma.user.delete({
    where: {
      id: users.id,
    },
  });
  //validate the request body
  //If data don't exist , we will return 404 status code
  //delete the user
  //return the deleted user with 200 status code
  if (parseInt(params.id) > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json(DeletedUser, { status: 200 });
  // return NextResponse.json({}, { status: 200 });
}
