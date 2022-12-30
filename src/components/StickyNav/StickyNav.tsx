import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";
import { SocialIcon } from "react-social-icons";
import { LayoutGroup, motion } from "framer-motion";

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

const StickyNav = () => {
  const { asPath } = useRouter();

  const [activeTarget, setActiveTarget] = useState<string>("");

  useEffect(() => {
    if (!activeTarget) {
      setActiveTarget(asPath.split("#")[1] || "");
    }
  }, []);

  return (
    <>
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

      {/* Right column */}
      <div className="fixed right-0 top-[32vh] z-10 flex flex-col items-end pr-20">
        <LayoutGroup id="heroQuickNav">
          {QUICK_NAV_SECTIONS.map((item) => (
            <div
              key={`hero-quickNav-${item.href}`}
              className="relative flex text-right after:w-[3px] after:bg-white/50"
            >
              <ScrollLink
                spy
                hashSpy
                to={item.href}
                onSetActive={() => setActiveTarget(item.href)}
                className="cursor-pointer py-[20px] pr-8 font-sans text-lg font-bold leading-[22px] text-white transition-colors hover:text-accent"
              >
                {item.label}
              </ScrollLink>
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
    </>
  );
};

export default React.memo(StickyNav);
