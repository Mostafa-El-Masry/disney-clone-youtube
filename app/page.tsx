import React from "react";

const Home = () => {
  const cities = ["New york", "London"];

  return (
    <>
      <div>
        Home
        {cities.map((city) => (
          <li className="bg-slate-600">{city}</li>
        ))}
      </div>
    </>
  );
};

export default Home;
