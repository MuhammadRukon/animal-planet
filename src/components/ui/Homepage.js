"use client";
import React from "react";
import Button from "../shared/Button";
import Card from "../shared/Card";

const Homepage = () => {
  const click = () => {
    console.log("clicked");
  };
  return (
    <div className="bg-black h-[100vh] p-10 lg:p-32 text-white">
     {/* buttons section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* right section */}
        <div className="w-full md:w-2/3 flex flex-wrap gap-4">
          <Button btnName={"Add Animal"} handleClick={click} />
          <Button btnName={"Add Category"} handleClick={click} />
        </div>
        {/* left section */}
        <div className="w-full md:w-1/3 flex flex-wrap justify-end gap-4">
          <Button btnName={"Add Animal"} handleClick={click} />
          <Button btnName={"Add Category"} handleClick={click} />
        </div>
      </div>
      {/* cards section */}
      <div className="mt-10 md:mt-16">
        <Card />
      </div>
    </div>
  );
};

export default Homepage;
