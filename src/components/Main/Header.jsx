import React from "react";
import Carousel from "./Carousel";
import Text from "./Text";
import Image from "./Image";
import Card from "./Card";
import MeatUp from "./MeatUp";
import Wondered from "./Wondered";
import HireME from "./HireME";
import Footer from "./Footer";
const Header = () => {
  return (
    <>
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
      <div className="card p-3 px-sm-4 py-sm-5 shadow-0">
        <h3 className="fw-bold text-black "> Does this Sound familiar...</h3>
        <div className="row p-3 p-sm-5 justify-content-center">
          <Card bgcolor={"antiquewhite"} title={"You Get a Promotion"} tr="0" />
          <Card
            bgcolor={"aquamarine"}
            title={"You argue with a colleague"}
            tr="0"
          />
          <Card bgcolor={"darkkhaki"} title={"You attend a class"} tr="15" />
          <Card bgcolor={"thistle"} title={"You failed in exam"} tr="0" />
        </div>
      </div>

      <MeatUp />

      <Wondered />

      <div className="p-0 p-sm-5 text-center">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        <h3 className="fw-bold">Lorem ipsum dolor sit amet.</h3>
        <p style={{fontSize:20+'px'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          officia dignissimos atque magnam ipsam cupiditate.
        </p>
        <button type="button" class="btn btn-dark btn-rounded">Start a Test</button>
        <p className="text-muted">Lorem, ipsum dolor.</p>
      </div>

        <HireME />

    </div>
    <Footer />
    </>
  );
};

export default Header;
