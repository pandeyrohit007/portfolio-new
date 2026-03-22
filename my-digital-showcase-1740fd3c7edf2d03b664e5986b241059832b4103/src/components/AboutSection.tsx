import { motion } from "framer-motion";
import { Code2, Database, BarChart3, Users } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Full-Stack Dev", desc: "MERN Stack" },
  { icon: Database, label: "Data Science", desc: "Python & SQL" },
  { icon: BarChart3, label: "Visualization", desc: "Tableau" },
  { icon: Users, label: "Team Player", desc: "Agile & Collaborative" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="font-mono-display text-primary text-sm mb-2 tracking-widest">// ABOUT ME</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Who I <span className="text-gradient">Am</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-12">
          I'm a B.Tech Computer Science student at Lovely Professional University with hands-on experience in full-stack development, 
          data science, and building scalable web applications. I thrive on turning complex problems into elegant, user-friendly solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {highlights.map(({ icon: Icon, label, desc }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-gradient rounded-xl p-6 glow-border hover:scale-105 transition-transform duration-300"
          >
            <Icon size={28} className="text-primary mb-3" />
            <h3 className="font-semibold text-foreground text-sm mb-1">{label}</h3>
            <p className="text-xs text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
