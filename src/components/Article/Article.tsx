import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import { type TArticle } from "~/types";

type TArticleProps = {
  data: TArticle;
};

const Article = ({ data }: TArticleProps) => {
  const articleRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(articleRef, {
    margin: "0px 0px -600px 0px",
    once: true,
  });

  const isOdd = !!(data.number % 2);

  return (
    <div
      ref={articleRef}
      id={data.number < 10 ? `0${data.number}` : `${data.number}`}
      className={
        isOdd
          ? "flex items-center gap-x-28 pt-52"
          : "flex flex-row-reverse items-center gap-x-28 pt-52"
      }
    >
      {/* First column */}
      <motion.div
        style={{
          x: isInView ? 0 : isOdd ? -200 : 200,
          opacity: isInView ? 1 : 0,
          transition: "opacity 0.3s linear, transform 0.3s",
        }}
        className="flex flex-col pl-[150px]"
      >
        <div className="relative flex items-center gap-x-8 font-sans text-lg font-extrabold uppercase leading-[22px] tracking-[6px] text-accent before:h-[2px] before:w-[72px] before:bg-accent">
          <div className="absolute top-1/2 -left-36 -translate-y-1/2 font-sans text-[240px] font-bold leading-[240px] text-white opacity-10">
            {data.number < 10 ? `0${data.number}` : data.number}
          </div>
          {data.label}
        </div>
        <strong className="py-7 font-serif text-[64px] font-semibold leading-[76px] text-white">
          {data.title}
        </strong>
        <p className="font-sans text-lg font-bold leading-8 text-white pb-7">
          {data.description}
        </p>
        <a
          href="#hero"
          className="flex items-center gap-x-4 font-sans text-lg leading-[22px] text-accent"
        >
          read more
          <Image
            src="/icons/arrow-right-accent.svg"
            width={24}
            height={16}
            alt=""
          />
        </a>
      </motion.div>
      {/* End of First column */}

      {/* Second column */}
      <motion.div
        style={{
          x: isInView ? 0 : isOdd ? 200 : -200,
          opacity: isInView ? 1 : 0,
          transition: "opacity 0.3s linear, transform 0.3s",
        }}
        className="h-[720px] w-[40%] flex-none"
      >
        <Image
          src={data.image}
          width={566}
          height={720}
          alt=""
          className="object-cover"
        />
      </motion.div>
      {/* End of Second column */}
    </div>
  );
};

export default Article;
