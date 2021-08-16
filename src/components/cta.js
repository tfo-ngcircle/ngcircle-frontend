import React from "react";
import Image from "next/image";
import Link from "next/link";

const CTA = ({ cta, style }) => {
  return (
    <section className="border-b">
      <div className="sm:grid sm:grid-cols-4 container items-center">
        <h1 className="col-span-3 py-10 xl:pr-10">{cta.description}</h1>
        <div
          style={style}
          className="flex min-h-full md:w-[208px] lg:w-[316px] xl:w-[440px] 2xl:w-[440px] pt-8 pb-8 text-white hover:text-primary space-x-6"
        >
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
