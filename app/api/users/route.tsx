// route handler is a function that handle the http request and response

//DELETE - delete data
//PATCH - update part of data

import { NextRequest, NextResponse } from "next/server";
import userSchema from "./schema";

//we pass request object to the function for preventing caching
//GET - get all data
export function GET(request: NextRequest) {
  // In real application we will fetch data from database
  return NextResponse.json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane holand" },
    { id: 3, name: "John Smith" },
    { id: 4, name: "Prathamesh Chougale" },
  ]);
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
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}

//PUT - update data
