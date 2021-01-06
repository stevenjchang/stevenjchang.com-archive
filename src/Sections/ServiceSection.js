import React from "react";

const ServiceSection = () => {
  return (
    <div id="service-section" className="container mx-auto m-24">
      <h1 className="text-center my-12">List of my Services</h1>
      <div className="service-section-card flex mx-auto">
        <div className="left flex-grow-0 bg-gray-300">
          <div className="py-12 px-16 text-center text-green-400  border border-gray-400">
            Website / Landing page
          </div>
          <div className="py-12 px-16 text-center text-orange-400">
            E-Commerce site
          </div>
          <div className="py-12 px-16 text-center text-purple-400">
            <p className="">Marketing and Analytics</p>
            <p className="">Tools integration</p>
          </div>
          <div className="py-12 px-16 text-center text-gray-400">
            Software Development
          </div>
        </div>
        <div className="right flex-grow bg-gray-200 justify-center items-center">
          <div className="">hello</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
