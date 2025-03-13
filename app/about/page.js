import { Box } from "@mui/material";
import About from "../components/about/About";

export default function page() {
  return (
    <Box className="p-5 shadow-lg rounded-md bg-red-50 bg-stone-200">
      <About />
    </Box>
  );
}
