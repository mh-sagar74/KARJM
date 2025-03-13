"use client";

import { Box } from "@mui/material";
import img1 from "@/public/Image1.jpg";
import img2 from "@/public/Image2.jpg";
import img3 from "@/public/Image3.jpg";
import { useEffect, useState } from "react";
import Image from "next/legacy/image";

export default function ImageSlideshowCard() {
  const [selectedImage, setSelectedImage] = useState(0);
  const allImages = [img1, img2, img3];

  useEffect(() => {
    setInterval(() => {
      setSelectedImage((selectedImage) =>
        selectedImage < 2 ? selectedImage + 1 : 0
      );
    }, 4000);
  }, []);

  return (
    <Box>
      <Box className="h-[680px] relative">
        <Image
          height={0}
          width={0}
          alt="Image"
          src={allImages[selectedImage]}
          layout="fill"
          objectFit="cover"
          priority
          style={{ borderRadius: "5px" }}
        />
      </Box>
    </Box>
  );
}
