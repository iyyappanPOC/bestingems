"use client";

import { useCallback, useEffect, useState } from "react";
import { lato } from "@/components/utils/fontUtils";

const Timer = () => {
  const [countDownTime, setCountDownTIme] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownTime - currentTime;
    let days =
      Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
        ? Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))
        : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
        : `0${Math.floor(
            (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;
    const minutes =
      Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))
        : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDiffrence % (60 * 1000)) / 1000)
        : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
    if (timeDiffrence < 0) {
      setCountDownTIme({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval();
    } else {
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth(),
      customDate.getDate() + 1,
      customDate.getHours(),
      customDate.getMinutes(),
      customDate.getSeconds() + 1
    );

    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, []);

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);

  return (
    <div className="flex gap-5 lg:gap-3 text-center">
      <div
        className={`size-12 flex flex-col p-2 bg-white rounded ${lato.className}`}
      >
        <span className="text-sm">{countDownTime?.days}</span>
        <span className="text-xs">
          {countDownTime?.days == 1 ? "Day" : "Days"}
        </span>
      </div>
      <div className="size-12 flex flex-col p-2 bg-white rounded text-xs">
        <span className="text-sm">{countDownTime?.hours}</span>
        <span className="text-xs">
          {countDownTime?.hours == 1 ? "Hour" : "Hours"}
        </span>
      </div>
      <div className="size-12 flex flex-col p-2 bg-white rounded text-xs">
        <span className="text-sm">{countDownTime?.minutes}</span>
        <span className="text-xs">
          {countDownTime?.minutes == 1 ? "Min" : "Mins"}
        </span>
      </div>
      <div className="size-12 flex flex-col p-2 bg-white rounded text-xs">
        <span className="text-sm">{countDownTime?.seconds}</span>
        <span className="text-xs">
          {countDownTime?.seconds == 1 ? "Sec" : "Secs"}
        </span>
      </div>
    </div>
  );
};

export default Timer;
