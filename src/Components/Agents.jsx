import { Box, styled, Typography, Avatar } from "@mui/material";
import React from "react";
import { agents } from "../properties";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Agents = () => {
  const AgentsBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(4),
    marginTop: theme.spacing(5),
    flexWrap: "wrap",
  }));

  const AgentCard = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    padding: theme.spacing(4),
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    textAlign: "center",
    width: "100%",
    maxWidth: 260,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
    },
  }));

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Box sx={{ textAlign: "center", px: 2 }}>
        <Typography
          variant="h3"
          sx={{ fontSize: { xs: "26px", md: "35px" }, fontWeight: "bold", color: "#000339" }}
        >
          Meet Our Agents
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#5A6473", fontSize: { xs: "14px", md: "16px" }, mt: 1 }}
        >
          Expert real estate professionals ready to help you
        </Typography>
      </Box>
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 2, md: 2 } }}>
        <AgentsBox>
          {agents.map((agent) => (
            <AgentCard key={agent.id}>
              <Avatar
                src={agent.image}
                alt={agent.name}
                sx={{ width: 100, height: 100, mx: "auto", mb: 2, border: "3px solid #E6F0FF" }}
              />
              <Typography sx={{ fontWeight: "700", fontSize: "18px", color: "#000339" }}>
                {agent.name}
              </Typography>
              <Typography sx={{ color: "#0689FF", fontSize: "14px", mb: 2 }}>
                {agent.role}
              </Typography>
              <Typography sx={{ color: "#5A6473", fontSize: "14px", mb: 2 }}>
                {agent.sales}+ Properties Sold
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                <a href={`tel:${agent.phone}`} style={{ color: "#0F1B4C" }}>
                  <PhoneIcon />
                </a>
                <a href={`mailto:${agent.email}`} style={{ color: "#0F1B4C" }}>
                  <EmailIcon />
                </a>
              </Box>
            </AgentCard>
          ))}
        </AgentsBox>
      </Box>
    </Box>
  );
};

export default Agents;
