import React from "react";
import Carousel from "./Carousel";
import Text from "./Text";
import Image from "./Image";
const Header = () => {
  return (
    <div className="container relative">
      <div className="px-5 d-flex justify-content-between align-items-center w-100 flex-wrap">
        <div className="d-flex align-items-center  ">
          <img
            className="rounded-circle"
            src="https://cdn.dribbble.com/users/1998175/avatars/small/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868"
            width="48"
            height="48"
          />
          <div className="d-flex flex-column flex-wrap ">
            <p className="ps-4 m-0 ">Lorem ipsum dolor sit amet.</p>
            <p className="ps-4 m-0 text-muted">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons d-flex mt-2 mt-sm-0">
          <a
            className="butn text-dark text-center my-auto mx-0 mx-sm-2"
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="butn text-dark text-center my-auto mx-2"
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#e1dbfd" }}
        className="card m-4 rounded p-sm-3 p-md-5"
      >
        <Carousel />
      </div>
      <div className="px-sm-5 py-sm-3 p-0">
        <Text />
      </div>
      <Image />
      <div className="card p-3 px-sm-4 py-sm-5">
        <h3 className="fw-bold text-black "> Does this Sound familiar...</h3>
        
      </div>
    </div>
  );
};

export default Header;
