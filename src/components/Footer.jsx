import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around items-center mt-3 flex-wrap bg-white">
      <div className="w-70 flex flex-col">
        <div>BASE BLUETOOTH WIRELESS HEADPHONES</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          velit . quibusdam dolores!
        </div>
      </div>
      <div className="w-70">
        <div className="text-green-700 text-4xl">$219.44</div>
        <button className="bg-amber-300 text-4xl border p-2 border-gray-700 mt-4">Shop Now</button>
      </div>
      <div className="w-80">
        <img className="h-50" src="imgs/headPhones.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
