import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2E7D32", // Hijau yang sesuai dengan brand daur ulang
      light: "#4CAF50",
      dark: "#1B5E20",
    },
    secondary: {
      main: "#FFC107", // Kuning untuk aksen
    },
    background: {
      default: "#F5F5F5",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          fontSize: "1rem",
          padding: "12px 24px",
        },
        containedPrimary: {
          background: "linear-gradient(45deg, #1bbb33ff 30%, #30f969ff 90%)",
          boxShadow: "0 3px 20px rgba(0, 255, 136, 0.3)",
          "&:hover": {
            background: "linear-gradient(45deg, #84db9eff 30%, #1069a5ff 90%)",
            boxShadow: "0 6px 30px rgba(0, 255, 136, 0.4)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "linear-gradient(135deg, #bbb9b9ff 0%, #05a20fff 100%)",
          border: "1px solid #333333ff",
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;
