"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status, data: session } = useSession(); //data is renamed to session

  return (
    <div className="flex bg-slate-500 p-5">
      <Link href="/" className="mr-5">
        Prathamesh
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
      {status === "loading" && <div>Loading...</div>}
      {status === "authenticated" && (
        <div>
          {session.user?.name}
          <Link href="/api/auth/signout" className="ml-3">
            Sign Out
          </Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin" className="mr-5">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
