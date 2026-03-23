import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C++", level: 85 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "Tableau", level: 80 },
      { name: "MS SQL Server", level: 70 },
      { name: "Git & GitHub", level: 85 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", level: 75 },
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 70 },
      { name: "JDBC / Swing", level: 65 },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem-Solving", level: 90 },
      { name: "Team Player", level: 85 },
      { name: "Project Management", level: 80 },
      { name: "Adaptability", level: 85 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-card/30">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="font-mono-display text-primary text-sm mb-2 tracking-widest">// SKILLS</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          My <span className="text-gradient">Arsenal</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
            className="card-gradient rounded-xl p-6 glow-border"
          >
            <h3 className="text-lg font-semibold text-foreground mb-5 font-mono-display">{cat.title}</h3>
            <div className="space-y-4">
              {cat.skills.map((skill, si) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-secondary-foreground">{skill.name}</span>
                    <span className="text-muted-foreground font-mono-display">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: ci * 0.1 + si * 0.1 }}
                      className="h-full rounded-full"
                      style={{ background: "var(--gradient-primary)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
