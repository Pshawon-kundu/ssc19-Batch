import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, X } from 'lucide-react';

interface ErrorModalProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
}

export function ErrorModal({ isOpen, onClose, message }: ErrorModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-sm relative overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors z-10"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-6 md:p-8">
                            {/* Error Icon */}
                            <div className="flex justify-center mb-6">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                    className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center shadow-lg shadow-red-100"
                                >
                                    <AlertCircle className="text-red-600" size={32} />
                                </motion.div>
                            </div>

                            <div className="text-center space-y-4">
                                <div className="space-y-1">
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        Registration Failed
                                    </h2>
                                </div>

                                <div className="bg-red-50 rounded-xl p-4 border border-red-100/50">
                                    <p className="text-red-800 font-medium text-sm">
                                        {message}
                                    </p>
                                </div>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="w-full mt-6 py-2.5 bg-red-600 text-white rounded-xl font-semibold text-sm hover:bg-red-700 transition-colors active:scale-[0.98]"
                            >
                                Try Again
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
