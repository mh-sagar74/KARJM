import { Box, Grid2, Typography } from "@mui/material";
import ImageSlideshowCard from "./components/imageSlideshowCard/ImageSlideshowCard";
import PrayerTimeCard from "./components/prayerTimeCard/PrayerTimeCard";
import EidUpdateCard from "./components/eidUpdateCard/EidUpdateCard";

export default function Home() {
  return (
    <Box>
      <Typography gutterBottom>
        <span className="flex justify-center pb-5 text-4xl font-semibold">
          Khanjahan Ali Rahmatullah Jame Masjid (KARJM)
        </span>
      </Typography>
      <Grid2 container spacing={3} rowGap={6} className="justify-center">
        <Box className="w-[700px] shadow-lg rounded-md">
          <ImageSlideshowCard />
        </Box>
        <Box className="flex flex-col gap-12 w-[700px]">
          <Box className="p-5 h-[380px] shadow-lg rounded-md bg-gradient-to-r from-teal-400 to-yellow-200">
            <PrayerTimeCard />
          </Box>
          <Box className="p-5 h-[250px] shadow-lg rounded-md bg-red-50">
            <EidUpdateCard />
          </Box>
        </Box>
      </Grid2>
    </Box>
  );
}
