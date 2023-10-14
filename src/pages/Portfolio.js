import React from "react";
import profilePic from "../images/profile.jpg";
import Contain from "../components/cards/Contain";
import Button from "../components/button/Button";
import resume from "../docs/DevangCICSResume.pdf";
import TopSection from "../components/topSection/TopSection";
import style from "./Portfolio.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import ProjectLink from "../components/projectLink/ProjectLink";
import cantStop from "../images/cantStop.jpg";
import workout from "../images/chest.jpg";
import website from "../images/website.webp";
import CourseList from "../components/CourseList";

const PortfolioPage = () => {
  return (
    <div>
      <div>
        <TopSection image={profilePic} />
        
        <Contain color={"rgba(212, 218, 255, 1)"}>
          <div className={style["past-profile"]}>
            <ul>
              <div className={style["text-title"]}>
                This is something about me!
              </div>
              <li>
                I am Studying Computer Science and Physics(Joint Majors) at
                Memorial University of Newfoundland and will be finishing my
                Bachelor's Degree in 2025.
              </li>
              <li>
                I am also an actor. I have gained much theatre experience in St.
                John's and woked in many projects and gigs.
              </li>
              <li>
                Please visit my **Profession page for more information about my
                acting journey and also to learn about my projects in Computer
                Science/.
              </li>
              <li>
              What I love most about computer science is its ability to bring
              ideas to life. Whether it's building a website, creating an
              animation, or developing a machine learning model, there's always
              something new and exciting to explore. During my studies, I've had
              the opportunity to dive deep into the world of technology,
              learning programming languages like Python and Java, and exploring
              a variety of software and tools used in the industry.
            
              </li>
            </ul>
            
          </div>
          <div className={style.resume}>
            <div>Here is the link to my resume, Please have a Look :</div>
            <div className={style["resume-button"]}>
              <Button text="Resume" src={resume} />
            </div>
          </div>
        </Contain>
        <Box
          sc={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              padding: "10px",
              margin: "10px",
              fontFamily: "revert",
              color: "white",
              backgroundColor: "rgb(0, 9, 61,0.5)",
            }}
          >
            Projects (These are only the Mega Projects)
          </Typography>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              boxSizing: "border-box",
              flexWrap: "wrap",
              backgroundColor: "rgba(212, 218, 255, 0.9)",
            }}
          >
            <ProjectLink
              description={
                'The goal of the game is to "claim" (get to the top of) three of the columns before any of the other players can. But the more that the player risks rolling the dice during a turn, the greater the risk of losing the advances made during that turn.'
              }
              title={"Can't Stop"}
              image={cantStop}
              link={"https://github.com/Arushi818/comp2005-winter23-group9.git"}
            />

            <ProjectLink
              description={
                "This is the personal branding and protfolio website."
              }
              title={"Muszelus"}
              image={website}
              link={"https://github.com/devangdonda/muszelus.git"}
            />

            <ProjectLink
              description={
                "This is workout, and food logging and tracking app."
              }
              title={"Workout App"}
              image={workout}
              link={"https://github.com/devangdonda/workoutapp.git"}
            />
          </Paper>
        </Box>

        <Box
          sc={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              padding: "10px",
              margin: "10px",
              fontFamily: "revert",
              color: "white",
              backgroundColor: "rgb(0, 9, 61,0.5)",
            }}
          >
            Courses I've Done
          </Typography>
          <CourseList />
        </Box>
      </div>
    </div>
  );
};

export default PortfolioPage;
