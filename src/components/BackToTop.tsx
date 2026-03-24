import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shadow-[0_0_30px_-5px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_40px_-5px_hsl(var(--accent)/0.6)] hover:scale-110 transition-all duration-300"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
