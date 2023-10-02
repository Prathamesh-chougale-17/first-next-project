// //this used to protect the routes
// // import { NextRequest, NextResponse } from "next/server";

// // import middleware from 'next-auth/middleware'
// // export default middleware;
// //the below code is the same the two above lines

// export { default } from 'next-auth/middleware';

// // export function middleware(request: NextRequest) {
// //     return NextResponse.redirect(new URL('/new-page', request.url));
// // }

// export const config = {
//     // * zero or more parameters
//     // + one or more parameters
//     // ? zero or one parameters
//     matcher: ['/users/:id*']
//     // matcher: ['/users/:id+']
//     // matcher: ['/users/:id?']
// }