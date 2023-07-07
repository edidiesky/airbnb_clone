import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import {
  clearUserAlertError,
  offAuthModal,
} from "../../Features/user/userSlice";
import Input from "../forms/Input";
import { flip } from "../../utils/framer";
import {
  UpdateProfile,
  loginCustomer,
  registerCustomer,
} from "../../Features/user/userReducer";
import LoaderIndex from "../loaders";

export default function AuthModal({ type, click }) {
  const [auth, setAuth] = useState(false);

  const [formdata, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { username, email, password } = formdata;

  const inputData = [
    {
      id: 1,
      name: "email",
      placeholder: "example@site.com",
      type: "email",
      text: "Email",
      errorMessage: "It should be a valid email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      placeholder: "Minimum 8 Characters",
      type: "password",
      text: "password",
      errorMessage:
        "Password should be 8-20 characters Long and should include 1 letter and 1 special Character",
      required: true,
    },
  ];

  const inputData2 = [
    {
      id: 1,
      name: "username",
      placeholder: "Insert your username",
      type: "text",
      text: "Choose a username",
      errorMessage: "username cannot be left empty",
      required: true,
    },
  ];
  // dispatch
  const dispatch = useDispatch();
  const { userAlert, userDetails, usernamemodal, isLoading } = useSelector(
    (store) => store.user
  );

  useEffect(() => {
    setFormData({
      email: "",
      password: "",
      username: "",
    });
  }, [setFormData]);
  // open modal if type  === users

  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const HandleUsername = (e) => {
    e.preventDefault();
    // console.log('hello')
    dispatch(UpdateProfile({ username }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (auth) {
      // dispatch(loginCustomer(formdata));
      dispatch(loginCustomer({ email, password }));
      // console.log("login");
    } else {
      dispatch(registerCustomer({ email, password }));
      // console.log("registration");
    }
  };

  // update the user profile when process ahs been completed
  if (usernamemodal) {
    return (
      <DeleteContainer
        as={motion.div}
        initial={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
        exit={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
        animate={{ opacity: 1, visibility: "visible", duration: 0.6 }}
      >
        {isLoading && <LoaderIndex />}
        <div
          className="backdrop"
          onClick={() => dispatch(offAuthModal())}
        ></div>
        <motion.div
          variants={flip}
          initial="hidden"
          animate="visible"
          exit={"exit"}
          className={"deleteCard shadow"}
          style={{ paddingBottom: "1rem", gap: "1rem" }}
        >
          {/* <div className="cross" onClick={() => dispatch(clearUserAlertError())}>
              <RxCross2 />
            </div> */}
          <div
            style={{ marginBottom: "1.5rem" }}
            className="w-100 authTop fs-16 text-extra-bold text-dark flex item-center justify-space"
          >
            <div className="w-90 auto flex item-center justify-space text-center">
              {" "}
              <div className="icon flex item-center justify-center">
                <RxCross2 fontSize={"20px"} />
              </div>{" "}
              <span className="text-center w-100">Set your username</span>
            </div>
          </div>
          <div className="w-90 authBottom auto flex column gap-1">
            <div className="flex column gap-2">
              {inputData2.map((input) => {
                return (
                  <Input
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
            <div className="w-100 btnWrapper flex column gap-1">
              <div
                onClick={HandleUsername}
                className="btn w-100 fs-16 text-white text-center"
              >
                Join
              </div>
              <h5 className="fs-12 w-100 text-center text-light text-dark text-center">
                By joining I agree to fiverr emails from Fiverr{" "}
                <span className="text-blue">Terms of service</span> <br /> as
                well as to receive occasional emails from us
              </h5>
            </div>
          </div>
          <div className="w-100 authCenter fs-14 text-light text-gery text-center">
            Already a member? Sign In
          </div>
        </motion.div>
      </DeleteContainer>
      // <h2>hello</h2>
    );
  }

  return (
    <DeleteContainer
      as={motion.div}
      initial={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
      exit={{ opacity: 0, visibility: "hidden", duration: 0.6 }}
      animate={{ opacity: 1, visibility: "visible", duration: 0.6 }}
    >
      <div className="backdrop" onClick={() => dispatch(offAuthModal())}></div>
      {isLoading && <LoaderIndex />} 
      <motion.div
        variants={flip}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className={"deleteCard shadow"}
      >
        <div className="w-100 authTop fs-16 text-extra-bold text-dark flex item-center justify-space">
          <div className="w-90 auto flex item-center justify-space text-center">
            {" "}
            <div className="icon flex item-center justify-center">
              <RxCross2 fontSize={"20px"} />
            </div>{" "}
            <span className="text-center w-100">Login or Sign up</span>
          </div>
        </div>

        <div className="w-90 authBottom auto flex column gap-1">
          <h3 className="fs-20 py-1 text-dark text-bold">Welcome to Airbnb</h3>
          <div className="flex column gap-1">
            {inputData.map((input) => {
              return (
                <Input
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
          <div
            onClick={handleSubmit}
            className="btn w-100 fs-16 text-white text-center"
          >
            {" "}
            {auth ? "Sign Up" : "Sign In"}
          </div>
          <div className="option">or</div>

          <div className="flex column gap-1">
            <div className="authBtn flex fs-16 text-dark item-center justify-space">
              <FcGoogle fontSize={"20px"} />{" "}
              <div className="w-100 text-center">Continue with Google</div>{" "}
            </div>

            <div className="authBtn flex fs-16 text-dark item-center justify-center">
              <FaGithub fontSize={"20px"} />{" "}
              <div className="w-100 text-center">Continue with Github</div>{" "}
            </div>
          </div>
          <div className="w-100 fs-14 text-light text-grey text-center">
            Already a member?{" "}
            <span onClick={() => setAuth(!auth)} className="text-red">
              {auth ? "Sign Up" : "Sign In"}
            </span>
          </div>
        </div>
      </motion.div>
    </DeleteContainer>
    // <h2>hello</h2>
  );
}

const DeleteContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;

  display: flex;
  z-index: 800;
  align-items: center;
  justify-content: center;
  top: 0;
  .btn {
    background: var(--red);
    color: #fff;
    padding: 0.8rem 2rem;
    border-radius: 10px;
    &:hover {
      opacity: 0.8;
    }
  }
  .authBtn {
    border: 1px solid rgba(0, 0, 0, 1);
    padding: 0.5rem 2rem;
    border-radius: 8px;
  }
  .icon {
  }
  .icon:hover {
    background-color: #ccc;
  }
  .authBottom {
    position: relative;
    padding: 0 1rem;
    padding-bottom: 1.6rem;

    .option {
      width: 100%;
      position: relative;
      text-align: center;
      padding: 0 1.4rem;
      font-size: 14px;
      color: var(--grey-1);
      &::after {
        width: 45%;
        height: 0.4px;
        content: "";
        background-color: rgba(0, 0, 0, 0.5);
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        width: 45%;
        height: 0.4px;
        content: "";
        background-color: rgba(0, 0, 0, 0.5);
        right: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .backdrop {
    background: rgba(0, 0, 0, 0.3);

    position: absolute;
    height: 100%;
    width: 100%;
  }
  .authTop {
    padding: 1rem 0;
    font-size: 14px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .deleteCard {
    width: clamp(40%, 100px, 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #fff;
    gap: 2rem;
    border-radius: 10px;
    box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.1);
    position: relative;
    @media (max-width: 980px) {
      width: 60%;
    }
    @media (max-width: 780px) {
      width: 80%;
    }
    .cross {
      position: absolute;
      right: 10px;
      top: 20px;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        background: var(--grey-4);
      }
      svg {
        font-size: 20px;
      }
    }
  }
`;
