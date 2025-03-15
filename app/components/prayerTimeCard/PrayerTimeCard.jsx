"use client";

import { Box, Grid2, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function PrayerTimeCard() {
  const d = new Date();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const prayerNames = [
    "Prayer Name",
    "Fajr",
    "Duhur",
    "Asr",
    "Maghrib",
    "Isha",
    "Jumuah",
  ];

  const waqt = ["Waqt", "05:58", "01:00", "04:45", "06:15", "07:45", "12:20"];

  const prayerTimes = [
    "Prayer Time",
    "+15 min",
    "01:30",
    "05:00",
    "06:30",
    "08:15",
    "01:15",
  ];

  useEffect(() => {
    const cDate = d.getDate();
    const cMonth = d.getMonth();
    const cYear = d.getFullYear();

    setDate(
      (cDate < 10 ? "0" + cDate : cDate) +
        "/" +
        (cMonth < 10 ? "0" + cMonth : cMonth) +
        "/" +
        cYear
    );

    const cHour = d.getHours() % 12 || 12;
    const cMin = d.getMinutes();
    const cSec = d.getSeconds();

    const timer = setInterval(() => {
      setTime(
        (cHour < 10 ? "0" + cHour : cHour) +
          ":" +
          (cMin < 10 ? "0" + cMin : cMin) +
          ":" +
          (cSec < 10 ? "0" + cSec : cSec)
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <Box className="text-center">
      <Typography variant="h4" gutterBottom>
        Prayer Times
      </Typography>
      <Grid2 container spacing={4} rowGap={1} className="justify-center">
        <Typography gutterBottom>Today's Date - {date}</Typography>
        <Typography gutterBottom>Current Time - {time}</Typography>
      </Grid2>
      <Box className="flex justify-evenly mt-5">
        <Box>
          {prayerNames.map((name, i) => (
            <Box className="w-[100px]" key={i}>
              <Typography gutterBottom>
                <span className={`${i === 0 ? "font-semibold" : null}`}>
                  {name}
                </span>
              </Typography>
            </Box>
          ))}
        </Box>
        <Box>
          {waqt.map((w, i) => (
            <Box className="w-[100px]" key={i}>
              <Typography gutterBottom>
                <span className={`${i === 0 ? "font-semibold" : null}`}>
                  {w}
                </span>
              </Typography>
            </Box>
          ))}
        </Box>
        <Box>
          {prayerTimes.map((prayer, i) => (
            <Box className="w-[100px]" key={i}>
              <Typography gutterBottom>
                <span className={`${i === 0 ? "font-semibold" : null}`}>
                  {prayer}
                </span>
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
