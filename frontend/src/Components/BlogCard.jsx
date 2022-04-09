import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { textAlign } from "@mui/system";
import Divider from "@mui/material/Divider";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import {useNavigate} from 'react-router-dom'
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BlogCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [flag, setFlag] = React.useState(true);
  const handleClick = () => {
    setFlag(!flag);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const readBlog =()=>{
    navigate('/blog/:id')
  }

  return (
      <Card sx={{ maxWidth: 345, backgroundColor: "#1A1A2E", color: "white",borderRadius : 4}} >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title="Blogger Name"
        />
          <Divider sx={{backgroundColor: "#78909c" ,mx:2,mb : 1}} />
        {/* <CardMedia
          component="img"
          height="194"
          image="https://source.unsplash.com/random"
          alt="NO Image found :("
        /> */}
        <CardContent color="white">
        <Typography variant="h5" color="white"sx={{mb :1}}>
            Blog Title
          </Typography>
          <Typography variant="body2" color="white">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" sx={{color: "white"}} color={flag ? "primary" : "secondary"} onClick={handleClick}>
            <FavoriteIcon   />
          </IconButton>
          <IconButton aria-label="read more" sx={{color: "white"}} onClick={readBlog}>
            <ReadMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
  );
}
