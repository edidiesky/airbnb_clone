import React from "react";
import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = () => {
  return (
    // reviews
    <CardSkeletonWrapper className="w-100 block">
      <div className="w-100 flex column gap-1">
        <Skeleton height={250} />
        {/* <h4 className="card-title" style={{display:"block"}}>
          <Skeleton duration={4} width={`60%`} />
          <Skeleton duration={4} width={`40%`} />
        </h4> */}
        <div className="w-100 flex column">
          <div className="flex item-center justify-space w-100">
            <Skeleton width={160} height={17} />
            <Skeleton width={50} height={17} />
          </div>
          <p className="card-channel">
            <Skeleton duration={4} width={`40%`} />
          </p>
          <div className="card-metrics">
            <Skeleton duration={4} width={`20%`} />
          </div>
        </div>
      </div>
    </CardSkeletonWrapper>
  );
};

const CardSkeletonWrapper = styled.div``;
export default CardSkeleton;
