import { Box, Button, Container, Grid, styled, TextField, Typography } from "@mui/material";
import React from "react";
import PropertyBanner from "../Components/PropertyBanner";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const ContactPage = () => {
  const ContactCard = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    backgroundColor: "#F5FAFE",
    padding: theme.spacing(3),
    borderRadius: "12px",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      textAlign: "left",
    },
  }));

  return (
    <>
      <PropertyBanner
        title="Contact Us"
        subtitle="Have a question or ready to find your dream property? Get in touch with our team."
      />

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "26px", md: "35px" }, fontWeight: "bold", color: "#000339", mb: 1 }}
              >
                Get In Touch
              </Typography>
              <Typography
                sx={{ color: "#5A6473", fontSize: { xs: "14px", md: "16px" }, mb: 4 }}
              >
                Fill out the form and our team will get back to you within 24 hours.
              </Typography>

              <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="First Name" variant="outlined" required />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Last Name" variant="outlined" required />
                  </Grid>
                </Grid>
                <TextField fullWidth label="Email" variant="outlined" type="email" required />
                <TextField fullWidth label="Phone" variant="outlined" type="tel" />
                <TextField fullWidth label="Subject" variant="outlined" />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={5}
                  required
                />
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#0F1B4C",
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "16px",
                    py: 1.5,
                    borderRadius: "8px",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#1a2a6c" },
                    width: { xs: "100%", md: "auto" },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "26px", md: "35px" }, fontWeight: "bold", color: "#000339", mb: 4 }}
              >
                Contact Information
              </Typography>

              <ContactCard>
                <LocationOnIcon sx={{ color: "#0F1B4C", fontSize: 32 }} />
                <Box>
                  <Typography sx={{ fontWeight: "700", color: "#000339" }}>Address</Typography>
                  <Typography sx={{ color: "#5A6473" }}>
                    123 Business Ave, Suite 100, New York, NY 10001
                  </Typography>
                </Box>
              </ContactCard>

              <ContactCard>
                <PhoneIcon sx={{ color: "#0F1B4C", fontSize: 32 }} />
                <Box>
                  <Typography sx={{ fontWeight: "700", color: "#000339" }}>Phone</Typography>
                  <Typography sx={{ color: "#5A6473" }}>(555) 000-1234</Typography>
                </Box>
              </ContactCard>

              <ContactCard>
                <EmailIcon sx={{ color: "#0F1B4C", fontSize: 32 }} />
                <Box>
                  <Typography sx={{ fontWeight: "700", color: "#000339" }}>Email</Typography>
                  <Typography sx={{ color: "#5A6473" }}>hello@posh.com</Typography>
                </Box>
              </ContactCard>

              <ContactCard>
                <AccessTimeIcon sx={{ color: "#0F1B4C", fontSize: 32 }} />
                <Box>
                  <Typography sx={{ fontWeight: "700", color: "#000339" }}>Working Hours</Typography>
                  <Typography sx={{ color: "#5A6473" }}>
                    Mon - Fri: 9:00 AM - 6:00 PM
                  </Typography>
                  <Typography sx={{ color: "#5A6473" }}>Sat: 10:00 AM - 4:00 PM</Typography>
                </Box>
              </ContactCard>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ContactPage;
