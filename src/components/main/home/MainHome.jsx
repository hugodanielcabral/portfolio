export const MainHome = () => {
  return (
    <section className="justify-center w-3/4 mt-10">
      <h3 className="text-lg lg:text-2xl text-[#FF31AD]">Hello!, my name is</h3>
      <h1 className="my-3 text-4xl lg:text-6xl text-[#0E1F39] dark:text-[#FFF9F3] font-bold">
        Daniel Cabral.
      </h1>
      <h2 className="text-xl sm:text-xl lg:text-4xl dark:text-[#B0B5BC] text-[#313234]">
        I&apos;m a Frontend Developer, Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Incidunt sed delectus id maxime, eos consequatur
        cumque iure commodi nesciunt exercitationem, enim eius corrupti minima
        provident deserunt, beatae officiis facilis a!
      </h2>
      <article className="flex mt-3 gap-x-5">
        <button className="btn btn-outline border-[#FF31AD] text-[#FF31AD]">
          Resume
        </button>
        <button className="btn btn-outline border-[#FF31AD] text-[#FF31AD]">
          Contact
        </button>
      </article>
    </section>
  );
};
