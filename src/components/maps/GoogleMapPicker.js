import { useEffect, useRef, useState } from "react";
import { Box, Typography, TextField } from "@mui/material";

const GoogleMapPicker = ({ onLocationSelect, defaultLocation }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const initializeMap = () => {
    const defaultCenter = defaultLocation || { lat: -6.2088, lng: 106.8456 }; // Jakarta
    const mapOptions = {
      center: defaultCenter,
      zoom: 15,
      mapTypeId: window.google.maps.MapTypeId.ROADMAP,
    };

    const newMap = new window.google.maps.Map(mapRef.current, mapOptions);
    setMap(newMap);

    // Add marker
    const newMarker = new window.google.maps.Marker({
      position: defaultCenter,
      map: newMap,
      draggable: true,
    });
    setMarker(newMarker);

    // Add click event to map
    newMap.addListener("click", (e) => {
      newMarker.setPosition(e.latLng);
      onLocationSelect({
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      });
    });

    // Add marker drag event
    newMarker.addListener("dragend", (e) => {
      onLocationSelect({
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      });
    });

    // Initialize Places Autocomplete
    const input = document.getElementById("location-search");
    const autocomplete = new window.google.maps.places.Autocomplete(input, {
      types: ["geocode"],
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        return;
      }

      if (place.geometry.viewport) {
        newMap.fitBounds(place.geometry.viewport);
      } else {
        newMap.setCenter(place.geometry.location);
        newMap.setZoom(17);
      }

      newMarker.setPosition(place.geometry.location);
      onLocationSelect({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        address: place.formatted_address,
      });

      setSearchValue(place.formatted_address);
    });
  };

  useEffect(() => {
    // Load Google Maps script
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    } else {
      initializeMap();
    }

    return () => {
      if (map) {
        window.google.maps.event.clearInstanceListeners(map);
      }
    };
  }, []);

  return (
    <Box>
      <TextField
        id="location-search"
        label="Cari lokasi"
        variant="outlined"
        fullWidth
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Box
        ref={mapRef}
        sx={{
          height: 400,
          width: "100%",
          borderRadius: 1,
          overflow: "hidden",
        }}
      />
      <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
        Klik pada peta atau gunakan pencarian untuk menentukan lokasi
      </Typography>
    </Box>
  );
};

export default GoogleMapPicker;
