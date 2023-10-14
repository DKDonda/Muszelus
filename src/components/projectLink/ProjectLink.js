import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import './ProjectLink.css';

const ProjectLink = (props) => {
  return (
    <Card sx={{width: 345, margin:'20px', }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.image}
          alt="green iguana"
        />
        <CardContent sx={{height: 200}}>
          <Typography gutterBottom variant="h5" component="div" align="center"
          sx={{
            fontSize: '2rem',
            fontFamily: 'cursive'
          }}>
            {props.title}
          </Typography>
          <Typography variant="body1" color="black" sx={{
            fontSize:'1.1rem',
            fontFamily: 'serif'
          }}>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="primary" href={props.link} target="_blank">
          Explore
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectLink;
