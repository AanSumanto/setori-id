// import {
//   Box,
//   Container,
//   Typography,
//   Stepper,
//   Step,
//   StepLabel,
//   StepContent,
//   Paper,
// } from "@mui/material";
// import {
//   Person as UserIcon,
//   Groups as ClusterIcon,
//   LocalShipping as PengepulIcon,
//   Recycling as RecyclerIcon,
//   TaskAlt as PlatformIcon,
// } from "@mui/icons-material";

// const steps = [
//   {
//     label: "User/Individu",
//     description:
//       "Pengguna individu membuat permintaan penjemputan sampah melalui aplikasi",
//     icon: <UserIcon sx={{ fontSize: { xs: 20, md: 24 }, color: "white" }} />,
//     details: "Pilih jenis sampah, tentukan jadwal, dan tunggu penjemputan",
//   },
//   {
//     label: "Cluster/RT-RW",
//     description: "Komunitas dapat mengumpulkan sampah secara kolektif",
//     icon: <ClusterIcon sx={{ fontSize: { xs: 20, md: 24 }, color: "white" }} />,
//     details:
//       "Koordinasi pengumpulan sampah di tingkat lingkungan untuk efisiensi maksimal",
//   },
//   {
//     label: "Platform Setorin.id",
//     description:
//       "Sistem kami menerima dan mendistribusikan permintaan ke pengepul terdekat",
//     icon: (
//       <PlatformIcon sx={{ fontSize: { xs: 20, md: 24 }, color: "white" }} />
//     ),
//     details: "Otomatis menghitung estimasi harga dan mencari pengepul optimal",
//   },
//   {
//     label: "Pengepul",
//     description:
//       "Pengepul menerima notifikasi dan menjemput sampah sesuai jadwal",
//     icon: (
//       <PengepulIcon sx={{ fontSize: { xs: 20, md: 24 }, color: "white" }} />
//     ),
//     details:
//       "Memverifikasi jenis dan berat sampah, kemudian melakukan pembayaran",
//   },
//   {
//     label: "Recycler",
//     description: "Sampah didistribusikan ke pihak daur ulang",
//     icon: (
//       <RecyclerIcon sx={{ fontSize: { xs: 20, md: 24 }, color: "white" }} />
//     ),
//     details:
//       "Proses daur ulang profesional untuk mengubah sampah menjadi produk baru",
//   },
// ];

// // Custom StepIcon Component
// const CustomStepIcon = ({ icon, index, isMobile = false }) => (
//   <Box
//     sx={{
//       width: isMobile ? 40 : { sm: 50, md: 60 },
//       height: isMobile ? 40 : { sm: 50, md: 60 },
//       borderRadius: "50%",
//       bgcolor: "primary.main",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       color: "white",
//       boxShadow: 2,
//     }}
//   >
//     {icon}
//   </Box>
// );

// const HowItWorks = () => {
//   return (
//     <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "grey.50" }}>
//       <Container maxWidth="lg">
//         {/* Header */}
//         <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
//           <Typography
//             variant="h3"
//             component="h2"
//             gutterBottom
//             sx={{
//               fontWeight: 700,
//               fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
//             }}
//           >
//             Bagaimana Cara Kerjanya?
//           </Typography>
//           <Typography
//             variant="body1"
//             color="text.secondary"
//             sx={{
//               maxWidth: 700,
//               mx: "auto",
//               fontSize: { xs: "0.9rem", md: "1rem" },
//               px: { xs: 2, md: 0 },
//             }}
//           >
//             Proses sederhana yang menghubungkan semua pihak dalam ekosistem
//             pengelolaan sampah
//           </Typography>
//         </Box>

//         {/* Desktop/Tablet Layout */}
//         <Box sx={{ display: { xs: "none", sm: "block" } }}>
//           {/* Horizontal Stepper */}
//           <Stepper
//             orientation="horizontal"
//             sx={{
//               mb: { sm: 6, md: 8 },
//               "& .MuiStepConnector-root": {
//                 top: { sm: 25, md: 30 },
//               },
//             }}
//           >
//             {steps.map((step, index) => (
//               <Step key={step.label} completed={false}>
//                 <StepLabel
//                   slotProps={{
//                     stepIcon: {
//                       children: (
//                         <CustomStepIcon icon={step.icon} index={index} />
//                       ),
//                     },
//                   }}
//                   sx={{
//                     "& .MuiStepLabel-label": {
//                       mt: 2,
//                       fontSize: { sm: "1rem", md: "1.25rem" },
//                       fontWeight: 600,
//                       maxWidth: { sm: "120px", md: "150px" },
//                       lineHeight: 1.2,
//                     },
//                   }}
//                 >
//                   {step.label}
//                 </StepLabel>
//               </Step>
//             ))}
//           </Stepper>

