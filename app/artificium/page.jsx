import React from "react";
import { SmallCard, BigCard } from "./data.js";
import Image from "next/image";

export default function Art() {
  return (
    <div className="space-y-4">
      {SmallCard.map((card, index) => (
        <div key={index} className="flex p-1 rounded-xl bg-[#0d1113]">
          <div className="bg-[#0d1113] top-0 p-2 pl-2 mt-1 rounded-full">
            <Image
              src={card.logo}
              alt="picture"
              width={50}
              height={50}
              className="hover:scale-95 rounded-full"
            />
          </div>
          <div className="bg-[#0d1113] w-full pl-1 pb-3  pt-5 pr-8">
            <div className="flex justify-between mb-3">
              <div className="flex gap-3">
                <h1 className="font-bold text-[22px]">{card.title}</h1>
                <p className="font-light text-[14px] mt-1 text-gray-600">
                  {card.time}
                </p>
              </div>
              <card.copyicon className="mt-2 mr-2 text-gray-400 hover:scale-95 hover:text-gray-300" />
            </div>
            <p className="text-[18px] mb-4">{card.content}</p>
            <div className="flex gap-3">
              <div className="bg-[#202527] p-2 rounded-lg hover:scale-95">
                {card.btn1}
              </div>
              <div className="bg-[#202527] p-2 rounded-lg flex gap-1 hover:scale-95">
                <p>{card.btn2}</p>
                <card.dropicon className="mt-1 ml-2 mr-1 text-gray-400 hover:scale-95 hover:text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      ))}

      {BigCard.map((card, index) => (
        <div key={index} className="flex p-1 rounded-xl bg-[#0d1113]">
          <div className="bg-[#0d1113] top-0 p-2 pl-2 mt-1 rounded-full">
            <Image
              src={card.logo}
              alt="picture"
              width={50}
              height={50}
              className="hover:scale-95 rounded-full"
            />
          </div>
          <div className="bg-[#0d1113] w-full pl-1 pb-3  pt-5 pr-8">
            <div className="flex justify-between mb-3">
              <div className="flex gap-3">
                <h1 className="font-bold text-[22px]">{card.title}</h1>
                <p className="font-light text-[14px] mt-1 text-gray-600">
                  {card.time}
                </p>
              </div>
              <card.copyicon className="mt-2 mr-2 text-gray-400 hover:scale-95 hover:text-gray-300" />
            </div>
            <p className="text-[18px] mb-4">{card.content1}</p>
            <div className="flex gap-3">
              <div className="bg-[#202527] p-2 rounded-lg flex gap-1 hover:scale-95">
                <p>{card.btn1}</p>
                <card.copyicon className="mt-1 ml-2 mr-1 text-gray-400 hover:scale-95 hover:text-gray-300" />
              </div>
              <div className="bg-[#202527] p-2 rounded-lg flex gap-1 hover:scale-95">
                <p>{card.btn2}</p>
                <card.copyicon className="mt-1 ml-2 mr-1 text-gray-400 hover:scale-95 hover:text-gray-300" />
              </div>
              <div className="bg-[#202527] p-2 rounded-lg flex gap-1 hover:scale-95">
                <p>{card.btn2}</p>
                <card.copyicon className="mt-1 ml-2 mr-1 text-gray-400 hover:scale-95 hover:text-gray-300" />
              </div>
            </div>
            <p className="text-[18px] mt-5 mb-5">{card.content2}</p>
            <div className="flex gap-4 mb-5">
              <Image
                src={card.img1}
                alt="picture"
                width={300}
                height={100}
                className="hover:scale-95 rounded-xl"
              />
              <Image
                src={card.img2}
                alt="picture"
                width={300}
                height={100}
                className="hover:scale-95 rounded-xl"
              />
              <Image
                src={card.img3}
                alt="picture"
                width={300}
                height={100}
                className="hover:scale-95 rounded-xl"
              />
            </div>
            <div className="flex gap-3">
              <div className="bg-[#202527] p-2 rounded-lg flex gap-1 hover:scale-95">
                <p>{card.btn4}</p>
              </div>
              <div className="bg-[#202527] p-2 rounded-lg flex gap-1 hover:scale-95">
                <p>{card.btn5}</p>
                <card.dropicon className="mt-1 ml-2 mr-1 text-gray-400 hover:scale-95 hover:text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
