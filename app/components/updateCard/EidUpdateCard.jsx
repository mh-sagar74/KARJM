import { Grid2, Typography } from "@mui/material";

export default function UpdateCard() {
  return (
    <Grid2 container className="justify-center" rowGap={3}>
      <Typography variant="h4" gutterBottom>
        Friday Khutba & Jamat
      </Typography>
      <Typography gutterBottom>Khutba @1:20pm & Jamat @1:30pm</Typography>
    </Grid2>
  );
}
