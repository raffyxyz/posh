import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fab
      onClick={scrollToTop}
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        backgroundColor: "#0F1B4C",
        color: "#fff",
        opacity: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
        transition: "opacity 0.3s ease, visibility 0.3s ease",
        "&:hover": { backgroundColor: "#1a2a6c" },
        zIndex: 1000,
      }}
      size="small"
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
};

export default BackToTop;
