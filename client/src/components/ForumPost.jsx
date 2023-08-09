import { Box } from "@mui/material";
import React from "react";
import classes from "./forumPost.module.css";

const ForumPost = () => {
  return (
    <Box className={classes.mainPostContainer}>
      <Box className={classes.postImageContainer}>
        <img
          src="https://mcmscache.epapr.in/post_images/website_350/post_18452374/thumb.jpg"
          alt=""
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
            borderRadius: "10px",
          }}
        />
        <span style={{ color: "lightGray" }}>Posted By: Atharva</span>
      </Box>

      <Box className={classes.postInfoContainer}>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </Box>
      <p className={classes.postedAgo}>posted 5mins ago</p>
    </Box>
  );
};

export default ForumPost;
