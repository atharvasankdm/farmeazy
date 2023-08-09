import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const ProductModal = ({ handleClose }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        top: "0px",
        position: "absolute",
        zIndex: "10",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        opacity: "0.9",
      }}
    >
      <Box
        sx={{
          height: "600px",
          width: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "5px",
          paddingTop: "20px",
          backgroundColor: "white",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          position: "relative",
          opacity: "1",
          zindex: "10",
        }}
      >
        <Box sx={{ height: "250px", width: "300px" }}>
          <img
            src="https://media.newyorker.com/photos/5f2c85539a557880d973a759/2:2/w_1592,h_1592,c_limit/Buford-FrenchRice.jpg"
            alt=""
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "10px",
              objectFit: "contain",
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontWeight: "semi-bold",
              textAlign: "center",
              textDecoration: "underline",
              marginTop: "20px",
              color: "graphite",
            }}
          >
            RICE
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: "semi-bold",
              textAlign: "center",
              textDecoration: "underline",
              marginTop: "20px",
              color: "graphite",
            }}
          >
            PRICE: 54
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: "semi-bold",
              textAlign: "center",
              textDecoration: "underline",
              marginTop: "20px",
              color: "graphite",
            }}
          >
            QTY: 20KG
          </Typography>

          <Button
            onClick={() => {
              handleClose();
            }}
            sx={{ position: "absolute", top: "0px", right: "0px" }}
          >
            <CloseIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductModal;
