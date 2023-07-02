import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { houskeeping, section3 } from "../../assets";

const Section3 = () => {
  return (
    <div
      className="row m-0 py-3 py-md-5 px-2 d-flex justify-content-around align-items-center"
    >
      <div className="col-12 col-lg-5 py-3 py-lg-0">
        <img
          src={houskeeping}
          alt=""
          className="img-fluid"
          style={{ width: " 100%", maxHeight: "25rem" ,objectFit:"cover"}}
        />
      </div>
      <div className="col-11 col-lg-5 ">
              <text className="Heading-1 " >
                  House Keeping
        </text>
        <br />
        <div className="py-3">
          <text className="Text-1 " >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, perspiciatis iure asperiores nisi necessitatibus error?
          </text>
        </div>

        <ul className="p-0">
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
              <AiFillCheckCircle
                className="p-0"
              />
            </span>
            <text
              className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column"
            >
              Accounting services, including bookkeeping, tax compliancy, and so
              on.
            </text>
          </li>
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
              <AiFillCheckCircle
                className="p-0"
              />
            </span>
            <text
              className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column"
            >
              Corporate law, intellectual property, contract preparation etc{" "}
            </text>
          </li>
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
              <AiFillCheckCircle
                className="p-0"
              />
            </span>
            <text
              className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column"
            >
              Personalized strategies that cater to your business demands.
            </text>
          </li>
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
              <AiFillCheckCircle
                className="p-0"
              />
            </span>
            <text
              className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column"
            >
            </text>
          </li>
          <li className="py-3 row ps-3">
            <text
              className="Text-1-bold col-4 col-sm-2 col-lg-3 d-flex justify-content-center flex-column p-0"
            >
              learn more
            </text>
            <span className="col-1  d-flex justify-content-center flex-column">
              <BsArrowRight
                className="p-0"
              />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Section3;
