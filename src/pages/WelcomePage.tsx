import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function WelcomePage() {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    // Main Container - Forces Dark Background
    <div className="min-h-screen w-full bg-emerald-950 flex flex-col items-center justify-center p-4 relative overflow-hidden text-emerald-50 selection:bg-emerald-500/30">
      {/* Background with explicit color to ensure no white flash */}
      <div className="absolute inset-0 bg-emerald-950 -z-30" />

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-teal-600/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center gap-12 sm:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* HERO TITLE SECTION */}
        <div className="flex flex-col items-center justify-center relative">
          {/* Main Brand Text - High Contrast & Front */}
          <h1
            className="relative flex flex-wrap justify-center items-baseline gap-x-2 sm:gap-x-4 font-black leading-none tracking-tight select-none z-20"
            style={{
              fontSize: "clamp(3rem, 10vw, 8rem)",
              textShadow: "0 20px 50px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex">
              {"PILOTIAN".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  className="text-white drop-shadow-2xl"
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <motion.span
              variants={letterVariants}
              className="text-emerald-400 drop-shadow-2xl pl-2"
            >
              '19
            </motion.span>
          </h1>

          {/* Subtitle - Increased margins to prevent clash */}
          <motion.div variants={letterVariants} className="mt-8 space-y-3">
            <p className="text-emerald-300 font-bold tracking-[0.3em] uppercase text-xs sm:text-base">
              SSC Batch Class of 2019
            </p>
            <p className="text-white/70 text-sm sm:text-lg font-light italic">
              Iftar Party Reunion
            </p>
          </motion.div>
        </div>

        {/* INFO BAR - Professional Glassmorphism */}
        <motion.div 
            variants={letterVariants}
            className="w-full max-w-4xl bg-emerald-900/40 backdrop-blur-md border border-emerald-500/20 rounded-3xl overflow-hidden shadow-2xl relative z-10 mx-4"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-emerald-500/20">
                {/* Date */}
                <div className="p-6 md:p-8 flex flex-col items-center justify-center group hover:bg-emerald-500/10 transition-colors duration-300">
                    <span className="text-xs uppercase tracking-[0.2em] text-emerald-300 font-bold mb-2">Date</span>
                    <span className="text-xl md:text-2xl font-bold text-white tracking-wide">Ramadan 2026</span>
                </div>

                {/* Time */}
                <div className="p-6 md:p-8 flex flex-col items-center justify-center group hover:bg-emerald-500/10 transition-colors duration-300">
                    <span className="text-xs uppercase tracking-[0.2em] text-emerald-300 font-bold mb-2">Time</span>
                    <span className="text-xl md:text-2xl font-bold text-white tracking-wide">Iftar Onwards</span>
                </div>

                {/* Batch */}
                <div className="p-6 md:p-8 flex flex-col items-center justify-center group hover:bg-emerald-500/10 transition-colors duration-300">
                    <span className="text-xs uppercase tracking-[0.2em] text-emerald-300 font-bold mb-2">Batch Size</span>
                    <span className="text-xl md:text-2xl font-bold text-white tracking-wide">120+ Members</span>
                </div>
            </div>
            
            {/* Decorative highlight line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
        </motion.div>

        {/* CTA BUTTON - Increased spacing */}
        <div className="pt-4 z-20">
          <motion.button
            variants={letterVariants}
            onClick={() => navigate("/event")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-white text-emerald-950 rounded-full font-bold text-lg shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] transition-all duration-300 cursor-pointer"
          >
            Enter Event
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-emerald-600" />
          </motion.button>
        </div>

        {/* Footer Text */}
        <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
          <motion.p
            variants={letterVariants}
            className="text-[10px] uppercase tracking-widest text-white/20"
          >
            Reconnect • Celebrate • Remember
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
