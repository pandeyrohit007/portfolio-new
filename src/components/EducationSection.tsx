import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "B.Tech – Computer Science & Engineering",
    period: "Aug 2023 – Present",
    score: "CGPA: 6.5",
  },
  {
    school: "H.D Jain College",
    location: "Arrah, Bihar",
    degree: "Intermediate (PCM)",
    period: "Mar 2021 – May 2022",
    score: "73%",
  },
  {
    school: "Gyan Jyoti Awasiya Vidyalaya",
    location: "Arrah, Bihar",
    degree: "Matriculation",
    period: "Mar 2019 – May 2020",
    score: "93%",
  },
];

const EducationSection = () => (
  <section id="education" className="section-padding bg-card/30">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="font-mono-display text-primary text-sm mb-2 tracking-widest">// EDUCATION</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Academic <span className="text-gradient">Journey</span>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-12 md:pl-16"
            >
              <div className="absolute left-2.5 md:left-4 top-1 w-3.5 h-3.5 rounded-full border-2 border-primary bg-background" />
              <div className="card-gradient rounded-xl p-6 glow-border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-foreground">{edu.school}</h3>
                  <span className="text-xs font-mono-display text-primary">{edu.period}</span>
                </div>
                <p className="text-sm text-secondary-foreground mb-1">{edu.degree}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <GraduationCap size={14} className="text-primary" />
                  <span>{edu.score}</span>
                  <span>•</span>
                  <span>{edu.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
