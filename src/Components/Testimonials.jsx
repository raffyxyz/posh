import { Avatar, Box, Rating, styled, Typography } from "@mui/material";
import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import { testimonials } from "../properties";

const Testimonials = () => {
  const [ref, visible] = useScrollReveal();

  const TestimonialBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(4),
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const Card = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    padding: theme.spacing(4),
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    flex: 1,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
    },
  }));

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#F5FAFE" }}>
      <Box sx={{ textAlign: "center", px: 2 }}>
        <Typography
          variant="h3"
          sx={{ fontSize: { xs: "26px", md: "35px" }, fontWeight: "bold", color: "#000339" }}
        >
          What Our Clients Say
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#5A6473", fontSize: { xs: "14px", md: "16px" }, mt: 1 }}
        >
          Hear from our happy homeowners and investors
        </Typography>
      </Box>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 3, md: 2 } }}>
        <TestimonialBox
          ref={ref}
          className={`reveal ${visible ? "visible" : ""}`}
        >
          {testimonials.map((t, i) => (
            <Card
              key={t.id}
              sx={{
                animation: visible ? `fadeInUp 0.6s ease ${i * 0.15}s both` : "none",
              }}
            >
              <Rating value={t.rating} readOnly sx={{ mb: 2 }} />
              <Typography
                variant="body2"
                sx={{
                  color: "#5A6473",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  mb: 3,
                  fontStyle: "italic",
                }}
              >
                "{t.text}"
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar sx={{ bgcolor: "#0F1B4C", width: 48, height: 48 }}>
                  {t.name.charAt(0)}
                </Avatar>
                <Box>
                  <Typography sx={{ fontWeight: "700", fontSize: "16px", color: "#000339" }}>
                    {t.name}
                  </Typography>
                  <Typography sx={{ color: "#7A7A7E", fontSize: "14px" }}>
                    {t.role}
                  </Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </TestimonialBox>
      </Box>
    </Box>
  );
};

export default Testimonials;
