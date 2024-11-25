import ReviewCard from "./ReviewCard";
import Image from "next/image";
const Review: React.FC = () => {
  return (
    <div className="h-[940px] w-full grid grid-cols-2">
      <div className="w-full flex flex-col items-center">
        <div className=" w-full px-52 py-72">
          <h1 className="text-[#333333] text-[60px] font-bold">
            Customer Review
          </h1>
          <ReviewCard />
        </div>
      </div>
      <div className="w-full">
        <div className="pt-28 pr-40 w-full flex justify-end relative">
          <Image
            src="/images/burger_review.png"
            alt="review"
            width={695}
            height={600}
          />
          <div className="absolute py-11 px-9 h-[268px] w-[546px] bg-white text-left p-9 rounded-lg -bottom-[125px] shadow-[0px_6.1px_61.01px_0px_#0000001A] left-[150px]">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl text-[#333333] font-bold">Order now</h1>
              <h1 className="text-xl text-[#333333] font-bold">$10.00</h1>
            </div>
            <div className="mt-2 flex h-full justify-between flex-col">
              <p className="text-xl">⭐⭐⭐⭐⭐</p>
              <p className="mb-8 text-[#828282] text-xl">
                Just placed an order with Tasty Food! Got the grilled chicken
                salad and a smoothie. Fast, easy, and always fresh. Can’t wait
                for it to arrive!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Review;
