import { Box } from "@mui/system";
import React from "react";

const MinViewProduct = ({
  farmerDetails,
  boolProductView,
  handleOpen,
  boolBidder,
  handleBidderOpen,
  title,
  quantity,
  price,
  image,
  data,
  tempImage,
}) => {
  // console.log(boolBidder);

  const handlePopup = () => {
    if (boolBidder) {
      handleBidderOpen(data);
    } else if (boolProductView) {
      handleOpen();
    }
  };
  return (
    <Box
      onClick={handlePopup}
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        borderRadius: "10px",
        height: "200px",
        width: "500px",
        padding: "20px",
        margin: "10px",
        "&:hover": {
          scale: "0.95",
          transition: "0.2s ease",
          opacity: "0.9",
          backgroundColor: "#D3D3D3",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Box sx={{ height: "150px", width: "150px" }}>
          <img
            src={image}
            alt=""
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "10px",
              objectFit: "contain",
            }}
          />
        </Box>

        <Box
          sx={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}
        >
          <h2 style={{ color: "gray", fontWeight: "400", fontSize: "28px" }}>
            Item: <span>{title}</span>
          </h2>
          <span style={{ color: "gray", fontWeight: "400", fontSize: "18px" }}>
            Price: ₹{price}
          </span>
          <span style={{ color: "gray", fontWeight: "400", fontSize: "18px" }}>
            Quantity: {quantity}
          </span>
          <span style={{ color: "gray", fontWeight: "400", fontSize: "18px" }}>
            farmer name: {farmerDetails?.name}
          </span>
          <span style={{ color: "gray", fontWeight: "400", fontSize: "18px" }}>
            farmer mobile:+91 {farmerDetails?.number}
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default MinViewProduct;
