import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { RiCloseLine, RiMenuLine, RiMoonLine, RiSunLine } from 'react-icons/ri';

import { navLinks } from '@/constants';
import { useToggle } from '@/hooks';
import { IconResolver } from '@/utils';

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
          className="flex cursor-pointer items-center justify-center rounded-full bg-white p-2 transition-all duration-300 ease-in-out hover:bg-primary dark:bg-[#4d4d4d] dark:text-white dark:hover:bg-primary dark:hover:text-white"
        >
          <span className="text-xl">
            <RiSunLine />
          </span>
        </div>
      );
    } else {
      return (
        <div
          onClick={() => setTheme('dark')}
          className="flex cursor-pointer items-center justify-center rounded-full bg-white p-2 transition-all duration-300 ease-in-out hover:bg-primary hover:text-white"
        >
          <span className="text-xl">
            <RiMoonLine />
          </span>
        </div>
      );
    }
  };

  return (
    <nav className="use-container flex items-center justify-between bg-[#f3f6f6] py-6 dark:bg-black sm:py-6 md:py-8 lg:bg-transparent lg:py-12 dark:lg:bg-transparent">
      <div className="w-full">
        <span className="rounded-full font-montserrat text-3xl font-semibold text-primary dark:text-white">
          {/*      &#60; Richard &#47; &#62; */}
          Seasons
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
                  <IconResolver icon={item.icon} />
                </span>
                {item.label}
              </a>
            </Link>
          </li>
        ))}
        <li>{renderThemeChanger()}</li>
      </ul>
      {/* Mobile Menu */}
      <ul className="flex gap-4 lg:hidden">
        <li>{renderThemeChanger()}</li>
        <li>
          <div onClick={toggleMenu} className="rounded-full bg-primary p-2 text-xl text-white">
            <span>{showMenu ? <RiCloseLine /> : <RiMenuLine />}</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
