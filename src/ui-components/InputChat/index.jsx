import React from "react";
import Styles from "./chat.module.css";

export default function index() {
  return (
    <div>
      <div className={`${Styles.container}`}>
        <div className="bg-[#12181f] w-full rounded-xl p-2 h-28 ml-8">
          <input
            type="text"
            placeholder="You can ask me anything! I am here to help."
          />
        </div>
      </div>
    </div>
  );
}
