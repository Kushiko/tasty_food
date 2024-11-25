import React from "react";
import { Perk } from "./Perk";

const Perks_items = [
  {
    name: "Professional Chefs",
    count: "420",
    img: "/images/perk_1.png",
  },
  {
    name: "Items Of Food",
    count: "320",
    img: "/images/perk_2.png",
  },
  {
    name: "Years Of Experienced",
    count: "30+",
    img: "/images/perk_3.png",
  },
  {
    name: "Happy Customers",
    count: "220",
    img: "/images/perk_4.png",
  },
];

export const Perks: React.FC = () => {
  return (
    <div className="py-10 flex justify-center gap-24 border-y-2 border-zinc-100">
      {Perks_items.map((perk, index) => (
        <Perk key={index} name={perk.name} count={perk.count} img={perk.img} />
      ))}
    </div>
  );
};
