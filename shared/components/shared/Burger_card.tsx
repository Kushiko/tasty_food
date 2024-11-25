import Image from "next/image";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
type Props = {
  ImageUrl: string;
  name: string;
  products: string;
  cost: number;
  range: number;
};

export const Burger_card: React.FC<Props> = ({
  ImageUrl,
  name,
  products,
  range,
  cost,
}) => {
  const [added, setAdded] = useState(false);
  return (
    <div
      style={{
        boxShadow: "0px 6.68px 41.77px -8.35px #00000040",
      }}
      className="relative flex-col items-center justify-center h-[253px] w-[232px] rounded-[27px] flex bg-white"
    >
      <Image
        width={150}
        height={118}
        src={ImageUrl}
        alt={name}
        className="absolute -top-10"
      ></Image>
      <div className="w-4/5 gap-3 flex flex-col">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="font-medium leading-4">{products}</p>
      </div>
      <div className="absolute flex flex-col items-center bottom-4 left-6">
        <div className="flex">
          <p className="text-xl">⭐&nbsp;</p>
          <p className="flex items-center text-sm">{`${range}`}</p>
        </div>
        <span className="text-[#90E051] font-medium text-xl">{`$ ${cost}`}</span>
      </div>
      <button
        onClick={() => setAdded(!added)}
        className="text-white text-xl flex items-center justify-center font-bold absolute bottom-4 right-4 h-8 w-8 rounded-full bg-[#90E051]"
      >
        {added ? <BsFillCartCheckFill /> : <FaPlus />}
      </button>
    </div>
  );
};
