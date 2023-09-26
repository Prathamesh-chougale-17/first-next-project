import React from "react";
interface Props {
  params: { id: number };
}
//params is property that is passed to the component
const UserDetailPage = ({ params: { id } }: Props) => {
  return <div>My user id is : {id}</div>;
};

export default UserDetailPage;
