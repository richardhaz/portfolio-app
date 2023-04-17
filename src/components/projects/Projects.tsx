import Image from 'next/image';
import { useState } from 'react';

const Projects: React.FC = () => {
  type ICategories = 'All' | 'Videos' | 'Graphic Design' | 'Logo' | 'UI/UX';

  const filterMenu = ['All', 'UI/UX', 'Videos', 'Graphic Design', 'Logo'] as ICategories[];
  const projects = [
    {
      category: 'UI/UX',
      title: 'Chul Urina',
      image: require('../../assets/images/cartoons/astronaut-dab.jpg')
    },
    {
      category: 'Logo',
      title: 'Aura Dione',
      image: require('../../assets/images/cartoons/astronaut-rocket.jpg')
    },
    {
      category: 'UI/UX',
      title: 'Chul Urina',
      image: require('../../assets/images/cartoons/bunny.jpg')
    },
    {
      category: 'Videos',
      title: 'Devy Ryan',
      image: require('../../assets/images/cartoons/chicken.jpg')
    },
    {
      category: 'Graphic Design',
      title: 'Maria Terry',
      image: require('../../assets/images/cartoons/sheep.jpg')
    },
    {
      category: 'Graphic Design',
      title: 'Kyle Jefferson',
      image: require('../../assets/images/cartoons/cow.jpg')
    },
    {
      category: 'Videos',
      title: 'Maria Terry',
      image: require('../../assets/images/cartoons/shark.jpg')
    },
    {
      category: 'Graphic Design',
      title: 'Maria Terry',
      image: require('../../assets/images/cartoons/panda.jpg')
    },
    {
      category: 'Logo',
      title: 'Jake Long',
      image: require('../../assets/images/cartoons/spider.jpg')
    }
  ];

  const [categoryState, setCategoryState] = useState<ICategories>('All');

  return (
    <>
      <div className="col-span-12 mb-8 flex gap-4">
        <div>
          <h2 className="font-roboto_slab text-2xl font-semibold md:text-4xl">Projects</h2>
        </div>
        <div>
          <div className="mt-5 w-full border-t-[2px] border-primary md:w-48" />
        </div>
      </div>
      <ul className="mb-8 flex w-full flex-wrap items-center justify-end gap-5 font-semibold">
        {filterMenu.map((item, idx) => (
          <li
            key={idx}
            onClick={() => setCategoryState(item)}
            className="cursor-pointer text-[#62676e] hover:text-primary dark:text-[#A6A6A6]"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-12 gap-6">
        {projects
          .filter((cat) => cat.category === categoryState || categoryState === 'All')
          .map((item, idx) => (
            <div
              key={idx}
              className="col-span-12 space-y-2 rounded-xl border-[#212425] bg-[#f1f8ff] p-6 dark:border-[2px] dark:bg-transparent sm:col-span-6 lg:col-span-4"
            >
              <Image
                src={item.image}
                alt="project-image"
                className="h-auto w-full transform cursor-pointer rounded-lg transition duration-200 ease-in-out hover:scale-110"
              />
              <p className="text-14 dark:text-[#A6A6A6]">{item.category}</p>
              <h2 className="text-20 font-semibold">{item.title}</h2>
            </div>
          ))}
      </div>
    </>
  );
};
export default Projects;
