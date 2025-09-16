// import { useState } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   Box,
//   Tabs,
//   Tab,
//   Button,
//   List,
//   ListItem,
//   ListItemText,
//   Chip,
//   IconButton,
//   Badge,
// } from "@mui/material";
// import {
//   Assignment,
//   DirectionsCar,
//   History,
//   CheckCircle,
//   Cancel,
// } from "@mui/icons-material";
// import Layout from "../../../components/layout/Layout";
// import ProfileInfo from "../../../components/dashboard/ProfileInfo";
// import CustomButton from "../../../components/ui/CustomButton";

// const TabPanel = (props) => {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`pengepul-tabpanel-${index}`}
//       aria-labelledby={`pengepul-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
//     </div>
//   );
// };

// const PengepulDashboard = () => {
//   const [tabValue, setTabValue] = useState(0);

//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   // Data contoh
//   const pickupRequests = [
//     {
//       id: 1,
//       customer: "Budi Santoso",
//       address: "Jl. Melati No. 12, Jakarta Selatan",
//       items: "Plastik (5kg), Kertas (3kg)",
//       date: "15 Apr 2023, 10:00-12:00",
//       status: "requested",
//     },
//     {
//       id: 2,
//       customer: "Cluster Melati Indah",
//       address: "Pos RW 02, Jl. Melati Indah",
//       items: "Plastik (25kg), Kaleng (8kg), Kertas (15kg)",
//       date: "16 Apr 2023, 13:00-15:00",
//       status: "accepted",
//     },
//   ];

//   const historyRequests = [
//     {
//       id: 101,
//       customer: "Siti Rahayu",
//       address: "Jl. Melati No. 14",
//       items: "Kaca (4kg), Elektronik (2kg)",
//       date: "10 Apr 2023",
//       earnings: "Rp 75.000",
//       status: "completed",
//     },
//     {
//       id: 102,
//       customer: "Ahmad Fauzi",
//       address: "Jl. Mawar No. 5",
//       items: "Plastik (8kg), Kertas (6kg)",
//       date: "8 Apr 2023",
//       earnings: "Rp 56.000",
//       status: "completed",
//     },
//   ];

//   return (
//     <Layout>
//       <Container maxWidth="lg" sx={{ py: 4 }}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           Dashboard Pengepul
//         </Typography>

//         <Grid container spacing={3}>
//           <Grid item xs={12} md={4}>
//             <ProfileInfo
//               pengepul={{
//                 businessName: "Maju Jaya Pengepul",
//                 address: "Jl. Raya Bogor Km. 12, Jakarta Timur",
//                 contact: "081298765432",
//                 area: "Jakarta Selatan, Jakarta Timur",
//                 rating: "4.8 (142 reviews)",
//               }}
//             />
//           </Grid>
//           <Grid item xs={12} md={8}>
//             <Card>
//               <CardContent>
//                 <Tabs
//                   value={tabValue}
//                   onChange={handleTabChange}
//                   aria-label="pengepul dashboard tabs"
//                   variant="scrollable"
//                   scrollButtons="auto"
//                 >
//                   <Tab
//                     icon={
//                       <Badge badgeContent={2} color="error">
//                         <Assignment />
//                       </Badge>
//                     }
//                     label="Permintaan Pickup"
//                   />
//                   <Tab icon={<DirectionsCar />} label="Sedang Berjalan" />
//                   <Tab icon={<History />} label="Riwayat Transaksi" />
//                 </Tabs>

//                 <TabPanel value={tabValue} index={0}>
//                   <Typography variant="h6" gutterBottom>
//                     Permintaan Pickup Baru
//                   </Typography>
//                   <List>
//                     {pickupRequests.map((request) => (
//                       <ListItem key={request.id} divider>
//                         <ListItemText
//                           primary={request.customer}
//                           secondary={
//                             <Box>
//                               <Typography variant="body2">
//                                 {request.address}
//                               </Typography>
//                               <Typography variant="body2">
//                                 {request.items}
//                               </Typography>
//                               <Typography variant="body2">
//                                 {request.date}
//                               </Typography>
//                             </Box>
//                           }
//                         />
//                         <Box
//                           sx={{
//                             display: "flex",
//                             flexDirection: "column",
//                             gap: 1,
//                           }}
//                         >
//                           <CustomButton
//                             variant="contained"
//                             size="small"
//                             startIcon={<CheckCircle />}
//                             disabled={request.status !== "requested"}
//                           >
//                             Terima
//                           </CustomButton>
//                           <CustomButton
//                             variant="outlined"
//                             size="small"
//                             startIcon={<Cancel />}
//                             disabled={request.status !== "requested"}
//                           >
//                             Tolak
//                           </CustomButton>
//                           {request.status !== "requested" && (
//                             <Chip
//                               label={
//                                 request.status === "accepted"
//                                   ? "Diterima"
//                                   : "Diproses"
//                               }
//                               color="primary"
//                               size="small"
//                             />
//                           )}
//                         </Box>
//                       </ListItem>
//                     ))}
//                   </List>
//                 </TabPanel>

//                 <TabPanel value={tabValue} index={1}>
//                   <Typography variant="h6" gutterBottom>
//                     Pickup Sedang Berjalan
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color="textSecondary"
//                     sx={{ mb: 3 }}
//                   >
//                     Tidak ada pickup yang sedang berjalan.
//                   </Typography>
//                 </TabPanel>

//                 <TabPanel value={tabValue} index={2}>
//                   <Typography variant="h6" gutterBottom>
//                     Riwayat Transaksi
//                   </Typography>
//                   <List>
//                     {historyRequests.map((request) => (
//                       <ListItem key={request.id} divider>
//                         <ListItemText
//                           primary={request.customer}
//                           secondary={
//                             <Box>
//                               <Typography variant="body2">
//                                 {request.address}
//                               </Typography>
//                               <Typography variant="body2">
//                                 {request.items}
//                               </Typography>
//                               <Typography variant="body2">
//                                 {request.date}
//                               </Typography>
//                               <Typography variant="body2" fontWeight="bold">
//                                 {request.earnings}
//                               </Typography>
//                             </Box>
//                           }
//                         />
//                         <Chip
//                           label={request.status}
//                           color="success"
//                           size="small"
//                         />
//                       </ListItem>
//                     ))}
//                   </List>
//                 </TabPanel>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     </Layout>
//   );
// };

// export default PengepulDashboard;
