import React from "react";
import { footerlogo, logo } from "../../assets";
// import color from "../../constant";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
// import CommonButton from "../Button/CommonButton";
import { Container, Row, Col } from "react-bootstrap";


const Footer = () => {
  return (
    <footer className="page-footer font-small blue ">
      <div className="row m-0 py-3 py-md-4 py-lg-5 d-flex justify-content-center">
        <div className="col-12 col-lg-5 py-3 py-lg-0 ">
          <div className="row  d-flex justify-content-start  align-items-start ">
            <div className="col-8 py-2 text-lg-start text-sm-center d-none d-sm-block">
              <img src={footerlogo} alt="" style={{ width: "200px" }} />
            </div>
            <div className="col-8 py-2 d-none d-sm-block">
              <text
                className="Text-1 text-center "
                style={{ fontWeight: "bold" }}
              >
                The one-stop solution to secure your <br /> business growth.
              </text>
            </div>
            <div className="col-8 py-1 d-none d-sm-block">
              <span className="Social-Icon mx-1">
                <FiFacebook />
              </span>
              <span className="Social-Icon mx-1">
                <FiTwitter />
              </span>
              <span className="Social-Icon mx-1">
                <FiInstagram />
              </span>
              <span className="Social-Icon mx-1">
                <AiOutlineLinkedin />
              </span>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-5  p-0 m-0 d-flex justify-content-center align-items-center flex-column ">
          <div className="row d-flex justify-content-around justify-content-md-center m-0">
            <div className="col-12 col-sm-5 text-center text-sm-start">
              <div className="row  ">
                <text className="Heading-1 py-2" style={{ fontWeight: "bold" }}>
                  Features
                </text>
                <span className="Text-1 py-1">Lorem, ipsum.</span>
                <span className="Text-1 py-1">Lorem, ipsum dolor.</span>
                <span className="Text-1 py-1">Lorem, ipsum dolor.</span>
                <span className="Text-1 py-1">Fund Raising</span>
                <span className="Text-1 py-1">After launch Support</span>
              </div>
            </div>
            <div className="col-12 col-sm-5 text-center text-sm-start">
              <div className="row ">
                <text className="Heading-1 py-2" style={{ fontWeight: "bold" }}>
                  Quick links
                </text>
                <span className="Text-1 py-1">Home</span>
                <span className="Text-1 py-1">Blog</span>
                <span className="Text-1 py-1">About Us</span>
                <span className="Text-1 py-1">Terms and Condition</span>
                <span className="Text-1 py-1">Privacy and Policy</span>
              </div>
            </div>
            <div className="col-12 col-sm-5 text-center text-sm-start py-3  d-block d-sm-none">
              <span className="Social-Icon mx-1 ">
                <FiFacebook />
              </span>
              <span className="Social-Icon mx-1">
                <FiTwitter />
              </span>
              <span className="Social-Icon mx-1">
                <FiInstagram />
              </span>
              <span className="Social-Icon mx-1">
                <AiOutlineLinkedin />
              </span>
            </div>
          </div>
        </div>

       
      </div>
      <hr />

      <div className="row m-0 py-2 py-md-3 d-flex justify-content-center ">
        <text
          className="Text-1"
          style={{
            textAlign: "center",
          }}
        >
          © 2023 Atraski | All rights reserved
        </text>
      </div>
    </footer>

   
  );
};

export default Footer;
