import React from "react";

export default function Cardmodal({ visible }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-e Obg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-2 rounded">My modal</div>
    </div>
  );
}
