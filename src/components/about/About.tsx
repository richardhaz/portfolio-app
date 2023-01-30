import Image from 'next/image';
import { Fragment } from 'react';
import { FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
import { RiMailSendFill } from 'react-icons/ri';

import feelingProud from '@/assets/undraw/feeling-proud.svg';
import { getSvgCompany, getSvgIcon } from '@/constants';

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
              I&apos;m Creative Director and UI/UX Designer from Sydney, Australia, working in web
              development and print media. I enjoy turning complex problems into simple, beautiful
              and intuitive designs. My aim is to bring across your message and identity in the most
              creative way. I created web design for many famous brand companies.
            </p>
          </div>
          <div className="mb-3">
            <h3 className="font-poppins text-xl font-medium">Personal Info</h3>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="">
              <div className="flex items-center justify-start gap-2">
                <span className="rounded-lg bg-white p-3 text-xl text-red-500 shadow-lg">
                  <FaMobileAlt />
                </span>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-poppins text-15 font-medium">+51 931 697 251</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-center justify-start gap-2">
                <span className="rounded-lg bg-white p-3 text-xl text-blue-500 shadow-lg">
                  <RiMailSendFill />
                </span>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a className="font-poppins text-15 font-medium">richard.hendcts@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-center justify-start gap-2">
                <span className="rounded-lg bg-white p-3 text-xl text-teal-500 shadow-lg">
                  <FaLocationArrow />
                </span>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-poppins text-15 font-medium">Peru</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-center justify-start gap-2">
                <span className="rounded-lg bg-white p-3 text-xl text-teal-500 shadow-lg">
                  <FaLocationArrow />
                </span>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-poppins text-15 font-medium">Peru</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-12">
        <h1 className="mb-4 font-poppins text-2xl font-medium md:text-4xl">My Skills!</h1>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-12 items-center gap-4 lg:grid-cols-10">
            <div className="jusitfy-center col-span-6 flex flex-col items-center gap-2 rounded-xl p-1 shadow-sm xs:col-span-4 md:col-span-3 md:p-5 lg:col-span-2">
              <Image src={getSvgIcon().react} alt="react-icon" width={70} height={70} />
              <p className="text-center font-nunito text-15 font-bold text-gray-500 lg:text-17">
                React JS
              </p>
            </div>
            <div className="jusitfy-center col-span-6 flex flex-col items-center gap-2 rounded-xl p-1 shadow-sm xs:col-span-4 md:col-span-3 md:p-5 lg:col-span-2">
              <Image src={getSvgIcon().node} alt="react-icon" width={70} height={70} />
              <p className="text-center font-nunito text-15 font-bold text-gray-500 lg:text-17">
                Node JS
              </p>
            </div>
            <div className="jusitfy-center col-span-6 flex flex-col items-center gap-2 rounded-xl p-1 shadow-sm dark:hidden xs:col-span-4 md:col-span-3 md:p-5 lg:col-span-2">
              <Image src={getSvgIcon().next} alt="react-icon" width={70} height={70} />
              <p className="text-center font-nunito text-15 font-bold text-gray-500 lg:text-17">
                Next JS
              </p>
            </div>
            <div className="jusitfy-center col-span-6 hidden flex-col items-center gap-2 rounded-xl p-1 shadow-sm dark:flex xs:col-span-4 md:col-span-3 md:p-5 lg:col-span-2">
              <Image src={getSvgIcon().nextLight} alt="react-icon" width={70} height={70} />
              <p className="text-center font-nunito text-15 font-bold text-gray-500 lg:text-17">
                Next JS
              </p>
            </div>
            <div className="jusitfy-center col-span-6 flex flex-col items-center gap-2 rounded-xl p-1 shadow-sm xs:col-span-4 md:col-span-3 md:p-5 lg:col-span-2">
              <Image src={getSvgIcon().nest} alt="react-icon" width={70} height={70} />
              <p className="text-center font-nunito text-15 font-bold text-gray-500 lg:text-17">
                Nest JS
              </p>
            </div>
            <div className="jusitfy-center col-span-6 flex flex-col items-center gap-2 rounded-xl p-1 shadow-sm xs:col-span-4 md:col-span-3 md:p-5 lg:col-span-2">
              <Image src={getSvgIcon().typescript} alt="react-icon" width={70} height={70} />
              <p className="text-center font-nunito text-15 font-bold text-gray-500 lg:text-17">
                Typescript
              </p>
            </div>
            <div className="jusitfy-center col-span-6 flex flex-col items-center gap-2 rounded-xl p-1 shadow-sm xs:col-span-4 md:col-span-3 md:p-5 lg:col-span-2">
              <Image src={getSvgIcon().tailwindcss} alt="react-icon" width={70} height={70} />
              <p className="text-center font-nunito text-15 font-bold text-gray-500 lg:text-17">
                Tailwind CSS
              </p>
            </div>
            <div className="jusitfy-center col-span-6 flex flex-col items-center gap-2 rounded-xl p-1 shadow-sm xs:col-span-4 md:col-span-3 md:p-5 lg:col-span-2">
              <Image src={getSvgIcon().reactQuery} alt="react-icon" width={70} height={70} />
              <p className="text-center font-nunito text-15 font-bold text-gray-500 lg:text-17">
                React Query
              </p>
            </div>
            <div className="jusitfy-center col-span-6 flex flex-col items-center gap-2 rounded-xl p-1 shadow-sm xs:col-span-4 md:col-span-3 md:p-5 lg:col-span-2">
              <Image src={getSvgIcon().reduxToolkit} alt="react-icon" width={70} height={70} />
              <p className="text-center font-nunito text-15 font-bold text-gray-500 lg:text-17">
                Redux Toolkit
              </p>
            </div>
            <div className="jusitfy-center col-span-6 flex flex-col items-center gap-2 rounded-xl p-1 shadow-sm xs:col-span-4 md:col-span-3 md:p-5 lg:col-span-2">
              <Image src={getSvgIcon().mongoDb} alt="react-icon" width={70} height={70} />
              <p className="text-center font-nunito text-15 font-bold text-gray-500 lg:text-17">
                Mongo DB
              </p>
            </div>
            <div className="jusitfy-center col-span-6 flex flex-col items-center gap-2 rounded-xl p-1 shadow-sm xs:col-span-4 md:col-span-3 md:p-5 lg:col-span-2">
              <Image src={getSvgIcon().git} alt="react-icon" width={70} height={70} />
              <p className="text-center font-nunito text-15 font-bold text-gray-500 lg:text-17">
                Git
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h1 className="mb-4 font-poppins text-2xl font-medium md:text-4xl">Where I have worked?</h1>
        <div className="flex items-center justify-center gap-8">
          <div className="flex select-none p-5 dark:hidden">
            <Image src={getSvgCompany().fairdent} alt="react-icon" width={180} height={55} />
          </div>
          <div className="hidden select-none p-5 dark:flex">
            <Image src={getSvgCompany().fairdentLight} alt="react-icon" width={180} height={55} />
          </div>
          <div className="flex select-none p-5 dark:hidden">
            <Image src={getSvgCompany().stomarx} alt="react-icon" width={180} height={55} />
          </div>
          <div className="hidden select-none p-5 dark:flex">
            <Image src={getSvgCompany().stomarxLight} alt="react-icon" width={180} height={55} />
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-center dark:text-[#A6A6A6]">
          @Hey, thank you for visiting my portfolio!
        </p>
      </div>
    </>
  );
};
export default About;
