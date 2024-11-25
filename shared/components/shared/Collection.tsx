import Image from "next/image";

export const Collection: React.FC = () => {
  return (
    <div className="flex h-[780px] justify-between items-center mx-28">
      <div className="flex flex-col">
        <h1 className="text-[116px] font-bold">Tasty Food</h1>
        <h1 className="text-[116px] font-bold text-[#90E051]">Collections</h1>
        <p className="w-[623px] text-[22px] font-medium">
          Tasty Food Collections — curated selections of mouthwatering dishes
          and recipes designed to inspire joyful cooking. Each collection brings
          together unique flavors, creative plating ideas, and a variety of
          cuisines from around the world. From quick bites to gourmet dinners,
          everything you need to make food not just delicious but truly
          unforgettable!
        </p>
      </div>
      <div>
        <Image
          width={820}
          height={734}
          src="/images/collections.png"
          alt="collections"
        />
      </div>
    </div>
  );
};
