import { Box, styled, Typography } from "@mui/material";
import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

import buyIcon from "../media/buy_icon.png";
import sellIcon from "../media/sell_icon.png";
import rentIcon from "../media/rent_icon.png";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomButton from "./CustomButton";

const Guide = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal();

  const CustomBox = styled(Box)(({ theme }) => ({}));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, md: 0 },
      }}
    >
      <Box
        ref={titleRef}
        className={`reveal ${titleVisible ? "visible" : ""}`}
        sx={{ textAlign: "center" }}
      >
        <div
          style={{
            width: "5%",
            height: "5px",
            backgroundColor: "#000339",
            margin: "0 auto",
          }}
        ></div>
        <Typography
          variant="h3"
          sx={{ fontSize: { xs: "26px", md: "35px" }, fontWeight: "bold", color: "#000339", my: 3 }}
        >
          How it works?
        </Typography>

        <CustomBox>
          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#5A6473",
              textAlign: "center",
            }}
          >
            Everything you need to know when you want to buy, rent or sell - All
            in one place
          </Typography>
        </CustomBox>
      </Box>

      <GuidesBox
        ref={cardsRef}
        className={`reveal ${cardsVisible ? "visible" : ""}`}
      >
        <GuideBox>
          <img src={buyIcon} alt="buyIcon" />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: { xs: "18px", md: "20px" },
              color: "#3B3c45",
              my: 1,
            }}
          >
            Buying Guides
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
              How to buy
            </Typography>
            <ArrowRightAltIcon style={{ color: "#0689FF" }} />
          </Box>
        </GuideBox>

        <GuideBox>
          <img src={rentIcon} alt="buyIcon" />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: { xs: "18px", md: "20px" },
              color: "#3B3c45",
              my: 1,
            }}
          >
            Renting Guides
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
              How to rent
            </Typography>
            <ArrowRightAltIcon style={{ color: "#0689FF" }} />
          </Box>
        </GuideBox>

        <GuideBox>
          <img src={sellIcon} alt="buyIcon" />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: { xs: "18px", md: "20px" },
              color: "#3B3c45",
              my: 1,
            }}
          >
            Selling Guides
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
              How to sell
            </Typography>
            <ArrowRightAltIcon style={{ color: "#0689FF" }} />
          </Box>
        </GuideBox>
      </GuidesBox>

      <Box sx={{ mt: 4 }}>
        <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="See Full Guides"
          guideBtn={true}
          navigateTo="/properties"
        />
      </Box>
    </Box>
  );
};

export default Guide;
