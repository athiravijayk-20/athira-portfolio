
import { useState, useEffect } from "react";

const skills = [
  "PHP",
  "Laravel",
  "CodeIgniter",
  "WordPress",
  "React.js",
  "JavaScript",
  "MySQL",
  "REST APIs",
  "HTML5",
  "CSS3",
  "jQuery",
  "Bootstrap",
];

const projects = [
  {
  number: "01",
  title: "E-commerce Applications",
  description:
    "Developed and maintained e-commerce websites and web applications featuring product catalogues, customer enquiries, order management, quotation workflows, and business integrations.",
  tech: ["PHP", "CodeIgniter", "MySQL", "REST APIs"],
  links: [
    { name: "ProImprint", url: "https://proimprint.com/" },
    { name: "Shopkees", url: "https://shopkees.com/" },
    { name: "Mowsil", url: "https://mowsil.ae/" },
    { name: "US Umbrellas", url: "https://www.usumbrellas.com/" },
  ],
},
 {
  number: "02",
  title: "WordPress Websites",
description:
  "Developed and maintained WordPress websites, WooCommerce e-commerce stores, and custom business websites with product catalogues, contact forms, responsive layouts, and customised themes and plugins.",
tech: ["WordPress", "WooCommerce", "Elementor", "PHP", "CSS"],
  links: [


    { name: "Rimini Blinds", url: "https://riminiblinds.com" },
    { name: "Blindtex", url: "https://blindtex.com" },
    { name: "Budget Blinds UAE", url: "https://budgetblinds.ae" },
    { name: "Bolton Blinds", url: "https://boltonblinds.com" },
  ],
},
  {
    number: "03",
    title: "Laravel REST API",
    description:
      "A backend project focused on expense management, REST API development, and database operations.",
    tech: ["Laravel", "REST API", "MySQL"],
  },
  {
  number: "04",
  title: "CRM Applications",
  description:
    "Developed custom CRM applications using CodeIgniter and Laravel to streamline business operations, manage customer enquiries, track leads, automate workflows, and improve customer relationship management. Implemented role-based access control, RESTful APIs, database management, and interactive dashboards.",
  tech: ["PHP", "CodeIgniter", "Laravel", "MySQL", "REST APIs", "JavaScript"],
},
{
  number: "05",
  title: "Flutter App Backend & API Development",
  description:
    "Developed and maintained the backend using CodeIgniter for a Flutter mobile application. Designed and integrated RESTful APIs, implemented transaction and order status handling, and integrated payment gateway functionality. Managed database operations, API responses, and backend workflows to support seamless communication between the mobile application and server.",
  tech: ["PHP", "CodeIgniter", "MySQL", "REST APIs", "Payment Gateway"],
},
{
  number: "06",
  title: "Task Management Module",
  description:
    "Developed a task management module to streamline task assignment, progress tracking, status updates, and team coordination. Implemented task creation, priority management, deadlines, user assignments, and role-based access control using PHP, Laravel, CodeIgniter, and MySQL.",
  tech: ["PHP", "Laravel", "CodeIgniter", "MySQL", "JavaScript", "REST APIs"],
},
];

