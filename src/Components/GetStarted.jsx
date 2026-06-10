import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import homeIllustration from "../media/illustration.png";
import CustomButton from "./CustomButton";

const GetStarted = () => {
  const [ref, visible] = useScrollReveal();

  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#17275F",
    height: "416px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 0, 3),
      width: "90%",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  }));

  return (
    <CustomBox
      ref={ref}
      className={`reveal ${visible ? "visible" : ""}`}
    >
      <CustomContainer>
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography
            sx={{ fontSize: { xs: "26px", md: "35px" }, color: "white", fontWeight: "700" }}
          >
            Featured Properties
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "14px", md: "16px" }, color: "#ccc", fontWeight: "500", my: 3 }}
          >
            Everything you need to know about houses!
          </Typography>

          <CustomButton
            backgroundColor="#fff"
            color="#17275F"
            buttonText="Get Started Now"
            getStartedBtn={true}
            navigateTo="/contact"
          />
        </Box>

        <img
          src={homeIllustration}
          alt="illustration"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </CustomContainer>
    </CustomBox>
  );
};

export default GetStarted;
