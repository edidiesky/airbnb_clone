import React from "react";
import styled from "styled-components";
import Star from "../../common/svg/star";
import ReviewsCard from "./ReviewCard";
const reviewCard = [
  {
    image:
      "https://a0.muscache.com/im/users/15010905/profile_pic/1421747078/original.jpg?im_w=240",
    name: "Linda",
    date: "May 2023",
    comment:
      "My wife and I stayed here for a week and it couldn't have been any better. The location is a little bit out of the hustle and bustle of Ubud but still close enough to be able to travel in",
  },
  {
    image:
      "https://a0.muscache.com/im/users/15010905/profile_pic/1421747078/original.jpg?im_w=240",
    name: "Linda",
    date: "May 2023",
    comment:
      "My wife and I stayed here for a week and it couldn't have been any better. The location is a little bit out of the hustle and bustle of Ubud but still close enough to be able to travel in",
  },
  {
    image:
      "https://a0.muscache.com/im/users/15010905/profile_pic/1421747078/original.jpg?im_w=240",
    name: "Linda",
    date: "May 2023",
    comment:
      "My wife and I stayed here for a week and it couldn't have been any better. The location is a little bit out of the hustle and bustle of Ubud but still close enough to be able to travel in",
  },
  {
    image:
      "https://a0.muscache.com/im/users/15010905/profile_pic/1421747078/original.jpg?im_w=240",
    name: "Linda",
    date: "May 2023",
    comment:
      "My wife and I stayed here for a week and it couldn't have been any better. The location is a little bit out of the hustle and bustle of Ubud but still close enough to be able to travel in",
  },
];

const Reviews = () => {
  return (
    <div>
      <div
        className="w-100 bottom flex column gap-3"
        style={{ paddingBottom: "3rem" }}
      >
        <h3 className="fs-24 text-dark flex item-center gap-1">
          <Star /> 4.92 · 390 reviews
        </h3>
        <ReviewWrapper>
          {reviewCard.map((x) => {
            return <ReviewsCard x={x} />;
          })}
        </ReviewWrapper>
      </div>
    </div>
  );
};

const ReviewWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

export default Reviews;
