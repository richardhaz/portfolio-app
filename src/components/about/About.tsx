const About: React.FC = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 flex gap-4">
        <div>
          <h2 className="font-roboto_slab text-4xl font-semibold">About Me</h2>
        </div>
        <div>
          <div className="mt-5 w-48 border-t-[2px] border-red-400" />
        </div>
      </div>
      <div className="col-span-4">
        <div>
          <div className="h-[400px] w-[333px]">Image here</div>
        </div>
      </div>
      <div className="col-span-8">
        <div className="max-w-[95%] bg-red-200">
          <h3 className="mb-3 font-poppins text-xl font-medium">Who am I?</h3>
          <p className="font-poppins text-16 text-gray-500">
            I&apos;m Creative Director and UI/UX Designer from Sydney, Australia, working in web
            development and print media. I enjoy turning complex problems into simple, beautiful and
            intuitive designs. My aim is to bring across your message and identity in the most
            creative way. I created web design for many famous brand companies.
          </p>
        </div>
        <div>
          <h3 className="mb-3 font-poppins text-xl font-medium">Personal Info</h3>
        </div>
      </div>
    </div>
  );
};
export default About;
