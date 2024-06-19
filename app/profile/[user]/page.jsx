"use client"
import React, { Suspense } from "react";
import UserProfile from "@/app/Components/UserProfile";
import { useSearchParams } from "next/navigation";

const Userpage = () => {
  const queryParams = useSearchParams();
  const user = queryParams.get("user");

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="mt-10 ml-5">
        <h2 className="head_text text-left text-secondary">{user} Profile</h2>
        <h2 className="text-gray-500 text-left mt-5">View your {user} post.</h2>
        <UserProfile />
      </div>
    </Suspense>
  );
};

export default Userpage;
