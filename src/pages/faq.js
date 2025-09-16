import { useState } from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Layout from "../components/layout/Layout";

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqItems = [
    {
      question: "Bagaimana cara mendaftar di Setorin.id?",
      answer:
        'Anda dapat mendaftar dengan mengklik tombol "Daftar" di halaman utama, kemudian mengisi formulir pendaftaran dengan data diri yang valid. Pilih peran Anda (User, Cluster, atau Pengepul) dan ikuti proses verifikasi yang diperlukan.',
    },
    {
      question: "Apa saja jenis sampah yang bisa dijual melalui Setorin.id?",
      answer:
        "Kami menerima berbagai jenis sampah yang dapat didaur ulang seperti plastik, kertas, kaca, kaleng, dan limbah elektronik. Setiap jenis sampah memiliki harga yang berbeda berdasarkan kondisi dan beratnya.",
    },
    {
      question: "Bagaimana sistem penjemputan sampah bekerja?",
      answer:
        "Setelah Anda membuat permintaan penjemputan, pengepul terdekat akan menerima notifikasi. Pengepul dapat menerima atau menolak permintaan. Jika diterima, pengepul akan menjemput sampah sesuai jadwal yang ditentukan.",
    },
    {
      question: "Bagaimana cara menghitung poin penghasilan tambahan?",
      answer:
        "Poin penghasilan tambahan dihitung berdasarkan nilai transaksi penjualan sampah Anda. Setiap Rp 1.000 dari nilai transaksi akan dikonversi menjadi 1 poin. Poin dapat ditukarkan dengan berbagai hadiah yang tersedia di marketplace kami.",
    },
    {
      question: "Apakah ada biaya layanan yang dikenakan?",
      answer:
        "Setorin.id tidak mengenakan biaya layanan untuk pengguna individu. Kami mendapatkan komisi kecil dari pengepul untuk setiap transaksi yang berhasil dilakukan melalui platform kami.",
    },
  ];

  return (
    <Layout>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Pertanyaan Umum
        </Typography>
        <Typography
          variant="h6"
          color="textSecondary"
          align="center"
          sx={{ mb: 6 }}
        >
          Temukan jawaban untuk pertanyaan yang sering diajukan tentang
          Setorin.id
        </Typography>

        <Box>
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6" component="h2">
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Box sx={{ mt: 6, p: 3, bgcolor: "grey.50", borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom>
            Masih ada pertanyaan?
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Jika Anda tidak menemukan jawaban yang Anda cari, jangan ragu untuk
            menghubungi tim support kami.
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
};

export default FAQ;
