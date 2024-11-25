"use client";
import React from "react";
import Image from "next/image";
import { Menu_right_short } from "./Menu_right_short";

export const Menu: React.FC = ({}) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <div className={`relative`}>
      <div className={`h-[940px] flex justify-between items-center`}>
        <Image
          alt="LeftBurger"
          src="/images/menu_left.png"
          height={720}
          width={791}
          className={`transition-all duration-500 ${openMenu && "blur-sm"}`}
        />
        <Menu_right_short openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
    </div>
  );
};
