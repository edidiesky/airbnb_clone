import React, { useState } from "react";
import styled from "styled-components";
import FooterHosting from "./footer";
import { categorydata } from "../../data/category";
import Upload from "../common/svg/upload";
export default function PhotosofPlace() {
  const [tab, setTab] = useState(null);
  return (
    <>
      <PhotosofPlaceContainer>
        <div className="aboutCenter flex column gap-3 justify-center item-center w-85 auto">
          <h2 className="text-extra-bold w-100 text-start text-dark">
            Add some photos of your boat
            <span className="block py-1 fs-20 text-light text-grey">
              You'll need 5 photos to get started. You can add more or make
              changes later.
            </span>
          </h2>
          <div className="grid w-85 auto">
            <div className="uploadWrapper auto flex item-center justify-center flex column gap-1">
              <Upload />
              <h4 className="fs-24 text-bold">
                Upload your photos here
                <span className="text-light block text-center fs-18">
                  Choose at least 5 photos
                </span>
              </h4>
            </div>
          </div>
        </div>
      </PhotosofPlaceContainer>
      <FooterHosting prev={"373646/amenities"} next={"373646/title"} />
    </>
  );
}

const PhotosofPlaceContainer = styled.div`
  width: 100%;
  padding-bottom: 6rem;
  .list1 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem 0;
  }
  .uploadWrapper {
    width: 70%;
    border: 1px dashed rgba(0, 0, 0, 1);
    padding: 4rem 3rem;
    height: 100%;
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
    font-size: 35px;
    line-height: 1.2;
    width: 60%;

    @media (max-width: 780px) {
      /* font-size: 40px; */
    }
  }
`;
