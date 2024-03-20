import React from "react";
import Viewbtn from "../viewbtn/index";
import { TiMessage } from "react-icons/ti";
import Image from "next/image";
import { HiDotsVertical } from "react-icons/hi";
import Lib from "./LibCard"; // Import the Libcard array from data.js

export default function Libry() {
  console.log(Lib);
  return (
    <div className="flex flex-row">
      {Lib.map((card, index) => (
        <div
          key={index}
          className="Images bg-[#294064] text-white p-2 w-[390px] h-screen"
        >
          <div className="flex justify-between mb-8 px-3">
            <h1 className="font-bold text-2xl">{card.Heading}</h1>
            <HiDotsVertical className="mt-3 hover:scale-95" />
          </div>
          <div className="rounded-xl bg-[#000000] p-5 pr-6">
            <div className="mb-8">
              <h1 className="font-semi-bold text-xl">{card.cardtitle}</h1>
              <p className="text-gray-500 mt-3">{card.content}</p>
            </div>
            <div className="flex gap-4 mt-4 mb-16">
              <Image
                src={card.img1}
                alt="picture"
                width={100}
                height={100}
                className="hover:scale-95 rounded-xl"
              />
              <Image
                src={card.img2}
                alt="picture"
                width={100}
                height={100}
                className="hover:scale-95 rounded-xl"
              />
              <Image
                src={card.img3}
                alt="picture"
                width={100}
                height={100}
                className="hover:scale-95 rounded-xl"
              />
            </div>
            <div className="flex justify-between mt-2">
              <Viewbtn />
              <div className="flex gap-2">
                <p className="text-xs mt-2">{card.count}</p>
                <TiMessage className="w-5 h-8 hover:scale-95" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

{
  /* Documents */
}
{
  /* <div className="Documents">
        <div>
          <h1>Character bios</h1>
          <p>3documents,43832words</p>
          <div className="flex justify-between">
            <Viewbtn />
            <div className="flex">
              <p>number</p>
              <p>msg-icons</p>
            </div>
          </div>
        </div>
      </div> */
}
{
  /* Idea */
}
{
  /* <div className="Ideas">
        <div>
          <h1>Concept art for potential new Character or locations.</h1>
          <div className="flex justify-between">
            <Viewbtn />
            <div className="flex">
              <p>number</p>
              <p>msg-icons</p>
            </div>
          </div>
        </div>
      </div> */
}
