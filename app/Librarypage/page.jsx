import React from "react";
import Viewbtn from "../viewbtn/page";
import { TiMessage } from "react-icons/ti";
import Image from "next/image";
import { Title, ImgCard, DocCard, IdeaCard } from "./LibCard"; // Import the arrays

export default function Libry() {
  console.log(Title, ImgCard, DocCard, IdeaCard); // Check if data is fetched properly
  return (
    <div className="flex gap-4 justify-center p-2">
      {/* Image card */}
      <div className="flex flex-col">
        {ImgCard.map((card, index) => (
          <div
            key={index}
            className="Images bg-[#131619] text-white px-3 w-[420px] hover:scale-95"
          >
            <div className="Title flex justify-between px-3 m-2">
              <h1 className="font-semibold text-[35px]">{card.Heading}</h1>
              {card.doticon && <card.doticon className="mt-5 hover:scale-95" />}
            </div>
            <div className="Card rounded-xl bg-[#000000] p-5 pr-6 ">
              {/* Adjust margin for Card div */}
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

      {/* Document card */}
      <div className="flex flex-col">
        {DocCard.map((card, index) => (
          <div
            key={index}
            className="Images bg-[#131619] text-white px-3 w-[390px] hover:scale-95"
          >
            <div className="Title flex justify-between px-3 m-2">
              <h1 className="font-semibold text-[35px]">{card.Heading}</h1>
              {card.doticon && <card.doticon className="mt-5 hover:scale-95" />}
            </div>
            <div className="rounded-xl bg-[#000000] p-5 pr-6">
              <div className="mb-8">
                <h1 className="font-semi-bold text-xl">{card.cardtitle}</h1>
                <p className="text-gray-500 mt-3">{card.content}</p>
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
      {/* Idea card */}
      <div className="flex flex-col">
        {IdeaCard.map((card, index) => (
          <div
            key={index}
            className="Images bg-[#131619] text-white px-3 w-[390px] hover:scale-95"
          >
            <div className="Title flex justify-between px-3 m-2">
              <h1 className="font-semibold text-[35px]">{card.Heading}</h1>
              {card.doticon && <card.doticon className="mt-5 hover:scale-95" />}
            </div>
            <div className="Card rounded-xl bg-[#000000] p-5 pr-6">
              <div className="mb-8">
                <h1 className="font-semi-bold text-xl">{card.cardtitle}</h1>
                <p className="text-gray-500 mt-4">{card.content}</p>
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

      {/* <div className="bg-slate-500">
        {Title.map((name, index) => {
          <div
            key={index}
            className="flex justify-between mb-8 px-3 bg-yellow-200"
          >
            <h1 className="font-bold text-2xl">{name.Heading}</h1>
            {name.doticon && <name.doticon className="mt-4 hover:scale-95" />}
          </div>;
        })}
      </div> */}
    </div>
  );
}
