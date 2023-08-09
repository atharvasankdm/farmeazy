import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./homeHero.module.css";

const HomeHero = () => {
  return (
    <Box className={classes.heroSection}>
      <img src="/assets/image.png" alt="" className={classes.heroImage} />
      <Box className={classes.heroInfoContainer}>
        <h1 className={classes.heroInfoContainerText}>
          Revolutionizing the fresh produce supply chain
        </h1>
        <h3 className={classes.heroInfoContainerTextDesc}>
          At farmeazy we eradicate the need for middlemen by creating a direct
          contact between farmers and retail markets
        </h3>

        <Box className={classes.buttonContainer}>
          <Link style={{ textDecoration: "none" }} to="/farmer-signup">
            <Button
              className={classes.heroSectionButton}
              sx={{ border: "1px solid gray", margin: "5px" }}
            >
              START AS A FARMER
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/user-signup">
            <Button
              className={classes.heroSectionButton}
              sx={{ border: "1px solid gray", margin: "5px" }}
            >
              START AS A RETAILER
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeHero;
