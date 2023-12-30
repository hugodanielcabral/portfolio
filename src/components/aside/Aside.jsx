import githubIcon from "../../images/github.svg";
import linkedinIcon from "../../images/linkedin.svg";
import emailIcon from "../../images/email.svg";

export const Aside = () => {
  return (
    <div className="sticky top-0">
      <aside className="absolute hidden h-96 md:top-96 md:flex md:bottom-0 md:flex-col md:ml-9 md:gap-y-2">
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
