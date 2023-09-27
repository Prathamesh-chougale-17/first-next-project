import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-slate-500 p-5">
      <Link href="/" className="mr-5">
        Prathamesh
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
    </div>
  );
};

export default Navbar;
