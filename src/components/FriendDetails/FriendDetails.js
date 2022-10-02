import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();
  return (
    <div>
      <h1>Details about : {friend.name}</h1>
      <p>Call Him/her : {friend.phone}</p>
      <h2>EveryThing You Need To Know About This Person</h2>
    </div>
  );
};

export default FriendDetails;
