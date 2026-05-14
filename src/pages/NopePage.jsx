import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function NopePage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-pink-100 via-rose-100 to-orange-100 flex items-center justify-center px-6 text-center font-['Poppins']">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>

      {/* Floating Emojis */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute top-20 left-16 text-5xl"
      >
        😤
      </motion.div>

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute top-24 right-24 text-4xl"
      >
        🚨
      </motion.div>

      <motion.div
        animate={{
          x: [0, 20, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute bottom-24 left-20 text-5xl"
      >
        🏃💨
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute bottom-20 right-20 text-5xl"
      >
        😂
      </motion.div>

      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-[12%] top-[45%] text-4xl"
      >
        😭
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute right-[15%] top-[55%] text-4xl"
      >
        🤨
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="relative z-10 max-w-4xl"
      >
        {/* Main Angry Emoji */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="text-7xl mb-8"
        >
          😤
        </motion.div>

        {/* Heading */}
        <h1 className="font-['Dancing_Script'] text-6xl md:text-8xl text-pink-500 leading-tight mb-10 drop-shadow-lg">
          EXCUSE ME???
        </h1>

        {/* Subtext */}
        <div className="space-y-6 mb-12">
          <p className="text-2xl md:text-4xl text-gray-700 font-light leading-relaxed">
            You really thought
            <br />
            you could press NO and escape?? 😭
          </p>

          <p className="text-xl md:text-2xl text-pink-500 font-medium">
            absolutely not mister 😂💖
          </p>
        </div>

        {/* Chaos Emojis */}
        <motion.div
          animate={{
            x: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="text-6xl mb-12"
        >
          🏃💨 😤 🚨
        </motion.div>

        {/* Button */}
        <motion.button
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => navigate("/surprise")}
          className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-full text-lg md:text-xl shadow-2xl transition-all duration-300"
        >
          okay okay... show me 😭💖
        </motion.button>

        {/* Tiny Footer Text */}
        <p className="mt-8 text-gray-500 italic text-sm md:text-base">
          nice try though 😌
        </p>
      </motion.div>
    </div>
  );
}

export default NopePage;
