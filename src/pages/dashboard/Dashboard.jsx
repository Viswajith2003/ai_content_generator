import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import HomeCard from "./HomeCard";

export default function Dashboard() {
  return (
    <div className="bg-[#121618] h-[680px] text-white ml-12 mr-6 mt-5 rounded-xl p-6 border-2 border-gray-600">
      <section>
        <div className="text-center mt-20 mb-8">
          <h1 className=" text-3xl font-bold mb-4">Innovation Starter Pack</h1>
          <p>
            Kickstart your innovation process with our comprehensive selection
            of predefined prompts.
          </p>
        </div>

        <div className="flex justify-center items-center text-center">
          {HomeCard.map((card, index) => (
            <div key={index} className="m-10 w-80 p-4">
              <div className="flex flex-col justify-center items-center text-center mb-6">
                <div className="bg-[#262c2c] p-3 rounded-full">
                  <card.Icon
                    className="text-2xl"
                    style={{ color: card.color }}
                  />
                </div>
                <h1 className="mt-2">{card.name}</h1>
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-3">
                <button className="flex bg-[#1b1f23] p-3 rounded-xl w-48 justify-between">
                  <h1 className="">{card.btntxt1}</h1>
                  <FaLongArrowAltRight className="ml-5 mt-1 text-gray-500" />
                </button>
                <button className="flex bg-[#1b1f23] p-3 rounded-xl w-48 justify-between">
                  <h1 className="">{card.btntxt2}</h1>
                  <FaLongArrowAltRight className="ml-5 mt-1 text-gray-500" />
                </button>
                <button className="flex bg-[#1b1f23] p-3 rounded-xl w-48 justify-between">
                  <h1 className="">{card.btntxt3}</h1>
                  <FaLongArrowAltRight className="ml-5 mt-1 text-gray-500" />
                </button>
                <button className="flex bg-[#1b1f23] p-3 rounded-xl w-48 justify-between">
                  <h1 className="">{card.btntxt4}</h1>
                  <FaLongArrowAltRight className="ml-5 mt-1 text-gray-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      

    </div>
  );
}
