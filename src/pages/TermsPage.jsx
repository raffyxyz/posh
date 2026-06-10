import { Box, Container, Typography } from "@mui/material";
import React from "react";
import PropertyBanner from "../Components/PropertyBanner";

const TermsPage = () => {
  return (
    <>
      <PropertyBanner
        title="Terms of Use"
        subtitle="Please read these terms carefully before using our services."
      />

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          {[
            { title: "1. Acceptance of Terms", content: "By accessing and using POSh (Property of Sale Home), you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you may not use our services." },
            { title: "2. Services Description", content: "POSh provides a platform for real estate listings, property information, and related services. We connect buyers, sellers, renters, and real estate professionals. All information provided on this platform is for general informational purposes only." },
            { title: "3. User Responsibilities", content: "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to provide accurate, current, and complete information when using our services." },
            { title: "4. Intellectual Property", content: "All content, trademarks, and intellectual property on this website are owned by POSh or our licensors. You may not reproduce, distribute, or create derivative works without our express written permission." },
            { title: "5. Limitation of Liability", content: "POSh shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our services. We make no warranties regarding the accuracy or completeness of property listings." },
            { title: "6. Changes to Terms", content: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes constitutes acceptance of the new terms." },
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

export default TermsPage;
