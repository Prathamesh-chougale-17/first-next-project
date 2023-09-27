import NotFound from "@/app/not-found";
import { notFound } from "next/navigation";
import React from "react";
interface Props {
  params: { id: number };
}
//params is property that is passed to the component
const UserDetailPage = ({ params: { id } }: Props) => {
  if (id > 10) return notFound();
  return <div>My user id is : {id}</div>;
};

export default UserDetailPage;
