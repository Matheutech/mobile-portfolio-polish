import profilePhoto from "@/assets/profile.jpg";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";
import CompetenciesSection from "@/components/CompetenciesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import CertificationsSection from "@/components/CertificationsSection";
import BackToTop from "@/components/BackToTop";
import { ChevronDown, Terminal, Download, Linkedin, Mail, Github, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["Técnico de Suporte em TI", "Manutenção de Hardware", "Cabeamento Estruturado", "Suporte ao Usuário"];

const Index = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navbar />

      {/* Hero */}
      <header className="relative flex flex-col items-center text-center px-4 pt-24 sm:pt-32 pb-16 sm:pb-24 min-h-[80vh] sm:min-h-[90vh] justify-center overflow-hidden">
        {/* Animated background orbs - smaller on mobile */}
        <div className="absolute top-1/4 left-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-accent/6 rounded-full blur-[100px] sm:blur-[180px] pointer-events-none animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-[hsl(270_80%_62%/0.04)] rounded-full blur-[80px] sm:blur-[150px] pointer-events-none animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-accent/3 rounded-full blur-[120px] sm:blur-[200px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[hsl(var(--gradient-start)/0.4)] via-[hsl(var(--gradient-mid)/0.2)] to-[hsl(var(--gradient-end)/0.4)] blur-md animate-pulse-glow" />
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-[hsl(var(--gradient-start)/0.5)] to-[hsl(var(--gradient-end)/0.3)]" />
            <img
              src={profilePhoto}
              alt="Foto de perfil de Matheus Rocha"
              className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-2xl object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter mt-8 sm:mt-10 text-gradient">
            Matheus Rocha
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex items-center gap-3 mt-4 sm:mt-5 h-8"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--available))] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[hsl(var(--available))] shadow-[0_0_12px_hsl(var(--available)/0.6)]" />
          </span>
          <div className="overflow-hidden h-7">
            <motion.p
              key={roleIndex}
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -28, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-accent-custom text-base sm:text-lg font-semibold tracking-tight"
            >
              {roles[roleIndex]}
            </motion.p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-[52ch] mt-4 sm:mt-6 leading-relaxed px-2"
        >
          Estudante de Tecnologia da Informação com foco em suporte técnico,
          manutenção de computadores e administração de redes.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 sm:mt-10 px-2"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-accent text-accent-foreground font-semibold text-xs sm:text-sm hover:opacity-90 transition-all duration-300 shadow-[0_0_30px_-5px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_40px_-5px_hsl(var(--accent)/0.6)]"
          >
            Ver Projetos
          </a>
          <a
            href="/curriculo-matheus-rocha.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-border bg-card/50 text-foreground font-semibold text-xs sm:text-sm hover:border-accent/30 hover:bg-card transition-all duration-300 flex items-center gap-2"
          >
            Ver Currículo
          </a>
          <a
            href="/curriculo-matheus-rocha.pdf"
            download="Curriculo-Matheus-Rocha.pdf"
            className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-border bg-card/50 text-foreground font-semibold text-xs sm:text-sm hover:border-accent/30 hover:bg-card transition-all duration-300 flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Baixar Currículo
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-border bg-card/50 text-foreground font-semibold text-xs sm:text-sm hover:border-accent/30 hover:bg-card transition-all duration-300"
          >
            Contato
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-10 sm:mt-16 text-muted-foreground hover:text-accent transition-colors"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.a>
      </header>

      <main>
        {/* Sobre Mim */}
        <section id="about" className="py-16 sm:py-28">
          <div className="container max-w-[900px] px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="heading-white text-2xl sm:text-3xl font-bold relative pb-3 mb-8 sm:mb-10 section-title-underline">
                Sobre Mim
              </h2>
              <div className="relative bg-card border border-border rounded-2xl p-5 sm:p-8 md:p-10 glow-intense noise-overlay overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Terminal className="w-5 h-5 text-accent-custom" />
                  </div>
                  <div>
                    <p className="text-foreground text-base sm:text-lg leading-relaxed max-w-[60ch]">
                      Desde criança, sou fascinado por tecnologia e pela resolução de problemas. Essa paixão
                      me guiou para a área de Tecnologia da Informação, onde busco aplicar meu conhecimento
                      em manutenção de hardware, suporte ao usuário e otimização de sistemas.
                    </p>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-3 sm:mt-4 max-w-[60ch]">
                      Tenho um perfil analítico e metódico, sempre em busca da solução mais eficiente e robusta para
                      qualquer desafio técnico.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <SkillsSection />
        <CompetenciesSection />
        <CertificationsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative text-center py-10 sm:py-16 mt-16 sm:mt-28 border-t border-border/50">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="container max-w-[900px] px-4 sm:px-6">
          <p className="text-gradient font-bold text-xl sm:text-2xl tracking-tight">Matheus Rocha</p>
          <p className="text-muted-foreground text-xs sm:text-sm mt-2 sm:mt-3 max-w-[40ch] mx-auto leading-relaxed">
            Técnico de Suporte em TI · Apaixonado por tecnologia e resolução de problemas.
          </p>
          <div className="flex items-center justify-center gap-3 mt-5 sm:mt-6">
            <a
              href="https://www.linkedin.com/in/matheus-rocha-626b763b5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Matheutech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/matheustechti"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="mailto:matheusrsousamrs@gmail.com"
              className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-border/30">
            <p className="text-muted-foreground text-xs">
              &copy; {new Date().getFullYear()} Matheus Rocha. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
};

export default Index;
