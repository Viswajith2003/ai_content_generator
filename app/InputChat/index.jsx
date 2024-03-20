import React from "react";
import Styles from "./chat.module.css";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { ImAttachment } from "react-icons/im";

export default function Chat() {
  return (
    <div>
      <div className={`${Styles.container}`}>
        <div className="bg-[#0c0e10] w-full rounded-xl p-2 h-28 ml-6 flex">
          <div className="bg-[#0c0e10] rounded-md hover:scale-95">
            <MdOutlineKeyboardVoice className="w-12 h-7 mt-8 ml-5" />
          </div>
          <input
            type="text"
            placeholder="You can ask me anything! I am here to help."
            className="w-full py-8 px-2 bg-[#0c0e10] focus:outline-none border-2 border-[#0c0e10]"
          />
          <div className="bg-[#0c0e10] rounded-md mr-3">
            <ImAttachment className="w-18 h-8 mt-8 hover:scale-95" />
          </div>
          <div className="bg-[#1b1c21] rounded-md w-14 mt-5 mr-4 h-14 ml-6 flex items-center justify-center hover:scale-95">
            <FiSend className="w-18 h-8 hover:scale-95" />
          </div>
        </div>
      </div>
    </div>
  );
}
