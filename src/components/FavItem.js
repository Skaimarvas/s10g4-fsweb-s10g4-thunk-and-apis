import React from "react";

function FavItem({ joke, punchline }) {
  return (
    <div className="bg-white shadow hover:shadow-lg p-3 pl-5 flex items-center group transition-all">
      <div className="flex-1 pr-4">
        {" "}
        <p> {joke}</p>
      </div>
      <div className="flex-1 pr-4">
        <p> {punchline}</p>
      </div>
      <button
        onClick={() => {}}
        className="transition-all px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100"
      >
        Çıkar
      </button>
    </div>
  );
}

export default FavItem;
