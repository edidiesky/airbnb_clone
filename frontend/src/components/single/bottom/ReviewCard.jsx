import React from "react";
import styled from "styled-components";

const ReviewsCard = ({ x }) => {
  return (
    <div className="w-100 flex column gap-1">
      <div className="w-100 flex item-start" style={{ gap: ".6rem" }}>
        <img
          src="https://a0.muscache.com/im/pictures/user/25bde169-07b5-423a-8def-444e63a8ffc6.jpg?im_w=240"
          alt=""
          className=""
          style={{
            width: "2.8rem",
            height: "2.8rem",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <h4 className="text-dark fs-18">
          Lisa{" "}
          <span className="block text-light fs-12 text-grey">June 2023</span>
        </h4>
      </div>
      <h3 className="fs-18 w-85 text-dark text-light">
        We had a wonderful stay here. The room was very clean, the staff always
        nice and super helpful and the food was delicious. We will be back for
        sure
      </h3>
    </div>
  );
};

export default ReviewsCard;
