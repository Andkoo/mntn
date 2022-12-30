import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, LayoutGroup, motion, useScroll } from "framer-motion";

import { Container } from "~/components";

const HEADER_LINKS = ["Equipment", "Blog", "About us"] as const;

type THeaderLink = typeof HEADER_LINKS[number];

const Header = () => {
  const { scrollY } = useScroll();

  const [activeLink, setActiveLink] = useState<THeaderLink | null>(null);
  const [shouldBeFixed, setShouldBeFixed] = useState<boolean>(false);

  const handleScrollChange = (val: number) => {
    if (val < window.innerHeight - 50 && shouldBeFixed) {
      setShouldBeFixed(false);
    } else if (val >= window.innerHeight - 50 && !shouldBeFixed) {
      setShouldBeFixed(true);
    }
  };

  useEffect(() => {
    return scrollY.on("change", handleScrollChange);
  }, [shouldBeFixed]);

  return (
    <AnimatePresence initial={false}>
      <motion.header
        key={`header-fixed-${shouldBeFixed}`}
        className="top-0 left-0 right-0 z-50"
        style={{
          position: shouldBeFixed ? "fixed" : "absolute",
          background: shouldBeFixed ? "rgba(0, 0, 0, 0.9)" : "transparent",
        }}
        initial={{ y: "-100%", z: "10px" }}
        animate={{ y: "0%", z: "10px" }}
        exit={{ y: "-100%", z: "10px" }}
        transition={{ ease: "linear", duration: 0.2 }}
      >
        <Container big>
          <div
            className={
              shouldBeFixed
                ? "flex items-center justify-between py-6"
                : "flex items-center justify-between py-14"
            }
          >
            <a href="#hero">
              <Image
                src="/images/logo.svg"
                width={108}
                height={24}
                alt="MNTN Logo"
                className="h-[24px]"
              />
            </a>
            <nav
              className="flex gap-x-2"
              onMouseLeave={() => setActiveLink(null)}
            >
              <LayoutGroup id="headerNav">
                {HEADER_LINKS.map((item) => (
                  <Link
                    key={`headerNav-link-${item}`}
                    href="/"
                    onMouseEnter={() => setActiveLink(item)}
                    className="relative rounded-md py-2 px-4 font-sans text-lg font-bold leading-[22px] text-white"
                  >
                    {item}

                    {activeLink === item && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-4 right-4 z-10 h-[2px] bg-accent"
                      />
                    )}
                  </Link>
                ))}
              </LayoutGroup>
            </nav>
            <Link
              href="/"
              className="group relative -mx-4 flex items-center rounded-md py-2 px-4 font-sans text-[17px] font-bold leading-[21px] text-white"
            >
              <Image src="/icons/account.svg" width={20} height={20} alt="" />
              <span className="mt-[2px] pl-[10px]">Account</span>

              <div className="absolute bottom-0 left-4 right-4 z-10 hidden h-[2px] bg-accent group-hover:block" />
            </Link>
          </div>
        </Container>
      </motion.header>
    </AnimatePresence>
  );
};

export default React.memo(Header);
