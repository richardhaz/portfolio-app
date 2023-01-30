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
      <div className="grid grid-cols-12 gap-10 lg:gap-5">
        {/* Education */}
        <div className="col-span-12 gap-4 md:col-span-6 lg:col-span-4">
          <div className="mb-5 flex gap-3">
            <div className="text-3xl text-primary">
              <ExperienceIcon />
            </div>
            <h2 className="font-poppins text-2xl font-medium">Education</h2>
          </div>
          <div className="space-y-6">
            <div className="space-y-2 rounded-lg bg-light1rgb p-4 dark:border-2 dark:border-[#212425] dark:bg-transparent">
              <p className="font-poppins text-14 text-gray-500 dark:text-[#b7b7b7]">2015-2020</p>
              <p className="font-poppins text-20 text-black dark:text-white">Systems Engineering</p>
              <p className="font-poppins text-16 text-black dark:text-[#b7b7b7]">
                Universidad Nacional de Moquegua
              </p>
            </div>
            <div className="space-y-2 rounded-lg bg-light2rgb p-4 dark:border-2 dark:border-[#212425] dark:bg-transparent">
              <p className="font-poppins text-14 text-gray-500 dark:text-[#b7b7b7]">2022-present</p>
              <p className="font-poppins text-20 text-black dark:text-white">
                Bachelor&apos;s degree
              </p>
              <p className="font-poppins text-16 text-black dark:text-[#b7b7b7]">
                Universidad Nacional de Moquegua
              </p>
            </div>
          </div>
        </div>
        {/* Experience */}
        <div className="col-span-12 gap-4 md:col-span-6 lg:col-span-4">
          <div className="mb-5 flex gap-3">
            <div className="text-3xl text-primary">
              <EducationIcon />
            </div>
            <h2 className="font-poppins text-2xl font-medium">Experience</h2>
          </div>
          <div className="space-y-6">
            <div className="space-y-2 rounded-lg bg-light3rgb p-4 dark:border-2 dark:border-[#212425] dark:bg-transparent">
              <p className="font-poppins text-14 text-gray-500 dark:text-[#b7b7b7]">2021-2022</p>
              <p className="font-poppins text-20 text-black dark:text-white">Web Developer</p>
              <p className="font-poppins text-16 text-black dark:text-[#b7b7b7]">
                Clinica Odontologica Fairdent
              </p>
            </div>
            <div className="space-y-2 rounded-lg bg-light4rgb p-4 dark:border-2 dark:border-[#212425] dark:bg-transparent">
              <p className="font-poppins text-14 text-gray-500 dark:text-[#b7b7b7]">2022-present</p>
              <p className="font-poppins text-20 text-black dark:text-white">Web Devleoper</p>
              <p className="font-poppins text-16 text-black dark:text-[#b7b7b7]">
                Centro Radiologico Stomarx
              </p>
            </div>
          </div>
        </div>
        {/* Languages */}
        <div className="col-span-12 gap-4 md:col-span-6 lg:col-span-4">
          <div className="mb-5 flex gap-3">
            <div className="text-3xl text-primary">
              <FiGlobe />
            </div>
            <h2 className="font-poppins text-2xl font-medium">Languages</h2>
          </div>
          <div className="space-y-6">
            <div className="space-y-2 rounded-lg bg-light1rgb p-4 dark:border-2 dark:border-[#212425] dark:bg-transparent">
              <p className="font-poppins text-14 text-gray-500 dark:text-[#b7b7b7]">Native</p>
              <p className="font-poppins text-20 text-black dark:text-white">Spanish</p>
              <p className="font-poppins text-16 text-black dark:text-[#b7b7b7]">-</p>
            </div>
            <div className="space-y-2 rounded-lg bg-light2rgb p-4 dark:border-2 dark:border-[#212425] dark:bg-transparent">
              <p className="font-poppins text-14 text-gray-500 dark:text-[#b7b7b7]">B2</p>
              <p className="font-poppins text-20 text-black dark:text-white">English</p>
              <p className="font-poppins text-16 text-black dark:text-[#b7b7b7]">-</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Resume;