const experience = [
  
  {
  period: "Jan 2024 – Present",
  role: "Full Stack Developer",
  company: "Innov8 Product FZC",
  location: "Sharjah, UAE",
  description:
    "Architect and maintain backend systems using Laravel and CodeIgniter with React.js frontends. Build SPAs, custom WordPress themes and plugins, and secure RESTful APIs. Handle requirement analysis, database design, React state management, third-party integrations, AWS/cPanel deployments, Git workflows, and application performance optimization. Collaborate with UI/UX teams to deliver responsive, scalable web applications.",
},
  {
  role: "Senior PHP Developer",
  company: "Shopkees, Dubai",
  period: "October 2022 – December 2023",
  description:
    "Developed and maintained high-traffic e-commerce applications and backend modules using Core PHP, Laravel, and CodeIgniter. Designed and tested RESTful APIs for internal modules and third-party integrations. Integrated payment gateways and shipping/logistics APIs into checkout workflows. Provided production support through debugging, bug fixing, performance optimization, and feature enhancements. Used Git for version control and collaborative development.",
},
{
  role: "Junior Web Developer",
  company: "SBSOL Digital Pvt. Ltd.",
  period: "June 2021 – August 2022",
  location: "Kochi, India",
  description:
    "Developed dynamic web applications and custom admin panels using Core PHP and MySQL. Designed, normalized, and optimized MySQL databases to improve data handling and query performance. Implemented interactive frontend functionality using jQuery and AJAX. Developed RESTful APIs, provided ongoing application support, and implemented technical SEO improvements.",
},
{
  role: "PHP Developer",
  company: "Spotter Online Pvt. Ltd.",
  period: "January 2019 – May 2021",
  location: "Kollam, India",
  description:
    "Developed custom PHP web applications and CMS-based websites using WordPress and Drupal. Implemented frontend enhancements using HTML, CSS, JavaScript, jQuery, and AJAX. Managed server hosting, application deployment, bug fixing, and ongoing technical support.",
},
{
  role: "PHP Developer",
  company: "Spiderline Technology",
  period: "June 2015 – January 2017",
  location: "Kochi, India",
  description:
    "Developed backend modules and integrated payment gateway and shipping extensions using OpenCart and Core PHP. Maintained existing web applications, optimized database structures, and improved application functionality and reliability.",
},
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Experience", "experience"],
    ["Contact", "contact"],
  ];
  useEffect(() => {
  const elements = document.querySelectorAll(
    ".hero-content, .profile-visual, .tech-strip, " +
    "#about .about-art, #about .col-md-8, " +
    ".skill-card, .project-card, .timeline-item, " +
    ".contact-section .container"
  );

  elements.forEach((element, index) => {
    element.classList.add("reveal-item");
    element.style.setProperty("--reveal-delay", `${(index % 4) * 100}ms`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}, []);

  return (
    <div className="portfolio">
      <nav className="navbar navbar-expand-lg bg-white sticky-top portfolio-nav">
        <div className="container">
          <a className="navbar-brand brand" href="#home">
            AV<span>.</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className={`navbar-collapse ${
              menuOpen ? "show" : "collapse"
            }`}
          >
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              {navItems.map(([label, id]) => (
                <li className="nav-item" key={id}>
                  <a
                    className="nav-link"
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <a
                  className="btn nav-contact"
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Let's Talk ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero-section" id="home">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-12 col-lg-6 hero-content">
                <div className="availability">
                  <span className="status-dot" />
                  OPEN TO OPPORTUNITIES
                </div>

                <p className="eyebrow">HELLO, I'M</p>

                <h1 className="hero-title">
                  Athira
                  <br />
                  <span>Vijay.</span>
                </h1>

        <h2 className="hero-subtitle">
  Full-Stack PHP Developer | Web Application Specialist
</h2>

                <p className="hero-description">
                  I build reliable web applications, business platforms, and
                  user-friendly digital experiences using PHP and modern web
                  technologies. I am also developing my skills in React.
                </p>

                <div className="hero-actions">
                  <a className="btn btn-primary-custom" href="#projects">
                    Explore My Work ↗
                  </a>
                  <a className="btn btn-outline-custom" href="#contact">
                    Contact Me
                  </a>
                </div>

                <div className="hero-meta">
                  <span>📍 Sharjah, UAE</span>
                  <span>✦ 6+ Years of Experience</span>
                </div>
              </div>
<div className="col-12 col-lg-6">
  <div className="profile-visual">
    <div className="profile-background"></div>

    <div className="profile-photo-frame">
      <img
        src="/athira.png"
        alt="Athira Vijay - PHP Developer"
        className="profile-photo"
      />
    </div>

    <div className="floating-card floating-top">
      <span className="float-icon">{"</>"}</span>
      <div>
        <strong>PHP Developer</strong>
        <small>6+ Years of Experience</small>
      </div>
    </div>

    <div className="floating-card floating-bottom">
      <span className="float-icon purple">✦</span>
      <div>
        <strong>Always Learning</strong>
        <small>Exploring React</small>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
        </section>

        <section className="tech-strip">
          <div className="container">
            <p>MY TECHNOLOGY STACK</p>
            <div className="tech-items">
              {["Core PHP", "Laravel", "CodeIgniter", "WordPress", "MySQL", "React"].map(
                (tech) => <span key={tech}>{tech}</span>
              )}
            </div>
          </div>
        </section>

        <section className="section-padding" id="about">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">GET TO KNOW ME</p>
              <h2>About <span>Me</span></h2>
            </div>

            <div className="row align-items-center g-4 g-lg-5">
              <div className="col-12 col-md-4">
                <div className="about-art">
                  <span>AV<span>.</span></span>
                  <small>WEB DEVELOPER</small>
                </div>
              </div>

              <div className="col-12 col-md-8">
                <h3 className="about-title">
          Developing Reliable and Innovative Web Solutions
                </h3>
                <p className="body-copy">
             I'm a results-driven Full-Stack PHP Developer based in Sharjah, UAE, with over six years of experience developing and maintaining websites and web applications. My technical expertise includes Core PHP, Laravel, CodeIgniter 3/4, WordPress, React.js, MySQL, and RESTful API integration.

I enjoy solving complex technical challenges, optimizing application performance, and building scalable, responsive web solutions that improve business efficiency and deliver real value.
                </p>
                <p className="body-copy">
                  I enjoy solving technical problems, improving application
                  performance, and creating solutions that help businesses
                  work more efficiently.
                </p>
                <a className="text-link" href="#contact">
                  Let's work together ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding skills-section" id="skills">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">MY TOOLKIT</p>
              <h2>Skills & <span>Technologies</span></h2>
              <p className="body-copy">
                Technologies I use to develop and maintain web solutions.
              </p>
            </div>

            <div className="row g-3">
              {skills.map((skill, index) => (
                <div className="col-6 col-md-4 col-lg-3" key={skill}>
                  <div className="skill-card">
                    <span className="skill-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <strong>{skill}</strong>
                    <span className="skill-arrow">↗</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding" id="projects">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Featured <span>Projects</span></h2>
              <p className="body-copy">
                Replace these sample descriptions with your real project details.
              </p>
            </div>

            <div className="row g-4">
              {projects.map((project) => (
                <div className="col-12 col-md-6 col-lg-4" key={project.number}>
                  <article className="project-card h-100">
                    <div className="project-art">
                      <span>{project.number}</span>
                      <strong>{"</>"}</strong>
                    </div>
                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p className="body-copy">{project.description}</p>
                      <div className="project-tags">
                        {project.tech.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                        {project.links && (
  <div className="project-links">
    {project.links.map((link) => (
      <a
        key={link.url}
        href={link.url}
        target="_blank"
        rel="noreferrer"
      >
        {link.name} ↗
      </a>
    ))}
  </div>
)}
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding experience-section" id="experience">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">MY JOURNEY</p>
              <h2>Work <span>Experience</span></h2>
            </div>

            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={item.company}>
                  <span className="timeline-dot" />
                  <p className="timeline-date">{item.period}</p>
                  <h3>{item.role}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <p className="body-copy">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-padding" id="contact">
          <div className="container text-center">
            <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
            <h2>Let's build something <span>great.</span></h2>
            <p className="contact-copy">
              I'm open to suitable developer opportunities and freelance
              projects. Let's connect.
            </p>

            <a
              className="btn contact-button"
              href="mailto:a.athiravijayk20@gmail.com"
            >
              Email Me ↗
            </a>

            <div className="contact-links">
              <a href="https://www.linkedin.com/in/athira-vijay-7744aa228/" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href="https://github.com/athiravijayk-20" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href="#home">Back to top ↑</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home">AV<span>.</span></a>
          <p>Designed & built by Athira Vijay</p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
