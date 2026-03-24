import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const contacts = [
  {
    icon: Mail,
    label: "matheusrsousamrs@gmail.com",
    href: "mailto:matheusrsousamrs@gmail.com",
    isLink: true,
  },
  {
    icon: Phone,
    label: "(85) 98624-6696",
    isLink: false,
  },
  {
    icon: MapPin,
    label: "Pacatuba, CE",
    isLink: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/matheus-rocha-626b763b5",
    isLink: true,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("matheusrsousamrs@gmail.com");
    setCopied(true);
    toast({
      title: "Email copiado!",
      description: "O email foi copiado para a área de transferência.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-28">
      <div className="container max-w-[900px] px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="heading-white text-2xl sm:text-3xl font-bold relative pb-3 mb-8 sm:mb-10 section-title-underline"
        >
          Contato
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-foreground text-base sm:text-lg mb-6 sm:mb-8"
        >
          Estou disponível para novas oportunidades e desafios. Entre em contato:
        </motion.p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
        >
          {contacts.map((c) => (
            <motion.div
              key={c.label}
              variants={item}
              className="card-hover group relative bg-card border border-border rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 noise-overlay overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-accent/8 border border-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/15 group-hover:border-accent/25 transition-all duration-300">
                <c.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent-custom" />
              </div>
              <div className="relative flex items-center gap-2 flex-1 min-w-0">
                {c.isLink ? (
                  <a
                    href={c.href}
                    target={c.href?.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-accent-custom hover:opacity-80 transition-opacity text-xs sm:text-sm font-semibold truncate flex items-center gap-1.5"
                  >
                    {c.label}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 shrink-0" />
                  </a>
                ) : (
                  <span className="text-foreground text-xs sm:text-sm font-medium">{c.label}</span>
                )}
                {c.icon === Mail && (
                  <button
                    onClick={copyEmail}
                    className="ml-auto p-1.5 rounded-lg hover:bg-accent/10 transition-colors shrink-0"
                    title="Copiar email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-accent-custom opacity-60 hover:opacity-100" />
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
