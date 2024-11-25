"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
const ReviewCard = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const reviews = [
    {
      avatar:
        "https://allaboutthemessage.co.uk/wp-content/uploads/2019/04/marketing-avatar.jpg",
      nickname: "Emma Williams",
      profession: "Marketing Specialist",
      review:
        "Tasty Food is my go-to choice for lunch! The food is always delicious and the delivery is so fast. I can't recommend it enough!",
    },
    {
      avatar:
        "https://static.vecteezy.com/system/resources/previews/026/175/125/non_2x/architect-avatar-round-solid-icon-vector.jpg",
      nickname: "Liam Brown",
      profession: "Architect",
      review:
        "The quality of the meals is unmatched. Tasty Food never fails to impress with fresh ingredients and amazing flavors!",
    },
    {
      avatar:
        "https://img.freepik.com/premium-photo/human-resources-manager-digital-avatar-generative-ai_934475-9291.jpg",
      nickname: "Sophia Lee",
      profession: "HR Manager",
      review:
        "I love how easy and convenient it is to order from Tasty Food. The food is always fresh, and the portions are generous. Perfect for busy days!",
    },
  ];

  const currentReview = reviews[currentReviewIndex];

  const handlePrev = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <p className="text-2xl text-[#828282]">{`"${currentReview.review}"`}</p>
      <div className="flex justify-between items-center">
        <div className="flex">
          <Image
            width={90}
            height={90}
            src={currentReview.avatar}
            alt="Avatar"
            className="rounded-full"
          />
          <div className="ml-4">
            <p className="text-2xl font-semibold text-[#90E051]">
              {currentReview.nickname}
            </p>
            <p className="profession">{currentReview.profession}</p>
          </div>
        </div>
        <div className="text-3xl gap-5 flex ">
          <button onClick={handlePrev}>
            <FaArrowLeft />
          </button>
          <button onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
