import React from "react";

function Item({ data }) {
  console.log(data);
  return (
    <div className="shadow-md bg-white text-center">
      <p className="text-2xl p-10">JOKE: {data.setup}</p>
      <p className="text-2xl p-10">PUNCHLINE: {data.punchline}</p>
    </div>
  );
}

export default Item;
