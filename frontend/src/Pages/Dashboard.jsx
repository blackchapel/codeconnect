import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import ChillSection from "../Pages/ChillSection";
import Feed from "./BlogFeed";
import {FaDoorOpen, FaInbox, FaPager, FaStackOverflow} from 'react-icons/fa'
import BlogFeed from "./BlogFeed";
import StackOverflow from './StackOverflow';
import {useState,useEffect} from 'react'
import axios from 'axios'
import Logo from '../Images/codeconnect_logo-transparent.png'
import PostFeed from "./PostFeed";
const drawerWidth = 240;


export default function Dashboard() {
  const [blog, setBlog] = React.useState(false);
  const [post, setPost] = React.useState(false);
  const [chill, setChill] = React.useState(false);
  const [stack, setStack] = React.useState(false);
  React.useEffect(() => {
    setBlog(true);
  }, []);

  const [user,setUser]=useState()

  const getUserData = async ()=>{
    const response = await axios.get('http://localhost:3001/api/auth/user/view')
    setUser(response.data)
    
    return response.data;
  }
  console.log(user);
useEffect(()=>{ getUserData()},[])
  return (
    <Box
      sx={{ display: "flex", backgroundColor: "#16213E", margin: "0" }}
      color="secondary"
    >
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <a href='/' style={{flexGrow : 1}}><image src="https://cdn.discordapp.com/attachments/959839537146769448/962396339902238770/codeconnect_logo-transparent.png" alt='LOGO' style={{flexGrow : 1}}/></a>
        <Button variant="contained" startIcon={<LogoutIcon/>}color='secondary' >Logout</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            borderWidth: 0,
            height: "100%",
          },
          backgroundColor: "#1A1A2E",
        }}
      >
        <Toolbar sx={{ backgroundColor: "#1A1A2E" }} />
        <Box
          sx={{ overflow: "auto", backgroundColor: "#1A1A2E", height: "100%" }}
          color="secondary"
        >
          <List color="secondary" sx={{ backgroundColor: "#1A1A2E" }}>
            {["Blog", "Post", "Chill Section", "StackOverflow"].map((t, index) => (
              <ListItem
                color="secondary"
                button
                key={t}
                onClick={() => {
                  if (t === "Blog") {
                    setBlog(true);
                    setPost(false);
                    setStack(false);
                    setChill(false);
                  } else if (t === "Post") {
                    setBlog(false);
                    setPost(true);
                    setStack(false);
                    setChill(false);
                  } else if (t === "Chill Section") {
                    setBlog(false);
                    setPost(false);
                    setStack(false);
                    setChill(true);
                  }
                  else if (t === "StackOverflow") {
                    setBlog(false);
                    setPost(false);
                    setChill(false);
                    setStack(true);
                  }
                }}
              >
                <ListItemIcon sx={{ color: "#E94560", fontSize: "25px" }}>
                {index===0 && <FaInbox />}
                {index===1 && <FaPager />}
                  {index===2 && <FaDoorOpen />}
                  {index===3 && <FaStackOverflow />}
                </ListItemIcon>
                <ListItemText primary={t} sx={{ color: "white" }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {blog && (<BlogFeed blogs={user}/>)}
        {post && (<PostFeed />)}
        {chill && <ChillSection />}
        {stack && <StackOverflow />}
      </Box>
    </Box>
  );
}