//           {/* Detail Cards */}
//           <Box
//             sx={{
//               display: "grid",
//               gridTemplateColumns: {
//                 sm: "repeat(2, 1fr)",
//                 md: "repeat(3, 1fr)",
//                 lg: "repeat(5, 1fr)",
//               },
//               gap: { sm: 3, md: 4 },
//               alignItems: "stretch",
//             }}
//           >
//             {steps.map((step, index) => (
//               <Paper
//                 key={index}
//                 elevation={3}
//                 sx={{
//                   p: { sm: 2.5, md: 3 },
//                   textAlign: "center",
//                   height: "100%",
//                   minHeight: { sm: "200px", md: "220px" },
//                   display: "flex",
//                   flexDirection: "column",
//                   borderRadius: 3,
//                   transition: "all 0.3s ease-in-out",
//                   "&:hover": {
//                     transform: "translateY(-4px)",
//                     boxShadow: 6,
//                   },
//                 }}
//               >
//                 <Box sx={{ mb: 2, color: "primary.main" }}>{step.icon}</Box>
//                 <Typography
//                   variant="h6"
//                   gutterBottom
//                   sx={{
//                     fontWeight: 600,
//                     fontSize: { sm: "1rem", md: "1.125rem" },
//                     mb: 1.5,
//                   }}
//                 >
//                   {step.label}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{
//                     mb: 2,
//                     flex: 1,
//                     fontSize: { sm: "0.8rem", md: "0.875rem" },
//                   }}
//                 >
//                   {step.description}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     fontStyle: "italic",
//                     fontSize: { sm: "0.75rem", md: "0.8rem" },
//                     color: "text.secondary",
//                     opacity: 0.8,
//                   }}
//                 >
//                   {step.details}
//                 </Typography>
//               </Paper>
//             ))}
//           </Box>
//         </Box>

//         {/* Mobile Layout */}
//         <Box sx={{ display: { xs: "block", sm: "none" } }}>
//           <Stepper orientation="vertical" sx={{ mb: 4 }}>
//             {steps.map((step, index) => (
//               <Step key={step.label} completed={false}>
//                 <StepLabel
//                   slotProps={{
//                     stepIcon: {
//                       children: (
//                         <CustomStepIcon
//                           icon={step.icon}
//                           index={index}
//                           isMobile
//                         />
//                       ),
//                     },
//                   }}
//                   sx={{
//                     "& .MuiStepLabel-label": {
//                       fontSize: "1.1rem",
//                       fontWeight: 600,
//                     },
//                   }}
//                 >
//                   {step.label}
//                 </StepLabel>
//                 <StepContent sx={{ pl: 6 }}>
//                   <Typography
//                     variant="body2"
//                     sx={{ mb: 2, fontSize: "0.9rem" }}
//                   >
//                     {step.description}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color="text.secondary"
//                     sx={{
//                       fontStyle: "italic",
//                       fontSize: "0.8rem",
//                       opacity: 0.8,
//                     }}
//                   >
//                     {step.details}
//                   </Typography>
//                 </StepContent>
//               </Step>
//             ))}
//           </Stepper>
//         </Box>

//         {/* Quick Steps Section */}
//         <Box sx={{ textAlign: "center", mt: { xs: 6, md: 10 } }}>
//           <Typography
//             variant="h5"
//             gutterBottom
//             sx={{
//               fontWeight: 600,
//               fontSize: { xs: "1.25rem", md: "1.5rem" },
//               mb: { xs: 3, md: 4 },
//             }}
//           >
//             Mulai dalam 3 Langkah Mudah
//           </Typography>

