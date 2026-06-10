import { Box, Container, Grid, styled, Typography } from "@mui/material";
import React from "react";
import PropertyBanner from "../Components/PropertyBanner";
import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GavelIcon from "@mui/icons-material/Gavel";
import KeyIcon from "@mui/icons-material/Key";
import HandshakeIcon from "@mui/icons-material/Handshake";
import BuildIcon from "@mui/icons-material/Build";

const ServicesPage = () => {
  const services = [
    {
      icon: <HomeIcon sx={{ fontSize: 48 }} />,
      title: "Home Buying",
      desc: "Comprehensive support for first-time buyers and seasoned investors alike. We help you find, evaluate, and secure your ideal property.",
    },
    {
      icon: <KeyIcon sx={{ fontSize: 48 }} />,
      title: "Property Rental",
      desc: "Find the perfect rental property with our extensive database. From apartments to luxury villas, we have options for every budget.",
    },
    {
      icon: <GavelIcon sx={{ fontSize: 48 }} />,
      title: "Property Selling",
      desc: "Get the best value for your property with our strategic marketing, professional staging, and expert negotiation services.",
    },
    {
      icon: <AssessmentIcon sx={{ fontSize: 48 }} />,
      title: "Market Analysis",
      desc: "Data-driven market analysis to help you make informed decisions. We provide detailed reports on pricing trends and neighborhood insights.",
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 48 }} />,
      title: "Investment Consulting",
      desc: "Expert guidance on real estate investment strategies. Maximize your returns with our portfolio optimization advice.",
    },
    {
      icon: <BuildIcon sx={{ fontSize: 48 }} />,
      title: "Property Management",
      desc: "Full-service property management for landlords. We handle tenant screening, maintenance, and everything in between.",
    },
  ];

  const ServiceCard = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    padding: theme.spacing(4),
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    textAlign: "center",
    height: "100%",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
    },
  }));

  return (
    <>
      <PropertyBanner
        title="Our Services"
        subtitle="Comprehensive real estate services tailored to your needs — from buying and selling to property management."
      />

      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#F5FAFE" }}>
        <Container>
          <Grid container spacing={4}>
            {services.map((s) => (
              <Grid item xs={12} sm={6} md={4} key={s.title}>
                <ServiceCard>
                  <Box sx={{ color: "#0F1B4C", mb: 2 }}>{s.icon}</Box>
                  <Typography
                    sx={{ fontSize: { xs: "18px", md: "20px" }, fontWeight: "bold", color: "#000339", mb: 2 }}
                  >
                    {s.title}
                  </Typography>
                  <Typography sx={{ color: "#5A6473", fontSize: { xs: "14px", md: "15px" }, lineHeight: 1.7 }}>
                    {s.desc}
                  </Typography>
                </ServiceCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#0F1B4C" }}>
        <Container sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{ fontSize: { xs: "26px", md: "35px" }, fontWeight: "bold", color: "#fff", mb: 3 }}
          >
            Ready to Get Started?
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#ccc", fontSize: { xs: "14px", md: "16px" }, mb: 4, maxWidth: "600px", mx: "auto", px: 2 }}
          >
            Contact us today for a free consultation. Our team is ready to help you with all your real estate needs.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default ServicesPage;
