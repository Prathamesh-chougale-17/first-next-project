"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}
const UserErrorPage = ({ error, reset }: Props) => {
  console.log(error);
  return (
    <>
      <div>nice</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default UserErrorPage;
