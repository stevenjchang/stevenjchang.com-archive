import React from "react";

const data = [
  {
    heading: "Get Tennis Alerts",
    description:
      "Never miss another international tennis match. Follow your favorite players and get alerts when tournament matches are announced.",
    imgUrl: "/images/portfolio_gettennisalerts.png",
  },
  {
    heading: "React / Redux Boilerplate",
    description:
      "My simplified boilerplate with customized webpack settings with devServer and proxy. A minimal full-stack javascript boilerplate, with as little configurations as possible. Using React, Node/Express, PostgreSQL, Knex, and Redux",
    imgUrl: "/images/portfolio_boilerplate.png",
  },
  {
    heading: "Craigslist Search Aggregator",
    description:
      "The all in one search aggregator tool for Craigslist. View multiple search results at once, across different keywords and locations.",
    imgUrl: "/images/portfolio_craigslist.png",
  },
  {
    heading: "SF Crime Data",
    description:
      "Reported Crime in SF, in map view. It performs a radial search of variable size around an address provided by the user, and then offers the datapoints (crimes, in this case) for download.",
    imgUrl: "/images/portfolio_sf_crimedata.png",
  },
];

const Card = ({ heading, description, imgUrl }) => {
  return (
    <div className="card-container max-w-full flex">
      <div className="w-1/2 p-16">
        <h3 className="text-2xl text-gray-600">{heading}</h3>
        <br />
        <p className="text-gray-700 font-light">{description}</p>
      </div>
      <div className="image-container w-1/2 max-w-auto h-full border-gray-300">
        <img className="" src={imgUrl} alt="" />
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <>
      <div id="portfolio-section" className="section-background">
        <div className="container mx-auto">
          {data.map((data, idx) => (
            <Card key={idx} {...data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PortfolioSection;
