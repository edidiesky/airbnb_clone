import React, { useState } from "react";
import styled from "styled-components";
import FooterHosting from "./footer";
import { categorydata } from "../../data/category";
export default function DescriptionofPlace() {
  const [tab, setTab] = useState(null);
  return (
    <>
      <DescriptionofPlaceContainer>
        <div className="aboutCenter flex column gap-3 justify-center item-center w-85 auto">
          <h2 className="text-light w-100 text-start text-dark">
            Which of these best describes your place?
          </h2>
          <div className="grid cardwrapper w-85 auto">
            {categorydata.map((x, index) => {
              return (
                <div
                  onClick={() => setTab(index)}
                  className={
                    tab === index
                      ? "card fs-16 column flex active"
                      : "card fs-16 column flex"
                  }
                >
                  <img src={x.image} alt="" className="image" />
                  {x.text}
                </div>
              );
            })}
          </div>
        </div>
      </DescriptionofPlaceContainer>
      <FooterHosting prev={"373646/about-your-place"} next={"373646/location"} />
    </>
  );
}

const DescriptionofPlaceContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding-bottom: 6rem;
  .list1 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem 0;
  }
  .cardwrapper {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
    width: 60%;
  }
  .card {
    padding: 1.5rem 1.4rem;
    border-radius: 10px;
    /* border: 1px solid rgba(0, 0, 0, 0.2); */
    position: relative;

    &:hover {
      &::after {
        opacity: 1;
        border: 2px solid rgba(0, 0, 0, 0.8);
      }
    }
    &.active {
      background-color: #f7f7f7;
      &::after {
        opacity: 1;
        border: 2px solid rgba(0, 0, 0, 0.8);
      }
    }
    /* transition: all 0.5s; */
    &::after {
      border: 1px solid rgba(0, 0, 0, 0.2);
      position: absolute;
      content: "";
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      border-radius: inherit;
      /* opacity: 0; */
    }
  }
  .aboutCenter {
    @media (max-width: 780px) {
      flex-direction: column;
      gap: 2rem;
    }
  }
  .image {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
  }
  h2 {
    font-size: 29px;
    line-height: 1.2;
    width: 60%;

    @media (max-width: 780px) {
      /* font-size: 40px; */
    }
  }
`;
