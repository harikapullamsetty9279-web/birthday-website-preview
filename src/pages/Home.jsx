import { useState, useEffect, useRef } from "react";

// STICKERS
import huggingSticker from "../assets/stickers/hugging-removebg-preview.png";
import sittingSticker from "../assets/stickers/sitting_together-removebg-preview.png";

// MUSIC
import bgMusic from "../assets/music/dreamy.mp3";

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // AUDIO
  const audio = useRef(new Audio(bgMusic));

  useEffect(() => {
    audio.current.loop = true;
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.current.pause();
      setIsPlaying(false);
    } else {
      audio.current.play();
      setIsPlaying(true);
    }
  };

  // COUNTDOWN
  const targetDate = new Date("2026-05-18T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden px-4 relative bg-gradient-to-b from-pink-100 to-purple-100 flex flex-col items-center text-center">
      {/* TOP LEFT EMOJI */}
      <div className="absolute top-16 left-10 text-3xl">💖</div>

      {/* TOP RIGHT SPARKLE */}
      <div className="absolute top-28 right-10 text-2xl">✨</div>

      {/* BOTTOM LEFT BUTTERFLY */}
      <div className="absolute bottom-20 left-14 text-2xl">🦋</div>

      {/* BOTTOM RIGHT FLOWER */}
      <div className="absolute bottom-24 right-14 text-2xl">🌸</div>

      {/* HUGGING STICKER */}
      <img
        src={huggingSticker}
        alt="hugging sticker"
        className="absolute top-24 left-32 md:left-72 w-20 md:w-36 rotate-[-8deg] drop-shadow-xl pointer-events-none"
      />

      {/* SITTING STICKER */}
      <img
        src={sittingSticker}
        alt="cute sticker"
        className="absolute bottom-28 right-36 md:right-[420px] w-24 md:w-40 drop-shadow-xl pointer-events-none"
      />

      {/* COUNTDOWN SECTION */}
      <div className="mt-24 z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-pink-500">
          Counting down to my special day 🎂💖
        </h1>

        <p className="mt-2 text-gray-600 text-base md:text-2xl">
          ...and a little surprise made with love ✨
        </p>

        {/* COUNTDOWN BOXES */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="bg-white/70 shadow-xl rounded-3xl px-6 py-5 w-24">
            <h2 className="text-5xl font-bold text-pink-500">
              {timeLeft.days}
            </h2>
            <p className="text-gray-600 mt-2">Days</p>
          </div>

          <div className="bg-white/70 shadow-xl rounded-3xl px-6 py-5 w-24">
            <h2 className="text-5xl font-bold text-pink-500">
              {timeLeft.hours}
            </h2>
            <p className="text-gray-600 mt-2">Hours</p>
          </div>

          <div className="bg-white/70 shadow-xl rounded-3xl px-6 py-5 w-24">
            <h2 className="text-5xl font-bold text-pink-500">
              {timeLeft.minutes}
            </h2>
            <p className="text-gray-600 mt-2">Minutes</p>
          </div>

          <div className="bg-white/70 shadow-xl rounded-3xl px-6 py-5 w-24">
            <h2 className="text-5xl font-bold text-pink-500">
              {timeLeft.seconds}
            </h2>
            <p className="text-gray-600 mt-2">Seconds</p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col items-center justify-center mt-20 z-10">
        <div className="text-4xl mb-6">💌</div>

        <h1
          className="text-5xl md:text-8xl text-pink-500"
          style={{
            fontFamily: "cursive",
            textShadow: "0 4px 15px rgba(255,105,180,0.4)",
          }}
        >
          Hey birthday boyyy
        </h1>

        <div className="text-5xl mt-6">🎂💖</div>

        <p className="mt-14 text-xl md:text-3xl text-gray-700">
          I made something really special for you...
        </p>

        <p className="mt-4 text-xl md:text-3xl text-gray-700">
          Wanna see it? ✨
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-14">
          <button
            onClick={() => setShowMessage(true)}
            className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-full text-xl shadow-lg transition-all"
          >
            Yes, show me 💖
          </button>

          <button
            onClick={() => setShowMessage(true)}
            className="bg-white border-2 border-pink-300 hover:bg-pink-50 text-pink-500 px-10 py-4 rounded-full text-xl shadow-lg transition-all"
          >
            Nope 😌
          </button>
        </div>

        {/* TEMP MESSAGE */}
        {showMessage && (
          <p className="mt-8 text-pink-500 text-lg md:text-xl animate-pulse font-medium">
            Preparing your surprise... 💖✨
          </p>
        )}

        <p className="mt-8 text-gray-500 italic text-sm md:text-lg mb-20">
          (Choosing NO may have consequences 😉)
        </p>
      </div>

      {/* MUSIC BUTTON */}
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 bg-white shadow-xl px-5 py-4 rounded-full text-lg z-50"
      >
        {isPlaying ? "🎵 Music On" : "🔇 Music Off"}
      </button>
    </div>
  );
}
