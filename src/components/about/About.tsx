import Image from 'next/image';
import { BiCodeAlt } from 'react-icons/bi';
import { FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
import { FiCamera, FiSettings } from 'react-icons/fi';
import {
  MdOutlineAppRegistration,
  MdOutlineDashboardCustomize,
  MdOutlinePhotoSizeSelectActual
} from 'react-icons/md';
import { RiCalendarCheckFill, RiMailSendFill } from 'react-icons/ri';

import feelingProud from '@/assets/undraw/feeling-proud.svg';

const About: React.FC = () => {
  return (
    <>
      <div className="mb-8 grid grid-cols-12">
        <div className="col-span-12 flex gap-4">
          <div>
            <h2 className="font-roboto_slab text-2xl font-semibold md:text-4xl">About Me</h2>
          </div>
          <div>
            <div className="mt-5 w-full border-t-[2px] border-primary md:w-48" />
          </div>
        </div>
        <div className="col-span-12 my-4 flex items-center justify-center lg:col-span-4 lg:my-0">
          <Image
            src={feelingProud}
            width="250px"
            height="250px"
            objectFit="cover"
            alt="about-image"
          />
        </div>
        <div className="col-span-12 space-y-5 lg:col-span-8">
          <div className="w-full md:max-w-[95%]">
            <h3 className="mb-3 font-poppins text-xl font-medium">Who am I?</h3>
            <p className="font-poppins text-16 text-gray-500">
              I&apos;m a web developer with 5 years of experience in creating responsive and dynamic
              websites. I specialize in using modern web technologies like React, Node.js, and
              GraphQL to build high-performing and scalable web applications.
            </p>
          </div>
          <div className="mb-3">
            <h3 className="font-poppins text-xl font-medium">Personal Info</h3>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex items-center justify-start gap-2">
              <span className="rounded-lg bg-white p-3 text-xl text-red-500 shadow-lg">
                <FaMobileAlt />
              </span>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-poppins text-15 font-medium">+1 448 5830</p>
              </div>
            </div>
            <div className="flex items-center justify-start gap-2">
              <span className="rounded-lg bg-white p-3 text-xl text-blue-500 shadow-lg">
                <RiMailSendFill />
              </span>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a className="font-poppins text-15 font-medium">example@mail.com</a>
              </div>
            </div>
            <div className="flex items-center justify-start gap-2">
              <span className="rounded-lg bg-white p-3 text-xl text-teal-500 shadow-lg">
                <FaLocationArrow />
              </span>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-poppins text-15 font-medium">United States</p>
              </div>
            </div>
            <div className="flex items-center justify-start gap-2">
              <span className="rounded-lg bg-white p-3 text-xl text-[#C17CEB] shadow-lg">
                <RiCalendarCheckFill />
              </span>
              <div>
                <p className="text-sm text-gray-400">Birthday</p>
                <p className="font-poppins text-15 font-medium">Oct 21, 1996</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="mb-6 font-poppins text-2xl font-medium md:text-4xl">What I do!</h2>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 flex rounded-xl bg-[#FCF4FF] p-6 dark:border-2 dark:border-[#212425] dark:bg-transparent md:col-span-6 xl:col-span-4">
            <span className="text-3xl text-[#D566FF]">
              <MdOutlineDashboardCustomize />
            </span>
            <div className="pl-4">
              <h3 className="mb-1 text-20 font-medium">UI/UX Design</h3>
              <p className="font-poppins leading-7 text-[#44566C] dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
              </p>
            </div>
          </div>
          <div className="col-span-12 flex rounded-xl bg-[#FEFAF0] p-6 dark:border-2 dark:border-[#212425] dark:bg-transparent md:col-span-6 xl:col-span-4">
            <span className="text-3xl text-[#DDA10C]">
              <MdOutlineAppRegistration />
            </span>
            <div className="pl-4">
              <h3 className="mb-1 text-20 font-medium">App Development</h3>
              <p className="font-poppins leading-7 text-[#44566C] dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
              </p>
            </div>
          </div>
          <div className="col-span-12 flex rounded-xl bg-[#FCF4FF] p-6 dark:border-2 dark:border-[#212425] dark:bg-transparent md:col-span-6 xl:col-span-4">
            <span className="text-3xl text-[#8774FF]">
              <MdOutlinePhotoSizeSelectActual />
            </span>
            <div className="pl-4">
              <h3 className="mb-1 text-20 font-medium">Photo Editing</h3>
              <p className="font-poppins leading-7 text-[#44566C] dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
              </p>
            </div>
          </div>
          <div className="col-span-12 flex rounded-xl bg-[#FFF4F4] p-6 dark:border-2 dark:border-[#212425] dark:bg-transparent md:col-span-6 xl:col-span-4">
            <span className="text-3xl text-[#FF6080]">
              <FiCamera />
            </span>
            <div className="pl-4">
              <h3 className="mb-1 text-20 font-medium">Photography</h3>
              <p className="font-poppins leading-7 text-[#44566C] dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
              </p>
            </div>
          </div>{' '}
          <div className="col-span-12 flex rounded-xl bg-[#FFF0F8] p-6 dark:border-2 dark:border-[#212425] dark:bg-transparent md:col-span-6 xl:col-span-4">
            <span className="text-3xl text-[#FF75D8]">
              <FiSettings />
            </span>
            <div className="pl-4">
              <h3 className="mb-1 text-20 font-medium">Managment</h3>
              <p className="font-poppins leading-7 text-[#44566C] dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
              </p>
            </div>
          </div>
          <div className="col-span-12 flex rounded-xl bg-[#F3FAFF] p-6 dark:border-2 dark:border-[#212425] dark:bg-transparent md:col-span-6 xl:col-span-4">
            <span className="text-3xl text-[#269FFF]">
              <BiCodeAlt />
            </span>
            <div className="pl-4">
              <h3 className="mb-1 text-20 font-medium">Managment</h3>
              <p className="font-poppins leading-7 text-[#44566C] dark:text-[#A6A6A6]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
