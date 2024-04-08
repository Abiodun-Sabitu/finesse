import { useState, useEffect } from "react";

const useCountdownTimer = (start) => {
  const [timeLeft, setTimeLeft] = useState(start);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft("");
      return;
    }

    const intervalId = setInterval(() => {
      // Update the timeLeft state by decrementing it.
      //Use the functional update form to ensure we always have the latest state value.
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]); //This tells React to re-run the effect whenever timeLeft changes.

  return timeLeft;
};

export default useCountdownTimer;
