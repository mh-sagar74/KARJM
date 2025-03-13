import { Box, Grid2, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Box className="p-5 shadow-lg rounded-md bg-red-50 bg-stone-200">
      <Typography variant="h4" gutterBottom>
        <span className="text-center block">Contact Us</span>
      </Typography>
      <Grid2 container className="justify-center" spacing={40} rowGap={10}>
        <Box>
          <Typography variant="h5" gutterBottom>
            Email us
          </Typography>
          <Typography variant="body1" gutterBottom>
            karjm@gmail.com
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" gutterBottom>
            FaceBook
          </Typography>
          <Typography variant="body1" gutterBottom>
            Contact us on FaceBook
          </Typography>
        </Box>
      </Grid2>
    </Box>
  );
}
