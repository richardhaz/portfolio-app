import Image from 'next/image';
import { AiOutlineDownload } from 'react-icons/ai';
import { RiFacebookFill, RiLinkedinFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri';

import defaultAvatar from '@/assets/avatar/male-with-glasses.svg';

const Profile: React.FC = () => {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center">
      <div className="flex select-none overflow-hidden rounded-full bg-gradient-to-r from-[#FEAAB7] to-[#E97286] dark:bg-[#212425] dark:from-[#212425] dark:to-[#3d3d3d]">
        <Image src={defaultAvatar} objectFit="cover" width={190} height={190} alt="avatar" />
      </div>
      <h3 className="mt-5 flex items-center justify-center text-center font-poppins text-2xl font-semibold">
        Richard Huaman
      </h3>
      <p className="mt-1 text-center font-poppins text-16 text-[#7b7b7b]">Web Developer</p>
      <div className="mt-3 flex items-center justify-center space-x-3">
        <a
          href="https://facebook.com"
          target="_blank"
          className="rounded-md bg-white from-[#FA5252] to-[#DD2476] p-2 text-lg text-facebook shadow-sm transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:text-white dark:bg-[#212425]"
          rel="noreferrer"
        >
          <RiFacebookFill />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          className="rounded-md bg-white from-[#FA5252] to-[#DD2476] p-2 text-lg text-twitter shadow-sm transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:text-white dark:bg-[#212425]"
          rel="noreferrer"
        >
          <RiTwitterFill />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          className="rounded-md bg-white from-[#FA5252] to-[#DD2476] p-2 text-lg text-youtube shadow-sm transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:text-white dark:bg-[#212425]"
          rel="noreferrer"
        >
          <RiYoutubeFill />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="rounded-md bg-white from-[#FA5252] to-[#DD2476] p-2 text-lg text-linkedin shadow-sm transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:text-white dark:bg-[#212425]"
          rel="noreferrer"
        >
          <RiLinkedinFill />
        </a>
      </div>
      <div className="flex items-center justify-center">
        <a
          href="#"
          className="mt-6 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FA5252] from-[#DD2476] to-[#DD2476] to-[#fa5252ef] px-6 py-2 font-poppins text-16 text-white transition duration-200 ease-linear hover:bg-gradient-to-l"
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
