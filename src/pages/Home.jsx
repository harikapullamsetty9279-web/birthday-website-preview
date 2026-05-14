import { useState, useEffect, useRef } from "react";
import dreamyMusic from "../assets/music/dreamy.mp3";
import sittingTogether from "../assets/stickers/sitting_together-removebg-preview.png";
import huggingSticker from "../assets/stickers/hugging-removebg-preview.png";

function Home() {
  const isMobile = window.innerWidth < 768;

  const navigateBlocked = () => {
    setShowPreparing(true);
  };

  const targetDate = new Date("2026-05-18T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [musicPlaying, setMusicPlaying] = useState(true);
  const [showPreparing, setShowPreparing] = useState(false);

  // FLOW STATES
  const [showCountdown, setShowCountdown] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showStickers, setShowStickers] = useState(false);

  const audioRef = useRef(new Audio(dreamyMusic));

  // COUNTDOWN
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // PAGE FLOW
  useEffect(() => {
    setTimeout(() => setShowCountdown(true), 300);
    setTimeout(() => setShowMainContent(true), 1400);
    setTimeout(() => setShowButtons(true), 2400);
    setTimeout(() => setShowStickers(true), 3200);
  }, []);

  // Music
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;

      const playMusic = async () => {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Autoplay blocked until user interaction");
        }
      };

      playMusic();

      const startMusicOnFirstClick = async () => {
        if (audioRef.current && audioRef.current.paused) {
          try {
            await audioRef.current.play();
            setIsPlaying(true);
          } catch (err) {
            console.log(err);
          }
        }

        document.removeEventListener("click", startMusicOnFirstClick);
      };

      document.addEventListener("click", startMusicOnFirstClick);

      return () => {
        document.removeEventListener("click", startMusicOnFirstClick);
      };
    }
  }, []);

  // MUSIC
  const toggleMusic = () => {
    if (musicPlaying) {
      audioRef.current.pause();
      setMusicPlaying(false);
    } else {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
      audioRef.current.play();
      setMusicPlaying(true);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #fbe4ec, #f3ddff)",
        backgroundBlendMode: "soft-light",
        overflow: "hidden",
        position: "relative",
        padding: "40px 20px 90px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* MUSIC BUTTON */}

      <button
        onClick={toggleMusic}
        style={{
          position: "fixed",
          top: isMobile ? "18px" : "32px",
          right: isMobile ? "18px" : "20px",
          padding: isMobile ? "12px 18px" : "12px 20px",
          borderRadius: "30px",
          border: "none",
          background: "white",
          boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
          cursor: "pointer",
          fontSize: isMobile ? "15px" : "16px",
          zIndex: 999,
        }}
      >
        {musicPlaying ? "🎵 Music On" : "🔇 Music Off"}
      </button>

      {/* STICKERS */}

      {showStickers && (
        <>
          {/* TOP LEFT HUGGING */}
          <img
            src={huggingSticker}
            alt="hugging sticker"
            style={{
              position: "absolute",
              top: isMobile ? "500px" : "145px",
              left: isMobile ? "6px" : "240px",
              width: isMobile ? "82px" : "125px",
              zIndex: 2,

              opacity: showStickers ? 1 : 0,
              transform: showStickers ? "translateY(0px)" : "translateY(20px)",

              transition: "all 1.2s ease",
              transitionDelay: "0.2s",
            }}
          />

          {/* TOP HEART */}
          <div
            style={{
              position: "absolute",
              top: isMobile ? "410px" : "155px",
              left: isMobile ? "6px" : "40px",
              fontSize: isMobile ? "30px" : "28px",

              opacity: showStickers ? 1 : 0,
              transform: showStickers ? "translateY(0px)" : "translateY(15px)",

              transition: "all 1s ease",
              transitionDelay: "0.5s",
            }}
          >
            💖
          </div>

          {/* TOP SPARKLE */}
          <div
            style={{
              position: "absolute",
              top: isMobile ? "585px" : "190px",
              right: isMobile ? "12px" : "60px",
              fontSize: isMobile ? "26px" : "24px",

              opacity: showStickers ? 1 : 0,
              transform: showStickers ? "translateY(0px)" : "translateY(15px)",

              transition: "all 1.2s ease",
              transitionDelay: "0.8s",
            }}
          >
            ✨
          </div>

          {/* BOTTOM BUTTERFLY */}
          <div
            style={{
              position: "absolute",
              bottom: isMobile ? "185px" : "120px",
              left: isMobile ? "18px" : "50px",
              fontSize: isMobile ? "26px" : "26px",

              opacity: showStickers ? 1 : 0,
              transform: showStickers ? "translateY(0px)" : "translateY(15px)",

              transition: "all 1.3s ease",
              transitionDelay: "1.1s",
            }}
          >
            🦋
          </div>

          {/* BOTTOM FLOWER */}
          <div
            style={{
              position: "absolute",
              bottom: isMobile ? "185px" : "150px",
              right: isMobile ? "10px" : "80px",
              fontSize: isMobile ? "20px" : "22px",

              opacity: showStickers ? 1 : 0,
              transform: showStickers ? "translateY(0px)" : "translateY(15px)",

              transition: "all 1.4s ease",
              transitionDelay: "1.4s",
            }}
          >
            🌸
          </div>

          {/* SITTING STICKER */}
          <img
            src={sittingTogether}
            alt="sitting sticker"
            style={{
              position: "absolute",
              bottom: isMobile ? "250px" : "105px",
              right: isMobile ? "105px" : "240px",
              width: isMobile ? "84px" : "145px",
              zIndex: 2,

              opacity: showStickers ? 1 : 0,
              transform: showStickers ? "translateY(0px)" : "translateY(20px)",

              transition: "all 1.5s ease",
              transitionDelay: "1.7s",
            }}
          />
        </>
      )}

      {/* COUNTDOWN */}

      {showCountdown && (
        <div
          style={{
            textAlign: "center",
            marginTop: isMobile ? "120px" : "35px",
            animation: "fadeDown 1s ease forwards",
          }}
        >
          <h1
            style={{
              color: "#ff3fa4",
              fontSize: isMobile ? "1.85rem" : "2.9rem",
              lineHeight: isMobile ? "1.15" : "1.12",
              fontWeight: "700",
              marginBottom: "18px",
              padding: "0 10px",
              maxWidth: isMobile ? "320px" : "none",
              margin: "0 auto 18px",
            }}
          >
            Counting down to my special day 🎂💖
          </h1>

          <p
            style={{
              color: "#555",
              fontSize: isMobile ? "0.9rem" : "1.05rem",
              marginBottom: isMobile ? "34px" : "34px",
              padding: "0 15px",
            }}
          >
            ...and a little surprise made with love ✨
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: isMobile ? "12px" : "20px",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255,255,255,0.32)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,255,255,0.5)",
                  padding: isMobile ? "12px 8px" : "14px 12px",
                  borderRadius: "24px",
                  width: isMobile ? "82px" : "82px",
                  boxShadow: "0 10px 30px rgba(255, 182, 193, 0.12)",
                  animation: "flipCard 0.8s ease",
                  transformStyle: "preserve-3d",
                }}
              >
                <h2
                  key={item.value}
                  style={{
                    color: "#ff3fa4",
                    fontSize: isMobile ? "2rem" : "1.7rem",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    textShadow: "0 0 10px rgba(255,105,180,0.12)",
                    margin: 0,
                    animation: "flipNumber 0.6s ease",
                    transformOrigin: "center",
                    display: "inline-block",
                  }}
                >
                  {String(item.value).padStart(2, "0")}
                </h2>

                <p
                  style={{
                    color: "#666",
                    marginTop: "10px",
                    fontSize: isMobile ? "0.95rem" : "1rem",
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}

      {showMainContent && (
        <div
          style={{
            textAlign: "center",
            marginTop: isMobile ? "25px" : "25px",
            animation: "fadeUp 1.5s ease forwards",
          }}
        >
          <div style={{ fontSize: "36px" }}>💌</div>

          <h1
            style={{
              fontSize: isMobile ? "2.2rem" : "3.4rem",
              lineHeight: isMobile ? "1.15" : "1.05",
              maxWidth: isMobile ? "320px" : "none",
              marginLeft: "auto",
              marginRight: "auto",
              color: "#ff3fa4",
              fontFamily: "cursive",
              margin: "20px 0",
              textShadow: "0 3px 12px rgba(255, 105, 180, 0.22)",
              padding: "0 10px",
            }}
          >
            Hey birthday boyyy
          </h1>

          <div style={{ fontSize: "42px" }}>🎂💖</div>

          <p
            style={{
              marginTop: "55px",
              fontSize: isMobile ? "1.5rem" : "1.45rem",
              color: "#444",
              padding: "0 15px",
              lineHeight: "1.3",
            }}
          >
            I made something really special for you...
          </p>

          <p
            style={{
              fontSize: isMobile ? "1.4rem" : "1.3rem",
              color: "#444",
              marginTop: "2px",
            }}
          >
            Wanna see it? ✨
          </p>
        </div>
      )}

      {/* BUTTONS */}

      {showButtons && (
        <>
          <div
            style={{
              marginTop: isMobile ? "34px" : "42px",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
              animation: "fadeUp 2s ease forwards",
            }}
          >
            <button
              onClick={navigateBlocked}
              style={{
                padding: isMobile ? "12px 24px" : "13px 28px",
                width: isMobile ? "82%" : "auto",
                maxWidth: "320px",
                borderRadius: "40px",
                border: "none",
                background: "linear-gradient(to right, #ff4fae, #ff66c4)",
                color: "white",
                fontSize: "1.05rem",
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(255, 105, 180, 0.22)",
              }}
            >
              Yes, show me 💖
            </button>

            <button
              onClick={navigateBlocked}
              style={{
                padding: isMobile ? "10px 20px" : "12px 26px",
                width: isMobile ? "82%" : "auto",
                maxWidth: "320px",
                borderRadius: "40px",
                border: "2px solid #ff7bc7",
                background: "white",
                color: "#ff4fae",
                fontSize: "1.05rem",
                cursor: "pointer",
              }}
            >
              Nope 😏
            </button>
          </div>

          {/* PREPARING TEXT */}

          {showPreparing && (
            <p
              style={{
                textAlign: "center",
                marginTop: "20px",
                color: "#ff3fa4",
                fontWeight: "400",
                opacity: 0.75,
                fontSize: isMobile ? "1.6rem" : "1.2rem",
                animation: "fadeUp 1s ease forwards",
                padding: "0 10px",
              }}
            >
              Preparing your surprise... 💖✨
            </p>
          )}

          {/* WARNING */}

          <p
            style={{
              textAlign: "center",
              marginTop: "8px",
              color: "#666",
              fontStyle: "italic",
              fontSize: isMobile ? "0.82rem" : "1.02rem",
              maxWidth: "340px",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: "1.4",
              animation: "fadeUp 2.2s ease forwards",
              padding: "0 10px",
            }}
          >
            (Choosing NO may have consequences 😌)
          </p>
        </>
      )}

      {/* ANIMATIONS */}

      <style>
        {`
          @keyframes fadeDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes flipCard {
            0% {
              transform: rotateX(90deg);
              opacity: 0.4;
            }

            100% {
              transform: rotateX(0deg);
              opacity: 1;
            }
          }
          @keyframes flipNumber {
            0% {
              transform: rotateX(90deg);
              opacity: 0.3;
            }

            50% {
              transform: rotateX(-10deg);
            }

            100% {
              transform: rotateX(0deg);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;