//           <Box
//             sx={{
//               display: "grid",
//               gridTemplateColumns: {
//                 xs: "1fr",
//                 sm: "repeat(3, 1fr)",
//               },
//               gap: { xs: 2, sm: 3 },
//               maxWidth: { xs: 300, sm: 600 },
//               mx: "auto",
//             }}
//           >
//             {[
//               { number: "1", text: "Daftar & Login" },
//               { number: "2", text: "Request Pickup" },
//               { number: "3", text: "Dapatkan Penghasilan Tambahan" },
//             ].map((item, index) => (
//               <Paper
//                 key={index}
//                 sx={{
//                   p: { xs: 2.5, md: 3 },
//                   bgcolor: "primary.main",
//                   color: "white",
//                   borderRadius: 3,
//                   transition: "transform 0.2s ease-in-out",
//                   "&:hover": {
//                     transform: "scale(1.02)",
//                   },
//                 }}
//               >
//                 <Typography
//                   variant="h3"
//                   sx={{
//                     fontWeight: 700,
//                     fontSize: { xs: "2rem", md: "2.5rem" },
//                     mb: 1,
//                   }}
//                 >
//                   {item.number}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     fontSize: { xs: "0.8rem", md: "0.875rem" },
//                     fontWeight: 500,
//                   }}
//                 >
//                   {item.text}
//                 </Typography>
//               </Paper>
//             ))}
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default HowItWorks;

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  StepButton,
  Paper,
  Collapse,
  IconButton,
} from "@mui/material";
import {
  Person as UserIcon,
  Groups as ClusterIcon,
  LocalShipping as PengepulIcon,
  Recycling as RecyclerIcon,
  TaskAlt as PlatformIcon,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";

const steps = [
  {
    label: "User/Individu",
    description:
      "Pengguna individu membuat permintaan penjemputan sampah melalui aplikasi",
    icon: <UserIcon sx={{ fontSize: { xs: 20, md: 24 }, color: "white" }} />,
    details: "Pilih jenis sampah, tentukan jadwal, dan tunggu penjemputan",
  },
  {
    label: "Cluster/RT-RW",
    description: "Komunitas dapat mengumpulkan sampah secara kolektif",
    icon: <ClusterIcon sx={{ fontSize: { xs: 20, md: 24 }, color: "white" }} />,
    details:
      "Koordinasi pengumpulan sampah di tingkat lingkungan untuk efisiensi maksimal",
  },
  {
    label: "Platform Setorin.id",
    description:
      "Sistem kami menerima dan mendistribusikan permintaan ke pengepul terdekat",
    icon: (
      <PlatformIcon sx={{ fontSize: { xs: 20, md: 24 }, color: "white" }} />
    ),
    details: "Otomatis menghitung estimasi harga dan mencari pengepul optimal",
  },
  {
    label: "Pengepul",
    description:
      "Pengepul menerima notifikasi dan menjemput sampah sesuai jadwal",
    icon: (
      <PengepulIcon sx={{ fontSize: { xs: 20, md: 24 }, color: "white" }} />
    ),
    details:
      "Memverifikasi jenis dan berat sampah, kemudian melakukan pembayaran",
  },
  {
    label: "Recycler",
    description: "Sampah didistribusikan ke pihak daur ulang",
    icon: (
      <RecyclerIcon sx={{ fontSize: { xs: 20, md: 24 }, color: "white" }} />
    ),
    details:
      "Proses daur ulang profesional untuk mengubah sampah menjadi produk baru",
  },
];

// Custom StepIcon Component
const CustomStepIcon = ({
  icon,
  index,
  isMobile = false,
  isActive = false,
}) => (
  <Box
    sx={{
      width: isMobile ? 40 : { sm: 50, md: 60 },
      height: isMobile ? 40 : { sm: 50, md: 60 },
      borderRadius: "50%",
      bgcolor: isActive ? "primary.main" : "grey.400",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      boxShadow: isActive ? 3 : 1,
      transition: "all 0.3s ease-in-out",
    }}
  >
    {icon}
  </Box>
);

const HowItWorks = () => {
  // State untuk mobile interactive stepper
  const [activeStep, setActiveStep] = useState(0);
  const [expandedSteps, setExpandedSteps] = useState(new Set([0])); // Step pertama expanded by default

  const handleStepClick = (stepIndex) => {
    const newExpanded = new Set(expandedSteps);
    if (expandedSteps.has(stepIndex)) {
      newExpanded.delete(stepIndex);
    } else {
      newExpanded.add(stepIndex);
    }
    setExpandedSteps(newExpanded);
    setActiveStep(stepIndex);
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "grey.50" }}>
      <Container maxWidth="lg">
        {/* Header */}
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
            Bagaimana Cara Kerjanya?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 700,
              mx: "auto",
              fontSize: { xs: "0.9rem", md: "1rem" },
              px: { xs: 2, md: 0 },
            }}
          >
            Proses sederhana yang menghubungkan semua pihak dalam ekosistem
            pengelolaan sampah
          </Typography>
        </Box>

        {/* Desktop/Tablet Layout - Static */}
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {/* Horizontal Stepper */}
          <Stepper
            orientation="horizontal"
            sx={{
              mb: { sm: 6, md: 8 },
              "& .MuiStepConnector-root": {
                top: { sm: 25, md: 30 },
              },
            }}
          >
            {steps.map((step, index) => (
              <Step key={step.label} completed={index < steps.length}>
                <StepLabel
                  slotProps={{
                    stepIcon: {
                      children: (
                        <CustomStepIcon
                          icon={step.icon}
                          index={index}
                          isActive={true}
                        />
                      ),
                    },
                  }}
                  sx={{
                    "& .MuiStepLabel-label": {
                      mt: 2,
                      fontSize: { sm: "1rem", md: "1.25rem" },
                      fontWeight: 600,
                      maxWidth: { sm: "120px", md: "150px" },
                      lineHeight: 1.2,
                    },
                  }}
                >
                  {step.label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* Detail Cards */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(5, 1fr)",
              },
              gap: { sm: 3, md: 4 },
              alignItems: "stretch",
            }}
          >
            {steps.map((step, index) => (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  p: { sm: 2.5, md: 3 },
                  textAlign: "center",
                  height: "100%",
                  minHeight: { sm: "200px", md: "220px" },
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Box sx={{ mb: 2, color: "primary.main" }}>{step.icon}</Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    fontSize: { sm: "1rem", md: "1.125rem" },
                    mb: 1.5,
                  }}
                >
                  {step.label}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 2,
                    flex: 1,
                    fontSize: { sm: "0.8rem", md: "0.875rem" },
                  }}
                >
                  {step.description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontStyle: "italic",
                    fontSize: { sm: "0.75rem", md: "0.8rem" },
                    color: "text.secondary",
                    opacity: 0.8,
                  }}
                >
                  {step.details}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>

        {/* Mobile Layout - Interactive */}
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center", fontStyle: "italic", mb: 3 }}
            >
              Tap pada setiap langkah untuk melihat detail
            </Typography>
          </Box>

          {steps.map((step, index) => {
            const isExpanded = expandedSteps.has(index);
            const isActive = activeStep === index;

            return (
              <Paper
                key={step.label}
                elevation={isActive ? 4 : 2}
                sx={{
                  mb: 2,
                  borderRadius: 3,
                  overflow: "hidden",
                  border: isActive ? "2px solid" : "1px solid",
                  borderColor: isActive ? "primary.main" : "grey.200",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                {/* Step Header - Clickable */}
                <Box
                  component="div"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleStepClick(index)}
                  sx={{
                    width: "100%",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    bgcolor: isActive ? "primary.light" : "background.paper",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      bgcolor: isActive ? "primary.light" : "grey.50",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <CustomStepIcon
                      icon={step.icon}
                      index={index}
                      isMobile
                      isActive={isActive}
                    />
                    <Box sx={{ textAlign: "left" }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          fontSize: "1.1rem",
                          color: isActive ? "primary.dark" : "text.primary",
                        }}
                      >
                        {index + 1}. {step.label}
                      </Typography>
                    </Box>
                  </Box>

                  <IconButton
                    size="small"
                    sx={{
                      color: isActive ? "primary.main" : "text.secondary",
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  >
                    <ExpandMore />
                  </IconButton>
                </Box>

                {/* Step Content - Collapsible */}
                <Collapse in={isExpanded} timeout={300}>
                  <Box sx={{ p: 3, pt: 1, bgcolor: "background.paper" }}>
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 2,
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {step.description}
                    </Typography>
                    <Box
                      sx={{
                        p: 2,
                        bgcolor: "grey.50",
                        borderRadius: 2,
                        borderLeft: "4px solid",
                        borderLeftColor: "primary.main",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontStyle: "italic",
                          fontSize: "0.85rem",
                          color: "text.secondary",
                        }}
                      >
                        💡 {step.details}
                      </Typography>
                    </Box>
                  </Box>
                </Collapse>
              </Paper>
            );
          })}
        </Box>

        {/* Quick Steps Section */}
        <Box sx={{ textAlign: "center", mt: { xs: 6, md: 10 } }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 600,
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              mb: { xs: 3, md: 4 },
            }}
          >
            Mulai dalam 3 Langkah Mudah
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(3, 1fr)",
              },
              gap: { xs: 2, sm: 3 },
              maxWidth: { xs: 300, sm: 600 },
              mx: "auto",
            }}
          >
            {[
              { number: "1", text: "Daftar & Login" },
              { number: "2", text: "Request Pickup" },
              { number: "3", text: "Dapatkan Penghasilan Tambahan" },
            ].map((item, index) => (
              <Paper
                key={index}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  bgcolor: "primary.main",
                  color: "white",
                  borderRadius: 3,
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    mb: 1,
                  }}
                >
                  {item.number}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "0.8rem", md: "0.875rem" },
                    fontWeight: 500,
                  }}
                >
                  {item.text}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;
