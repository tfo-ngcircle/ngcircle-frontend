import MyImage from "./image";
import MyLink from "./link";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";
import { useScrollPosition } from "@/lib/useScrollPosition";

const Header = ({ logo, items }) => {
  const router = useRouter();

  const [shadow, setShadow] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y < 0;
      if (isShow !== shadow) setShadow(isShow);
    },
    [shadow]
  );

  return (
    <div
      className={`border-b bg-white sticky transition-shadow duration-500 ease-in-out left-0 right-0 top-0 z-50 ${
        shadow ? "shadow-md" : ""
      } `}
    >
      <header className={`container xl:flex items-center justify-between py-4`}>
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
