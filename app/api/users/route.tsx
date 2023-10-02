// route handler is a function that handle the http request and response

//DELETE - delete data
//PATCH - update part of data

import { NextRequest, NextResponse } from "next/server";
import userSchema from "./schema";
import prisma from "@/prisma/client";

//we pass request object to the function for preventing caching
//GET - get all data
export async function GET(request: NextRequest) {
  // In real application we will fetch data from database

  //This give filter data of user via email
  // const user = await prisma.user.findMany({
  //   where: {
  //     email: "",
  //   },
  // });

  // To get all data we use and it gives us the promise so we should use await
  const user = await prisma.user.findMany();

  // return NextResponse.json([
  //   { id: 1, name: "John Doe" },
  //   { id: 2, name: "Jane holand" },
  //   { id: 3, name: "John Smith" },
  //   { id: 4, name: "Prathamesh Chougale" },
  // ]);

  //return the data from database
  return NextResponse.json(user);
}

//POST - create data
export async function POST(request: NextRequest) {
  const body = await request.json(); //get the body of the request
  // In real application we will insert data into database
  //In real world we needed to validate the data
  //if the data is not valid we will return 400 status code
  //else return the data with 201 status code
  const Validation = userSchema.safeParse(body);
  if (!Validation.success)
    return NextResponse.json(Validation.error.errors, { status: 400 });

  const users = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (users) {
    return NextResponse.json({ error: "User already exist" }, { status: 400 });
  }

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(newUser, { status: 201 });
  // return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}

//PUT - update data
