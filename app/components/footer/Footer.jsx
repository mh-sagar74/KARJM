import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import karjm from "@/public/KARJM.png";

export default function Footer() {
  return (
    <Box className="bg-gray-200">
      <Grid2
        container
        spacing={10}
        className="justify-center pt-10 pb-10 mt-20">
        <Box>
          <Link href={"/"}>
            <Image src={karjm} alt="KARJM" height={60} width={0} priority />
          </Link>
          <Typography variant="subtitle2">
            Khanjahan Ali Rahmatullah Jame Masjid
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom>
            Location
          </Typography>
          <Typography variant="subtitle2">
            RG5X+59W, Haji Ismail Rd,
            <br /> Banargati Bazar, Khulna, Bangladesh
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom>
            Contacts
          </Typography>
          <Typography variant="subtitle2">FaceBook</Typography>
          <Typography variant="subtitle2">WhatsApp</Typography>
        </Box>
      </Grid2>
      <Typography variant="caption">
        <span className="text-center block bg-gray-400">
          &copy; KARJM 2025 - {new Date().getFullYear()}
        </span>
      </Typography>
    </Box>
  );
}
