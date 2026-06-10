import { Box, styled, Typography } from "@mui/material";
import React from "react";
import bedroomsIcon from "../media/bedroomsIcon.png";
import bathroomsIcon from "../media/bathroomsIcon.png";
import spaceIcon from "../media/spaceIcon.png";

const House = ({ img, price, address, bedrooms, bathrooms, space }) => {
  const HouseBox = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    maxWidth: 350,
    width: "100%",
    backgroundColor: "#fff",
    margin: theme.spacing(0, 2, 0, 2),
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
    },
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  const InfoBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));

  const ImgContainer = styled(Box)(() => ({
    width: "100%",
    overflow: "hidden",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  }));

  return (
    <HouseBox>
      <ImgContainer>
        <img
          src={img}
          alt="housePhoto"
          style={{ maxWidth: "100%", display: "block", transition: "transform 0.3s ease" }}
        />
      </ImgContainer>

      <Box sx={{ padding: "1rem" }}>
        <Typography variant="body2" sx={{ fontWeight: "700", fontSize: "18px", color: "#0F1B4C" }}>
          ${price}
        </Typography>
        <Typography variant="body2" sx={{ my: 2, color: "#5A6473", fontSize: { xs: "13px", sm: "14px" } }}>
          {address}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <InfoBox>
            <img src={bedroomsIcon} alt="bedroomsIcon" />
            <Typography variant="body2" sx={{ mt: 1, color: "#7B8087", fontSize: { xs: "12px", sm: "14px" } }}>
              {bedrooms} Beds
            </Typography>
          </InfoBox>

          <InfoBox>
            <img src={bathroomsIcon} alt="bathroomssIcon" />
            <Typography variant="body2" sx={{ mt: 1, color: "#7B8087", fontSize: { xs: "12px", sm: "14px" } }}>
              {bathrooms} Baths
            </Typography>
          </InfoBox>

          <InfoBox>
            <img src={spaceIcon} alt="spaceIcon" />
            <Typography variant="body2" sx={{ mt: 1, color: "#7B8087", fontSize: { xs: "12px", sm: "14px" } }}>
              {space} sqft
            </Typography>
          </InfoBox>
        </Box>
      </Box>
    </HouseBox>
  );
};

export default House;
