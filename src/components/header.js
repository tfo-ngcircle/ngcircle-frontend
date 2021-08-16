import React from "react";
import MyImage from "./image";
import MyLink from "./link";
import { useRouter } from "next/router";
import Link from "next/link";
import { Grid } from "react-flexbox-grid/dist/react-flexbox-grid";

const Header = ({ logo, items }) => {
  const router = useRouter();
  return (
    <div className="border-b">
      <Grid>
        <header className="lg:flex items-center justify-between py-4">
          <Link href="/">
            <a>
              <MyImage image={logo} />
            </a>
          </Link>
          <ul className="space-y-4 sm:flex sm:space-x-2 sm:ml-0 sm:space-y-0 lg:ml-4 pt-4 justify-between">
            {items.map((item) => (
              <li
                className={
                  router.asPath == item.destination
                    ? "text-primary text-center"
                    : "hover:animate-bounce text-center"
                }
                key={item.id}
              >
                <MyLink destination={item.destination} label={item.label} />
              </li>
            ))}
          </ul>
        </header>
      </Grid>
    </div>
  );
};

export default Header;
