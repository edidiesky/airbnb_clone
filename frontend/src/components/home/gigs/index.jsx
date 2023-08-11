import React from "react";
import styled from "styled-components";
import { Slider } from "../../common";
import Card from "../../common/Card";
import { useSelector } from "react-redux";
import { projectdata } from "../../../data";
import CardSkeleton from "../../common/cardskeleton";

export default function GigsIndex({ loader }) {
  const { Gigs } = useSelector((store) => store.gigs);
  // console.log(loader)
  return (
    <GigsIndexContainer>
      <div className="w-90 auto flex column">
        <div className="w-100 Heades flex item-start justify-space">
          {/* <Head text={"Recently Viewed & More"} /> */}
        </div>

          <div className="w-100 project">
            <>
            {
              loader
              ? <div className="w-100 wrapper">
                {
                  projectdata.map((x) => {
                    return <CardSkeleton />
                  })
                }
              </div>
              :Gigs?.length === 0? <h3 className="fs-20 text-dark w-90 auto text-center">
              No Listing for this category </h3>
             : <div className="w-100 wrapper">
              {
                 Gigs?.map((x, index) => {
                  return <Card x={x} loader={loader} index={index} />;
                })
              }
             </div>
            }
            </>
          </div>
        </div>
    </GigsIndexContainer>
  );
}

const GigsIndexContainer = styled.div`
  width: 100%;
  position: relative;
  .grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .wrapper {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 1.4rem;
    @media (max-width:980px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    }
  }
`;
