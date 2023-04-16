import Image from 'next/image';
import { AiOutlineDownload } from 'react-icons/ai';
import { RiFacebookFill, RiLinkedinFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri';

import Avatar from '@/assets/avatar/avatar.svg';
import defaultAvatar from '@/assets/avatar/male-with-glasses.svg';

const Profile: React.FC = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex select-none overflow-hidden rounded-full bg-primary-light dark:bg-[#212425] dark:from-[#212425] dark:to-[#3d3d3d]">
        <Image src={Avatar} objectFit="cover" width={230} height={230} alt="avatar" />
      </div>
      <h1 className="mt-5 flex items-center justify-center text-center font-poppins text-2xl font-semibold">
        Rachael Smith
      </h1>
      <p className="mt-1 text-center font-poppins text-16 text-[#7b7b7b]">Web Developer</p>
      <div className="mt-3 flex items-center justify-center space-x-3">
        <a
          href="#"
          className="rounded-md bg-white p-2 text-lg text-facebook shadow-sm transition-all duration-300 ease-in-out hover:bg-primary hover:text-white dark:bg-primary-dark dark:hover:bg-primary-light dark:hover:text-facebook"
        >
          <RiFacebookFill />
        </a>
        <a
          href="#"
          className="rounded-md bg-white p-2 text-lg text-twitter shadow-sm transition-all duration-300 ease-in-out hover:bg-primary hover:text-white dark:bg-primary-dark dark:hover:bg-primary-light dark:hover:text-twitter"
        >
          <RiTwitterFill />
        </a>
        <a
          href="#"
          className="rounded-md bg-white p-2 text-lg text-youtube shadow-sm transition-all duration-300 ease-in-out hover:bg-primary hover:text-white dark:bg-primary-dark dark:hover:bg-primary-light dark:hover:text-youtube"
        >
          <RiYoutubeFill />
        </a>
        <a
          href="#"
          className="rounded-md bg-white p-2 text-lg text-linkedin shadow-sm transition-all duration-300 ease-in-out hover:bg-primary hover:text-white dark:bg-primary-dark dark:hover:bg-primary-light dark:hover:text-linkedin"
        >
          <RiLinkedinFill />
        </a>
      </div>
      <div className="flex items-center justify-center">
        <a
          href="#"
          className="mt-6 flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-poppins text-18 text-white transition duration-200 ease-linear hover:bg-primary/95 dark:bg-primary-dark dark:hover:bg-gray-700"
        >
          <span className="text-xl">
            <AiOutlineDownload />
          </span>
          Download CV
        </a>
      </div>
    </div>
  );
};
export default Profile;
