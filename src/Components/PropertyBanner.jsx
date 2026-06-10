import { Box, Container, Typography } from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ContactsIcon from "@mui/icons-material/Contacts";

const icons = {
  About: <InfoIcon sx={{ fontSize: 56 }} />,
  Browse: <ListAltIcon sx={{ fontSize: 56 }} />,
  Services: <MiscellaneousServicesIcon sx={{ fontSize: 56 }} />,
  Contact: <ContactsIcon sx={{ fontSize: 56 }} />,
};

const PropertyBanner = ({ title, subtitle }) => {
  const iconKey = Object.keys(icons).find((k) => title.includes(k)) || "About";
  const IconComponent = icons[iconKey];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0F1B4C 0%, #1a2a6c 50%, #2d4373 100%)",
        py: { xs: 6, md: 12 },
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: "-30%", md: "-50%" },
          right: { xs: "-40%", md: "-20%" },
          width: { xs: "300px", md: "500px" },
          height: { xs: "300px", md: "500px" },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "-20%", md: "-30%" },
          left: { xs: "-20%", md: "-10%" },
          width: { xs: "180px", md: "300px" },
          height: { xs: "180px", md: "300px" },
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            color: "rgba(255,255,255,0.9)",
            mb: 2,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: 64, md: 80 },
            height: { xs: 64, md: 80 },
            borderRadius: "20px",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(4px)",
            animation: "scaleIn 0.6s ease",
            "& svg": { fontSize: { xs: 40, md: 56 } },
          }}
        >
          {IconComponent}
        </Box>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "28px", md: "44px" },
            fontWeight: "bold",
            color: "#fff",
            mb: 2,
            animation: "fadeInUp 0.6s ease 0.2s both",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "15px", md: "18px" },
            color: "rgba(255,255,255,0.75)",
            maxWidth: "600px",
            mx: "auto",
            lineHeight: 1.7,
            px: { xs: 2, md: 0 },
            animation: "fadeInUp 0.6s ease 0.4s both",
          }}
        >
          {subtitle}
        </Typography>
      </Container>
    </Box>
  );
};

export default PropertyBanner;
