import { Box, Grid2, Typography } from "@mui/material";
import ImageSlideshowCard from "./components/imageSlideshowCard/ImageSlideshowCard";
import PrayerTimeCard from "./components/prayerTimeCard/PrayerTimeCard";
import EidUpdateCard from "./components/eidUpdateCard/EidUpdateCard";
import Iframe from "./components/iframe/Iframe";
import About from "./components/about/About";

export default function Home() {
  return (
    <Box>
      <Typography gutterBottom>
        <span className="flex justify-center pb-5 text-4xl font-semibold">
          Khanjahan Ali Rahmatullah Jame Masjid (KARJM)
        </span>
      </Typography>
      <Grid2 container spacing={4} rowGap={6} className="justify-center">
        <Box className="w-[700px] shadow-lg rounded-md">
          <ImageSlideshowCard />
        </Box>
        <Box className="p-5 w-[600px] shadow-lg rounded-md bg-red-50 bg-stone-200">
          <About />
        </Box>
        <Box className="w-[650px] rounded-md">
          <Iframe />
        </Box>
        <Box className="flex flex-col gap-12 w-[600px]">
          <Box className="p-5 h-[380px] shadow-lg rounded-md bg-gradient-to-r from-teal-400 to-yellow-200">
            <PrayerTimeCard />
          </Box>
          <Box className="p-5 h-[200px] shadow-lg rounded-md bg-red-50 bg-stone-200">
            <EidUpdateCard />
          </Box>
        </Box>
      </Grid2>
    </Box>
  );
}
