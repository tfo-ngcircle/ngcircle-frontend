import React from "react";
import MyImage from "./image";
import MyLink from "./link";
import styles from "../styles/components/Footer.module.scss";
import ReactMarkdown from "react-markdown";

const Footer = ({ logo, links, locations }) => {
  return (
    <footer className={styles.container}>
      <div className={styles.top}>
        <p>© {new Date().getFullYear()} | NgC GmbH</p>
        <div className={styles.links}>
          {links.map((link) => (
            <MyLink
              label={link.label}
              destination={link.destination}
              key={link.destination}
            />
          ))}
        </div>
      </div>
      <hr />
      <div className={styles.bottom}>
        <div className={styles.logo}>
          <MyImage image={logo} />
        </div>
        <div className={styles.info}>
          <p>Unsere Standorte</p>
          <div className={styles.locations}>
            {locations.map((location) => (
              <div key={`location_${location.id}`}>
                <b>{location.City}</b>
                <ReactMarkdown escapeHtml={false}>
                  {location.Info}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
