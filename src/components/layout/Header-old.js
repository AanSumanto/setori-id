import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useScrollTrigger,
  Container,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Recycling,
  AccountCircle,
} from "@mui/icons-material";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";
import CustomButton from "../ui/CustomButton";

const HeaderOlds = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuth();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontak", href: "/contact" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} component="a" href={item.href}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        {user ? (
          <>
            <ListItem component="a" href="/dashboard">
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={logout}>
              <ListItemText primary="Keluar" />
            </ListItem>
          </>
        ) : (
          <>
            <ListItem component="a" href="/auth/login">
              <ListItemText primary="Masuk" />
            </ListItem>
            <ListItem component="a" href="/auth/register">
              <ListItemText primary="Daftar" />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={trigger ? 4 : 0}
        sx={{
          bgcolor: "background.paper",
          color: "text.primary",
          transition: "all 0.3s ease",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <Recycling sx={{ color: "primary.main", mr: 1 }} />
              <Typography
                variant="h6"
                component="a"
                href="/"
                sx={{
                  fontWeight: 700,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Setorin.id
              </Typography>
            </Box>

            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  sx={{ color: "text.primary", mx: 0.5 }}
                >
                  {item.label}
                </Button>
              ))}

              {user ? (
                <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
                  <IconButton href="/dashboard" sx={{ mr: 1 }}>
                    <AccountCircle />
                  </IconButton>
                  <CustomButton variant="outlined" onClick={logout}>
                    Keluar
                  </CustomButton>
                </Box>
              ) : (
                <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
                  <Button href="/auth/login" sx={{ mx: 0.5 }}>
                    Masuk
                  </Button>
                  <CustomButton
                    variant="contained"
                    href="/auth/register"
                    sx={{ ml: 1 }}
                  >
                    Daftar
                  </CustomButton>
                </Box>
              )}
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" }, ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default HeaderOlds;
