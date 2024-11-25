"use client";
import React from "react";
import { Burger_card } from "./Burger_card";

const burgers = Array(3)
  .fill([
    {
      name: "Чизбургер",
      ImageUrl: "/images/burger_2.png",
      products: "булочка, говяжья котлета, салат, помидор, сыр, соус",
      cost: 23.99,
      range: 4.9,
    },
    {
      name: "Чикенбургер",
      ImageUrl: "/images/burger_1.png",
      products: "булочка, куриная котлета, салат, помидор, соус",
      cost: 22.53,
      range: 4.7,
    },
    {
      name: "Чикенбургер",
      ImageUrl: "/images/burger_1.png",
      products: "булочка, куриная котлета, салат, помидор, соус",
      cost: 22.53,
      range: 4.7,
    },
    {
      name: "Чизбургер",
      ImageUrl: "/images/burger_2.png",
      products: "булочка, говяжья котлета, салат, помидор, сыр, соус",
      cost: 23.99,
      range: 4.9,
    },
  ])
  .flat();
export const Menu_right_short: React.FC<{
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ openMenu, setOpenMenu }) => {
  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  const [searchInput, setSearchInput] = React.useState("");
  const onChangeSearchInput = (value: string) => {
    setSearchInput(value);
  };
  const list = openMenu
    ? burgers.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    : burgers.slice(0, 4);
  return (
    <div
      className={`absolute overflow-hidden transition-all duration-500 right-36 ${
        openMenu ? "w-11/12" : "w-[650px]"
      } flex justify-center`}
    >
      <div
        className={`relative h-[750px] w-full transition-all duration-500 ease-in-out items-center p-16 rounded-[70px] bg-gradient-to-b from-[#90E051] via-[#b3ec87] to-[#90E051] flex flex-col justify-between`}
      >
        {!openMenu && (
          <div className="transition-all duration-500 absolute z-30 inset-0 bg-gradient-to-t rounded-[70px] from-[#90E051] to-transparent"></div>
        )}
        <div
          className={`${
            openMenu ? "opacity-100" : "opacity-0"
          } flex absolute top-4 left-10 transition-all duration-500 items-center bg-white rounded-full px-4 py-2 w-80`}
        >
          {/* Иконка поиска */}
          <svg
            className="w-5 h-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m1.9-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
            />
          </svg>
          <input
            onChange={(e) => onChangeSearchInput(e.target.value)}
            type="text"
            disabled={!openMenu}
            placeholder="Search"
            className={`ml-2  bg-transparent outline-none text-gray-700 w-full`}
          />
        </div>
        <div
          className={`grid transition-all duration-500 grid-rows-2 grid-flow-col ${
            openMenu ? "gap-x-10" : "gap-x-8"
          } gap-y-20`}
        >
          {list.map((burger, index) => (
            <Burger_card
              key={index}
              name={burger.name}
              ImageUrl={burger.ImageUrl}
              products={burger.products}
              cost={burger.cost}
              range={burger.range}
            />
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className={`z-50 bg-white absolute bottom-4 text-[#90E051] px-20 py-4 ${
            openMenu ? "mb-2" : "mb-10"
          } rounded-2xl text-xl font-bold shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-[#90E051] hover:text-white active:scale-95`}
        >
          {openMenu ? "CLOSE" : "SEE ALL"}
        </button>
      </div>
    </div>
  );
};
