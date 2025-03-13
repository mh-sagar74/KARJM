import { Box } from "@mui/material";
import PrayerTimeCard from "../components/prayerTimeCard/PrayerTimeCard";

export default function PrayerTimePage() {
  return (
    <Box className="p-5 shadow-lg rounded-md bg-gradient-to-r from-teal-400 to-yellow-200">
      <PrayerTimeCard />
    </Box>
  );
}
