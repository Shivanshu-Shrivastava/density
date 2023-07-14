import React from "react";

const Image = () => {
  return (
    <div
      class="bg-image d-flex justify-content-center align-items-center"
      style={{backgroundImage:"url('https://mdbcdn.b-cdn.net/img/new/fluid/nature/015.webp')",height:40+'vh'}}
    >
      <div className="row text-white pe-4">
        <div className="col-12 col-sm card" style={{backgroundColor:'transparent'}}>
            <h1 className="text-center">EQ Beats IQ</h1>
        </div>
        <div className="col-12 col-sm card" style={{backgroundColor:'transparent'}}>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas itaque impedit eaque! Vitae dicta autem cumque tempore id labore aliquam?</p>
        </div>
        <div className="col-12 col-sm card" style={{backgroundColor:'transparent'}}>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas itaque impedit eaque! Vitae dicta autem cumque tempore id labore aliquam?</p>
        </div>
      </div>
    </div>
  );
};

export default Image;
