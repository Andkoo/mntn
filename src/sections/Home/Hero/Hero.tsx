import { useRouter } from "next/router";
import Image from "next/image";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { LayoutGroup, motion } from "framer-motion";

import { Container } from "~/components";

const QUICK_NAV_SECTIONS = [
  {
    label: "Start",
    href: "hero",
  },
  {
    label: "01",
    href: "01",
  },
  {
    label: "02",
    href: "02",
  },
  {
    label: "03",
    href: "03",
  },
];

const Hero = () => {
  const { asPath } = useRouter();

  const [activeTarget, setActiveTarget] = useState<string>("");

  useEffect(() => {
    if (!activeTarget) {
      setActiveTarget(asPath.split("#")[1] || "");
    }
  }, []);

  return (
    <>
      {/* Scroll tracker */}

      {/* End of Scroll Tracker */}
      {/* Content */}
      <div id="hero" className="relative">
        {/* Images */}
        <div className="absolute inset-0 overflow-hidden hero-images -z-10">
          <Image
            src="/images/hero-layer-0.png"
            width={1920}
            height={1080}
            alt=""
            className="top-0 left-0 right-0 h-screen"
          />
          <Image
            src="/images/hero-layer-1.png"
            width={1920}
            height={1080}
            alt=""
            className="top-[464px]"
          />
          <Image
            src="/images/hero-layer-2.png"
            width={1920}
            height={1080}
            alt=""
            className="bottom-0"
          />
          <Image
            src="/images/hero-shadow.png"
            width={1920}
            height={1080}
            alt=""
            className="top-0 left-0 right-0 h-screen"
          />
          <div className="absolute bottom-0 right-0 left-0 z-10 h-[700px] bg-gradient-to-b from-transparent via-transparent to-[#0B1D26]" />
        </div>
        {/* End of Images */}

        {/* Left column */}
        <div className="fixed left-0 top-[35vh] z-10 flex flex-col gap-y-6 pl-20">
          <span
            className="font-sans text-lg font-bold leading-[22px] text-white"
            style={{ writingMode: "vertical-lr" }}
          >
            Follow us
          </span>
          <SocialIcon
            url="https://instagram.com"
            fgColor="currentColor"
            bgColor="transparent"
            className="m-[-8px] !h-[36px] !w-[36px] text-white transition-colors hover:text-accent"
          />
          <SocialIcon
            url="https://twitter.com"
            fgColor="currentColor"
            bgColor="transparent"
            className="m-[-8px] !h-[36px] !w-[36px] text-white transition-colors hover:text-accent"
          />
        </div>
        {/* End of Left column */}

        {/* Middle column */}
        <Container>
          <div className="flex h-[136vh] justify-center pt-72">
            <div>
              <h2 className="flex items-center gap-x-8 font-sans text-lg font-extrabold uppercase leading-[22px] tracking-[6px] text-accent before:h-[2px] before:w-[72px] before:bg-accent">
                A Hiking guide
              </h2>
              <h1 className="max-w-[950px] py-8 font-serif text-[88px] font-semibold capitalize leading-[100px] text-white">
                Be prepared for the Mountains and beyond!
              </h1>
              <a
                href="#01"
                className="flex items-center gap-x-4 font-sans text-lg font-bold leading-[22px] text-white"
              >
                scroll down
                <motion.div
                  animate={{ y: [0, 4] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 1,
                  }}
                >
                  <Image
                    src="/icons/arrow-down.svg"
                    width={16}
                    height={24}
                    alt=""
                  />
                </motion.div>
              </a>
            </div>
          </div>
        </Container>
        {/* End of Middle column */}

        {/* Right column */}
        <div className="fixed right-0 top-[32vh] z-10 flex flex-col items-end pr-20">
          <LayoutGroup id="heroQuickNav">
            {QUICK_NAV_SECTIONS.map((item) => (
              <div
                key={`hero-quickNav-${item.href}`}
                className="relative flex text-right after:w-[3px] after:bg-white/50"
              >
                <Link
                  spy
                  hashSpy
                  to={item.href}
                  onSetActive={() => setActiveTarget(item.href)}
                  className="cursor-pointer py-[20px] pr-8 font-sans text-lg font-bold leading-[22px] text-white transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
                {activeTarget === item.href && (
                  <motion.div
                    layoutId="highlight"
                    layout="position"
                    transition={{ ease: "linear", duration: 0.2 }}
                    className="absolute right-0 top-0 bottom-0 z-10 w-[3px] bg-white"
                  />
                )}
              </div>
            ))}
          </LayoutGroup>
        </div>
        {/* End of Right column */}
      </div>
      {/* End of Conent */}
    </>
  );
};

export default Hero;
