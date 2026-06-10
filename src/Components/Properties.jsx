import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import House from "./House";
import { properties } from "../properties";

const Properties = () => {
  const [ref, visible] = useScrollReveal();

  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  return (
      <Box
        ref={ref}
        className={`reveal ${visible ? "visible" : ""}`}
        sx={{ mt: 5, backgroundColor: "#F5FAFE", py: { xs: 6, md: 10 } }}
      >
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#000339", fontSize: { xs: "26px", md: "35px" }, fontWeight: "bold" }}
          >
            Featured Properties
          </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: { xs: "14px", md: "16px" }, mt: 1 }}>
            Everything you need to know when looking for a new home!
          </Typography>
        </PropertiesTextBox>

        <PropertiesBox>
          {properties.map((property, i) => (
            <Box
              key={property.id}
              sx={{
                animation: visible ? `fadeInUp 0.6s ease ${i * 0.15}s both` : "none",
                width: { xs: "100%", md: "auto" },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <House
                img={property.img}
                price={property.price}
                address={property.address}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                space={property.space}
              />
            </Box>
          ))}
        </PropertiesBox>
      </Container>
    </Box>
  );
};

export default Properties;
