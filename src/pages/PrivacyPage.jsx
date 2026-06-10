import { Box, Container, Typography } from "@mui/material";
import React from "react";
import PropertyBanner from "../Components/PropertyBanner";

const PrivacyPage = () => {
  return (
    <>
      <PropertyBanner
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
      />

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          {[
            { title: "1. Information We Collect", content: "We collect information you provide directly, such as your name, email address, phone number, and property preferences. We also automatically collect certain technical information when you visit our website." },
            { title: "2. How We Use Your Information", content: "We use your information to provide and improve our real estate services, communicate with you about properties and listings, send marketing communications (with your consent), and comply with legal obligations." },
            { title: "3. Data Sharing", content: "We may share your information with real estate agents, property sellers, and service providers as necessary to facilitate property transactions. We do not sell your personal information to third parties." },
            { title: "4. Data Security", content: "We implement industry-standard security measures to protect your personal information. However, no method of electronic storage or transmission is 100% secure, and we cannot guarantee absolute security." },
            { title: "5. Your Rights", content: "You have the right to access, update, or delete your personal information. You may opt out of marketing communications at any time. Contact us to exercise these rights." },
            { title: "6. Cookies", content: "We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings." },
          ].map((s) => (
            <Box key={s.title} sx={{ mb: 4, px: { xs: 1, md: 0 } }}>
              <Typography sx={{ fontSize: { xs: "18px", md: "20px" }, fontWeight: "bold", color: "#000339", mb: 1 }}>
                {s.title}
              </Typography>
              <Typography sx={{ color: "#5A6473", fontSize: { xs: "14px", md: "16px" }, lineHeight: 1.8 }}>
                {s.content}
              </Typography>
            </Box>
          ))}
        </Container>
      </Box>
    </>
  );
};

export default PrivacyPage;
