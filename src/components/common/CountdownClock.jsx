import { useEffect, useState } from "react";
import "./CountdownClock.css";

const getTimeLeft = (target) => {
  const difference = new Date(target).getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: true,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    expired: false,
  };
};

export default function CountdownClock({ target }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const updateCountdown = () => {
      setTimeLeft(getTimeLeft(target));
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [target]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  if (timeLeft.expired) {
    return (
      <div className="countdown-expired">
        <span>✧</span>
        <h3>The Celebration Has Begun!</h3>
        <p>Today marks the beginning of forever.</p>
      </div>
    );
  }

  return (
    <div
      className="countdown-clock"
      aria-label={`${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes and ${timeLeft.seconds} seconds remaining`}
    >
      {units.map((unit) => (
        <div className="countdown-unit" key={unit.label}>
          <div className="countdown-unit-inner">
            <strong className="countdown-value">
              {String(unit.value).padStart(2, "0")}
            </strong>

            <span className="countdown-unit-label">{unit.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
