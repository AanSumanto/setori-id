import { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
  Box,
  Alert,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import CustomButton from "@/components/ui/CustomButton";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login data:", formData);
  };

  return (
    <Layout>
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Masuk ke Akun Anda
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            sx={{ mb: 3 }}
          >
            Selamat datang kembali! Silakan masuk untuk melanjutkan.
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email atau Nomor Telepon"
              name="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              margin="normal"
              required
            />
            {/* <Box sx={{ textAlign: "right", mt: 1, mb: 2 }}>
              <Link href="/auth/forgot-password" passHref>
                <Typography
                  component="a"
                  variant="body2"
                  color="primary"
                  sx={{ textDecoration: "none", cursor: "pointer" }}
                >
                  Lupa Password?
                </Typography>
              </Link>
            </Box> */}
            <Box sx={{ textAlign: "right", mt: 1, mb: 2 }}>
              <Link href="/auth/forgot-password" passHref legacyBehavior>
                <Typography
                  component="a"
                  variant="body2"
                  color="primary"
                  sx={{ textDecoration: "none", cursor: "pointer" }}
                >
                  Lupa Password?
                </Typography>
              </Link>
            </Box>

            <CustomButton
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              sx={{ mb: 2 }}
            >
              Masuk
            </CustomButton>
          </Box>

          <Divider sx={{ my: 3 }}>atau</Divider>

          <CustomButton
            variant="outlined"
            fullWidth
            startIcon={<Google />}
            sx={{ mb: 3 }}
          >
            Masuk dengan Google
          </CustomButton>

          {/* <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" color="textSecondary">
              Belum punya akun?{" "}
              <Link href="/auth/register" passHref>
                <Typography
                  component="a"
                  color="primary"
                  sx={{
                    textDecoration: "none",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  Daftar di sini
                </Typography>
              </Link>
            </Typography>
          </Box> */}
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" color="textSecondary">
              Belum punya akun?{" "}
              <Link href="/auth/register" style={{ textDecoration: "none" }}>
                <Typography
                  component="span"
                  color="primary"
                  sx={{
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  Daftar di sini
                </Typography>
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Layout>
  );
};

export default Login;
