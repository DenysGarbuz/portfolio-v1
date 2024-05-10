import "./home.css";
import inst from "../../assets/instagram-color-svgrepo-com.svg";
import linkedIn from "../../assets/linkedin-svgrepo-com-2.svg";
import gitHub from "../../assets/github-142-svgrepo-com.svg";
import x from "../../assets/11053970_x_logo_twitter_new_brand_icon.svg";
import linkSVG from "../../assets/link-svgrepo-com.svg";
import nestSVG from "../../assets/nest-middleware-ts-svgrepo-com.svg";
import nodeSVG from "../../assets/node-js-svgrepo-com.svg";
import nextSVG from "../../assets/nextjs.svg";
import mongoSVG from "../../assets/mongo-svgrepo-com.svg";
import expressSVG from "../../assets/expressjs-ar21.svg";
import tsSVG from "../../assets/typescript-official-svgrepo-com.svg";
import jsSVG from "../../assets/js-svgrepo-com.svg";
import gitSVG from "../../assets/git-svgrepo-com.svg";
import pythonSVG from "../../assets/python-svgrepo-com.svg";
import javaSVG from "../../assets/java-svgrepo-com.svg";
import htmlSVG from "../../assets/html-5-svgrepo-com.svg";
import cssSVG from "../../assets/css-3-svgrepo-com.svg";
import psqlSVG from "../../assets/postgresql-logo-svgrepo-com.svg";
import jwtSVG from "../../assets/jwt-3.svg";
import awsSVG from "../../assets/aws-svgrepo-com.svg";
import reactSVG from "../../assets/react-svgrepo-com.svg";
import dockerSVG from "../../assets/docker-svgrepo-com.svg";
import leetcodeSVG from "../../assets/leetcode.svg";
import { useEffect, useRef, useState } from "react";
import Project from "../project/project";

type Section = "about" | "projects";

