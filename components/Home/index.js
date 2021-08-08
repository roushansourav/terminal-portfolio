import { useEffect, useState } from "react";
import { IoIosPerson } from "react-icons/io";
import { MdBusinessCenter } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { AiFillHeart, AiFillExperiment } from "react-icons/ai";
import {
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagram,
  FaTools,
} from "react-icons/fa";
import Layout from "../common/Layout";
import styles from "/styles/Home.module.scss";
import ToolTab from "../TabTool";
import clsx from "clsx";
import Head from "next/head";
// import { ActorIcon, FrontEndIcon, BackEndIcon } from "../../images";

const Home = () => {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    fetch("https://quotes.rest/qod?language=en")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
      });
  }, []);
  return (
    <>
      <Head>
        <title>Venomwolf</title>
      </Head>
      <Layout>
        <div
          className={clsx(
            styles["v-section-1"],
            styles["v-section"],
            styles["card-container"]
          )}
        >
          <ToolTab />
          <div>
            <header>
              <span>
                <IoIosPerson
                  style={{
                    stroke: "green",
                    verticalAlign: "middle",
                    fontSize: "1.5rem",
                  }}
                />
              </span>
              &nbsp;
              <h2 style={{ display: "inline-block", verticalAlign: "middle" }}>
                Roushan Sourav
              </h2>
            </header>
            <p>
              A software engineer who&nbsp;
              <AiFillHeart style={{ color: "red", verticalAlign: "bottom" }} />
              &nbsp;to code and build stuff in&nbsp;
              <AiFillHeart style={{ color: "red", verticalAlign: "bottom" }} />
              &nbsp;with Javascript.
            </p>
            <p>
              <a href="https://github.com/roushansourav">
                <FaGithub
                  style={{
                    fontSize: "2rem",
                    color: "white",
                    marginRight: "0.5rem",
                  }}
                />
              </a>
              <a href="https://www.linkedin.com/in/roushansourav/">
                <FaLinkedin
                  style={{
                    fontSize: "2rem",
                    color: "#0a66c2",
                    // backgroundColor: "white",
                    marginRight: "0.5rem",
                  }}
                />
              </a>
              <a href="https://twitter.com/RoushanSourav">
                <FaTwitterSquare
                  style={{
                    fontSize: "2rem",
                    color: "rgba(29,161,242,1.00)",
                    // backgroundColor: "white",
                    marginRight: "0.5rem",
                  }}
                />
              </a>
              <a href="https://www.linkedin.com/in/roushansourav/">
                <FaInstagram
                  style={{
                    fontSize: "2rem",
                    color:
                      "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
                    // backgroundColor: "white",
                    marginRight: "0.5rem",
                  }}
                />
              </a>
            </p>
          </div>
          <div>
            <div className={styles["sub-card-container"]}>
              <header>
                <MdBusinessCenter
                  style={{ color: "brown", verticalAlign: "bottom" }}
                />
                &nbsp;Experience
              </header>
              <div className={styles["list"]}>
                <div className={styles["list-item"]}>
                  <p className={styles["bold"]}>Sugoi Labs Pvt Ltd.</p>
                  <p>Product Development Engineer</p>
                  {/* <p>From July 2020 to Current</p> */}
                </div>
                <div className={styles["list-item"]}>
                  <p className={styles["bold"]}>Settlin Pvt Ltd</p>
                  <p>Web Developer</p>
                  {/* <p>From Dec 2019 to July 2020</p> */}
                </div>
                <div className={styles["list-item"]}>
                  <p className={styles["bold"]}>
                    Cognizant Technology Solutions
                  </p>
                  <p>Programmer Analyst Trainee</p>
                  {/* <p>From Feb 2019 to Dec 2019</p> */}
                </div>
              </div>
            </div>
            <div className={styles["sub-card-container"]}>
              <header>
                <ImBooks style={{ color: "green", verticalAlign: "bottom" }} />
                &nbsp;Education
              </header>
              <div className={styles["list"]}>
                <div className={styles["list-item"]}>
                  <p className={styles["bold"]}>
                    BE in Electronics & Communication Engineering
                  </p>
                  <p>Technocrats Institute of Technology, Bhopal</p>
                  <p>
                    <span>CGPA: </span>
                    <span>
                      7.77 <em>with Honours</em>
                    </span>
                  </p>
                  {/* <p>From July 2020 to Current</p> */}
                </div>
                <div className={styles["list-item"]}>
                  <p className={styles["bold"]}>
                    Senior Secondary <em>PCM</em>
                  </p>
                  <p>
                    <span>Percentage: </span>
                    <span>88.4</span>
                  </p>
                </div>
                <div className={styles["list-item"]}>
                  <p className={styles["bold"]}>Matriculation</p>
                  <p>
                    <span>CGPA: </span>
                    <span>10</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            styles["v-section-1"],
            styles["v-section"],
            styles["card-container"]
          )}
        >
          <ToolTab />
          <div>
            <header>
              <span>
                <FaTools
                  style={{
                    color: "green",
                    verticalAlign: "middle",
                    fontSize: "1.5rem",
                  }}
                />
              </span>
              &nbsp;
              <h2 style={{ display: "inline-block", verticalAlign: "middle" }}>
                Skills
              </h2>
            </header>
          </div>
          <div>
            <div className={styles["sub-card-container"]}>
              <header>
                {/* <FrontEndIcon
                style={{ color: "brown", verticalAlign: "bottom" }}
              /> */}
                &nbsp;FrontEnd
              </header>
              <div className={styles["list"]}>
                <div className={styles["list-item"]}>
                  <p>React.js</p>
                </div>
                <div className={styles["list-item"]}>
                  <p>JavaScript</p>
                </div>
                <div className={styles["list-item"]}>
                  <p>HTML</p>
                </div>
                <div className={styles["list-item"]}>
                  <p>CSS</p>
                </div>
                <div className={styles["list-item"]}>
                  <p>Redux</p>
                </div>
                <div className={styles["list-item"]}>
                  <p>Webpack</p>
                </div>
                <div className={styles["list-item"]}>
                  <p></p>
                </div>
              </div>
            </div>
            <div className={styles["sub-card-container"]}>
              <header>
                {/* <ImBooks style={{ color: "green", verticalAlign: "bottom" }} /> */}
                &nbsp;BackEnd
              </header>
              <div className={styles["list"]}>
                <div className={styles["list-item"]}>
                  <p>Express.js</p>
                </div>
                <div className={styles["list-item"]}>
                  <p>Node.js</p>
                </div>
                <div className={styles["list-item"]}>
                  <p>MongoDB</p>
                </div>
                <div className={styles["list-item"]}>
                  <p>MySQL</p>
                </div>
                <div className={styles["list-item"]}>
                  <p>AWS- EC2, S3, Amplify</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            styles["v-section-1"],
            styles["v-section"],
            styles["card-container"]
          )}
        >
          <ToolTab />
          <div>
            <header>
              <span>
                <AiFillExperiment
                  style={{
                    color: "green",
                    verticalAlign: "middle",
                    fontSize: "1.5rem",
                  }}
                />
              </span>
              &nbsp;
              <h2 style={{ display: "inline-block", verticalAlign: "middle" }}>
                Projects
              </h2>
            </header>
          </div>
          <div>
            <div className={styles["sub-card-container"]}>
              <header>Online HTML Editor</header>
              <div className={styles["list"]}>
                <div className={styles["list-item"]}>
                  <p>An online HTML playground like W3School.</p>
                  <p>Build with ace editor and hosted on Netlify.</p>
                  <p>Supports dark mode.</p>
                  <p>
                    <a href="https://code-editor-venomwolf.netlify.app/">
                      Checkout here.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["quote-container"]}>
          <p style={{ display: "inline-block" }}>
            <q>{quote?.contents?.quotes?.[0]?.quote}</q>
          </p>
          <p style={{ float: "right", display: "inline-block" }}>
            <strong>--&gt; {quote?.contents?.quotes?.[0]?.author}</strong>
          </p>
        </div>
      </Layout>
    </>
  );
};

export default Home;
