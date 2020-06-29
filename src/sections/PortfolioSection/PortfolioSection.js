import React from "react";

const data = [
  {
    heading: "Get Tennis Alerts",
    description:
      "Never miss another international tennis match. Follow your favorite players and get alerts when tournament matches are announced.",
    imgUrl: "/images/portfolio_gettennisalerts.png",
    url: "https://gettennisalerts.com",
  },
  {
    heading: "React / Redux Boilerplate",
    description:
      "My simplified boilerplate with customized webpack settings with devServer and proxy. A minimal full-stack javascript boilerplate, with as little configurations as possible. Using React, Node/Express, PostgreSQL, Knex, and Redux",
    imgUrl: "/images/portfolio_boilerplate.png",
    url: "https://github.com/stevenjchang/steves_boilerplate",
  },
  {
    heading: "Craigslist Search Aggregator",
    description:
      "The all in one search aggregator tool for Craigslist. View multiple search results at once, across different keywords and locations.",
    imgUrl: "/images/portfolio_craigslist.png",
    url: "https://github.com/HashtagCoding/craigslistSearchAggregator",
  },
  {
    heading: "SF Crime Data",
    description:
      "Reported Crime in SF, in map view. It performs a radial search of variable size around an address provided by the user, and then offers the datapoints (crimes, in this case) for download.",
    imgUrl: "/images/portfolio_sf_crimedata.png",
    url: "https://sfcrimedata.org/",
  },
];

const Card = ({ heading, description, imgUrl, url }) => {
  return (
    <div className="card-container max-w-full flex">
      <div className="w-1/2 p-16">
        <a href={url}>
          <h3 className="text-2xl text-gray-600">{heading}</h3>
        </a>
        <br />
        <p className="text-gray-700 font-light">{description}</p>
      </div>
      <div className="image-container w-1/2 max-w-auto h-full border-gray-300">
        <a href={url}>
          <img className="" src={imgUrl} alt="" />
        </a>
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
