export const MainSkills = () => {
  return (
    <section id="skills" className="grid w-3/4 mt-10 ">
      <div className="mt-10">
        <div className="divider divider-secondary"></div>
        <h3 className="text-2xl text-[#0E1F39] dark:text-[#FFF9F3] font-bold">
          Skills
        </h3>
        <p className="text-3xl font-bold text-[#313234] mt-5 dark:text-[#B0B5BC]">
          Frontend
        </p>
        <ul className="list-disc list-inside grid grid-cols-2 text-2xl text-[#313234] mt-5 dark:text-[#B0B5BC] mb-5 md:gap-x-0 gap-x-3">
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>JavaScript</li>
          <li>TailwindCSS</li>
        </ul>
        <p className="text-3xl font-bold text-[#313234] mt-5 dark:text-[#B0B5BC]">
          Backend
        </p>
        <ul className="list-disc list-inside grid grid-cols-2 text-2xl text-[#313234] mt-5 dark:text-[#B0B5BC] mb-5">
          <li>Node.js</li>
          <li>SQL</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
        </ul>
        <p className="text-3xl font-bold text-[#313234] mt-5 dark:text-[#B0B5BC]">
          Others
        </p>
        <ul className="list-disc list-inside grid grid-cols-2 text-2xl text-[#313234] mt-5 dark:text-[#B0B5BC]">
          <li>Git</li>
          <li>GitHub</li>
          <li>Scrum</li>
        </ul>
      </div>
    </section>
  );
};
