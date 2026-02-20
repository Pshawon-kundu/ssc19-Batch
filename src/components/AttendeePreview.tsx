import { motion } from "motion/react";
import { User } from "lucide-react";

interface AttendeePreviewProps {
  totalRegistered: number;
}

export function AttendeePreview({ totalRegistered }: AttendeePreviewProps) {
  // Sample attendee data (indices for different colors)
  const attendees = [
    { id: 1, name: "Ahmed Khan", colorIndex: 0, status: "registered" },
    { id: 2, name: "Fatima Ali", colorIndex: 1, status: "registered" },
    { id: 3, name: "Karim Hassan", colorIndex: 2, status: "registered" },
    { id: 4, name: "Ayesha Rahman", colorIndex: 3, status: "registered" },
    { id: 5, name: "Omar Malik", colorIndex: 4, status: "registered" },
    { id: 6, name: "Zainab Khan", colorIndex: 5, status: "registered" },
  ];

  const avatarColors = [
    "from-blue-400 to-blue-600",
    "from-pink-400 to-pink-600",
    "from-purple-400 to-purple-600",
    "from-green-400 to-green-600",
    "from-yellow-400 to-yellow-600",
    "from-red-400 to-red-600",
  ];

  const getInitial = (name: string) => name.charAt(0).toUpperCase();

  const batchStrength = 120; // Total students in batch
  const percentage = Math.round((totalRegistered / batchStrength) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-2xl p-8 shadow-xl border-2 border-emerald-200"
    >
      <div className="flex items-center justify-center gap-3 mb-8">
        <User className="text-emerald-600" size={28} />
        <h3 className="text-3xl font-bold text-gray-900">Who's Coming?</h3>
      </div>

      {/* Participation Rate */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-700 font-semibold">
            Batch Strength: {batchStrength} Students
          </span>
          <span className="text-2xl font-bold text-emerald-600">
            {percentage}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full"
          />
        </div>
        <p className="text-gray-600 text-sm mt-2">
          <span className="font-bold text-emerald-700">{totalRegistered}</span>{" "}
          students registered out of{" "}
          <span className="font-bold">{batchStrength}</span>
        </p>
      </div>

      {/* Attendee Avatars */}
      <div className="mb-8">
        <h4 className="font-bold text-gray-900 mb-4">Recent Registrations</h4>
        <div className="flex flex-wrap gap-4">
          {attendees.map((attendee, idx) => (
            <motion.div
              key={attendee.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-16 h-16 bg-gradient-to-br ${avatarColors[attendee.colorIndex]} rounded-full flex items-center justify-center text-xl font-bold text-white shadow-md group-hover:shadow-lg transition-shadow`}
              >
                {getInitial(attendee.name)}
              </motion.div>
              <p className="text-xs font-semibold text-gray-700 mt-2 text-center max-w-16 truncate">
                {attendee.name.split(" ")[0]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-center p-4 bg-white rounded-lg border-2 border-emerald-200"
      >
        <p className="text-emerald-700 font-bold">
          Only {batchStrength - totalRegistered} spots left! Don't miss out!
        </p>
      </motion.div>
    </motion.div>
  );
}
