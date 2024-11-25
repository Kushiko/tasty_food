import React from "react";
import Image from "next/image";

export const About: React.FC = ({}) => {
  return (
    <div className="h-[1800px] flex flex-col">
      <div className="flex-1 relative flex items-center">
        <Image
          alt="Burger_mobile2"
          src="/images/burger_mobile_2.png"
          height={306}
          width={306}
          className="absolute bottom-20 right-0 z-10"
        />
        <div className="bg-[#90E051] h-[374px] mb-24 rounded-xl gap-20 -translate-x-5 w-full flex justify-end items-center">
          <div className="flex items-center mr-64 gap-20">
            <Image
              alt="Burger_mobile1"
              src="/images/burger_mobile_1.png"
              height={306}
              width={306}
              className="absolute -top-32 left-0"
            />
            <div className="relative flex items-center">
              <Image
                alt="Iphone_small"
                src="/images/phone.png"
                height={200}
                width={200}
                className="flex-shrink-0 w-auto h-auto"
              />
              <Image
                alt="Iphone_small"
                src="/images/phone.png"
                height={400}
                width={400}
                className="absolute -left-40 z-10 mb-16 scale-125"
              />
            </div>
            <h2 className="text-white text-[65px] font-bold w-[823px]">
              Now with your favorite mobile application in your pocket
            </h2>
          </div>
        </div>
      </div>

      <div className={`h-[940px] relative`}>
        <div className="absolute translate-x-3/5 left-1/2">
          <div className="inline-block relative">
            <Image
              alt="Bar"
              src="/images/image_bar.png"
              height={770}
              width={770}
            />
            <div className="w-52 h-52 rounded-full bg-[#90E051] absolute -bottom-24 -right-24" />
            <Image
              alt="Burger"
              className="absolute -bottom-20 -right-20"
              src="/images/burger_1.png"
              height={240}
              width={240}
            />
            <div className="absolute h-[324px] w-[662px] bg-white text-left p-9 rounded-lg -bottom-[115px] shadow-[0px_6.1px_61.01px_0px_#0000001A] -left-[566px]">
              <div className="relative">
                <h2 className="text-4xl font-semibold">About Us</h2>
                <p className="text-[#828282] mt-3 text-2xl font-medium">
                  At Tasty Food, we’re passionate about serving delicious meals,
                  with our burgers taking the spotlight. Made with fresh,
                  high-quality ingredients, each burger is crafted to satisfy
                  your cravings. Simple, tasty, and always satisfying—join us
                  for a burger experience you’ll love!
                </p>
                <Image
                  alt="Burger"
                  className="absolute -top-28 -left-24 -rotate-[15deg]"
                  src="/images/burger_2.png"
                  height={160}
                  width={160}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
