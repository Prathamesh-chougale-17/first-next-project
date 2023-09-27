"use client";
import React from "react";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";//we have not to use to redirect to other page via router
// we have to redirect from next/navigation

const LoginPage = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/users");
      }}
      className="btn btn-primary"
    >
      create
    </button>
  );
};

export default LoginPage;
