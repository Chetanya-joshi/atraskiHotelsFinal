import React from "react";
// import color from "../../../constant";
// import { compRegis } from "../../../assets";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { breakfast, maldive1, slider1 } from "../../assets";

const Section2 = () => {
  return (
    <div className="row m-3 py-3 py-md-5 px-2 d-flex justify-content-center align-items-center" style={{backgroundColor:"aliceblue"}}>
      <div className="col-lg-5 d-none d-lg-block ps-0 ps-sm-4">
        <text className="Heading-1  ">Morning Breakfast</text>
        <br />
        <div className="py-3">
          <text className="Text-1 p-sm-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores magnam dicta neque.
          </text>
        </div>

        <ul className="p-0">
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
              <AiFillCheckCircle className="p-0" />
            </span>
            <text className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </text>
          </li>
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
              <AiFillCheckCircle className="p-0" />
            </span>
            <text className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
Lorem ipsum dolor sit amet consectetur adipisicing.            </text>
          </li>
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
              <AiFillCheckCircle className="p-0" />
            </span>
            <text className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium?            </text>
          </li>
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
              <AiFillCheckCircle className="p-0" />
            </span>
            <text className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
Lorem ipsum dolor, sit amet consectetur adipisicing.            </text>
          </li>
          <li className="py-3 row ps-3">
            <text className="Text-1-bold col-4 col-sm-2 col-lg-3 d-flex justify-content-center flex-column p-0">
              learn more
            </text>
            <span className="col-1  d-flex justify-content-center flex-column">
              <BsArrowRight className="p-0" />
            </span>
          </li>
        </ul>
      </div>

      <div className="col-12 col-lg-5 py-3 py-lg-0">
        <img
          src={breakfast}
          alt=""
          className="img-fluid"
          style={{ widh: " 100%", maxHeight: "25rem" }}
        />
      </div>
      <div className="col-11  d-block d-lg-none ps-0 ps-sm-4 ">
        <text className="Heading-1 ">Beautiful resorts</text>
        <br />
        <div className="py-3">
          <text className="Text-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ea.
          </text>
        </div>

        <ul className="p-0">
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
              <AiFillCheckCircle className="p-0" />
            </span>
            <text className="Text-1 col-9 col-sm-10  col-md-9 d-flex justify-content-center flex-column">
Lorem ipsum dolor sit amet, consectetur adipisicing.            </text>
          </li>
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
              <AiFillCheckCircle className="p-0" />
            </span>
            <text className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
Lorem ipsum dolor sit amet consectetur, adipisicing elit.            </text>
          </li>
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
              <AiFillCheckCircle className="p-0" />
            </span>
            <text className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
Lorem ipsum dolor sit amet consectetur.            </text>
          </li>
          <li className="py-1 row">
            <span className="col-1 col-sm-1 col-md-1 d-flex justify-content-center flex-column">
              <AiFillCheckCircle className="p-0" />
            </span>
            <text className="Text-1 col-9 col-sm-10 col-md-9 d-flex justify-content-center flex-column">
Lorem ipsum dolor sit amet consectetur.            </text>
          </li>
          <li className="py-3 row ps-3">
            <text className="Text-1-bold col-4 col-sm-2 col-lg-3 d-flex justify-content-center flex-column p-0">
              learn more
            </text>
            <span className="col-1  d-flex justify-content-center flex-column">
              <BsArrowRight className="p-0" />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Section2;
