import React from "react";
import MyImage from "./image";
import MyLink from "./link";
import styles from "../styles/components/Footer.module.scss";
import { useRouter } from "next/router";

const Footer = ({ logo, links, locations }) => {
  const router = useRouter();
  return (
    <footer>
      <nav>
        
      </nav>
    </footer>
  );
};

export default Footer;
