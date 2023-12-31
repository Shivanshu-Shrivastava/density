// THIS IS MAIN FILE, EVERY COMPONENTS JOURNEY START FROM HERE

import React from "react";
import Carousel from "./Components/Carousel";
import Text from "./Components/Text";
import Image from "./Components/Image";
import Card from "./Components/Card";
import MeatUp from "./Components/MeatUp";
import Wondered from "./Components/Wondered";
import HireME from "./Components/HireME";
import Footer from "./Components/Footer";
import SideView from "./Components/SideView";
const Main = () => {
  return (
    <main className="position-relative">
      {/* View of User and it's name */}
      <div className="container ">
        <div className="px-0 px-sm-5 mt-3 mt-sm-0 d-flex justify-content-between align-items-center w-100 flex-wrap">
          <div data-aos="flip-up" className="d-flex align-items-center  ">
            <img
              className="rounded-circle"
              src="https://cdn.dribbble.com/users/1998175/avatars/small/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868"
              width="48"
              height="48"
            />
            <div className="d-flex flex-column flex-wrap ">
              <p className="ps-4 m-0 fw-bold d-sm-inline d-none ">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="ps-4 m-0 text-muted">
                Shivanshu Shrivastava{" "}
                <span className="text-danger">Hire me</span>
              </p>
            </div>
          </div>
          <div data-aos="flip-up" className="icons d-flex mt-2 mt-sm-0">
            <a
              className="butn d-flex align-items-center text-dark text-center my-auto mx-0 mx-sm-2"
              href="#!"
              role="button"
            >
              <i class="fa-regular w-100 fa-heart"></i>
            </a>
            <a
              className="butn  d-flex align-items-center text-dark text-center my-auto mx-2"
              href="#!"
              role="button"
            >
              <i class="fa-regular w-100 fa-bookmark"></i>
            </a>
          </div>
        </div>

        {/* Carousel start's from here */}
        <div
          style={{ backgroundColor: "#e1dbfd" }}
          className="card m-4 rounded p-sm-3 p-md-5"
        >
          <Carousel />
        </div>

        {/* Text like :- Hey all,I've decided to make a redesign and animation for the Ahead app.  */}
        <div data-aos="fade-left" className="px-sm-5 py-sm-3 p-0">
          <Text />
        </div>

        {/* Three Cards with background Image */}
        <Image />

        {/* Four Cards with rotating ones */}
        <div className="card p-3 px-sm-4 py-sm-5 shadow-0">
          <h3 className="fw-bold text-black "> Does this Sound familiar...</h3>
          <div className="row p-3 p-sm-5 justify-content-center">
            <Card
              bgcolor={"antiquewhite"}
              title={"You Get a Promotion"}
              tr="0"
            />
            <Card
              bgcolor={"aquamarine"}
              title={"You argue with a colleague"}
              tr="0"
            />
            <Card
              bgcolor={"darkkhaki"}
              title={"You attend a class"}
              tr="15"
              data-aos="zoom-in-right"
            />
            <Card bgcolor={"thistle"} title={"You failed in exam"} tr="0" />
          </div>
        </div>

        {/* Meet the Head up Section */}
        <MeatUp />

        {/*  Text with background Image */}
        <Wondered />

        <div className="p-0 p-sm-5 text-center">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
          <h3 className="fw-bold">Lorem ipsum dolor sit amet.</h3>
          <p style={{ fontSize: 20 + "px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            officia dignissimos atque magnam ipsam cupiditate.
          </p>
          <button type="button" class="btn btn-dark btn-rounded">
            Start a Test
          </button>
          <p className="text-muted">Lorem, ipsum dolor.</p>
        </div>

        {/* User section for Hiring */}
        <HireME />

        {/* Side View */}
        <SideView />
      </div>

      {/* End Footer */}
      <Footer />
    </main>
  );
};
// Thanks

export default Main;
