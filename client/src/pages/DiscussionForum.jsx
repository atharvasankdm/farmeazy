import { Box } from "@mui/system";
import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddPostComponent from "../components/AddPostComponent";
import ForumPost from "../components/ForumPost";
import { Link } from "react-router-dom";
import kommunicateChat from "../KommunicateChat";

const DiscussionForum = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",

          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <span
          style={{
            color: "#86c872",
            fontSize: "40px",
            fontWeight: "bold",
            marginLeft: "10px",
          }}
        >
          farmeazy <span>forum</span>
        </span>

        <Box
          style={{
            marginRight: "10px",
            displaY: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "gray",
            marginTop: "10px",
          }}
        >
          <Link
            to="/farmer-home"
            style={{ textDecoration: "none", color: "grey" }}
          >
            Back
            <ArrowBackIcon />
          </Link>
        </Box>
      </Box>

      <AddPostComponent />

      <Box
        sx={{
          width: "50vw",
          height: "60vh",
          overflowY: "scroll",
          boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ForumPost />
        <ForumPost />
        <ForumPost />
        <ForumPost />
      </Box>

      <kommunicateChat />
    </Box>
  );
};

export default DiscussionForum;
