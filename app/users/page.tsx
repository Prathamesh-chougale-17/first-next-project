import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}
const Users = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn p-3">
        Users
      </Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default Users;
