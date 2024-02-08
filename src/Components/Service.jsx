import React from "react";
import Card from "./Card";
import { Sdata } from "./Sdata";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center fw-bold">Our Services</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4 mt-3">
                {Sdata.map((el, ind) => {
                  return <Card key={ind} image={el.imgSrc} title={el.title} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
