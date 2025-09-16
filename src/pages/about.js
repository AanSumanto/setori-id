// import {
//   Container,
//   Typography,
//   Box,
//   Grid,
//   Card,
//   CardContent,
// } from "@mui/material";
// import { Groups, Public } from "@mui/icons-material";
// import Layout from "../components/layout/Layout";

// const About = () => {
//   return (
//     <Layout>
//       <Container maxWidth="lg" sx={{ py: 6 }}>
//         <Typography variant="h3" component="h1" gutterBottom align="center">
//           Tentang Setorin.id
//         </Typography>
//         <Typography
//           variant="h6"
//           color="textSecondary"
//           align="center"
//           sx={{ mb: 6, maxWidth: 800, mx: "auto" }}
//         >
//           Platform inovatif yang menghubungkan masyarakat, pengepul, dan pelaku
//           daur ulang untuk menciptakan ekonomi sirkular yang berkelanjutan.
//         </Typography>

//         <Grid container spacing={4} sx={{ mb: 6 }}>
//           <Grid item xs={12} md={4}>
//             <Card sx={{ height: "100%", textAlign: "center" }}>
//               <CardContent>
//                 {/* <Eco sx={{ fontSize: 60, color: "primary.main", mb: 2 }} /> */}
//                 <Typography variant="h5" gutterBottom>
//                   Misi Lingkungan
//                 </Typography>
//                 <Typography>
//                   Mengurangi timbunan sampah dengan memfasilitasi pengelolaan
//                   limbah rumah tangga yang bertanggung jawab.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Card sx={{ height: "100%", textAlign: "center" }}>
//               <CardContent>
//                 <Groups sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
//                 <Typography variant="h5" gutterBottom>
//                   Pemberdayaan Masyarakat
//                 </Typography>
//                 <Typography>
//                   Memberikan insentif ekonomi bagi masyarakat yang aktif
//                   berpartisipasi dalam program daur ulang.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <Card sx={{ height: "100%", textAlign: "center" }}>
//               <CardContent>
//                 <Public sx={{ fontSize: 60, color: "primary.main", mb: 2 }} />
//                 <Typography variant="h5" gutterBottom>
//                   {" "}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>

//         <Box sx={{ bgcolor: "grey.50", p: 4, borderRadius: 2 }}>
//           <Typography variant="h4" gutterBottom align="center">
//             Visi Kami
//           </Typography>
//           <Typography align="center" sx={{ maxWidth: 800, mx: "auto" }}>
//             Menjadi platform terdepan dalam transformasi pengelolaan sampah di
//             Indonesia, menciptakan dampak positif bagi lingkungan dan masyarakat
//             melalui teknologi yang inovatif dan mudah diakses oleh semua
//             kalangan.
//           </Typography>
//         </Box>
//       </Container>
//     </Layout>
//   );
// };

// export default About;

import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { Groups, Public, Compost } from "@mui/icons-material";
import Layout from "../components/layout/Layout";

const About = () => {
  // const features = [
  //   {
  //     icon: (
  //       <Compost
  //         sx={{ fontSize: { xs: 40, md: 60 }, color: "primary.main", mb: 2 }}
  //       />
  //     ),
  //     title: "Misi Lingkungan",
  //     description:
  //       "Mengurangi timbunan sampah dengan memfasilitasi pengelolaan limbah rumah tangga yang bertanggung jawab.",
  //   },
  //   {
  //     icon: (
  //       <Groups
  //         sx={{ fontSize: { xs: 40, md: 60 }, color: "primary.main", mb: 2 }}
  //       />
  //     ),
  //     title: "Pemberdayaan Masyarakat",
  //     description:
  //       "Memberikan insentif ekonomi bagi masyarakat yang aktif berpartisipasi dalam program daur ulang.",
  //   },
  //   {
  //     icon: (
  //       <Public
  //         sx={{ fontSize: { xs: 40, md: 60 }, color: "primary.main", mb: 2 }}
  //       />
  //     ),
  //     title: "Dampak Global",
  //     description:
  //       "Mendukung terciptanya ekonomi sirkular berkelanjutan yang memberikan manfaat luas bagi lingkungan dan generasi mendatang.",
  //   },
  // ];

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

        <Grid container spacing={4} sx={{ mb: { xs: 4, md: 6 } }}>
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

        {/* <Grid container spacing={4} sx={{ mb: { xs: 4, md: 6 } }}>
           
          <Grid item xs={12}>
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

         
          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <Card
              sx={{
                flex: 1,
                textAlign: "center",
                p: 2,
                borderRadius: 3,
                boxShadow: 3,
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

          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <Card
              sx={{
                flex: 1,
                textAlign: "center",
                p: 2,
                borderRadius: 3,
                boxShadow: 3,
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
        </Grid> */}

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
