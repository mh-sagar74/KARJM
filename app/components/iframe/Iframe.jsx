import { Grid2, Typography } from "@mui/material";

export default function Iframe() {
  return (
    <Grid2 container>
      <Typography variant="h4" gutterBottom>
        Location on Google map
      </Typography>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3677.8531074864522!2d89.54632825674024!3d22.807906240854507!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff855513719a15%3A0x1238fdb92e036604!2sKhanjahan%20Ali%20Rahmatullah%20Jame%20Masjid!5e0!3m2!1sen!2sus!4v1741898954703!5m2!1sen!2sus"
        width="700"
        height="650"
        className="rounded-md shadow-lg"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </Grid2>
  );
}
