import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';

import { sizeConfig } from '@/config';
import { navLinks } from '@/constants';
import { useToggle } from '@/hooks';
import { IconResolver } from '@/utils';

import { ToggleThemeButton } from './components';

const Navbar: React.FC = () => {
  const router = useRouter();

  const [showMenu, toggleMenu] = useToggle();

  return (
    <nav
      className="use-container flex items-center justify-between dark:bg-black lg:bg-transparent dark:lg:bg-transparent"
      style={{ height: `${sizeConfig().navbar.height}` }}
    >
      <div className="w-full">
        <span className="rounded-full font-montserrat text-3xl font-semibold text-primary dark:text-white">
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
                  <IconResolver icon={item.icon} />
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
          <div onClick={toggleMenu} className="rounded-full bg-primary p-2 text-xl text-white">
            <span>{showMenu ? <RiCloseLine /> : <RiMenuLine />}</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
