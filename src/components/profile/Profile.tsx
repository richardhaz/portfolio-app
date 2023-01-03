import Image from 'next/image';
import { AiOutlineDownload } from 'react-icons/ai';
import { RiFacebookFill, RiLinkedinFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri';

import defaultAvatar from '@/assets/avatar/male-with-glasses.svg';

const Profile: React.FC = () => {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center">
      <div className="flex select-none overflow-hidden rounded-full bg-primary-light dark:bg-[#212425] dark:from-[#212425] dark:to-[#3d3d3d]">
        <Image src={defaultAvatar} objectFit="cover" width={230} height={230} alt="avatar" />
      </div>
      <h3 className="mt-5 flex items-center justify-center text-center font-poppins text-2xl font-semibold">
        Richard Huaman
      </h3>
      <p className="mt-1 text-center font-poppins text-16 text-[#7b7b7b]">Web Developer</p>
      <div className="mt-3 flex items-center justify-center space-x-3">
        <a
          href="https://facebook.com"
          target="_blank"
          className="rounded-md bg-white p-2 text-lg text-facebook shadow-sm transition-all duration-300 ease-in-out hover:bg-primary hover:text-white dark:bg-primary-dark dark:hover:bg-primary-light dark:hover:text-facebook"
          rel="noreferrer"
        >
          <RiFacebookFill />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          className="rounded-md bg-white p-2 text-lg text-twitter shadow-sm transition-all duration-300 ease-in-out hover:bg-primary hover:text-white dark:bg-primary-dark dark:hover:bg-primary-light dark:hover:text-twitter"
          rel="noreferrer"
        >
          <RiTwitterFill />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          className="rounded-md bg-white p-2 text-lg text-youtube shadow-sm transition-all duration-300 ease-in-out hover:bg-primary hover:text-white dark:bg-primary-dark dark:hover:bg-primary-light dark:hover:text-youtube"
          rel="noreferrer"
        >
          <RiYoutubeFill />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="rounded-md bg-white p-2 text-lg text-linkedin shadow-sm transition-all duration-300 ease-in-out hover:bg-primary hover:text-white dark:bg-primary-dark dark:hover:bg-primary-light dark:hover:text-linkedin"
          rel="noreferrer"
        >
          <RiLinkedinFill />
        </a>
      </div>
      <div className="flex items-center justify-center">
        <a
          href="#"
          className="mt-6 flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-poppins text-18 text-white transition duration-200 ease-linear hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-gray-700"
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
