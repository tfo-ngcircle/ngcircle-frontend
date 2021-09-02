import React from "react";
import MyImage from "./image";
import MyLink from "./link";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = ({ logo, items }) => {
  const router = useRouter();
  return (
    <div className="border-b">
      <header className="container xl:flex items-center justify-between py-4">
        <Link href="/">
          <a>
            <MyImage image={logo} layout="intrinsic" />
          </a>
        </Link>
        <ul className="space-y-4 sm:flex sm:space-x-2 xl:space-x-4 sm:ml-0 sm:space-y-0 xl:ml-4 pt-4 justify-between sm:my-5">
          {items.map((item) => (
            <li
              className={
                router.asPath == item.destination
                  ? "text-primary text-center"
                  : "text-center"
              }
              key={item.id}
            >
              <MyLink destination={item.destination} label={item.label} />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default Header;
