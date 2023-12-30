import avatar from "../../../images/avatar.jpg";

export const MainAbout = () => {
  return (
    <section id="about" className="grid w-3/4 mt-10 lg:grid-cols-2">
      <div className="mt-10">
        <div className="divider divider-secondary"></div>
        <h3 className="text-2xl text-[#0E1F39] dark:text-[#FFF9F3] font-bold">
          About me
        </h3>
        <p className="text-2xl text-[#313234] mt-5 dark:text-[#B0B5BC]">
          Hello!, my name is
          <span className="text-[#FF31AD] font-bold"> Daniel Cabral</span>,
          I&apos;m a passionate Frontend Developer wanting to learn more about
          the world of programming and web development. I just finished my
          studies at Universidad Tecnológica Nacional (UTN) and I&apos;m looking
          for a job to start my career as a developer.
        </p>
      </div>
      <div className="flex justify-center">
        <img className="h-96" src={avatar} alt="Daniel's Avatar" />
      </div>
    </section>
  );
};
