import { Avatar, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import classes from "./addPostComponent.module.css";
import ImageIcon from "@mui/icons-material/Image";

const AddPostComponent = () => {
  const hiddenFileInput = useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  return (
    <Box className={classes.mainAddContainer}>
      <Box className={classes.messageContentContainer}>
        <Avatar sx={{ marginRight: "8px" }}>A</Avatar>
        <TextField
          id="outlined-textarea"
          //   label="enter your post text"
          placeholder="enter your content"
          multiline
          fullWidth
        />
      </Box>

      <Box className={classes.fileAndSubmitContainer}>
        <Box>
          <span style={{ color: "lightgray", fontWeight: "400" }}>upload</span>
          <input
            type="file"
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
          <Button onClick={handleClick}>
            <ImageIcon />
          </Button>
        </Box>

        <Box>
          <Button sx={{ backgroundColor: "#86c872", color: "white" }}>
            submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddPostComponent;
