import React from "react";
interface Props {
  params: { slug: string[] };
}

const UserProduct = ({ params: { slug } }: Props) => {
  return <div>UserProduct {slug}</div>;
};

export default UserProduct;
