import MyImage from "./image";
import MyLink from "./link";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";
import { useScrollPosition } from "@/lib/useScrollPosition";

function Header({ logo, pages, items }) {
  const router = useRouter();

  const [shadow, setShadow] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y < prevPos.y;
      if (isShow !== shadow) setShadow(isShow);
    },
    [shadow]
  );

  return (
    <div
      className={`w-full border-b origin-top bg-white sticky transition-all duration-500 ease-in-out left-0 right-0 top-0 z-40 overflow-hidden ${
        shadow ? "scale-y-0 md:scale-y-100 lg:shadow-md" : "translate-y-0"
      }`}
    >
      <header className={`container xl:flex items-center justify-between py-4`}>
        <Link href="/">
          <a>
            <MyImage image={logo} layout="intrinsic" />
          </a>
        </Link>
        <ul className="divide-y divide-gray-200 sm:divide-y-0 sm:flex sm:space-x-2 xl:space-x-4 sm:ml-0 sm:space-y-0 xl:ml-4 mt-4 justify-between sm:my-5">
          {pages &&
            pages.map((item) => (
              <li
                className={`text-center py-1 ${
                  router.asPath == item.slug ? "text-primary" : ""
                }`}
                key={item.slug}
              >
                <MyLink destination={"/" + item.slug} label={item.title} />
              </li>
            ))}
          {items.map((item) => (
            <li
              className={`text-center py-1 ${
                router.asPath == item.destination ? "text-primary" : ""
              }`}
              key={item.id}
            >
              <MyLink destination={item.destination} label={item.label} />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default Header;
