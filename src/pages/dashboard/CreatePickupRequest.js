import { useState } from "react";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Paper,
  Chip,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material";
import {
  DatePicker,
  TimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import CustomButton from "@/components/ui/CustomButton";

// Komponen peta sederhana (dalam implementasi nyata, gunakan Google Maps API)
const SimpleMap = ({ location }) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        height: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#e8f5e9",
        borderRadius: 2,
      }}
    >
      <Typography variant="body2" color="textSecondary">
        {location || "Peta akan ditampilkan di sini"}
      </Typography>
    </Paper>
  );
};

const CreatePickupRequest = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [pickupDate, setPickupDate] = useState(dayjs().add(1, "day"));
  const [pickupTime, setPickupTime] = useState(
    dayjs().set("hour", 10).set("minute", 0)
  );
  const [location, setLocation] = useState("");

  const wasteTypes = [
    { id: 1, name: "Plastik", price: 2000, unit: "kg" },
    { id: 2, name: "Kertas", price: 1500, unit: "kg" },
    { id: 3, name: "Kaca", price: 1000, unit: "kg" },
    { id: 4, name: "Kaleng", price: 3000, unit: "kg" },
    { id: 5, name: "Elektronik", price: 5000, unit: "item" },
  ];

  const steps = ["Pilih Jenis Sampah", "Tentukan Jadwal", "Konfirmasi"];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleItemSelect = (item) => {
    if (selectedItems.some((selected) => selected.id === item.id)) {
      setSelectedItems(
        selectedItems.filter((selected) => selected.id !== item.id)
      );
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  const handleQuantityChange = (id, quantity) => {
    setSelectedItems(
      selectedItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const calculateTotal = () => {
    return selectedItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Pilih Jenis Sampah yang Akan Dijemput
            </Typography>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {wasteTypes.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Paper
                    variant={
                      selectedItems.some((selected) => selected.id === item.id)
                        ? "elevation"
                        : "outlined"
                    }
                    elevation={
                      selectedItems.some((selected) => selected.id === item.id)
                        ? 3
                        : 0
                    }
                    sx={{
                      p: 2,
                      cursor: "pointer",
                      border: selectedItems.some(
                        (selected) => selected.id === item.id
                      )
                        ? "2px solid"
                        : "1px solid",
                      borderColor: selectedItems.some(
                        (selected) => selected.id === item.id
                      )
                        ? "primary.main"
                        : "divider",
                      transition: "all 0.2s",
                    }}
                    onClick={() => handleItemSelect(item)}
                  >
                    <Typography variant="subtitle1" gutterBottom>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Rp {item.price.toLocaleString("id-ID")} / {item.unit}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            {selectedItems.length > 0 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Detail Kuantitas
                </Typography>
                {selectedItems.map((item) => (
                  <Box
                    key={item.id}
                    sx={{ display: "flex", alignItems: "center", mb: 2 }}
                  >
                    <Typography variant="body1" sx={{ flexGrow: 1 }}>
                      {item.name}
                    </Typography>
                    <Button
                      size="small"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      -
                    </Button>
                    <TextField
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          item.id,
                          parseInt(e.target.value) || 1
                        )
                      }
                      type="number"
                      inputProps={{
                        min: 1,
                        style: { textAlign: "center", width: 60 },
                      }}
                      variant="outlined"
                      size="small"
                    />
                    <Button
                      size="small"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </Button>
                    <Typography variant="body2" sx={{ ml: 2, minWidth: 100 }}>
                      Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                    </Typography>
                  </Box>
                ))}
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Total Estimasi: Rp {calculateTotal().toLocaleString("id-ID")}
                </Typography>
              </Box>
            )}
          </Box>
        );
      case 1:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Tentukan Jadwal Penjemputan
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <DatePicker
                    label="Tanggal Penjemputan"
                    value={pickupDate}
                    onChange={(newValue) => setPickupDate(newValue)}
                    minDate={dayjs().add(1, "day")}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TimePicker
                    label="Waktu Penjemputan"
                    value={pickupTime}
                    onChange={(newValue) => setPickupTime(newValue)}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth />
                    )}
                  />
                </Grid>
              </Grid>
            </LocalizationProvider>

            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Lokasi Penjemputan
            </Typography>
            <FormControl component="fieldset" sx={{ mb: 2 }}>
              <FormLabel component="legend">Pilih Lokasi</FormLabel>
              <RadioGroup
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <FormControlLabel
                  value="home"
                  control={<Radio />}
                  label="Rumah: Jl. Melati No. 12, Jakarta Selatan"
                />
                <FormControlLabel
                  value="office"
                  control={<Radio />}
                  label="Kantor: Jl. Sudirman No. 45, Jakarta Pusat"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Lokasi Lainnya"
                />
              </RadioGroup>
            </FormControl>

            {location === "other" && (
              <TextField
                label="Alamat Lengkap"
                multiline
                rows={3}
                fullWidth
                placeholder="Masukkan alamat lengkap untuk penjemputan"
              />
            )}

            <SimpleMap location={location} />
          </Box>
        );
      case 2:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Konfirmasi Permintaan Penjemputan
            </Typography>
            <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Detail Sampah:
              </Typography>
              {selectedItems.map((item) => (
                <Typography key={item.id} variant="body2">
                  {item.name} - {item.quantity} {item.unit} = Rp{" "}
                  {(item.price * item.quantity).toLocaleString("id-ID")}
                </Typography>
              ))}
              <Typography variant="body1" sx={{ mt: 1, fontWeight: "bold" }}>
                Total: Rp {calculateTotal().toLocaleString("id-ID")}
              </Typography>
            </Paper>

            <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Jadwal Penjemputan:
              </Typography>
              <Typography variant="body2">
                {pickupDate.format("DD MMMM YYYY")},{" "}
                {pickupTime.format("HH:mm")}
              </Typography>
            </Paper>

            <Paper variant="outlined" sx={{ p: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                Lokasi Penjemputan:
              </Typography>
              <Typography variant="body2">
                {location === "home"
                  ? "Rumah: Jl. Melati No. 12, Jakarta Selatan"
                  : location === "office"
                  ? "Kantor: Jl. Sudirman No. 45, Jakarta Pusat"
                  : "Lokasi lainnya (akan dimasukkan detailnya)"}
              </Typography>
            </Paper>
          </Box>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {getStepContent(activeStep)}

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
        {activeStep !== 0 && (
          <Button onClick={handleBack} sx={{ mr: 1 }}>
            Kembali
          </Button>
        )}
        <CustomButton
          variant="contained"
          onClick={
            activeStep === steps.length - 1
              ? () => console.log("Request submitted")
              : handleNext
          }
          disabled={activeStep === 0 && selectedItems.length === 0}
        >
          {activeStep === steps.length - 1 ? "Ajukan Penjemputan" : "Lanjut"}
        </CustomButton>
      </Box>
    </Box>
  );
};

export default CreatePickupRequest;
