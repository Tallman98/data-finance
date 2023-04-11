import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] grid md:grid-cols-3 gap-8 mx-auto">
        <div className="w-full shadow-xl flex flex-col  p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 ">1 Granted User</p>
            <p className="py-2 border-b mx-8 ">Send up to 2 GB</p>
          </div>
          <button className="w-[200px] bg-[#00df9a] mx-auto rounded-md font-medium my-6 px-6 py-3 hover:bg-[#01bf83] ease-in-out duration-500">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col  p-4 rounded-lg hover:scale-105 duration-300 my-8 md:my-0 bg-gray-100">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center">Double Users</h2>
          <p className="text-center text-4xl font-bold">$249</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8 ">2 Granted Users</p>
            <p className="py-2 border-b mx-8 ">Send up to 20 GB</p>
          </div>
          <button className="w-[200px] text-[#00df9a] bg-black mx-auto rounded-md font-medium my-6 px-6 py-3 hover:bg-[#01bf83] hover:text-black ease-in-out duration-500">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col  p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center">Multiple Users</h2>
          <p className="text-center text-4xl font-bold">$349</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">5 TB Storage</p>
            <p className="py-2 border-b mx-8 ">3 - 10 Granted Users</p>
            <p className="py-2 border-b mx-8 ">Send up to 200 GB</p>
          </div>
          <button className="w-[200px] bg-[#00df9a] mx-auto rounded-md font-medium my-6 px-6 py-3 hover:bg-[#01bf83] ease-in-out duration-500">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
