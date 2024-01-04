export const MainHome = () => {
  return (
    <section id="home" className="justify-center w-3/4 mt-20 md:mt-10 lg:p-20">
      <h3 className="text-lg lg:text-2xl text-[#FF31AD]">Hello!, my name is</h3>
      <h1 className="my-3 text-4xl lg:text-6xl text-[#0E1F39] dark:text-[#FFF9F3] font-bold">
        Daniel Cabral.
      </h1>
      <h2 className="text-xl sm:text-xl lg:text-4xl dark:text-[#B0B5BC] text-[#313234]">
        I&apos;m a Frontend Developer. A strong communicator and collaborator.
        Resourceful and determined to solve problems.
      </h2>
      <article className="flex mt-3 gap-x-5">
        <button className="btn btn-outline border-[#FF31AD] text-[#FF31AD]">
          <a href="/resume_daniel_cabral_en.pdf" download>
            Resume
          </a>
        </button>
        <button className="btn btn-outline border-[#FF31AD] text-[#FF31AD]">
          <a href="#contact">Contact</a>
        </button>
      </article>
    </section>
  );
};
