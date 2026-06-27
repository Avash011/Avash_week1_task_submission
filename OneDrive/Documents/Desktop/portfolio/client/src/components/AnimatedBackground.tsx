import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      {/* Animated orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 opacity-10 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '10%', left: '10%' }}
      />

      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 opacity-10 blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ bottom: '10%', right: '10%' }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 opacity-5 blur-3xl"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 100, -50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '50%', left: '50%' }}
      />
    </div>
  );
}
