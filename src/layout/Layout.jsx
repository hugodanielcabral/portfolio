import { Header } from "../components/header/Header";
import githubIcon from "../images/github.svg";
import linkedinIcon from "../images/linkedin.svg";
import emailIcon from "../images/email.svg";
export const Layout = () => {
  return (
    <div className="relative flex flex-col">
      <Header />
      <div className="sticky top-0">
        <aside className="absolute hidden h-96 lg:top-72 lg:flex lg:bottom-0 lg:flex-col lg:ml-9 lg:gap-y-2">
          <a href="https://github.com/Teseo11" target="_blank" rel="noreferrer">
            <img
              className="w-8 rounded-full"
              src={githubIcon}
              alt="My GitHub Icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/hugo-daniel-cabral"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-8 rounded-full"
              src={linkedinIcon}
              alt="My LinkedIn Icon"
            />
          </a>
          <a href="mailto:danicabral151@gmail.com">
            <img
              className="w-8 rounded-full"
              src={emailIcon}
              alt="My Email Icon"
            />
          </a>
        </aside>
      </div>
      <main className="flex justify-center w-4/4">
        <section className="justify-center w-3/4 mt-10">
          <h3 className="text-lg lg:text-2xl text-[#FF31AD]">
            Hello!, my name is
          </h3>
          <h1 className="my-3 text-4xl lg:text-6xl text-[#0E1F39] dark:text-[#FFF9F3] font-bold">
            Daniel Cabral.
          </h1>
          <h2 className="text-xl sm:text-xl lg:text-4xl dark:text-[#B0B5BC] text-[#313234]">
            I&apos;m a Frontend Developer, Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Incidunt sed delectus id maxime, eos
            consequatur cumque iure commodi nesciunt exercitationem, enim eius
            corrupti minima provident deserunt, beatae officiis facilis a!
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
      </main>
    </div>
  );
};
