import { Container, Typography, Box } from "@mui/material";
import Layout from "../components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Syarat dan Ketentuan
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Terakhir diperbarui: 15 April 2023
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            1. Penggunaan Layanan
          </Typography>
          <Typography variant="body1" paragraph>
            Dengan mengakses dan menggunakan Setorin.id, Anda menyetujui untuk
            terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan
            sebagian atau seluruh syarat dan ketentuan, Anda tidak diperkenankan
            menggunakan layanan kami.
          </Typography>

          <Typography variant="h5" gutterBottom>
            2. Akun Pengguna
          </Typography>
          <Typography variant="body1" paragraph>
            Untuk menggunakan layanan tertentu, Anda harus membuat akun dengan
            informasi yang akurat dan lengkap. Anda bertanggung jawab untuk
            menjaga kerahasiaan informasi akun Anda dan untuk semua aktivitas
            yang terjadi under akun Anda.
          </Typography>

          <Typography variant="h5" gutterBottom>
            3. Transaksi
          </Typography>
          <Typography variant="body1" paragraph>
            Setorin.id bertindak sebagai platform yang mempertemukan pengguna
            dengan pengepul. Kami tidak bertanggung jawab atas kualitas sampah
            yang ditransaksikan atau ketepatan waktu penjemputan. Harga sampah
            ditentukan berdasarkan jenis, kondisi, dan berat sampah.
          </Typography>

          <Typography variant="h5" gutterBottom>
            4. Pembatasan Tanggung Jawab
          </Typography>
          <Typography variant="body1" paragraph>
            Setorin.id tidak bertanggung jawab atas kerugian langsung, tidak
            langsung, insidental, atau konsekuensial yang timbul dari penggunaan
            atau ketidakmampuan menggunakan layanan kami.
          </Typography>

          <Typography variant="h5" gutterBottom>
            5. Perubahan Syarat dan Ketentuan
          </Typography>
          <Typography variant="body1" paragraph>
            Kami dapat mengubah syarat dan ketentuan ini dari waktu ke waktu.
            Perubahan akan diberitahukan melalui platform kami dan akan berlaku
            efektif setelah diterbitkan.
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
};

export default Terms;
