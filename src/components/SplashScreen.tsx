import { motion, AnimatePresence } from "motion/react";

interface SplashScreenProps {
  isVisible: boolean;
}

export function SplashScreen({ isVisible }: SplashScreenProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-amber-900"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-400 to-transparent rounded-full blur-3xl opacity-20"
            />
            <motion.div
              animate={{ scale: [1.3, 1, 1.3], rotate: [360, 180, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-400 to-transparent rounded-full blur-3xl opacity-20"
            />
          </div>

          {/* Content */}
          <motion.div className="relative z-10 text-center space-y-8">
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-7xl sm:text-8xl font-black"
              >
                <span className="bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-2xl">
                  PILOTIAN
                </span>
              </motion.h1>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1, type: "spring" }}
                className="flex justify-center gap-2"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-emerald-400"
                />
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-amber-400"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-5xl sm:text-6xl font-bold text-white"
              >
                '19
              </motion.div>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex justify-center gap-2 pt-8"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-3 h-3 rounded-full bg-emerald-300"
                />
              ))}
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="text-emerald-200 text-lg font-medium tracking-widest"
            >
              Class of 2019 • Iftar Party Reunion
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
