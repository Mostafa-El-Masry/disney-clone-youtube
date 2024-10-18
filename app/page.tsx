"use client";
import React from "react";

const Home = () => {
  let pornStars = ["Mandy Muse", "Baliey Brooke", "Sophee Dee"];

  let sIndex = 0;

  const getMessage = () => {
    return pornStars.length === 0 && (pornStars = ["Go Pray Dude"]);
  };

  return (
    <>
      {getMessage()}
      {pornStars.map((pornstar) => (
        <li
          className="bg-orange-500 p-2 w-1/2 m-4 active:bg-violet-700"
          key={pornstar}
          onClick={() => console.log(pornstar)}
        >
          {pornstar}
        </li>
      ))}
    </>
  );
};

export default Home;
