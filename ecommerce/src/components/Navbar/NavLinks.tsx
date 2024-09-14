"use client"
import Link from 'next/link';

const links = [
  { name: 'Dashboard',},
  { name: 'Playground', },
  { name: 'Settings', },
  { name: 'Chat Bot',  },
];

export default function NavLinks() {

  return (
    <>
      {links.map((link) => {
          <Link
            key={link.name}
            href={"/"}
            className={`text-base text-white font-mulish transition-colors duration-150 hover:text-prinFuchsia hover:font-medium`}
          >
            TRANSI
          </Link>
      })}
    </>
  );
}
