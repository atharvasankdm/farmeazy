import { Box } from "@mui/system";
import React from "react";
import classes from "./about.module.css";

const OpportunityData = [
  {
    icon: "/assets/farmer.png",
    title: "Benefits for farmers",
    points: ["more revenue", "One-stop sale", "quick payment"],
  },
  {
    icon: "/assets/retailer.png",
    title: "Convenience for retailers",
    points: [
      "Competitive pricing",
      "door step delivery",
      "High quality produce",
    ],
  },

  {
    icon: "/assets/endUser.png",
    title: "Benefits for farmers",
    points: ["Hygienic produce", "traceable produce", "Better quality"],
  },
];

const About = () => {
  return (
    <Box className={classes.mainAboutContainer}>
      <h1 className={classes.aboutTitle}>
        Creating Opportunities for everyone
      </h1>
      <span className={classes.aboutDesc}>
        A platform which aims at benefiting farmers,retailers and end consumers.
      </span>

      <Box className={classes.aboutCardContainer}>
        {OpportunityData.map((data) => {
          return (
            <Box className={classes.mainCardContainer}>
              <Box className={classes.cardImageContainer}>
                <img src={data.icon} alt="" />
              </Box>
              <h2 style={{ fontWeight: "500", fontSize: "24px" }}>
                {data.title}
              </h2>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <li style={{ fontSize: "18px" }}>{data.points[0]}</li>
                <li style={{ fontSize: "18px" }}>{data.points[1]}</li>
                <li style={{ fontSize: "18px" }}>{data.points[2]}</li>
              </ul>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default About;
