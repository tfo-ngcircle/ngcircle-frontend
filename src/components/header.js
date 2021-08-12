import React from "react";
import MyImage from "./image";
import MyLink from "./link";
import styles from "../styles/components/Header.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = ({ logo, items }) => {
  const router = useRouter();
  return (
    <header>
      <nav>
        <div className={styles.container}>
          <Link href="/">
            <a>
              <MyImage image={logo} />
            </a>
          </Link>
          <ul className={styles.navItems}>
            {items.map((item) => (
              <li
                className={
                  router.asPath == item.destination ? styles.selected : ""
                }
                key={item.id}
              >
                <MyLink destination={item.destination} label={item.label} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
