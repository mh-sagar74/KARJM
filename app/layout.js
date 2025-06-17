import { Roboto } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/system";
import karjm from "@/public/KARJM.png";
import Image from "next/image";
import Footer from "./components/footer/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "KARJM",
  description:
    "This website is created for Khanjahan Ali Rahmatullah Jame Masjid (KARJM)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Box className="bg-gradient-to-r from-yellow-200 to-pink-200 pt-3 pb-3 sticky top-0 z-50 shadow-sm">
          <Grid
            container
            sx={{
              justifyContent: "space-around",
              alignItems: "center",
              marginLeft: "20px",
              marginRight: "20px",
            }}
            spacing={2}>
            <Link href={"/"}>
              <Image src={karjm} alt="KARJM" height={60} width={0} priority />
            </Link>
            <Box sx={{ fontSize: "18px" }}>
              <Grid container columnGap={10} rowGap={2}>
                <Grid>
                  <Link href={"/"}>
                    <span className="p-2 rounded-sm bg-gradient-to-r hover:from-blue-200 hover:to-cyan-200 transition">
                      Home
                    </span>
                  </Link>
                </Grid>
                <Grid>
                  <Link href={"/prayer-time"}>
                    <span className="p-2 rounded-sm bg-gradient-to-r hover:from-blue-200 hover:to-cyan-200 transition">
                      Prayer Time
                    </span>
                  </Link>
                </Grid>
                <Grid>
                  <Link href={"/about"}>
                    <span className="p-2 rounded-sm bg-gradient-to-r hover:from-blue-200 hover:to-cyan-200 transition">
                      About
                    </span>
                  </Link>
                </Grid>
                <Grid>
                  <Link href={"/contact"}>
                    <span className="p-2 rounded-sm bg-gradient-to-r hover:from-blue-200 hover:to-cyan-200 transition">
                      Contact
                    </span>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Box>
        <Box className="ml-[20px] mr-[20px] mt-[20px] mb-[20px] p-5">
          <Suspense>{children}</Suspense>
          <Analytics />
          <SpeedInsights />
        </Box>
        <Box>
          <Footer />
        </Box>
      </body>
    </html>
  );
}
