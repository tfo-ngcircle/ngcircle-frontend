import React from "react";
import Logo from "@/components/logo";
import MyLink from "@/components/link";
import styles from "../styles/Navigation.module.scss";

const Navigation = ({ logo, items }) => {
  return (
    <header>
      <nav>
        <div className={styles.container}>
          <Logo image={logo} />
          <ul className={styles.navItems}>
            {items.map((item) => (
              <li key={item.id}>
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
