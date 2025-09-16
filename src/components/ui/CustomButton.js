import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(
  ({ theme, variant, color = "primary" }) => ({
    borderRadius: theme.shape.borderRadius,
    textTransform: "none",
    fontWeight: 600,
    ...(variant === "contained" && {
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      "&:hover": {
        boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
      },
    }),
  })
);

export default CustomButton;
