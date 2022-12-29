import Image from "next/image";

import { type TArticle } from "~/types";

type TArticleProps = {
  data: TArticle;
};

const Article = ({ data }: TArticleProps) => (
  <div
    id={data.number < 10 ? `0${data.number}` : `${data.number}`}
    className={
      data.number % 2
        ? "flex items-center gap-x-28 pt-52"
        : "flex flex-row-reverse items-center gap-x-28 pt-52"
    }
  >
    {/* First column */}
    <div className="flex flex-col pl-[150px]">
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
    </div>
    {/* End of First column */}
    {/* Second column */}
    <div className="h-[720px] w-[566px] flex-none">
      <Image
        src="/images/article-1.png"
        width={566}
        height={720}
        alt=""
        className="object-cover"
      />
    </div>
    {/* End of Second column */}
  </div>
);

export default Article;
