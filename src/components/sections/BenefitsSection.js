import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  alpha,
} from "@mui/material";
import {
  AccessTime,
  AttachMoney,
  Compost,
  LocalShipping,
  Security,
  SupportAgent,
} from "@mui/icons-material";

const benefits = [
  {
    icon: <AccessTime sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Hemat Waktu",
    description:
      "Proses penjemputan sampah yang cepat dan terjadwal tanpa perlu antri.",
  },
  {
    icon: <AttachMoney sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Harga Transparan",
    description:
      "Sistem pricing yang jelas dan kompetitif untuk setiap jenis sampah yang Anda setor.",
  },
  {
    icon: <Compost sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Ramah Lingkungan",
    description:
      "Berkontribusi langsung pada pengurangan limbah dan pelestarian lingkungan.",
  },
  {
    icon: <LocalShipping sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Penjemputan Door-to-Door",
    description:
      "Kami yang menjemput sampah Anda langsung dari lokasi yang Anda tentukan.",
  },
  {
    icon: <Security sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Transaksi Aman",
    description:
      "Sistem pembayaran yang terjamin keamanannya dan tercatat dengan rapi.",
  },
  {
    icon: <SupportAgent sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Dukungan 24/7",
    description:
      "Tim customer service siap membantu Anda kapan pun dibutuhkan.",
  },
];

const BenefitsSection = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Mengapa Memilih Setorin.id?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 600,
              mx: "auto",
              fontSize: { xs: "0.9rem", md: "1rem" },
              px: { xs: 2, md: 0 },
            }}
          >
            Platform revolusioner yang mengubah cara Anda mengelola sampah
            dengan berbagai keuntungan eksklusif
          </Typography>
        </Box>

        {/* Cards Grid - Pakai CSS Grid langsung */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 3, md: 4 },
            alignItems: "stretch",
          }}
        >
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              sx={{
                height: "100%",
                minHeight: { xs: "200px", sm: "220px", md: "240px" },
                p: { xs: 1.5, md: 2 },
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: (theme) =>
                    `0 12px 20px ${alpha(theme.palette.primary.main, 0.15)}`,
                },
              }}
            >
              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  p: { xs: 2, md: 3 },
                  "&:last-child": { pb: { xs: 2, md: 3 } },
                }}
              >
                {/* Icon */}
                <Box sx={{ mb: { xs: 2, md: 3 } }}>{benefit.icon}</Box>

                {/* Title */}
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    mb: { xs: 1.5, md: 2 },
                    fontWeight: 600,
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                  }}
                >
                  {benefit.title}
                </Typography>

                {/* Description - fixed height untuk konsistensi */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    flex: 1,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    lineHeight: 1.5,
                    fontSize: { xs: "0.85rem", md: "0.875rem" },
                    minHeight: "2.6em", // Tinggi untuk 2 baris
                  }}
                >
                  {benefit.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Bottom text */}
        <Box sx={{ textAlign: "center", mt: { xs: 6, md: 8 } }}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontStyle: "italic",
              fontSize: { xs: "0.9rem", md: "1rem" },
              px: { xs: 2, md: 0 },
            }}
          >
            Bergabung dengan{" "}
            <Box
              component="span"
              sx={{ color: "primary.main", fontWeight: 600 }}
            >
              10.000+
            </Box>{" "}
            pengguna yang telah mempercayakan pengelolaan sampah mereka kepada
            kami
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default BenefitsSection;
