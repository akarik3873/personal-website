import { profile, experience, projects, skills } from "./data.js";

function Section({ id, title, children }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <div className="wrap">
      <header>
        <p className="note">*{profile.note}</p>
        <h1>
          {profile.name.split(" ").map((part, i) => (
            <span key={`${part}-${i}`}>{part}</span>
          ))}
        </h1>
        <nav className="links">
          {profile.links.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <a
                key={link.label}
                href={link.href}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </header>

      <main>
        <Section id="about" title="tldr">
          <ul className="bullets">
            {profile.about.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </Section>

        <Section id="experience" title="Experience">
          {experience.map((job) => (
            <div className="item" key={job.org}>
              <div className="item-head">
                <h3>
                  {job.org}
                  {job.role && <span className="role"> · {job.role}</span>}
                </h3>
              </div>
              <p>{job.summary}</p>
            </div>
          ))}
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid">
            {projects.map((project) => (
              <div className="card" key={project.name}>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          {skills.map((skill) => (
            <div className="skill-group" key={skill.group}>
              <h4>{skill.group}</h4>
              <div className="skills">
                {skill.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Section>
      </main>

      <footer>
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </footer>
    </div>
  );
}
