import React from "react";
interface Props {
  params: { photoid: number; id: number };
}
//params is property that is passed to the component
const UserDetailPage = ({ params: { photoid, id } }: Props) => {
  return (
    <div>
      My user-id {id} in photos is : {photoid}
    </div>
  );
};

export default UserDetailPage;
