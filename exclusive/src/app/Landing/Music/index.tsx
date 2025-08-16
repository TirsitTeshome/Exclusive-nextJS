import React, { useEffect, useState } from "react";

const MusicBanner: React.FC = () => {
  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set countdown target date/time (example: 5 days from now)
  const countdownDate = new Date();
  countdownDate.setDate(countdownDate.getDate() + 5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(intervalId);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdownDate]);

  const pad = (num: number) => num.toString().padStart(2, "0");

  return (
    <section className="w-3/4 m-auto relative bg-black text-white min-h-[360px] flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 gap-8 md:gap-16 overflow-hidden">
      {/* Left Side Text */}
      <div className="flex flex-col gap-6 max-w-xl w-full">
        <span className="text-green-500 font-semibold tracking-wide">Categories</span>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Enhance Your <br /> Music Experience
        </h1>

        {/* Countdown */}
        <div className="flex gap-6">
          {[
            { label: "Days", value: pad(timeLeft.days) },
            { label: "Hours", value: pad(timeLeft.hours) },
            { label: "Minutes", value: pad(timeLeft.minutes) },
            { label: "Seconds", value: pad(timeLeft.seconds) },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-white text-black font-bold shadow-lg"
            >
              <span className="text-lg">{value}</span>
              <span className="text-xs font-normal uppercase">{label}</span>
            </div>
          ))}
        </div>

        {/* Buy Now Button */}
        <button className="mt-4 px-8 py-3 bg-green-500 hover:bg-green-600 rounded-md font-semibold transition-colors duration-300 w-max">
          Buy Now!
        </button>
      </div>

      {/* Right Side Image */}
      <div className="relative w-full max-w-lg">
        <img
          src="/speaker" 
          alt="JBL Speaker"
          className="w-full object-contain"
          style={{ filter: "drop-shadow(0 0 30px rgba(0,0,0,0.9))" }}
        />
        {/* Optional black gradient overlay behind product */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default MusicBanner;
