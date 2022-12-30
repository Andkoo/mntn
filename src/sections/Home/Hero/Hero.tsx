import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { Container } from "~/components";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const layer0Y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const layer1Y = useTransform(scrollYProgress, [0, 1], [0, 280]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    // Content
    <div ref={heroRef} id="hero" className="relative">
      {/* Images */}
      <motion.div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute top-0 left-0 right-0 h-screen will-change-transform"
          style={{ y: layer0Y }}
        >
          <Image
            src="/images/hero-layer-0.png"
            width={1920}
            height={1080}
            alt=""
          />
        </motion.div>
        <motion.div
          className="absolute top-[464px] will-change-transform"
          style={{ y: layer1Y }}
        >
          <Image
            src="/images/hero-layer-1.png"
            width={1920}
            height={1080}
            alt=""
          />
        </motion.div>
        <motion.div
          className="absolute top-[74vh] will-change-transform"
          style={{ y: layer2Y }}
        >
          <Image
            src="/images/hero-layer-2.png"
            width={1920}
            height={1080}
            alt=""
          />
        </motion.div>
        <div
          className="absolute w-full h-full bg-gradient-to-tl"
          style={
            {
              "--tw-gradient-stops": "transparent 31%, #0B1D26 109%",
            } as React.CSSProperties
          }
        />
        <div className="absolute bottom-0 right-0 left-0 z-10 h-[700px] bg-gradient-to-b from-transparent via-transparent to-[#0B1D26]" />
      </motion.div>
      {/* End of Images */}

      {/* Hero inner */}
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
      {/* End of Hero inner */}
    </div>
    // End of Conent
  );
};

export default React.memo(Hero);
