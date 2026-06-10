import { Box, Container, Grid, styled, Typography } from "@mui/material";
import React from "react";
import PropertyBanner from "../Components/PropertyBanner";
import Agents from "../Components/Agents";
import Testimonials from "../Components/Testimonials";
import houseCard from "../media/houseCard.png";

const AboutPage = () => {
  const SectionBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  return (
    <>
      <PropertyBanner
        title="About POSh"
        subtitle="Learn about our mission, our team, and why we're the most trusted real estate platform."
      />

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container>
          <SectionBox>
            <Box sx={{ flex: 1 }}>
              <img src={houseCard} alt="about" style={{ maxWidth: "100%", borderRadius: "12px" }} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "26px", md: "35px" }, fontWeight: "bold", color: "#000339", mb: 3 }}
              >
                Our Story
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#5A6473", fontSize: { xs: "14px", md: "16px" }, lineHeight: 1.8, mb: 2 }}
              >
                Founded in 2018, POSh (Property of Sale Home) started with a simple mission: 
                to make real estate accessible, transparent, and stress-free for everyone.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#5A6473", fontSize: { xs: "14px", md: "16px" }, lineHeight: 1.8, mb: 2 }}
              >
                What began as a small team of passionate real estate professionals has grown into 
                one of the most trusted property platforms, serving thousands of happy homeowners, 
                buyers, and investors across the country.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#5A6473", fontSize: { xs: "14px", md: "16px" }, lineHeight: 1.8 }}
              >
                We combine deep market expertise with innovative technology to help you find the 
                perfect property — whether it's your first home, your next investment, or your 
                dream retirement villa.
              </Typography>
            </Box>
          </SectionBox>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#F5FAFE" }}>
        <Container>
          <Box sx={{ textAlign: "center", mb: 6, px: 2 }}>
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "26px", md: "35px" }, fontWeight: "bold", color: "#000339" }}
            >
              Our Values
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              { title: "Trust", desc: "We build lasting relationships through transparency and honesty in every transaction." },
              { title: "Innovation", desc: "We leverage cutting-edge technology to provide you with the best property search experience." },
              { title: "Excellence", desc: "We strive for the highest standards in service, knowledge, and results." },
              { title: "Community", desc: "We're committed to strengthening the neighborhoods we serve." },
            ].map((v) => (
              <Grid item xs={12} sm={6} md={3} key={v.title}>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    p: 4,
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    textAlign: "center",
                    height: "100%",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "translateY(-5px)" },
                  }}
                >
                  <Typography
                    sx={{ fontSize: { xs: "18px", md: "20px" }, fontWeight: "bold", color: "#000339", mb: 2 }}
                  >
                    {v.title}
                  </Typography>
                  <Typography sx={{ color: "#5A6473", fontSize: { xs: "14px", md: "15px" }, lineHeight: 1.7 }}>
                    {v.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Agents />
      <Testimonials />
    </>
  );
};

export default AboutPage;
