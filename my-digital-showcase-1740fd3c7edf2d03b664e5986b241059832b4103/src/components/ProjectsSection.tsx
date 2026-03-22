import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Intern/Placement Tracker",
    tech: ["HTML", "CSS", "JavaScript", "Git"],
    date: "Feb 2026",
    bullets: [
      "Built a responsive web app with interactive UI for tracking internships and placements",
      "Implemented dynamic front-end functionality with clean, modular codebase",
      "Managed version control via Git & GitHub",
    ],
    github: "https://github.com/pandeyrohit007",
  },
  {
    title: "Pizza Sales Dashboard",
    tech: ["Tableau", "MS SQL Server"],
    date: "Apr 2024",
    bullets: [
      "Improved customer satisfaction by 50% through data-driven visualizations",
      "Cut wastage by 30% via demand forecasting and inventory optimization",
      "Contributed to 15% market share increase through trend analysis",
    ],
  },
  {
    title: "Hotel Management System",
    tech: ["Java", "Swing", "MySQL", "JDBC"],
    date: "Jun 2023",
    bullets: [
      "Reduced manual workload by 40% with digitalized hotel resource management",
      "Boosted operational efficiency by 50% with compliant, user-friendly interface",
      "Integrated MySQL database reducing data retrieval time by 30%",
    ],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="font-mono-display text-primary text-sm mb-2 tracking-widest">// PROJECTS</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Featured <span className="text-gradient">Work</span>
        </h2>
      </motion.div>

      <div className="grid gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="card-gradient rounded-xl p-6 md:p-8 glow-border group hover:scale-[1.01] transition-transform duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-mono-display bg-muted text-primary border border-border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground font-mono-display">{p.date}</span>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                )}
              </div>
            </div>
            <ul className="space-y-2">
              {p.bullets.map((b, bi) => (
                <li key={bi} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
