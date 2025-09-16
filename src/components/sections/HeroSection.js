import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import Image from "next/image";

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        backgroundImage: isMobile
          ? 'url("/hero-mobile3.png")' // gambar kecil untuk HP
          : 'url("/hero-desktop.png")', // gambar besar untuk web/desktop
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay gelap */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.6)",
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{
              mt: { xs: 5, md: 5 },
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                  fontWeight: 700,
                  background:
                    "linear-gradient(45deg, #ffffff 30%, #00ff88 90%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mt: { xs: 5, md: 35 }, // How to adjust top margin on mobile
                }}
              >
                Kelola Sampah dan Minyak Jelantah Jadi Lebih Mudah &
                Menguntungkan
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 3, opacity: 0.9, color: "white" }}
              >
                Platform inovatif untuk mengelola sampah rumah tangga, dapatkan
                penghasilan tambahan dan jadilah bagian dari solusi lingkungan.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button variant="contained" color="secondary" size="large">
                  Daftar Sekarang
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ color: "white", borderColor: "white" }}
                  startIcon={<PlayArrow />}
                >
                  Lihat Demo
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative", height: 400 }}>
                <Image
                  src={isMobile ? "/hero-mobile.png" : "/hero-desktop.png"} // asset berbeda
                  alt="Setorin.id App"
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;
