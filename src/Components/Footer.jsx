import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/linkedinicon.png";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled(Link)(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    textDecoration: "none",
    lineHeight: "2",
    "&:hover": {
      color: "#000",
    },
  }));

  const columns = [
    {
      title: "Products",
      links: [
        { label: "Listing", to: "/properties" },
        { label: "Properties", to: "/properties" },
        { label: "Agents", to: "/about" },
        { label: "Blog", to: "/blog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Our Homes", to: "/properties" },
        { label: "Stories", to: "/about" },
        { label: "Video", to: "/about" },
        { label: "Free Trial", to: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Partnerships", to: "/about" },
        { label: "Terms of use", to: "/terms" },
        { label: "Privacy", to: "/privacy" },
        { label: "Sitemap", to: "/" },
      ],
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <CustomContainer>
        {columns.map((col) => (
          <Box key={col.title}>
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "20px" },
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              {col.title}
            </Typography>
            {col.links.map((link) => (
              <React.Fragment key={link.label}>
                <FooterLink to={link.to}>{link.label}</FooterLink>
                <br />
              </React.Fragment>
            ))}
          </Box>
        ))}

        <Box>
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "20px" },
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Get in touch
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#7A7A7E",
              fontWeight: "500",
              mb: 2,
            }}
          >
            You'll find your next home, in any style you prefer.
          </Typography>
          <IconBox>
            <img src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} />
            <img
              src={twitterIcon}
              alt="twitterIcon"
              style={{ cursor: "pointer" }}
            />
            <img
              src={linkedinIcon}
              alt="linkedinIcon"
              style={{ cursor: "pointer" }}
            />
          </IconBox>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
