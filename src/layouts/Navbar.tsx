import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';

import { navLinks } from '@/constants';
import { useClickOutside, useToggle } from '@/hooks';

import { ToggleThemeButton } from './components';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [showMenu, toggleMenu] = useToggle();

  const ref = useRef(null);
  useClickOutside({ ref, fn: toggleMenu });

  return (
    <div className="sticky top-0 z-50 bg-[#F2F5F6] dark:bg-black lg:bg-transparent dark:lg:bg-transparent">
      <div className=" use-container flex h-20 items-center justify-between md:h-24">
        <div className="w-full">
          <span className="rounded-full font-montserrat text-2xl font-semibold text-primary dark:text-white lg:text-3xl">
            {/*      &#60; Richard &#47; &#62; */}
            Rachael
          </span>
        </div>
        <ul className="hidden gap-4 lg:flex">
          {navLinks.map((item) => (
            <li key={item.link}>
              <Link href={item.link}>
                <a
                  className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-poppins text-13 transition-all duration-300 ease-in-out hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white ${
                    router.pathname === item.link
                      ? 'bg-primary text-white dark:bg-primary '
                      : 'bg-white text-gray-700 dark:bg-[#212425] dark:text-[#A6A6A6] '
                  }`}
                >
                  <span className="text-lg">
                    <item.icon />
                  </span>
                  {item.label}
                </a>
              </Link>
            </li>
          ))}
          <li>
            <ToggleThemeButton />
          </li>
        </ul>
        {/* Mobile Menu */}
        <ul className="flex gap-4 lg:hidden">
          <li>
            <ToggleThemeButton />
          </li>
          <li>
            <button onClick={toggleMenu} className="rounded-full bg-primary p-2 text-xl text-white">
              <span>{showMenu ? <RiCloseLine /> : <RiMenuLine />}</span>
            </button>
          </li>
        </ul>
      </div>
      {showMenu && (
        <nav
          ref={ref}
          className="top-30 fixed left-0 z-50 w-full space-y-1 rounded-b-lg bg-white py-3 px-2 drop-shadow-lg dark:bg-[#212425] lg:hidden"
        >
          {navLinks.map((item) => (
            <Link key={item.link} href={item.link}>
              <a
                className={`block rounded-md py-2 px-3 hover:bg-primary hover:text-white dark:hover:text-white ${
                  router.pathname === item.link
                    ? 'bg-primary text-white'
                    : 'text-[#44566C] dark:text-[#A6A6A6]'
                }`}
                onClick={toggleMenu}
              >
                <div className="flex items-center justify-start gap-2">
                  <span className="text-lg">{<item.icon />}</span>
                  <p className="text-13 font-semibold">{item.label}</p>
                </div>
              </a>
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
};
export default Navbar;
