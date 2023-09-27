import React from "react";

interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="bg-slate-500 p-5 mr-5">Admin SideBars</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
