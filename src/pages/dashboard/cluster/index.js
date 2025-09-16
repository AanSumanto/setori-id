import { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Tabs,
  Tab,
  Button,
  List,
  ListItem,
  ListItemText,
  Chip,
  IconButton,
} from "@mui/material";
import { Group, History, Add, PersonAdd, BarChart } from "@mui/icons-material";
// import ProfileInfo from "../../../components/dashboard/ProfileInfo";
import Layout from "@/components/layout/Layout";
import CustomButton from "@/components/ui/CustomButton";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`cluster-tabpanel-${index}`}
      aria-labelledby={`cluster-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
};

const ClusterDashboard = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Data contoh
  const members = [
    { id: 1, name: "Budi Santoso", address: "Jl. Melati No. 12", points: 450 },
    { id: 2, name: "Siti Rahayu", address: "Jl. Melati No. 14", points: 320 },
    { id: 3, name: "Ahmad Fauzi", address: "Jl. Mawar No. 5", points: 600 },
  ];

  const transactions = [
    {
      id: 1,
      date: "12 Apr 2023",
      items: "Plastik, Kertas",
      weight: "24 kg",
      status: "Completed",
    },
    {
      id: 2,
      date: "5 Apr 2023",
      items: "Kaca, Kaleng",
      weight: "18 kg",
      status: "Completed",
    },
    {
      id: 3,
      date: "28 Mar 2023",
      items: "Plastik, Elektronik",
      weight: "32 kg",
      status: "Completed",
    },
  ];

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard Cluster RT 05/RW 02
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            {/* <ProfileInfo
              cluster={{
                name: "Cluster Melati Indah",
                address: "Jl. Melati Indah No. 1-20, Jakarta Selatan",
                admin: "Bambang Sutrisno (081234567890)",
                totalMembers: 42,
                totalPoints: 12500,
              }}
            /> */}
          </Grid>
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  aria-label="cluster dashboard tabs"
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  <Tab icon={<Group />} label="Anggota Cluster" />
                  <Tab icon={<Add />} label="Pickup Bersama" />
                  <Tab icon={<History />} label="Riwayat Transaksi" />
                  <Tab icon={<BarChart />} label="Statistik" />
                </Tabs>

                <TabPanel value={tabValue} index={0}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h6">Daftar Anggota Cluster</Typography>
                    <CustomButton variant="contained" startIcon={<PersonAdd />}>
                      Tambah Anggota
                    </CustomButton>
                  </Box>
                  <List>
                    {members.map((member) => (
                      <ListItem key={member.id} divider>
                        <ListItemText
                          primary={member.name}
                          secondary={member.address}
                        />
                        <Chip
                          label={`${member.points} poin`}
                          color="primary"
                          variant="outlined"
                        />
                      </ListItem>
                    ))}
                  </List>
                </TabPanel>

                <TabPanel value={tabValue} index={1}>
                  <Typography variant="h6" gutterBottom>
                    Buat Permintaan Pickup Bersama
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mb: 3 }}
                  >
                    Ajukan permintaan pickup untuk seluruh anggota cluster.
                    Pastikan semua sampah terkumpul di pos RW sebelum tanggal
                    pickup.
                  </Typography>
                  <CustomButton variant="contained">
                    Ajukan Pickup Bersama
                  </CustomButton>
                </TabPanel>

                <TabPanel value={tabValue} index={2}>
                  <Typography variant="h6" gutterBottom>
                    Riwayat Transaksi Cluster
                  </Typography>
                  <List>
                    {transactions.map((transaction) => (
                      <ListItem key={transaction.id} divider>
                        <ListItemText
                          primary={`Pickup tanggal ${transaction.date}`}
                          secondary={`${transaction.items} - ${transaction.weight}`}
                        />
                        <Chip
                          label={transaction.status}
                          color="success"
                          size="small"
                        />
                      </ListItem>
                    ))}
                  </List>
                </TabPanel>

                <TabPanel value={tabValue} index={3}>
                  <Typography variant="h6" gutterBottom>
                    Statistik Cluster
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                      <Card variant="outlined">
                        <CardContent sx={{ textAlign: "center" }}>
                          <Typography variant="h4" color="primary">
                            42
                          </Typography>
                          <Typography variant="body2">Total Anggota</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Card variant="outlined">
                        <CardContent sx={{ textAlign: "center" }}>
                          <Typography variant="h4" color="primary">
                            18
                          </Typography>
                          <Typography variant="body2">
                            Pickup Bulan Ini
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Card variant="outlined">
                        <CardContent sx={{ textAlign: "center" }}>
                          <Typography variant="h4" color="primary">
                            320
                          </Typography>
                          <Typography variant="body2">kg Sampah</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Card variant="outlined">
                        <CardContent sx={{ textAlign: "center" }}>
                          <Typography variant="h4" color="primary">
                            12.5k
                          </Typography>
                          <Typography variant="body2">Total Poin</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </TabPanel>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default ClusterDashboard;
