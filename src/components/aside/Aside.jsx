import githubIcon from "../../images/github.svg";
import linkedinIcon from "../../images/linkedin.svg";
import emailIcon from "../../images/email.svg";

export const Aside = () => {
  return (
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
  );
};
