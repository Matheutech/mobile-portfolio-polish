import { motion } from "framer-motion";

const competencies = [
  { label: "Limpeza Preventiva de Hardware", percent: 100 },
  { label: "Substituição de Componentes (HD, SSD, RAM)", percent: 100 },
  { label: "Crimpagem de Cabos RJ45", percent: 100 },
  { label: "Suporte Técnico ao Usuário", percent: 95 },
  { label: "Diagnóstico de Hardware", percent: 94 },
  { label: "Trabalho em Equipe e Comunicação", percent: 93 },
  { label: "Montagem e Manutenção de PCs", percent: 90 },
  { label: "Instalação de Sistemas Operacionais", percent: 90 },
  { label: "Instalação e Configuração de Softwares", percent: 85 },
  { label: "Configuração de Redes e Roteadores", percent: 70 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const CompetenciesSection = () => (
  <section id="competencies" className="py-16 sm:py-28">
    <div className="container max-w-[900px] px-4 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="heading-white text-2xl sm:text-3xl font-bold relative pb-3 mb-8 sm:mb-12 section-title-underline"
      >
        Competências
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-4 sm:gap-y-5"
      >
        {competencies.map((comp) => (
          <motion.div key={comp.label} variants={item}>
            <div className="flex justify-between items-center mb-1.5 gap-2">
              <span className="heading-white text-xs sm:text-sm font-medium truncate">{comp.label}</span>
              <span className="text-accent-custom text-xs font-mono font-semibold shrink-0">{comp.percent}%</span>
            </div>
            <div className="relative h-2 sm:h-2.5 w-full rounded-full bg-secondary overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  background: `linear-gradient(90deg, hsl(var(--gradient-start)), hsl(var(--gradient-mid)))`,
                  boxShadow: `0 0 12px hsl(var(--card-glow) / 0.3)`,
                }}
                initial={{ width: 0 }}
                whileInView={{ width: `${comp.percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default CompetenciesSection;
