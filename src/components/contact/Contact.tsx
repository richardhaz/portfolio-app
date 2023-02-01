import Image from 'next/image';
import { AiOutlineDownload } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { RiFacebookFill, RiLinkedinFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri';

import { getUndrawImage } from '@/constants';

const Contact: React.FC = () => {
  return (
    <>
      <div className="col-span-12 mb-8 flex gap-4">
        <div>
          <h2 className="font-roboto_slab text-2xl font-semibold md:text-4xl">Contact</h2>
        </div>
        <div>
          <div className="mt-5 w-full border-t-[2px] border-primary md:w-48" />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 xl:gap-10">
        <div className="col-span-12 flex items-center justify-center p-4 md:p-0 lg:col-span-4">
          <div className="max-w-[250px] xs:max-w-sm md:max-w-md">
            <Image src={getUndrawImage().programmingGuy} alt="programming-guy" />
          </div>
        </div>
        <div className="col-span-12 bg-gray-50 p-4 dark:bg-transparent md:p-8 lg:col-span-8 xl:p-14">
          <div className="mb-4 md:space-y-1">
            <h3 className="font-poppins text-2xl font-medium text-primary md:text-3xl">
              Let&lsquo;s say Hi
            </h3>
            <p className="font-poppins text-16 font-normal text-gray-400 md:text-lg">
              I&lsquo;m always open to discussing about bussiness
            </p>
          </div>
          <form onSubmit={() => {}}>
            <div className="mb-6 flex flex-col gap-5">
              <input
                type="text"
                placeholder="Name *"
                className="rounded-md border-2 border-[#E0E0E0] px-3 py-2 font-poppins text-15 text-gray-500 outline-1 outline-primary lg:px-4 lg:py-3 lg:text-16"
              />
              <input
                type="email"
                placeholder="Email *"
                className="rounded-md border-2 border-[#E0E0E0] px-3 py-2  font-poppins text-15 text-gray-500 outline-1 outline-primary lg:px-4 lg:py-3 lg:text-16"
              />
              <textarea
                rows={3}
                placeholder="Message *"
                className="resize-none rounded-md border-2 border-[#E0E0E0] px-3 py-2 font-poppins text-15 text-gray-500 outline-1 outline-primary lg:px-4 lg:py-3 lg:text-16"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg border-[1px] border-primary px-6 py-2 font-poppins font-semibold text-primary transition duration-700 ease-in-out hover:border-primary hover:bg-primary hover:text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
