import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/CTA.module.scss";

const CTA = ({ cta, style }) => {
  return (
    <section>
      <div className={styles.container}>
        <h1>{cta.description}</h1>
        <div className={styles.action} style={style}>
          <Image
            src="/arrow.svg"
            alt=""
            width={51}
            height={32.828}
            layout="fixed"
          />
          <Link href={cta.action} passHref>
            <a>{cta.title}</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
