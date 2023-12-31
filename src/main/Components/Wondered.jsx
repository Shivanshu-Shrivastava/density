import React from "react";

const Wondered = () => {
  return (
    <>
      <div className="row text-dark pe-4">
        <div data-aos="fade-left" className="col-12 col-sm card">
          <h1 className="text-center">EQ Beats IQ</h1>
        </div>
        <div data-aos="zoom-in" className="col-12 col-sm card">
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            itaque impedit eaque! Vitae dicta autem cumque tempore id labore
            aliquam?
          </p>
        </div>
        <div data-aos="fade-right" className="col-12 col-sm card">
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            itaque impedit eaque! Vitae dicta autem cumque tempore id labore
            aliquam?
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        style={{
          height: 60 + "vh",
          backgroundColor: "#e1dbfd",
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/new/fluid/nature/012.webp')",
          filter: "brightness(0.5)",
        }}
        className="card m-4 rounded p-sm-3 p-md-5 text-center text-white"
      >
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          velit?
        </p>
        <h1 className="fw-bold">Ever Wondered what other think of you?</h1>
      </div>
    </>
  );
};

export default Wondered;
