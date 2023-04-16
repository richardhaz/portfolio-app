import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

export const ToggleThemeButton = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

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
