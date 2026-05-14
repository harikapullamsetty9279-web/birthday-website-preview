import { motion } from "framer-motion";
import boy1 from "../assets/images/bike_redshirt.jpg";
import boy2 from "../assets/images/bgl_trip_white_shirt.JPG";
import boy3 from "../assets/images/bgl_Wshirt_selfie.JPG";

function Surprise() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-rose-100 via-pink-100 to-purple-100 font-['Poppins'] text-center px-6 py-20">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute top-[30%] right-0 w-96 h-96 bg-purple-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-0 left-[20%] w-72 h-72 bg-rose-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      {/* Floating Decorations */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-20 left-10 text-4xl"
      >
        💖
      </motion.div>

      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute top-40 right-16 text-3xl"
      >
        ✨
      </motion.div>

      <motion.div
        animate={{
          x: [0, 15, -15, 0],
          y: [0, -10, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute bottom-32 left-16 text-4xl"
      >
        🦋
      </motion.div>

      <motion.div
        animate={{
          y: [0, -12, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-20 right-20 text-3xl"
      >
        🌸
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-32"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="text-7xl mb-8"
          >
            🧸💖🧸
          </motion.div>

          <h1 className="font-['Dancing_Script'] text-6xl md:text-8xl text-pink-500 mb-10 leading-tight drop-shadow-lg">
            Welcome Birthday Boyyy ✨
          </h1>

          <p className="text-lg md:text-2xl font-light text-gray-700 leading-loose max-w-3xl mx-auto">
            This little space was made specially for you…
            <br />
            for your smile, your existence, your presence, and all the little
            things that make you so special to me 💖
          </p>
        </motion.div>

        {/* Main Character Section */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-36"
        >
          <h2 className="font-['Dancing_Script'] text-5xl md:text-7xl text-pink-500 mb-16">
            Main Character Energy 🎬
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Card 1 */}
            <motion.div
              whileHover={{
                scale: 1.03,
                rotate: -2,
              }}
              className="bg-white/60 backdrop-blur-md rounded-[35px] overflow-hidden shadow-xl p-3 md:mt-10 rotate-[-2deg]"
            >
              <img
                src={boy1}
                alt="birthday boy"
                className="h-[390px] w-full object-cover rounded-[25px]"
              />

              <p className="mt-3 px-1 pb-1 text-gray-700 text-base md:text-lg font-light leading-relaxed">
                illegal levels of handsome honestly 😌
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{
                scale: 1.03,
                rotate: 1,
              }}
              className="bg-white/60 backdrop-blur-md rounded-[35px] overflow-hidden shadow-xl p-3 md:-mt-8 rotate-[1deg]"
            >
              <img
                src={boy2}
                alt="birthday boy"
                className="h-[320px] w-full object-cover rounded-[25px]"
              />

              <p className="mt-3 px-1 pb-1 text-gray-700 text-base md:text-lg font-light leading-relaxed">
                main character energy without even trying 🎬
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{
                scale: 1.03,
                rotate: -1,
              }}
              className="bg-white/60 backdrop-blur-md rounded-[35px] overflow-hidden shadow-xl p-3 md:mt-20 rotate-[-1deg]"
            >
              <img
                src={boy3}
                alt="birthday boy"
                className="h-[360px] w-full object-cover rounded-[25px]"
              />

              <p className="mt-3 px-1 pb-1 text-gray-700 text-base md:text-lg font-light leading-relaxed">
                how are you this cute and this adorable at the same time 😭
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Things I Love About You */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-36"
        >
          <h2 className="font-['Dancing_Script'] text-5xl md:text-7xl text-pink-500 mb-16">
            Things I Love About You 💌
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Note 1 */}
            <motion.div
              whileHover={{
                scale: 1.02,
                rotate: -1,
              }}
              className="bg-white/70 backdrop-blur-md rounded-[35px] p-8 shadow-xl text-left"
            >
              <div className="text-4xl mb-4">🌙</div>

              <p className="text-gray-700 text-lg leading-loose font-light">
                I love how your presence somehow makes difficult days feel
                softer, calmer, and easier to survive 💖
              </p>
            </motion.div>

            {/* Note 2 */}
            <motion.div
              whileHover={{
                scale: 1.02,
                rotate: 1,
              }}
              className="bg-white/70 backdrop-blur-md rounded-[35px] p-8 shadow-xl text-left md:mt-12"
            >
              <div className="text-4xl mb-4">✨</div>

              <p className="text-gray-700 text-lg leading-loose font-light">
                I love how you unintentionally become the cutest person in every
                room 😭
              </p>
            </motion.div>

            {/* Note 3 */}
            <motion.div
              whileHover={{
                scale: 1.02,
                rotate: 1,
              }}
              className="bg-white/70 backdrop-blur-md rounded-[35px] p-8 shadow-xl text-left"
            >
              <div className="text-4xl mb-4">🧸</div>

              <p className="text-gray-700 text-lg leading-loose font-light">
                Even your smallest habits, expressions, and random little
                moments somehow became my favorite things ✨
              </p>
            </motion.div>

            {/* Note 4 */}
            <motion.div
              whileHover={{
                scale: 1.02,
                rotate: -1,
              }}
              className="bg-white/70 backdrop-blur-md rounded-[35px] p-8 shadow-xl text-left md:mt-16"
            >
              <div className="text-4xl mb-4">💞</div>

              <p className="text-gray-700 text-lg leading-loose font-light">
                And honestly… I could probably keep writing about you forever 😌
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Our Little Story */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-40 relative"
        >
          <h2 className="font-['Dancing_Script'] text-5xl md:text-7xl text-pink-500 mb-24">
            Our Little Story 🌙
          </h2>

          {/* Timeline */}
          <div className="hidden md:block absolute left-1/2 top-44 bottom-0 w-1 bg-pink-200 rounded-full"></div>

          <div className="space-y-20">
            {/* Story 1 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative md:w-[45%] bg-white/70 backdrop-blur-md rounded-[35px] p-8 shadow-xl text-left"
            >
              <div className="text-4xl mb-4">✨</div>

              <h3 className="text-2xl text-pink-500 mb-4 font-semibold">
                The Beginning
              </h3>

              <p className="text-gray-700 text-lg leading-loose font-light">
                Somehow a simple conversation slowly turned into one of the most
                important parts of my life 💖
              </p>
            </motion.div>

            {/* Story 2 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative md:ml-auto md:w-[45%] bg-white/70 backdrop-blur-md rounded-[35px] p-8 shadow-xl text-left"
            >
              <div className="text-4xl mb-4">🧸</div>

              <h3 className="text-2xl text-pink-500 mb-4 font-semibold">
                Comfort
              </h3>

              <p className="text-gray-700 text-lg leading-loose font-light">
                Somewhere along the way, your presence started feeling like
                comfort, peace, and home 😌
              </p>
            </motion.div>

            {/* Story 3 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative md:w-[45%] bg-white/70 backdrop-blur-md rounded-[35px] p-8 shadow-xl text-left"
            >
              <div className="text-4xl mb-4">💫</div>

              <h3 className="text-2xl text-pink-500 mb-4 font-semibold">
                The Little Things
              </h3>

              <p className="text-gray-700 text-lg leading-loose font-light">
                The random jokes, tiny moments, small habits, and everyday
                conversations somehow became my favorite memories ✨
              </p>
            </motion.div>

            {/* Story 4 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative md:ml-auto md:w-[45%] bg-white/70 backdrop-blur-md rounded-[35px] p-8 shadow-xl text-left"
            >
              <div className="text-4xl mb-4">💌</div>

              <h3 className="text-2xl text-pink-500 mb-4 font-semibold">
                Still My Favorite Person
              </h3>

              <p className="text-gray-700 text-lg leading-loose font-light">
                And after everything… somehow you still remain my favorite
                notification, favorite smile, and favorite person 💖
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Final Love Letter */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20"
        >
          <div className="bg-white/70 backdrop-blur-md rounded-[45px] shadow-2xl p-10 md:p-16 max-w-4xl mx-auto relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200 opacity-30 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="text-6xl mb-8"
              >
                💌
              </motion.div>

              <h2 className="font-['Dancing_Script'] text-5xl md:text-7xl text-pink-500 mb-10 leading-tight">
                To My Favorite Person
              </h2>

              <div className="space-y-8 text-gray-700 text-lg md:text-2xl font-light leading-loose">
                <p>
                  Thank you for existing in my life and bringing so much
                  comfort, happiness, laughter, warmth, and love into it 💖
                </p>

                <p>
                  You became such a special part of my days in ways I probably
                  can’t fully explain… but I hope you always know how deeply
                  appreciated and loved you are 😌
                </p>

                <p>
                  I hope this year brings you beautiful memories, peace,
                  healing, happiness, success, and everything your heart
                  deserves ✨
                </p>

                <p>
                  And no matter what… I’ll always be cheering for you, admiring
                  you, and loving the person that you are 💞
                </p>
              </div>

              {/* Signature */}
              <div className="mt-16">
                <p className="text-gray-500 text-lg mb-4">
                  made with lots of love ✨
                </p>

                <h3 className="font-['Dancing_Script'] text-5xl text-pink-500">
                  Happy Birthday 💖
                </h3>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Surprise;
