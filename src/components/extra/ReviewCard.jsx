// * imports
import React from "react";

// * lib imports
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";

const ReviewCard = ({ data }) => {
  const totalStars = 5;
  const filledStars = data.rating;
  const emptyStars = totalStars - filledStars;
  return (
    <div className="min-w-[300px] max-md:min-w-[250px] border h-[180px] rounded-md flex flex-col justify-center items-center gap-[.5vh] py-[2%] px-[1%] shadow-md">
      {/* profile card */}
      <div className="w-full h-auto flex justify-center items-center gap-[1vw]">
        <img
          src={data.gender === "male" ? "/male.png" : "/female.png"}
          alt="avatar"
          className="object-cover w-12 rounded-full h-w-12"
        />
        <h1 className="text-sm font-medium capitalize">{data.name}</h1>
      </div>

      {/* review starts */}
      <div className="w-full h-auto flex justify-center items-center gap-[.5vw]">
        {[...Array(filledStars)].map((_, idx) => (
          <MdOutlineStarPurple500
            key={idx}
            className="text-orange-500 duration-500 size-4"
          />
        ))}
        {[...Array(emptyStars)].map((_, idx) => (
          <MdOutlineStarOutline
            key={idx + filledStars}
            className="text-orange-500 duration-500 size-4"
          />
        ))}
      </div>

      {/* review */}
      <div className="flex items-center justify-center w-full h-auto text-xs font-normal text-center capitalize mt-[3vh]">
        {data.review}
      </div>
    </div>
  );
};

export default ReviewCard;