const HomePage = () => {
  const [currentSection, setCurrentSection] = useState<Section | null>("about");
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (aboutRef.current && projectsRef.current) {
        console.log("yes");
        const aboutPos = aboutRef.current.getBoundingClientRect().top;
        const projectsPost = projectsRef.current.getBoundingClientRect().top;

        if (Math.abs(scrollY - aboutPos) <= Math.abs(scrollY - projectsPost)) {
          setCurrentSection("about");
          console.log("about");
        } else {
          setCurrentSection("projects");
          console.log("projects");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <header className="left">
          <div className="image-desc">
            <div className="image-container">
              <div className="image"></div>
            </div>
            <div className="desc">
              <h1>Denys Garbuz</h1>
              <h2>Backend Engineer</h2>
              <p>
                Slow success build <br /> characters
              </p>
            </div>
          </div>
          <nav className="icons">
            <a
              href="#about"
              className={
                "icon icon-big " +
                (currentSection === "about" ? "icon-selected" : "")
              }
            >
              <span
                className={
                  "name " + (currentSection === "about" ? "name-selected" : "")
                }
              >
                About
                <span className="slash-one">/</span>
                <span className="slash-two">/</span>
              </span>
            </a>
            <a
              href="#projects"
              className={
                "icon icon-big " +
                (currentSection === "projects" ? "icon-selected" : "")
              }
            >
              <span
                className={
                  "name " +
                  (currentSection === "projects" ? "name-selected" : "")
                }
              >
                Projects
                <span className="slash-one">/</span>
                <span className="slash-two">/</span>
              </span>
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/garbuz-denys/"
              className="icon icon-sm"
            >
              <img src={linkedIn} alt="" />
            </a>
            <a
              target="_blank"
              href="https://github.com/DenysGarbuz?tab=repositories"
              className="icon icon-sm"
            >
              <img src={gitHub} alt="" />
            </a>
            <a
              target="_blank"
              href="https://leetcode.com/deny_garbuz/"
              className="icon icon-sm"
            >
              <img src={leetcodeSVG} alt="" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/_garbuzz_"
              className="icon icon-sm"
            >
              <img src={inst} alt="" />
            </a>

            <a
              target="_blank"
              href="https://twitter.com/DenysGarbuz"
              className="icon icon-sm"
            >
              <img src={x} alt="" />
            </a>
          </nav>
        </header>
        <main className="right">
          <section id="about" ref={aboutRef}>
            <div className="section-name">
              <h2>About</h2>
            </div>
            <p>
              Hello there! I'm a highly motivated 20-year-old developer from
              Kyiv. Currently, I'm a third-year student at Karazin Kharkiv
              National University, majoring in computer science. I have
              experience developing and designing software with clean,
              efficient, and scalable code
            </p>
            <p>
              I strive to create robust software that functions not only
              efficiently but also magically under the hood. Currently I
              consider work an ongoing education, and I'm always looking for
              opportunities to work with those who are willing to share their
              knowledge as much as I want to learn. Ultimately, my goal is to
              collaborate with like-minded professionals to produce exceptional
              results.
            </p>
            <p>
              When I'm away of a computer screen, I'm probably watching
              cybersport match, playing video games or walking around.
            </p>
          </section>
          <section id="projects" ref={projectsRef}>
            <div className="section-name">
              <h2>Projects</h2>
            </div>
            <ul>
              <li>
                <Project
                  href="https://github.com/DenysGarbuz/telegram-clone"
                  imageUrl="/telegram.png"
                  name="Telegram clone"
                  tags={["next.js", "mongoDB", "WebSocket", "JWT"]}
                  desc="This is a precise recreation of Telegram Desktop on the web. I've
                      implemented a vast array of its functionalities, including reply,
                      delete, edit, sending files, and creating groups"
                />
              </li>
              <li>
                <Project
                  href="https://github.com/IQExplorers/discord-clone"
                  imageUrl="/discord.jpeg"
                  name="Discord clone"
                  tags={["Next.js", "PrismaDB", "PostgreSQL", "WebSocket"]}
                  desc="This is a precise recreation of Telegram Desktop on the web. I've
                      implemented a vast array of its functionalities, including reply,
                      delete, edit, sending files, and creating groups"
                />
              </li>
              <li>
                <Project
                  href="https://github.com/IQExplorers/Promptopedia"
                  imageUrl="/promtopedia.jpeg"
                  name="Promtopedia"
                  tags={["next.js", "mongoDB", "WebSocket", "JWT"]}
                  desc="This is a precise recreation of Telegram Desktop on the web. I've
                      implemented a vast array of its functionalities, including reply,
                      delete, edit, sending files, and creating groups"
                />
              </li>
            </ul>
          </section>
          <section id="tech">
            <div className="section-name">
              <h2>Technologies I've worked with</h2>
            </div>
            <ul>
              <li>
                <img src={nodeSVG} alt="" />
              </li>
              <li>
                <img src={nestSVG} alt="" />
              </li>
              <li>
                <img src={mongoSVG} alt="" />
              </li>
              <li>
                <img src={expressSVG} alt="" />
              </li>
              <li>
                <img src={nextSVG} alt="" />
              </li>
              <li>
                <img src={jsSVG} alt="" />
              </li>
              <li>
                <img src={tsSVG} alt="" />
              </li>
              <li>
                <img src={pythonSVG} alt="" />
              </li>
              <li>
                <img src={gitSVG} alt="" />
              </li>
              <li>
                <img src={javaSVG} alt="" />
              </li>
              <li>
                <img src={htmlSVG} alt="" />
              </li>
              <li>
                <img src={cssSVG} alt="" />
              </li>
              <li>
                <img src={psqlSVG} alt="" />
              </li>
              <li>
                <img src={reactSVG} alt="" />
              </li>
              <li>
                <img src={awsSVG} alt="" />
              </li>
              <li>
                <img src={jwtSVG} alt="" />
              </li>
              <li>
                <img src={dockerSVG} alt="" />
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
