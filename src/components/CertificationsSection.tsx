import { Award, ExternalLink, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Technical Support Fundamentals",
    issuer: "Google",
    platform: "Coursera",
    date: "Março 2026",
    hours: "18 horas",
    grade: "91.60%",
    link: "https://coursera.org/verify/872ASJBPS0TU",
    skills: ["Computer Networking", "Hardware Troubleshooting", "System Software", "Technical Support", "Computer Hardware", "Linux", "Microsoft Windows"],
  },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-16 sm:py-28">
    <div className="container max-w-[900px] px-4 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="heading-white text-2xl sm:text-3xl font-bold relative pb-3 mb-8 sm:mb-12 section-title-underline"
      >
        Certificações
      </motion.h2>
      <div className="grid gap-5">
        {certifications.map((cert) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="card-hover group relative bg-card border border-border rounded-2xl p-5 sm:p-8 glow-intense noise-overlay overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-60 h-60 bg-accent/4 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center shrink-0 group-hover:bg-accent/20 group-hover:border-accent/30 group-hover:shadow-[0_0_25px_hsl(var(--card-glow)/0.15)] transition-all duration-400">
                <Award className="w-6 h-6 sm:w-7 sm:h-7 text-accent-custom" />
              </div>
              <div className="flex-1 min-w-0 w-full">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="heading-white font-bold text-base sm:text-lg leading-tight">{cert.title}</h3>
                    <p className="text-accent-custom text-sm font-semibold mt-1.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      {cert.issuer} · {cert.platform}
                    </p>
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all shrink-0 p-2 rounded-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1 mt-3 sm:mt-4 text-muted-foreground text-xs sm:text-sm font-mono">
                  <span>{cert.date}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{cert.hours}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="text-accent-custom font-bold">Nota: {cert.grade}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] sm:text-[11px] font-mono font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-accent/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
