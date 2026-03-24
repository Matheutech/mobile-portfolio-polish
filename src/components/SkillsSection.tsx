import { Monitor, HardDrive, Download, Copy, FolderSearch, Wrench, Wifi, Cable } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { icon: Monitor, label: "Manutenção de Computadores", desc: "Diagnóstico e reparo de desktops e notebooks" },
  { icon: HardDrive, label: "Montagem e Desmontagem de PCs", desc: "Builds personalizados e upgrades de hardware" },
  { icon: Download, label: "Instalação e Formatação de SO", desc: "Windows, Linux e configuração de drivers" },
  { icon: Copy, label: "Clonagem de Sistemas", desc: "Migração de dados e clonagem de discos" },
  { icon: FolderSearch, label: "Recuperação de Arquivos", desc: "Recuperação de dados em HDs e SSDs" },
  { icon: Wrench, label: "Suporte Técnico", desc: "Troubleshooting e atendimento ao usuário" },
  { icon: Wifi, label: "Configuração de Redes", desc: "Roteadores, switches e access points" },
  { icon: Cable, label: "Cabeamento Estruturado", desc: "Crimpagem de cabos RJ45, crossover e patch cords" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const SkillsSection = () => (
  <section id="skills" className="py-16 sm:py-28">
    <div className="container max-w-[900px] px-4 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="heading-white text-2xl sm:text-3xl font-bold relative pb-3 mb-8 sm:mb-12 section-title-underline"
      >
        Habilidades
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.label}
            variants={item}
            className="card-hover group relative bg-card border border-border rounded-2xl p-4 sm:p-5 flex items-start gap-3 sm:gap-4 noise-overlay overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/8 border border-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/15 group-hover:border-accent/25 group-hover:shadow-[0_0_20px_hsl(var(--card-glow)/0.15)] transition-all duration-400">
              <skill.icon className="w-5 h-5 text-accent-custom" />
            </div>
            <div className="relative min-w-0">
              <h3 className="heading-white font-semibold text-sm leading-tight">{skill.label}</h3>
              <p className="text-muted-foreground text-xs mt-1 sm:mt-1.5 leading-relaxed">{skill.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
