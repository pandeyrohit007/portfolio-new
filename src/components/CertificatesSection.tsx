import { motion } from "framer-motion";
import { Award, BookOpen, ExternalLink } from "lucide-react";

const certificates = [
  { name: "Introduction to Hardware and Operating Systems", issuer: "IBM", date: "", grade: "83.87%", url: "https://coursera.org/share/fdf7a4516c32b808fb5eb240ed54f964" },
  { name: "Packet Switching Networks and Algorithms", issuer: "University of Colorado System", date: "", grade: "97.50%", url: "https://coursera.org/share/e7fc47bd93b3ce35b73285d791413ce2" },
  { name: "TCP/IP and Advanced Topics", issuer: "University of Colorado System", date: "", grade: "97.50%", url: "https://coursera.org/share/43bd23c20d1ccef41c852c11082277c3" },
  { name: "The Bits and Bytes of Computer Networking", issuer: "Google", date: "", grade: "92.90%", url: "https://coursera.org/share/53293aaf8eff5e1fee96d7ceaefe7a82" },
  { name: "Communication in the 21st Century Workplace", issuer: "University of California, Irvine", date: "", grade: "87.50%", url: "https://www.coursera.org/account/accomplishments" },
  { name: "Peer-to-Peer Protocols and Local Area Networks", issuer: "University of Colorado System", date: "", grade: "88.50%", url: "https://coursera.org/share/8273f3dd3ba6da265455c41480148e29" },
  { name: "Fundamentals of Network Communication", issuer: "University of Colorado System", date: "", grade: "90.32%", url: "https://www.coursera.org/account/accomplishments" },
  { name: "Software Engineering: Implementation and Testing", issuer: "The Hong Kong University of Science and Technology", date: "", grade: "82.85%", url: "https://coursera.org/share/af87f8ac2b8b8fca89c8d6a85aff4907" },
];

const training = {
  title: "MERN STACK",
  org: "Cipher Schools (Edtech)",
  period: "Jan 2026 – Feb 2026",
  highlights: [
    "MERN Stack Development training",
    "Built full-stack web apps with RESTful APIs",
    "Created responsive front-end interfaces",
  ],
};

const CertificatesSection = () => (
  <section id="certificates" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="font-mono-display text-primary text-sm mb-2 tracking-widest">// CERTIFICATES & TRAINING</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Credentials & <span className="text-gradient">Training</span>
        </h2>
      </motion.div>

      {/* Training */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card-gradient rounded-xl p-6 md:p-8 glow-border mb-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <BookOpen size={24} className="text-primary" />
          <div>
            <h3 className="text-lg font-bold text-foreground">{training.title}</h3>
            <p className="text-sm text-muted-foreground">{training.org} • {training.period}</p>
          </div>
        </div>
        <ul className="space-y-2">
          {training.highlights.map((h, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Certificates grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-gradient rounded-xl p-5 glow-border flex items-start justify-between gap-4 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-start gap-4">
              <Award size={22} className="text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground text-sm">{cert.name}</h4>
                <p className="text-xs text-muted-foreground">{cert.issuer}{cert.date ? ` • ${cert.date}` : ""}{cert.grade ? ` • Grade: ${cert.grade}` : ""}</p>
              </div>
            </div>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
              style={{ background: "var(--gradient-primary)" }}
            >
              View <ExternalLink size={12} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificatesSection;
