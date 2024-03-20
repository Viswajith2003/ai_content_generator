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
          <div className="bg-[#0c0e10] rounded-md">
            <MdOutlineKeyboardVoice className="w-14 h-8 mt-8 ml-5" />
          </div>
          <input
            type="text"
            placeholder="You can ask me anything! I am here to help."
            className="w-full py-8 px-2 bg-[#0c0e10] focus:outline-none border-2 border-[#0c0e10]"
          />
          <div className="bg-[#0c0e10] rounded-md">
            <ImAttachment className="w-20 h-6 mt-8 " />
          </div>
          <div className="bg-[#1b1c21] rounded-md w-16 mt-4 mr-4 h-16 ml-6 flex items-center justify-center">
            <FiSend className="w-20 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
