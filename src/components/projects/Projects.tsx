import Image from 'next/image';

const Projects: React.FC = () => {
  const filterMenu = ['All', 'Videos', 'Web Design', 'Logo', 'Graphic Design'];
  const projects = [
    {
      category: 'UI/UX',
      title: 'Chul Urina',
      image: require('../../assets/images/cartoons/astronaut-dab.jpg')
    },
    {
      category: 'Web Design',
      title: 'Aura Dione',
      image: require('../../assets/images/cartoons/astronaut-rocket.jpg')
    },
    {
      category: 'Logo',
      title: 'Chul Urina',
      image: require('../../assets/images/cartoons/bunny.jpg')
    },
    {
      category: 'Pepe',
      title: 'Shong Lee',
      image: require('../../assets/images/cartoons/chicken.jpg')
    },
    {
      category: 'Pepe',
      title: 'Maria Terry',
      image: require('../../assets/images/cartoons/sheep.jpg')
    },
    {
      category: 'Pepe',
      title: 'Kyle Jefferson',
      image: require('../../assets/images/cartoons/cow.jpg')
    },
    {
      category: 'Pepe',
      title: 'Maria Terry',
      image: require('../../assets/images/cartoons/shark.jpg')
    },
    {
      category: 'Pepe',
      title: 'Maria Terry',
      image: require('../../assets/images/cartoons/panda.jpg')
    },
    {
      category: 'Pepe',
      title: 'Maria Terry',
      image: require('../../assets/images/cartoons/spider.jpg')
    }
  ];

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
      <ul className="mb-8 flex w-full flex-wrap items-center justify-end gap-3 font-semibold">
        {filterMenu.map((item, idx) => (
          <li
            key={idx}
            className="cursor-pointer text-[#62676e] hover:text-primary dark:text-[#A6A6A6]"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-12 gap-6">
        {projects.map((item, idx) => (
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
