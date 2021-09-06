import React from "react";
import Link from "next/link";

const MyLink = ({ label, destination, className }) => {
  return (
    <Link href={destination}>
      <a className={className}>{label}</a>
    </Link>
  );
};

export default MyLink;
