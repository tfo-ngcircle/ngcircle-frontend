import React from "react";
import MyImage from "./image";
import MyLink from "./link";
import ReactMarkdown from "react-markdown";

const Footer = ({ logo, links, locations }) => {
  return (
    <div className="bg-black pb-10">
      <footer className="container text-gray-300 space-y-5 py-12 p-8 xl:px-20">
        <div className="sm:flex justify-between border-b pb-5">
          <p>© {new Date().getFullYear()} | NgC GmbH</p>
          <div className="space-x-4 flex flex-wrap">
            {links.map((link) => (
              <MyLink
                label={link.label}
                destination={link.destination}
                key={link.id}
              />
            ))}
          </div>
        </div>
        <div className="sm:flex space-y-4 sm:space-y-0 justify-between ">
          <div className="w-[140px] h-[140px]">
            <MyImage image={logo} layout="intrinsic" />
          </div>
          <div className="space-y-4 xl:pr-20">
            <p>Unsere Standorte</p>
            <div className="sm:flex space-y-4 sm:space-x-8 lg:space-x-24 sm:space-y-0 justify-evenly">
              {locations.map((location) => (
                <div key={`location_${location.id}`}>
                  <b>{location.name}</b>
                  <ReactMarkdown escapeHtml={false}>
                    {location.address}
                  </ReactMarkdown>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
