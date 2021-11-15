import React from "react";
import Carrousel from "../../components/Carousel";
import Card from "../../components/Card";
import Header from "../../components/Header";

const LandingPage = () => {
  return (
    <div>
      <div className="__carrousel-bg-img pt-9 mb-14">
        <div className="mycontainer mobile:mycontainerfull">
          <Carrousel />
        </div>
      </div>
      <div className="bg-gray-50 pt-14">
        <div className="mycontainer mobile:mycontainerfull min-h-screen">
          <Header title="Today's Offer" subTitle="Get the best offer from us" />
          <div
            className="mt-12 grid justify-between gap-3 gap-y-6"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 12rem))",
            }}
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
