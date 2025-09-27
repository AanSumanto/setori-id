import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
} from "@mui/material";
import {
  Groups,
  Public,
  Compost,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import Layout from "../components/layout/Layout";

const About = () => {
  const founders = [
    {
      name: "Pratama",
      role: "CEO & Co-Founder",
      image: "/CEO.png",
      bio: "Passionate environmental engineer dengan 8+ tahun pengalaman dalam sustainability dan waste management.",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Aan Sumanto",
      role: "CTO & Co-Founder",
      image: "/CTO.png",
      bio: "Tech innovator dengan background AI dan machine learning.",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Faisal",
      role: "COO & Co-Founder",
      image: "/CFO.png",
      bio: "Business strategist dengan track record membangun startup.",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        {/* Heading */}
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          align="center"
          sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: 700 }}
        >
          Tentang Setorin.id
        </Typography>

        {/* Subheading */}
        <Typography
          variant="h6"
          color="textSecondary"
          align="center"
          sx={{
            mb: { xs: 4, md: 6 },
            maxWidth: 800,
            mx: "auto",
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
          Platform inovatif yang menghubungkan masyarakat, pengepul, dan pelaku
          daur ulang untuk menciptakan ekonomi sirkular yang berkelanjutan.
        </Typography>

        {/* Features Section */}
        <Grid container spacing={4} sx={{ mb: { xs: 6, md: 8 } }}>
          {/* Misi Lingkungan full width */}
          <Grid size={{ xs: 12, md: 12 }}>
            <Card
              sx={{
                height: "100%",
                textAlign: "center",
                p: 2,
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Compost
                  sx={{
                    fontSize: { xs: 40, md: 60 },
                    color: "primary.main",
                    mb: 2,
                  }}
                />
                <Typography variant="h5" gutterBottom fontWeight={600}>
                  Misi Lingkungan
                </Typography>
                <Typography color="text.secondary">
                  Mengurangi timbunan sampah dengan memfasilitasi pengelolaan
                  limbah rumah tangga yang bertanggung jawab.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Pemberdayaan Masyarakat & Dampak Global sejajar */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: "100%",
                textAlign: "center",
                p: 2,
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Groups
                  sx={{
                    fontSize: { xs: 40, md: 60 },
                    color: "primary.main",
                    mb: 2,
                  }}
                />
                <Typography variant="h5" gutterBottom fontWeight={600}>
                  Pemberdayaan Masyarakat
                </Typography>
                <Typography color="text.secondary">
                  Memberikan insentif ekonomi bagi masyarakat yang aktif
                  berpartisipasi dalam program daur ulang.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: "100%",
                textAlign: "center",
                p: 2,
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Public
                  sx={{
                    fontSize: { xs: 40, md: 60 },
                    color: "primary.main",
                    mb: 2,
                  }}
                />
                <Typography variant="h5" gutterBottom fontWeight={600}>
                  Dampak Global
                </Typography>
                <Typography color="text.secondary">
                  Mendukung terciptanya ekonomi sirkular berkelanjutan yang
                  memberikan manfaat luas bagi lingkungan dan generasi
                  mendatang.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Founders Section */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              fontWeight: 700,
              mb: { xs: 2, md: 3 },
            }}
          >
            Para Pendiri
          </Typography>

          <Typography
            variant="h6"
            color="textSecondary"
            align="center"
            sx={{
              mb: { xs: 4, md: 6 },
              maxWidth: 600,
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            Tim visioner yang berdedikasi menciptakan masa depan yang lebih
            berkelanjutan
          </Typography>

          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {founders.map((founder, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    boxShadow: 2,
                    border: "1px solid",
                    borderColor: "grey.100",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 8,
                      borderColor: "primary.light",
                    },
                  }}
                >
                  {/* Full Photo with Overlay */}
                  <Box
                    sx={{
                      position: "relative",
                      height: { xs: 320, md: 380 },
                      backgroundImage: `url(${founder.image})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center top",
                      backgroundRepeat: "no-repeat",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          "linear-gradient(180deg, transparent 0%, transparent 40%, rgba(0,0,0,0.7) 100%)",
                      },
                    }}
                  >
                    {/* Content Overlay */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        p: { xs: 2, md: 3 },
                        color: "white",
                        zIndex: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        gutterBottom
                        fontWeight={700}
                        sx={{
                          fontSize: { xs: "1.1rem", md: "1.25rem" },
                          mb: 0.5,
                        }}
                      >
                        {founder.name}
                      </Typography>

                      <Typography
                        variant="subtitle1"
                        sx={{
                          mb: 1,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          color: "rgba(255,255,255,0.9)",
                        }}
                      >
                        {founder.role}
                      </Typography>

                      {/* Social Links */}
                      <Stack direction="row" spacing={1}>
                        <Box
                          component="a"
                          href={founder.linkedin}
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 32,
                            height: 32,
                            borderRadius: "50%",
                            bgcolor: "rgba(255,255,255,0.2)",
                            backdropFilter: "blur(10px)",
                            color: "white",
                            textDecoration: "none",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              transform: "scale(1.1)",
                              bgcolor: "#0077B5",
                            },
                          }}
                        >
                          <LinkedIn sx={{ fontSize: 16 }} />
                        </Box>

                        <Box
                          component="a"
                          href={founder.twitter}
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 32,
                            height: 32,
                            borderRadius: "50%",
                            bgcolor: "rgba(255,255,255,0.2)",
                            backdropFilter: "blur(10px)",
                            color: "white",
                            textDecoration: "none",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              transform: "scale(1.1)",
                              bgcolor: "#1DA1F2",
                            },
                          }}
                        >
                          <Twitter sx={{ fontSize: 16 }} />
                        </Box>
                      </Stack>
                    </Box>
                  </Box>

                  {/* Bio Section */}
                  <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.6,
                        fontSize: { xs: "0.85rem", md: "0.9rem" },
                      }}
                    >
                      {founder.bio}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Vision Section */}
        <Box
          sx={{
            bgcolor: "grey.50",
            p: { xs: 3, md: 4 },
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, fontWeight: 700 }}
          >
            Visi Kami
          </Typography>
          <Typography
            sx={{
              maxWidth: 800,
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: "text.secondary",
            }}
          >
            Menjadi platform terdepan dalam transformasi pengelolaan sampah di
            Indonesia, menciptakan dampak positif bagi lingkungan dan masyarakat
            melalui teknologi yang inovatif dan mudah diakses oleh semua
            kalangan.
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
};

export default About;
