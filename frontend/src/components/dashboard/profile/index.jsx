import styled from "styled-components";
import React, { useState } from "react";
import { inputData } from "../../../data/fromdata";
import FormInput from "../../forms/Input";

export default function HostProfileIndex() {
  const [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    country: "",
    isAdmin: "",
    phone: "",
    city: "",
    address: "",
  });

  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  // handling the users profile update
  const handleUpdateUserProfile = (e) => {
    e.preventDefault();
    // dispatch(UpdateProfile(formdata));
  };

  return (
    <>
      <HostProfileIndexPlaceContainer className="flex item-center justify-center">
        <div className="w-90 auto">
          <div className="w-85 auto flex column gap-4 item-start">
            <div className="w-100 flex item-center flex-wrap gap-1 justify-space">
              <div className="flex item-center gap-1">
                <div className="image_wrapper">
                  <img
                    src="/images/user_1.jpeg"
                    alt=""
                    className="avatar_profile"
                  />
                  <div className="image_gradient"></div>
                </div>
                <h4 className="fs-18 text-extra-bold">
                  Your Avatar
                  <span className="block text-light text-grey fs-14">
                    Profile picture size: 400px x 400px
                  </span>
                </h4>
              </div>
              <div className="flex">
                <div className="btn fs-14 text-white flex justify-center item-center">
                  Upload new Avatar
                </div>
              </div>
            </div>
            <div className="profileFormBottom">
              {inputData.slice(0, 6).map((input) => {
                return (
                  <FormInput
                    id={input.text}
                    onChange={onChange}
                    placeholder={input.placeholder}
                    type={input.type}
                    name={input.name}
                    value={formdata[input.name]}
                    input={input}
                    key={input.id}
                    required={input.required}
                    pattern={input.pattern}
                    errorMessage={input.errorMessage}
                  />
                );
              })}
            </div>
            <div className="flex">
              <div className="reserveBtn fs-14 text-white flex justify-center item-center">
               Save Changes
              </div>
            </div>
          </div>
        </div>
      </HostProfileIndexPlaceContainer>
    </>
  );
}

const HostProfileIndexPlaceContainer = styled.div`
  width: 100%;
  .image_wrapper {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    &:hover {
      .image_gradient {
        opacity: 1;
      }
    }
    .image_gradient {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      /* transform: translateY(-100%); */
      position: absolute;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: all 0.5s;
    }
    .avatar_profile {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      /* transform: translateY(-100%); */
      position: absolute;
    }
  }
  .btn {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0.8rem 1.4rem;
    min-height: 3rem;
    border-radius: 10px;
    color: #222 !important;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }
  .profileFormBottom {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 1.4rem;
    padding: 0.4rem 0;
    @media (max-width: 680px) {
      grid-template-columns: 1fr;
    }
  }
  .reserveBtn {
    background-image: linear-gradient(
      to right,
      #e61e4d 0%,
      #e31c5f 50%,
      #d70466 100%
    );
    padding: 0.6rem 1.4rem;
    min-height: 3rem;
    border-radius: 10px;
    color: #fff !important;
    color: #fff;
    /* padding: 0.8rem 2rem; */
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }
  h3,
  h4 {
    font-family: "Montserrat", sans-serif;
  }
`;
