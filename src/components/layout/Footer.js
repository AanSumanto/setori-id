import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";
import Image from "next/image";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              <Box
                component="span"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Image
                  src="/logo.png" // path file logo kamu (taruh di folder /public)
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
              </Box>
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Platform inovatif untuk pengelolaan sampah yang berkelanjutan.
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Mari bersama-sama menciptakan lingkungan yang lebih bersih dan
              masyarakat yang sejahtera.
            </Typography>

            {/* Social Media */}
            <Box sx={{ mt: 2 }}>
              <IconButton
                sx={{
                  color: "white",
                  mr: 1,
                  "&:hover": { bgcolor: "primary.dark" },
                }}
                aria-label="Facebook"
              >
                <Facebook />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  mr: 1,
                  "&:hover": { bgcolor: "primary.dark" },
                }}
                aria-label="Twitter"
              >
                <Twitter />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  mr: 1,
                  "&:hover": { bgcolor: "primary.dark" },
                }}
                aria-label="Instagram"
              >
                <Instagram />
              </IconButton>
              <IconButton
                sx={{ color: "white", "&:hover": { bgcolor: "primary.dark" } }}
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Perusahaan
            </Typography>
            <Link
              href="/about"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 1 }}
            >
              <Typography
                variant="body2"
                sx={{ opacity: 0.9, "&:hover": { opacity: 1 } }}
              >
                Tentang Kami
              </Typography>
            </Link>
            <Link
              href="/contact"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 1 }}
            >
              <Typography
                variant="body2"
                sx={{ opacity: 0.9, "&:hover": { opacity: 1 } }}
              >
                Kontak
              </Typography>
            </Link>
            <Link
              href="/careers"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 1 }}
            >
              <Typography
                variant="body2"
                sx={{ opacity: 0.9, "&:hover": { opacity: 1 } }}
              >
                Karir
              </Typography>
            </Link>
            <Link
              href="/blog"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 1 }}
            >
              <Typography
                variant="body2"
                sx={{ opacity: 0.9, "&:hover": { opacity: 1 } }}
              >
                Blog
              </Typography>
            </Link>
          </Grid>

          {/* Layanan */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Layanan
            </Typography>
            <Link
              href="/services/individual"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 1 }}
            >
              <Typography
                variant="body2"
                sx={{ opacity: 0.9, "&:hover": { opacity: 1 } }}
              >
                Untuk Individu
              </Typography>
            </Link>
            <Link
              href="/services/cluster"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 1 }}
            >
              <Typography
                variant="body2"
                sx={{ opacity: 0.9, "&:hover": { opacity: 1 } }}
              >
                Untuk RT/RW
              </Typography>
            </Link>
            <Link
              href="/services/pengepul"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 1 }}
            >
              <Typography
                variant="body2"
                sx={{ opacity: 0.9, "&:hover": { opacity: 1 } }}
              >
                Untuk Pengepul
              </Typography>
            </Link>
            <Link
              href="/services/business"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 1 }}
            >
              <Typography
                variant="body2"
                sx={{ opacity: 0.9, "&:hover": { opacity: 1 } }}
              >
                Untuk Bisnis
              </Typography>
            </Link>
          </Grid>

          {/* Support */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Dukungan
            </Typography>
            <Link
              href="/faq"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 1 }}
            >
              <Typography
                variant="body2"
                sx={{ opacity: 0.9, "&:hover": { opacity: 1 } }}
              >
                FAQ
              </Typography>
            </Link>
            <Link
              href="/help-center"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 1 }}
            >
              <Typography
                variant="body2"
                sx={{ opacity: 0.9, "&:hover": { opacity: 1 } }}
              >
                Pusat Bantuan
              </Typography>
            </Link>
            <Link
              href="/privacy"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 1 }}
            >
              <Typography
                variant="body2"
                sx={{ opacity: 0.9, "&:hover": { opacity: 1 } }}
              >
                Kebijakan Privasi
              </Typography>
            </Link>
            <Link
              href="/terms"
              color="inherit"
              underline="hover"
              display="block"
              sx={{ mb: 1 }}
            >
              <Typography
                variant="body2"
                sx={{ opacity: 0.9, "&:hover": { opacity: 1 } }}
              >
                Syarat & Ketentuan
              </Typography>
            </Link>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Kontak
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Email sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                info@setorin.id
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Phone sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                +62 711 7101234
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
              <LocationOn sx={{ mr: 1, fontSize: 20, mt: 0.5 }} />
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Jl. Green Tech No. 1
                <br />
                Palembang Sumatera Selatan, 30161
                <br />
                Indonesia
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: "rgba(255,255,255,0.2)" }} />

        {/* Copyright */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              opacity: 0.8,
              textAlign: isMobile ? "center" : "left",
              mb: isMobile ? 2 : 0,
            }}
          >
            © {new Date().getFullYear()} Setorin.id. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link href="/privacy" color="inherit" underline="hover">
              <Typography
                variant="body2"
                sx={{ opacity: 0.8, "&:hover": { opacity: 1 } }}
              >
                Kebijakan Privasi
              </Typography>
            </Link>
            <Link href="/terms" color="inherit" underline="hover">
              <Typography
                variant="body2"
                sx={{ opacity: 0.8, "&:hover": { opacity: 1 } }}
              >
                Syarat & Ketentuan
              </Typography>
            </Link>
            <Link href="/sitemap" color="inherit" underline="hover">
              <Typography
                variant="body2"
                sx={{ opacity: 0.8, "&:hover": { opacity: 1 } }}
              >
                Sitemap
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
