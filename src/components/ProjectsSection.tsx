import projectPcBuild from "@/assets/project-pc-build.jpg";
import projectUpgrade from "@/assets/project-upgrade.jpg";
import projectMaintenance from "@/assets/project-maintenance.jpg";
import projectNetwork from "@/assets/project-network.jpg";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    image: projectPcBuild,
    title: "Montagem de PC Gamer",
    description:
      "Montagem completa de desktop de alta performance, incluindo gerenciamento de cabos, instalação de water cooler e configuração da BIOS para otimização.",
    tags: ["Hardware", "Desktop", "Performance"],
  },
  {
    image: projectUpgrade,
    title: "Upgrade de SSD e RAM em Notebook",
    description:
      "Substituição de HD mecânico por SSD NVMe e expansão de memória RAM em notebook corporativo, com clonagem do sistema operacional.",
    tags: ["Upgrade", "SSD", "Notebook"],
  },
  {
    image: projectMaintenance,
    title: "Manutenção Preventiva",
    description:
      "Limpeza interna completa, troca de pasta térmica do processador e placa de vídeo. Redução de 15°C na temperatura de operação.",
    tags: ["Manutenção", "Cooling", "Otimização"],
  },
  {
    image: projectNetwork,
    title: "Cabeamento e Configuração de Rede",
    description:
      "Montagem de cabos de rede RJ45 (direto e crossover), crimpagem, teste com testador de cabos, configuração de switch e roteador para rede local com 12 estações.",
    tags: ["Rede", "Cabeamento", "Infraestrutura"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-16 sm:py-28">
    <div className="container max-w-[900px] px-4 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="heading-white text-2xl sm:text-3xl font-bold relative pb-3 mb-8 sm:mb-12 section-title-underline"
      >
        Projetos Realizados
      </motion.h2>
      <div className="grid gap-4 sm:gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="card-hover group relative bg-card border border-border rounded-2xl overflow-hidden flex flex-col md:flex-row noise-overlay"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
            <div className="relative overflow-hidden shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-[280px] lg:w-[300px] h-[180px] sm:h-[220px] md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-card/40" />
            </div>
            <div className="relative z-20 p-5 sm:p-7 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <h3 className="heading-white text-lg sm:text-xl font-bold">{project.title}</h3>
                <ArrowUpRight className="w-4 h-4 text-accent-custom opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px]">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-[11px] font-mono font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-accent/8 text-accent-custom border border-accent/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
