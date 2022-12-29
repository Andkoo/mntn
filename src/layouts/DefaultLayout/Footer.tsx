import Image from "next/image";
import Link from "next/link";

import { Container } from "~/components";

const YEAR = new Date().getFullYear();

const FOOTER_LINKS = [
  {
    title: "More on The Blog",
    items: [
      {
        href: "/",
        label: "About MNTN",
      },
      {
        href: "/",
        label: "Contributors & Writers",
      },
      {
        href: "/",
        label: "Write For Us",
      },
      {
        href: "/",
        label: "Contact Us",
      },
      {
        href: "/",
        label: "Privacy Policy",
      },
    ],
  },
  {
    title: "More on MNTN",
    items: [
      {
        href: "/",
        label: "The Team",
      },
      {
        href: "/",
        label: "Jobs",
      },
      {
        href: "/",
        label: "Press",
      },
    ],
  },
];

const Footer = () => (
  <Container>
    <div className="grid-small mt-[-180px] pb-32">
      <div className="flex flex-col col-span-6">
        <Image src="/images/logo.svg" width={108} height={38} alt="MNTN Logo" />
        <strong className="max-w-[300px] pt-6 font-sans text-lg font-bold leading-8 text-white">
          Get out there & discover your next slope, mountain & destination!
        </strong>
        <span className="mt-auto font-sans text-lg font-medium leading-8 text-white opacity-50">
          Copyright {YEAR} MNTN, Inc. Terms & Privacy
        </span>
      </div>
      <div className="flex justify-between col-span-4">
        {FOOTER_LINKS.map((item1) => (
          <div
            key={`footerLinks-category-${item1.title}`}
            className="flex flex-col text-white"
          >
            <strong className="pb-2 font-sans text-2xl font-bold leading-8 text-accent">
              {item1.title}
            </strong>
            {item1.items.map((item2) => (
              <Link
                key={`footerLinks-category-${item1.title}-link-${item2.label}`}
                href="/"
                className="pt-4 font-sans text-lg font-medium leading-8 hover:underline"
              >
                {item2.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  </Container>
);

export default Footer;
