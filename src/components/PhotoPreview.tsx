import { motion } from "motion/react";
import { Image } from "lucide-react";
import photo1 from "../assets/1.jpeg";
import photo2 from "../assets/2.jpeg";
import photo3 from "../assets/3.jpeg";
import photo4 from "../assets/4.jpeg";
import photo5 from "../assets/5.jpeg";

interface PhotoPreviewProps {
  totalRegistered: number;
}

export function PhotoPreview({ totalRegistered }: PhotoPreviewProps) {
  // Photos from uploaded images
  const samplePhotos = [
    { id: 1, src: photo1, alt: "Event photo 1" },
    { id: 2, src: photo2, alt: "Event photo 2" },
    { id: 3, src: photo3, alt: "Event photo 3" },
    { id: 4, src: photo4, alt: "Event photo 4" },
    { id: 5, src: photo5, alt: "Event photo 5" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="bg-white rounded-2xl p-8 shadow-xl"
    >
      <div className="flex items-center justify-center gap-3 mb-8">
        <Image className="text-emerald-600" size={28} />
        <h3 className="text-3xl font-bold text-gray-900">
          Photo Gallery Preview
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {samplePhotos.map((photo, idx) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative aspect-square rounded-lg overflow-hidden shadow-md group cursor-pointer"
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4 + idx * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full h-full"
            >
              <motion.img
                src={photo.src}
                alt={photo.alt}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "https://images.unsplash.com/photo-1552176875-cfee50b0c768?w=200&h=200&fit=crop";
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-gray-600 font-medium">
        More photos will be added after the event! Check back soon for full
        album.
      </p>
    </motion.div>
  );
}
