import Image from 'next/image';
import { AiOutlineDownload } from 'react-icons/ai';
import { RiFacebookFill, RiLinkedinFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri';

import defaultAvatar from '@/assets/avatar/male-with-glasses-2.svg';

const Profile: React.FC = () => {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="overflow-hidden rounded-full bg-red-100 p-5">
          <Image src={defaultAvatar} objectFit="cover" width={180} height={180} alt="avatar" />
        </div>
      </div>
      <div className="mt-5">
        <h3 className="flex items-center justify-center text-center font-poppins text-2xl font-semibold">
          Richard Huaman
        </h3>
      </div>
      <div className="mt-1 flex items-center justify-center">
        <p className="font-poppins text-16 text-[#7b7b7b]">Web Developer</p>
      </div>
      <div className="mt-2 flex items-center justify-center space-x-3">
        <a className="rounded-md bg-white p-2 shadow-sm dark:bg-[#212425]">
          <span className="text-lg text-facebook">
            <RiFacebookFill />
          </span>
        </a>
        <a className="rounded-md bg-white p-2 shadow-sm dark:bg-[#212425]">
          <span className="text-lg text-twitter">
            <RiTwitterFill />
          </span>
        </a>
        <a className="rounded-md bg-white p-2 shadow-sm dark:bg-[#212425]">
          <span className="text-lg text-youtube">
            <RiYoutubeFill />
          </span>
        </a>
        <a className="rounded-md bg-white p-2 shadow-sm dark:bg-[#212425]">
          <span className="text-lg text-linkedin">
            <RiLinkedinFill />
          </span>
        </a>
      </div>
      <div className="flex items-center justify-center">
        <a className="mt-6 flex items-center gap-2 rounded-[35px] bg-gradient-to-r from-[#FA5252] from-[#DD2476] to-[#DD2476] to-[#fa5252ef] px-6 py-2 font-poppins text-16 text-white transition duration-200 ease-linear hover:bg-gradient-to-l">
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
