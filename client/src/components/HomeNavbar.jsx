import { Box } from "@mui/system";
import React from "react";
import classes from "./homeNavbar.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import ForumIcon from "@mui/icons-material/Forum";
import { Link } from "react-router-dom";

const HomeNavbar = ({ isFarm }) => {
  return (
    <Box className={classes.mainNavContainer}>
      <Link style={{ textDecoration: "none", color: "grey" }} to="/">
        <h1>farmeazy</h1>
      </Link>

      <ul style={{ marginTop: "20px" }}>
        {!isFarm && (
          <Link style={{ textDecoration: "none", color: "grey" }} to="/">
            <li>Home</li>
          </Link>
        )}
        {!isFarm && (
          <Link style={{ textDecoration: "none", color: "grey" }} to="/">
            <li>Why us</li>
          </Link>
        )}
        {!isFarm && (
          <Link
            style={{ textDecoration: "none", color: "grey" }}
            to="/product-listings"
          >
            <li>Buy/Sell</li>
          </Link>
        )}

        {isFarm && (
          <Link
            style={{ textDecoration: "none", color: "grey" }}
            to="/farmer-home"
          >
            <li>
              <HomeIcon />
              Home
            </li>
          </Link>
        )}
        {isFarm && (
          <Link style={{ textDecoration: "none", color: "grey" }} to="/forum">
            <li>
              <ForumIcon />
              Forum
            </li>
          </Link>
        )}
        {isFarm && (
          <Link
            style={{ textDecoration: "none", color: "grey" }}
            to="/farmer-profile"
          >
            <li>
              <AccountCircleIcon />
              Profile
            </li>
          </Link>
        )}
      </ul>
    </Box>
  );
};

export default HomeNavbar;
