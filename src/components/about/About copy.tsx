const About: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex">
          <div>
            <h2 className="font-roboto_slab text-4xl font-semibold">About Me</h2>
          </div>
          <div>
            <div className="mt-5 w-48 border-t-[2px] border-red-400" />
          </div>
        </div>
        <div className="flex">
          <div>
            <div className="h-[400px] w-[333px]">Image here</div>
          </div>
          <div>
            <div className="max-w-[95%] bg-red-200">
              <h3 className="mb-3 font-poppins text-xl font-medium">Who am I?</h3>
              <p className="font-poppins text-16 text-gray-500">
                I&apos;m Creative Director and UI/UX Designer from Sydney, Australia, working in web
                development and print media. I enjoy turning complex problems into simple, beautiful
                and intuitive designs. My aim is to bring across your message and identity in the
                most creative way. I created web design for many famous brand companies.
              </p>
            </div>
            <div>Personal Info</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
