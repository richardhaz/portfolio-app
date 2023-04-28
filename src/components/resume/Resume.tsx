import { FiGlobe } from 'react-icons/fi';

import { EducationIcon, ExperienceIcon } from '../icons';

const Resume: React.FC = () => {
  return (
    <>
      <div className="col-span-12 mb-8 flex gap-4">
        <div>
          <h2 className="font-roboto_slab text-2xl font-semibold md:text-4xl">Resume</h2>
        </div>
        <div>
          <div className="mt-5 w-full border-t-[2px] border-primary md:w-48" />
        </div>
      </div>
      <div className="mb-10 grid grid-cols-12 space-y-8  md:gap-5 md:space-y-0">
        {/* Education */}
        <div className="col-span-12 gap-4 md:col-span-6 lg:col-span-4">
          <div className="mb-5 flex gap-3">
            <div className="text-2xl text-primary lg:text-3xl">
              <ExperienceIcon />
            </div>
            <h2 className="font-poppins text-xl font-medium lg:text-2xl">Education</h2>
          </div>
          <div className="space-y-6">
            <div className="space-y-1 rounded-lg bg-light1rgb p-4 dark:border-2 dark:border-[#212425] dark:bg-transparent md:space-y-2">
              <p className="font-poppins text-14 text-gray-500 dark:text-[#b7b7b7]">2015-2020</p>
              <p className="font-poppins text-16 text-black dark:text-white md:text-20">
                Software Engineering
              </p>
              <p className="font-poppins text-14 text-black dark:text-[#b7b7b7] md:text-16">
                University of Colorado
              </p>
            </div>
            <div className="space-y-1 rounded-lg bg-light2rgb p-4 dark:border-2 dark:border-[#212425] dark:bg-transparent md:space-y-2">
              <p className="font-poppins text-14 text-gray-500 dark:text-[#b7b7b7]">2016-present</p>
              <p className="font-poppins text-16 text-black dark:text-white md:text-20">
                Bachelor in Software Engineer
              </p>
              <p className="font-poppins text-14 text-black dark:text-[#b7b7b7] md:text-16">
                University of Colorado
              </p>
            </div>
            <div className="space-y-1 rounded-lg bg-light3rgb p-4 dark:border-2 dark:border-[#212425] dark:bg-transparent md:space-y-2">
              <p className="font-poppins text-14 text-gray-500 dark:text-[#b7b7b7]">2011-2015</p>
              <p className="font-poppins text-16 text-black dark:text-white md:text-20">
                Highshool
              </p>
              <p className="font-poppins text-14 text-black dark:text-[#b7b7b7] md:text-16">
                Highshool of Colorado
              </p>
            </div>
          </div>
        </div>
        {/* Experience */}
        <div className="col-span-12 gap-4 md:col-span-6 lg:col-span-4">
          <div className="mb-5 flex gap-3">
            <div className="text-2xl text-primary lg:text-3xl">
              <EducationIcon />
            </div>
            <h2 className="font-poppins text-xl font-medium lg:text-2xl">Experience</h2>
          </div>
          <div className="space-y-6">
            <div className="space-y-1 rounded-lg bg-light3rgb p-4 dark:border-2 dark:border-[#212425] dark:bg-transparent md:space-y-2">
              <p className="font-poppins text-14 text-gray-500 dark:text-[#b7b7b7]">2021-present</p>
              <p className="font-poppins text-16 text-black dark:text-white md:text-20">
                Frontend Developer
              </p>
              <p className="font-poppins text-14 text-black dark:text-[#b7b7b7] md:text-16">
                The best company
              </p>
            </div>

            <div className="space-y-1 rounded-lg bg-light4rgb p-4 dark:border-2 dark:border-[#212425] dark:bg-transparent md:space-y-2">
              <p className="font-poppins text-14 text-gray-500 dark:text-[#b7b7b7]">2018-2019</p>
              <p className="font-poppins text-16 text-black dark:text-white md:text-20">
                Web Designer
              </p>
              <p className="font-poppins text-14 text-black dark:text-[#b7b7b7] md:text-16">
                The best company
              </p>
            </div>

            <div className="space-y-1 rounded-lg bg-light1rgb p-4 dark:border-2 dark:border-[#212425] dark:bg-transparent md:space-y-2">
              <p className="font-poppins text-14 text-gray-500 dark:text-[#b7b7b7]">2014-2015</p>
              <p className="font-poppins text-16 text-black dark:text-white md:text-20">
                Backend Developer
              </p>
              <p className="font-poppins text-14 text-black dark:text-[#b7b7b7] md:text-16">
                The best company
              </p>
            </div>
          </div>
        </div>
        {/* Languages */}
        <div className="col-span-12 gap-4 md:col-span-6 lg:col-span-4">
          <div className="mb-5 flex gap-3">
            <div className="text-2xl text-primary lg:text-3xl">
              <FiGlobe />
            </div>
            <h2 className="font-poppins text-xl font-medium lg:text-2xl">Languages</h2>
          </div>
          <div className="space-y-6">
            <div className="space-y-1 rounded-lg bg-light1rgb p-4 dark:border-2 dark:border-[#212425] dark:bg-transparent md:space-y-2">
              <p className="font-poppins text-14 text-gray-500 dark:text-[#b7b7b7]">Native</p>
              <p className="font-poppins text-16 text-black dark:text-white md:text-20">Spanish</p>
              <p className="font-poppins text-14 text-black dark:text-[#b7b7b7] md:text-16">-</p>
            </div>

            <div className="space-y-1 rounded-lg bg-light2rgb p-4 dark:border-2 dark:border-[#212425] dark:bg-transparent md:space-y-2">
              <p className="font-poppins text-14 text-gray-500 dark:text-[#b7b7b7]">B2</p>
              <p className="font-poppins text-16 text-black dark:text-white md:text-20">English</p>
              <p className="font-poppins text-14 text-black dark:text-[#b7b7b7] md:text-16">
                B2 Competency in English
              </p>
            </div>

            <div className="space-y-1 rounded-lg bg-light1rgb p-4 dark:border-2 dark:border-[#212425] dark:bg-transparent md:space-y-2">
              <p className="font-poppins text-14 text-gray-500 dark:text-[#b7b7b7]">B1</p>
              <p className="font-poppins text-16 text-black dark:text-white md:text-20">French</p>
              <p className="font-poppins text-14 text-black dark:text-[#b7b7b7] md:text-16">
                French Institute Loing
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-8 md:flex-row">
        <div className="w-full md:w-1/2">
          <h3 className="mb-6 font-poppins text-xl font-medium md:text-2xl">Working Skills</h3>
          <div className="mb-6">
            <div className="flex items-center justify-between font-semibold">
              <p>Web Design</p>
              <p className="mr-2">75%</p>
            </div>
            <div className="mt-1 h-1.5 w-full bg-gray-200">
              <div className="h-1.5 w-[75%] bg-[#FF6464]"></div>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center justify-between font-semibold">
              <p>Mobile App</p>
              <p className="mr-2">95%</p>
            </div>
            <div className="mt-1 h-1.5 w-full bg-gray-200">
              <div className="h-1.5 w-[95%] bg-[#9272D4]"></div>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center justify-between font-semibold">
              <p>Illustrator</p>
              <p className="mr-2">65%</p>
            </div>
            <div className="mt-1 h-1.5 w-full bg-gray-200">
              <div className="h-1.5 w-[65%] bg-[#5185D4]"></div>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center justify-between font-semibold">
              <p>Photoshope</p>
              <p className="mr-2">75%</p>
            </div>
            <div className="mt-1 h-1.5 w-full bg-gray-200">
              <div className="h-1.5 w-[75%] bg-[#CA56F2]"></div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="mb-6 font-poppins text-xl font-medium md:text-2xl">Knowledges</h3>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-xl bg-gray-100 py-2 px-4 font-poppins text-15 text-[#44566C] dark:bg-[#1C1C1C] dark:text-[#A6A6A6]">
              Digital Design
            </button>
            <button className="rounded-xl bg-gray-100 py-2 px-4 font-poppins text-15 text-[#44566C] dark:bg-[#1C1C1C] dark:text-[#A6A6A6]">
              Marketing
            </button>
            <button className="rounded-xl bg-gray-100 py-2 px-4 font-poppins text-15 text-[#44566C] dark:bg-[#1C1C1C] dark:text-[#A6A6A6]">
              Social Media
            </button>
            <button className="rounded-xl bg-gray-100 py-2 px-4 font-poppins text-15 text-[#44566C] dark:bg-[#1C1C1C] dark:text-[#A6A6A6]">
              Print
            </button>
            <button className="rounded-xl bg-gray-100 py-2 px-4 font-poppins text-15 text-[#44566C] dark:bg-[#1C1C1C] dark:text-[#A6A6A6]">
              Time Management
            </button>
            <button className="rounded-xl bg-gray-100 py-2 px-4 font-poppins text-15 text-[#44566C] dark:bg-[#1C1C1C] dark:text-[#A6A6A6]">
              Flexibility
            </button>
            <button className="rounded-xl bg-gray-100 py-2 px-4 font-poppins text-15 text-[#44566C] dark:bg-[#1C1C1C] dark:text-[#A6A6A6]">
              Windows
            </button>
            <button className="rounded-xl bg-gray-100 py-2 px-4 font-poppins text-15 text-[#44566C] dark:bg-[#1C1C1C] dark:text-[#A6A6A6]">
              Marketing
            </button>
            <button className="rounded-xl bg-gray-100 py-2 px-4 font-poppins text-15 text-[#44566C] dark:bg-[#1C1C1C] dark:text-[#A6A6A6]">
              Design
            </button>
            <button className="rounded-xl bg-gray-100 py-2 px-4 font-poppins text-15 text-[#44566C] dark:bg-[#1C1C1C] dark:text-[#A6A6A6]">
              UI/UX
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Resume;
