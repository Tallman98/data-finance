import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4 max-w-[1240px] mx-auto grid lg:grid-cols-3 items-center ">
      <div className="md:col-span-2">
        <div>
          <h1 className="md:text-3xl sm:text-2xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
      </div>
      <div className="my-4 ">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <input
            className="p-3 w-full rounded-md text-black "
            type="email"
            placeholder="Enter Email"
          />
          <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium mx-auto my-6 py-3 hover:bg-[#01bf83] ease-in-out duration-500 ml-4">
            Notify Me
          </button>
        </div>
        <p>
          We care about the protection of you data. Read our
          <span className="text-[#00df9a]">
            <a href="/"> Privacy Policy</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
