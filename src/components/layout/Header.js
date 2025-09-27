import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useScrollTrigger,
  Container,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Recycling,
  AccountCircle,
  Home,
  Info,
  Help,
  ContactMail,
  Login,
  AppRegistration,
  Dashboard,
  ExitToApp,
} from "@mui/icons-material";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";
import CustomButton from "../ui/CustomButton";
import Image from "next/image";

const Header = () => {
  const { user, logout } = useAuth();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const menuItems = [
    { label: "Beranda", href: "/", icon: <Home /> },
    { label: "Tentang", href: "/about", icon: <Info /> },
    { label: "FAQ", href: "/faq", icon: <Help /> },
    { label: "Kontak", href: "/contact", icon: <ContactMail /> },
  ];

  const [value, setValue] = useState(0);

  return (
    <>
      {/* AppBar untuk desktop */}
      <AppBar
        position="sticky"
        elevation={trigger ? 4 : 0}
        sx={{
          bgcolor: "background.paper",
          color: "text.primary",
          transition: "all 0.3s ease",
          display: { xs: "none", md: "block" },
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <Link href="/" passHref>
                <Image
                  src="/logo-v1.png" // path file logo kamu (taruh di folder /public)
                  alt="Setorin.id Logo"
                  width={112}
                  height={40}
                  style={{
                    marginRight: "8px",
                    height: "auto",
                    width: "auto",
                    cursor: "pointer",
                  }}
                />
              </Link>
            </Box>

            {/* Menu desktop */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
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
          </Toolbar>
        </Container>
      </AppBar>

      {/* BottomNavigation untuk mobile */}
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: { xs: "block", md: "none" },
          zIndex: 1200,
        }}
        elevation={3}
      >
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
        >
          {menuItems.map((item, index) => (
            <BottomNavigationAction
              key={item.label}
              label={item.label}
              icon={item.icon}
              component={Link}
              href={item.href}
            />
          ))}

          {user ? (
            <>
              <BottomNavigationAction
                label="Dashboard"
                icon={<Dashboard />}
                component={Link}
                href="/dashboard"
              />
              <BottomNavigationAction
                label="Keluar"
                icon={<ExitToApp />}
                onClick={logout}
              />
            </>
          ) : (
            <>
              <BottomNavigationAction
                label="Masuk"
                icon={<Login />}
                component={Link}
                href="/auth/login"
              />
              {/* <BottomNavigationAction
                label="Daftar"
                icon={<AppRegistration />}
                component={Link}
                href="/auth/register"
              /> */}
            </>
          )}
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default Header;
