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
          I am a passionate Frontend Developer, for two years I have been
          studying and working on my own projects, since then I learned:
        </p>
        <ul className="list-disc list-inside grid grid-cols-2 text-2xl text-[#313234] mt-5 dark:text-[#B0B5BC] mb-5">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Scrum</li>
          <li>TailwindCSS</li>
          <li>Bootstrap</li>
          <li>SQL(MySQL and PostgreSQL)</li>
        </ul>
      </div>
      <div className="flex justify-center">
        <img className="h-96" src={avatar} alt="Daniel's Avatar" />
      </div>
    </section>
  );
};
