import { motion } from "motion/react";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  text: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Memories with Friends",
    text: "Reconnecting with everyone after years! Best feeling ever to see old friends.",
  },
  {
    id: 2,
    name: "Fun & Games",
    text: "Jersey match, food, and endless laughter. This is exactly what we needed!",
  },
  {
    id: 3,
    name: "Good Food Together",
    text: "The iftar spread was amazing. Great food and great company!",
  },
  {
    id: 4,
    name: "Nostalgia at Peak",
    text: "Brought back all the school memories. Felt like high school days were back!",
  },
  {
    id: 5,
    name: "Unforgettable Night",
    text: "Best reunion ever organized. Can't wait for the next one!",
  },
];

export function TestimonialCarousel() {
  const cardWidth = 384; // w-96 = 384px
  const gap = 24; // gap-6 = 24px
  const totalWidth = (cardWidth + gap) * TESTIMONIALS.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-10 shadow-lg border border-emerald-100"
    >
      <div className="flex items-center justify-center gap-3 mb-10">
        <Quote className="text-emerald-600" size={32} />
        <h3 className="text-4xl font-bold text-gray-900">Batch Memories</h3>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          animate={{ x: [-totalWidth, 0] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 py-4"
        >
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                scale: 1.02,
                y: -8,
              }}
              className="flex-shrink-0 w-96 bg-white border-2 border-emerald-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-emerald-700 text-lg leading-tight max-w-xs">
                    {testimonial.name}
                  </h4>
                  <Quote className="text-emerald-200 flex-shrink-0" size={24} />
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  "{testimonial.text}"
                </p>
                <div className="pt-2 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 4,
                        delay: i * 0.1,
                        repeat: Infinity,
                      }}
                    >
                      <svg
                        className="w-4 h-4 fill-amber-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <p className="text-center text-gray-600 text-sm font-medium mt-8">
        Testimonials from our batch mates
      </p>
    </motion.div>
  );
}
