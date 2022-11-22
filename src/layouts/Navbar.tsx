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
          className="flex cursor-pointer items-center justify-center rounded-full bg-white from-[#FA5252] to-[#DD2476] p-2 transition-all duration-300 ease-in-out hover:bg-gradient-to-r dark:bg-[#4d4d4d] dark:text-white"
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
          className="flex cursor-pointer items-center justify-center rounded-full bg-white from-[#FA5252] to-[#DD2476] p-2 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:text-white"
        >
          <span className="text-xl">
            <RiMoonLine />
          </span>
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
        {navLinks.map((item) => (
          <li key={item.link}>
            <Link href={item.link}>
              <a
                className={`flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r px-4 py-2 font-poppins text-13 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#FA5252] hover:to-[#DD2476] hover:text-white ${
                  router.pathname === item.link
                    ? 'from-[#FA5252] to-[#DD2476] text-white'
                    : 'bg-white text-gray-700 dark:bg-[#212425] dark:text-[#A6A6A6] hover:dark:text-white'
                }`}
              >
                <span className="text-xl">
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
          <div onClick={toggleMenu} className="rounded-full bg-primary p-2 text-2xl text-white">
            <span>{showMenu ? <RiCloseLine /> : <RiMenuLine />}</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
