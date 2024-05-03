import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo-1.png"
            alt="Logo"
            width={70}
            height={70}
            draggable={false}
            className="cursor-pointer hidden lg:block hover:animate-slowspin"
          />
          <div className="font-bold ml-[10px] hidden md:block text-xl text-gray-300">
            Semih Günak
          </div>
        </Link>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-full md:h-auto border-0 md:border-[rgba(112,66,248,0.38)] bg-transparent md:bg-[rgba(3,0,20,0.37)] mr-0 md:mr-[15px] px-0 md:px-[20px] py-[10px] rounded-none md:rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
              >
                {link.title}
              </Link>
            ))}

            {/* source code */}
            <Link
              href={LINKS.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
            >
              View Resume
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 hidden lg:block text-white" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
