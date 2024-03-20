import React from "react";
import Image from "next/image";

export default function View() {
  return (
    <div>
      <button className="hover:scale-95">
        <Image src={"/viewers.png"} width={"140"} height={"100"} alt="icons" />
      </button>
    </div>
  );
}
