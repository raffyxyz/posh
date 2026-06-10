import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import InfoIcon from "@mui/icons-material/Info";
import logoImg from "../media/logo.png";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState({ left: false });
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgColor = isHome
    ? scrolled ? "#ffffff" : "transparent"
    : "#ffffff";

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }
    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const navItems = [
    { label: "Home", path: "/", icon: <HomeIcon /> },
    { label: "About", path: "/about", icon: <InfoIcon /> },
    { label: "Properties", path: "/properties", icon: <ListAltIcon /> },
    { label: "Services", path: "/services", icon: <MiscellaneousServicesIcon /> },
    { label: "Contact", path: "/contact", icon: <ContactsIcon /> },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      color: "#0F1B4C",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const ActiveNavLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
  }));

  return (
    <Box
      sx={{
        backgroundColor: bgColor,
        boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.08)" : "none",
        position: "sticky",
        top: 0,
        zIndex: 1100,
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <NavbarContainer>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CustomMenuIcon onClick={toggleDrawer("left", true)} />
            <Drawer
              anchor="left"
              open={mobileMenu["left"]}
              onClose={toggleDrawer("left", false)}
            >
              {list("left")}
            </Drawer>
            <Link to="/">
              <NavbarLogo src={logoImg} alt="logo" />
            </Link>
          </Box>

          <NavbarLinksBox>
            {navItems.map((item) => (
              <ActiveNavLink
                key={item.label}
                to={item.path}
                style={{
                  color: location.pathname === item.path ? "#0F1B4C" : "#4F5361",
                  fontWeight: "bold",
                  fontSize: "14px",
                  borderBottom: location.pathname === item.path ? "2px solid #0F1B4C" : "2px solid transparent",
                  paddingBottom: "4px",
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >
                {item.label}
              </ActiveNavLink>
            ))}
          </NavbarLinksBox>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <NavLink variant="body2">Sign Up</NavLink>
          <CustomButton
            backgroundColor="#0F1B4C"
            color="#fff"
            buttonText="Register"
          />
        </Box>
      </NavbarContainer>
    </Box>
  );
};

export default Navbar;
