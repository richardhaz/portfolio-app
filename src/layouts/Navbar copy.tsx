import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {
  AiOutlineFileText,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser
} from 'react-icons/ai';
import { RiCloseLine, RiMenuLine, RiMoonLine, RiSunLine } from 'react-icons/ri';

import { useToggle } from '@/hooks';

const Navbar: React.FC = () => {
  const router = useRouter();

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const [showMenu, toggleMenu] = useToggle();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <div
          onClick={() => setTheme('light')}
          className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white from-[#FA5252] to-[#DD2476] p-2 font-poppins transition-all duration-300 ease-in-out hover:bg-gradient-to-r dark:bg-[#4d4d4d] dark:text-white"
        >
          <RiSunLine size={20} />
        </div>
      );
    } else {
      return (
        <div
          onClick={() => setTheme('dark')}
          className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white from-[#FA5252] to-[#DD2476] p-2 font-poppins transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:text-white"
        >
          <RiMoonLine size={20} />
        </div>
      );
    }
  };

  return (
    <nav className="flex items-center justify-between py-12">
      <div className="w-full">
        <span className="rounded-full font-montserrat text-3xl font-semibold text-primary">
          &#60; Richard &#47; &#62;
        </span>
      </div>
      <ul className="hidden gap-4 lg:flex">
        <li>
          <Link href="/">
            <a
              className={`flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r px-4 py-2 font-poppins text-13 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#FA5252] hover:to-[#DD2476] hover:text-white ${
                router.pathname === '/'
                  ? 'from-[#FA5252] to-[#DD2476] text-white dark:text-white'
                  : 'bg-white text-gray-700 dark:bg-[#212425] dark:text-[#A6A6A6] hover:dark:text-white'
              }`}
            >
              <AiOutlineHome size={20} />
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a
              className={`flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r px-4 py-2 font-poppins text-13 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#FA5252] hover:to-[#DD2476] hover:text-white ${
                router.pathname === '/about'
                  ? 'from-[#FA5252] to-[#DD2476] text-white dark:text-white'
                  : 'bg-white text-gray-700 dark:bg-[#212425] dark:text-[#A6A6A6] hover:dark:text-white'
              }`}
            >
              <AiOutlineUser size={20} />
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/resume">
            <a
              className={`flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r px-4 py-2 font-poppins text-13 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#FA5252] hover:to-[#DD2476] hover:text-white ${
                router.pathname === '/resume'
                  ? 'from-[#FA5252] to-[#DD2476] text-white dark:text-white'
                  : 'bg-white text-gray-700 dark:bg-[#212425] dark:text-[#A6A6A6] hover:dark:text-white'
              }`}
            >
              <AiOutlineFileText size={20} />
              Resume
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a
              className={`flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r px-4 py-2 font-poppins text-13 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#FA5252] hover:to-[#DD2476] hover:text-white ${
                router.pathname === '/projects'
                  ? 'from-[#FA5252] to-[#DD2476] text-white dark:text-white'
                  : 'bg-white text-gray-700 dark:bg-[#212425] dark:text-[#A6A6A6] hover:dark:text-white'
              }`}
            >
              <AiOutlineFundProjectionScreen size={20} />
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a
              className={`flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r px-4 py-2 font-poppins text-13 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#FA5252] hover:to-[#DD2476] hover:text-white ${
                router.pathname === '/contact'
                  ? 'from-[#FA5252] to-[#DD2476] text-white dark:text-white'
                  : 'bg-white text-gray-700 dark:bg-[#212425] dark:text-[#A6A6A6] hover:dark:text-white'
              }`}
            >
              <AiOutlineFundProjectionScreen size={20} />
              Contact
            </a>
          </Link>
        </li>
        <li>{renderThemeChanger()}</li>
      </ul>
      {/* Mobile Menu */}
      <ul className="flex gap-4 lg:hidden">
        <li>{renderThemeChanger()}</li>
        <li>
          <div onClick={toggleMenu} className="rounded-full bg-primary p-2 text-2xl text-white">
            {showMenu ? <RiCloseLine /> : <RiMenuLine />}
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
