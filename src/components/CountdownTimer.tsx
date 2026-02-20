import { useEffect, useState } from "react";
import { Calendar, MapPin, Users, DollarSign, Clock } from "lucide-react";
import { motion } from "motion/react";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Target date: 27th Ramadan 1445 (17th March 2026)
      const targetDate = new Date("2026-03-17 17:00:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center"
    >
      <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white px-4 py-3 rounded-lg font-bold text-2xl sm:text-3xl min-w-20 text-center shadow-lg">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-gray-600 font-semibold text-sm mt-2 uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="bg-gradient-to-r from-amber-50 to-emerald-50 rounded-2xl p-8 border-2 border-emerald-200 shadow-lg"
    >
      <div className="flex items-center justify-center gap-2 mb-6">
        <Clock className="text-emerald-600 animate-pulse" size={28} />
        <h3 className="text-2xl font-bold text-emerald-700">Event Starts In</h3>
      </div>

      <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>

      <motion.p
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-center text-emerald-700 font-semibold mt-6 text-lg"
      >
        Get Ready for the Biggest Batch Reunion Event!
      </motion.p>
    </motion.div>
  );
}
