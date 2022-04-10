import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function RedditCard() {
  return (
    <Card sx={{ width: 260, textAlign: "center" ,m : 2,boxShadow: "0" , backgroundColor: "#1A1A2E", color: "white"}}>
        <CardMedia
          component="img"
          height="240"
          image="https://i.redd.it/ggi1d7gl5jq81.jpg"
          alt="pasta"

        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
          My software never has bugs, it just develops unintended features
          </Typography>
        </CardContent>
    </Card>
  );
}