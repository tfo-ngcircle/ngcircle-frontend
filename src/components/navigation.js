import React from "react";
import MyImage from "src/components/image";
import MyLink from "src/components/link";
import styles from "../styles/Navigation.module.scss";
import { useRouter } from "next/router";

const Navigation = ({ logo, items }) => {
  const router = useRouter();
  return (
    <header>
      <nav>
        <div className={styles.container}>
          <MyImage image={logo} />
          <ul className={styles.navItems}>
            {items.map((item) => (
              <li className={router.pathname == item.destination ? styles.selected : ""} key={item.id}>
                <MyLink destination={item.destination} label={item.label} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
