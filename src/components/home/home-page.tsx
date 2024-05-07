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

const HomePage = () => {
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
              <h2>Fullstack developer</h2>
              <p>Slow success build characters</p>
            </div>
          </div>
          <nav className="icons">
            <a href="" className="icon icon-big">
              <span>/ </span>About
            </a>
            <a href="" className="icon icon-big">
              / Projects
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/garbuz-denys/"
              className="icon icon-sm"
            >
              <img src={linkedIn} alt="" />
            </a>
            <a href="" className="icon icon-sm">
              <img src={gitHub} alt="" />
            </a>
            <a href="" className="icon icon-sm">
              <img src={inst} alt="" />
            </a>

            <a href="" className="icon icon-sm">
              <img src={x} alt="" />
            </a>
          </nav>
        </header>
        <main className="right">
          <section id="about">
            {/* <h3>About</h3> */}
            <p>
              Hello there! I'm a highly motivated 20-year-old developer from
              Kyiv. Currently, I'm a third-year student at Karazin Kharkiv
              National University, majoring in computer science.
            </p>
            <p>
              I have experience developing and designing software with clean,
              efficient, and scalable code, from simple landing pages to complex
              backend structures. I strive to create software that functions
              efficiently under the hood, and also provides intuitive, user
              experiences.
            </p>
            <p>
              I consider work an ongoing education, and I'm always looking for
              opportunities to work with those who are willing to share their
              knowledge as much as I want to learn. Ultimately, my goal is to
              collaborate with like-minded professionals to produce exceptional
              results. When I'm away of a computer screen, I'm probably watching
              cybersport match, playing video games or walking on the street
            </p>
          </section>
          <section id="projects">
            <h2>/ My Projects</h2>
            <ul>
              <li>
                <a className="project" href="/">
                  <div className="image"></div>
                  <div>
                    <h3>
                      Telegram clone <img src={linkSVG} alt="" />
                    </h3>
                    <p>
                      This is a precise recreation of Telegram Desktop on the
                      web. I've implemented a vast array of its functionalities,
                      including reply, delete, edit, sending files, and creating
                      groups
                    </p>
                    <ul className="tags">
                      <li>Next.js</li>
                      <li>MongoDB</li>
                      <li>AWS</li>
                    </ul>
                  </div>
                </a>
              </li>
            </ul>
          </section>
          <section id="tech">
            <h2>/Technologies I'VE worked with</h2>
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
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
