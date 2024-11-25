import React from "react";
import Image from "next/image";
type Props = {
  name: string;
  count: string;
  img: string;
};

export const Perk: React.FC<Props> = ({ name, count, img }) => {
  return (
    <div className="flex items-center flex-col gap-4">
      <Image alt="iconPerk" src={img} width={80} height={80} />
      <h3 className="text-xl font-medium">{name}</h3>
      <h2 className="text-3xl font-medium">{count}</h2>
    </div>
  );
};
