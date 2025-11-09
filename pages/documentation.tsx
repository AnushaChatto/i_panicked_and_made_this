import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import Link from "next/link";
const Documentation: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Why?</title>
        <meta name="description" content="I panicked and Made this" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello! Creator here, Read on!</h1>

        <p className={styles.description}>
          I recently got my Masters Degree!!! Master of Science from Heidelberg
          University in Data and Computer Science. I completed my Bachelors of
          Technology in Computer Science and Engineering and have worked as a
          software developer.
          <br></br>Check out my linkedin:{" "}
          <Link href="https://de.linkedin.com/in/anusha-chattopadhyay">
            Anusha Chattopadhyay
          </Link>{" "}
          for details.
        </p>
        {/* <p>However here, This is called Documentation, thus the technical aspects of most of the units of the site are specified here</p> */}
        <p>
          You should find each project separately, including the repo for this
          site at:{" "}
          <Link href="https://github.com/AnushaChatto">
            AnushaChatto: Github
          </Link>
        </p>
        <br></br>
        <p>
          This site is a Next.js project bootstrapped with create-next-app. The
          structure has been written using typescript
        </p>
        <p>
          This was made to compile the kind of work I have experience with,
          though most of it is behind private repositories so can't be showcased
          here. But I shall try my best.
        </p>
        <p>
          Please go to <Link href="/">Home</Link> to check out everything else
        </p>
        <div className={styles.container}>
          <div className={styles.mainContent}>
            <button
              className={styles.scrollButton}
              onClick={() => {
                const section = document.getElementById("cv");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Scroll Down to My Professional Profile
            </button>
          </div>

          <div className={styles.spacer}></div>
          <section id="cv" className={styles.cvSection}>
            <h2>My Professional Profile</h2>

            {/* Education Section */}
            <div className={styles.cvBlock}>
              <h3>Education</h3>
              <ul>
                <li>
                  <strong>Master of Science (MSc) in Data and Computer Science</strong> —
                 Heidelberg University, Heidelberg, Germany, 2025
                </li>
                <li>
                  <strong>Bachelor of Technology (B-Tech) in Computer Science and Engineering</strong> —
                  SRM Institute of Science and Technology, Chennai, India, 2020
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className={styles.cvBlock}>
              <h3>Work Experience</h3>
              <ul>
                <li>
                  <strong>Research Assistant</strong> — Hardware and Artificial Intelligence (HAWAII) Lab, ZITI, Heidelberg University.
                  (2025 — Present)
                  <p>
                    Joined as a Masters Thesis Student(2024).
                  </p>
                  <p>
                    Teaching Assistant — High Performance and Distributed Computing
                    <ul>
<li>Led exercise sessions, guiding students through practical applications
</li><li>Provided detailed feedback on exercise submissions, ensuring clarity and accuracy in algorithm
implementation</li></ul>
                  </p>
                </li>
                <li>
                  <strong>Software Technologist</strong> — CES Pvt Ltd
                  (2020 — 2022)
                  <p>
                    Part of the UI/UX department. Worked on various Web Applications as part of Frontend and Full Stack Projects
                  </p>
                </li>
                <li>
                  <strong>Research Intern</strong> — GSI Helmholtzzentrum für Schwerionenforschung (2018 — 2019)
                  <p>
                    Took part in the simulation, digitization, reconstruction and analysis of the Au+Au collisions at 10 AGeV using High
Performance Computer farm at GSI, analyze obtained 2D mass squared versus particle momentum histogram, learn
how to identify pions, Kaons and protons with KF Particle Finder package tools. Worked on creating a prediction
pattern to distinguish different particles, using Python, Keras and Tensorflow
                  </p>
                </li>
                <li>
                  <strong>Intern</strong> — Alumnus Software Ltd (2018)
                  <p>
                   Worked on a creating a model to count objects in an image. Explored Various Approaches from Pattern Recognition
to Open-Harr Classification
                  </p>
                </li>
                <li>
                  <strong>Intern</strong> — VECC(Variable Energy Cyclotron Center) (2017)
                </li>
              </ul>
            </div>

            <div className={styles.cvBlock}>
  <h3>Skills</h3>

  {/* Machine Learning & Data Science */}
  <div className={styles.skillCategory}>
    <h4>Machine Learning & Data Science</h4>
    <p>
      Deep Learning Frameworks: PyTorch, TensorFlow, Keras, OpenCV <br />
      Python DS/ML Libraries: NumPy, Pandas, Scikit-learn, SciPy <br />
      Improving Deep Neural Networks: Hyperparameter Tuning, Regularization, Optimization
    </p>
  </div>

  {/* Web Development */}
  <div className={styles.skillCategory}>
    <h4>Web Development</h4>
    <p>
      Next.js / React ecosystem (ReactJS, React Router, Redux, TypeScript) <br />
      Angular Framework, Material Design - Material UI <br />
      REST APIs, Front-end: Bootstrap, HTML
    </p>
  </div>

  {/* Programming Languages */}
  <div className={styles.skillCategory}>
    <h4>Languages</h4>
    <p>
      Python 3, C++, C, TypeScript, JavaScript, HTML5, CSS
    </p>
  </div>

  {/* Tools & Methodology */}
  <div className={styles.skillCategory}>
    <h4>Tools & Methodology</h4>
    <p>
      SLURM Job Scheduler, SEML, Git, Linux (Terminal/Bash), JSON, GitHub, Object-Oriented Programming, Postman, Web API / RESTful API, Agile (Scrum)
    </p>
  </div>
</div>


            {/*Languages*/}
             <div className={styles.cvBlock}>
  <h3>Languages</h3>
  <ul className={styles.languageList}>
    <li>
      <span className={styles.languageName}>English</span>
      <span className={styles.proficiency}>Native</span>
    </li>
    <li>
      <span className={styles.languageName}>Bengali</span>
      <span className={styles.proficiency}>Mother Tongue</span>
    </li>
    <li>
      <span className={styles.languageName}>Hindi</span>
      <span className={styles.proficiency}>Proficient</span>
    </li>
    <li>
      <span className={styles.languageName}>German</span>
      <span className={styles.proficiency}>Developing</span>
    </li>
  </ul>
</div>


            {/* Optional: Other sections */}
            <div className={styles.cvBlock}>
              <h3>Volounteering</h3>
              <ul>
                <li>
                  <strong>Student Volunteer, ISC High Performance </strong> — (2025)
                  <p>Student Volunteer for the ISC High Performance conference, held in Hamburg in July 2025. Main volunteer activities
were related to aiding the ISCnet team and aiding the student cluster competition organizers.</p>
                </li>
                <li>
                  <strong>Mozilla SRM Campus Chapter</strong> — (2016-2018)
                  <p><ul><li>Organizing Committee- HelloWeb Hackathon Technopreneurs' Surrogate Ventures</li><li>
Web development teaching- Hope Foundation (Kolkata, India)</li><li>
Volunteer- Bagheera project</li></ul></p>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Documentation;
