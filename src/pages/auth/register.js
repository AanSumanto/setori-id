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
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import CustomButton from "@/components/ui/CustomButton";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "individual", // Default role
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Password dan konfirmasi password tidak cocok");
      return;
    }

    if (!agreeTerms) {
      setError("Anda harus menyetujui syarat dan ketentuan");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password minimal 8 karakter");
      return;
    }

    // Validate Indonesian phone number
    const phoneRegex = /^(\+62|62|0)[0-9]{9,13}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError(
        "Nomor telepon harus format Indonesia yang valid (contoh: 08xxxxxxxxxx)"
      );
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Format email tidak valid");
      return;
    }

    setError("");

    // Prepare data for backend (remove confirmPassword and add role configuration)
    const registerData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      roles: [
        {
          role: formData.role,
          isPrimary: true,
          isActive: true,
        },
      ],
      currentRole: formData.role,
    };
    // Handle register logic here
    console.log("Register data:", registerData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Layout>
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Buat Akun Baru
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            sx={{ mb: 3 }}
          >
            Bergabunglah dengan komunitas Setorin.id untuk memulai perjalanan
            ramah lingkungan Anda.
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            {/* Name Field */}
            <TextField
              fullWidth
              label="Nama Lengkap"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
              inputProps={{
                minLength: 2,
                maxLength: 100,
              }}
              helperText="Nama lengkap sesuai identitas"
            />

            {/* Email Field */}
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
              helperText="Email akan digunakan untuk verifikasi akun"
            />

            {/* Phone Field */}
            <TextField
              fullWidth
              label="Nomor Telepon"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              margin="normal"
              placeholder="08xxxxxxxxxx"
              required
              helperText="Format: 08xxxxxxxxxx atau +628xxxxxxxxxx"
            />

            {/* Role Selection */}
            <FormControl fullWidth margin="normal" required>
              <InputLabel>Daftar Sebagai</InputLabel>
              <Select
                name="role"
                value={formData.role}
                label="Daftar Sebagai"
                onChange={handleChange}
              >
                <MenuItem value="individual">
                  <Box>
                    <Typography variant="body1">Individual</Typography>
                    <Typography variant="caption" color="textSecondary">
                      Pengguna rumah tangga yang ingin menyetor sampah
                    </Typography>
                  </Box>
                </MenuItem>
                <MenuItem value="rt">
                  <Box>
                    <Typography variant="body1">Ketua RT</Typography>
                    <Typography variant="caption" color="textSecondary">
                      Koordinator tingkat RT untuk program daur ulang
                    </Typography>
                  </Box>
                </MenuItem>
                <MenuItem value="rw">
                  <Box>
                    <Typography variant="body1">Ketua RW</Typography>
                    <Typography variant="caption" color="textSecondary">
                      Koordinator tingkat RW untuk program daur ulang
                    </Typography>
                  </Box>
                </MenuItem>
                <MenuItem value="collector">
                  <Box>
                    <Typography variant="body1">Pengepul</Typography>
                    <Typography variant="caption" color="textSecondary">
                      Pengumpul dan pengolah sampah daur ulang
                    </Typography>
                  </Box>
                </MenuItem>
              </Select>
            </FormControl>

            {/* Password Field */}
            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              margin="normal"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={togglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              helperText="Minimal 8 karakter"
            />

            {/* Confirm Password Field */}
            <TextField
              fullWidth
              label="Konfirmasi Password"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              margin="normal"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle confirm password visibility"
                      onClick={toggleConfirmPasswordVisibility}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Terms and Conditions */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  color="primary"
                />
              }
              label={
                <Typography variant="body2" color="textSecondary">
                  Saya menyetujui{" "}
                  <Link href="/terms" style={{ textDecoration: "none" }}>
                    <Typography
                      component="span"
                      color="primary"
                      sx={{ cursor: "pointer" }}
                    >
                      Syarat & Ketentuan
                    </Typography>
                  </Link>{" "}
                  dan{" "}
                  <Link href="/privacy" style={{ textDecoration: "none" }}>
                    <Typography
                      component="span"
                      color="primary"
                      sx={{ cursor: "pointer" }}
                    >
                      Kebijakan Privasi
                    </Typography>
                  </Link>
                </Typography>
              }
              sx={{ mt: 2, mb: 1 }}
            />

            <CustomButton
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              sx={{ mb: 2 }}
              disabled={!agreeTerms}
            >
              Daftar Sekarang
            </CustomButton>
          </Box>

          <Divider sx={{ my: 3 }}>atau</Divider>

          <CustomButton
            variant="outlined"
            fullWidth
            startIcon={<Google />}
            sx={{ mb: 3 }}
          >
            Daftar dengan Google
          </CustomButton>

          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" color="textSecondary">
              Sudah punya akun?{" "}
              <Link href="/auth/login" style={{ textDecoration: "none" }}>
                <Typography
                  component="span"
                  color="primary"
                  sx={{
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  Masuk di sini
                </Typography>
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Layout>
  );
};

export default Register;
