import React from "react";
import Link from "next/link";

const MyLink = ({ label, destination }) => {
  return (
    <Link href={destination}>
      <a>{label}</a>
    </Link>
  );
};

export default MyLink;
