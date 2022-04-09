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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Button } from "@mui/material";
import BlogCard from "../Components/BlogCard";
import { Grid } from "@mui/material";
import ChillSection from "../Pages/ChillSection";
import LogoutIcon from '@mui/icons-material/Logout';
import { GlobalStyles } from "@mui/material";
import {useNavigate} from "react-router-dom"
const drawerWidth = 240;

export default function Dashboard() {
  const navigate=useNavigate()
  const [inbox, setInbox] = React.useState(false);
  const [starr, setStarr] = React.useState(false);
  const [chill, setChill] = React.useState(false);

  const handleLogout=()=>{
    localStorage.removeItem('user')
    localStorage.removeItem('user_blogs')
    localStorage.removeItem('user_posts')
    localStorage.removeItem('user_id')
    navigate('/')
  }
  React.useEffect(() => {
    setInbox(true);
  }, []);
  return (
      <Box
        sx={{ display: "flex", backgroundColor: "#16213E", margin: "0", }}
        color="secondary"
      >
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
   
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              Clipped drawer
            </Typography>
            <Button variant='contained' color='secondary' onClick={handleLogout} startIcon={<LogoutIcon/>}>LOGOUT</Button>
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
              {["Inbox", "Starred", "Chill Section", "Drafts"].map(
                (t, index) => (
                  <ListItem
                    color="secondary"
                    button
                    key={t}
                    onClick={() => {
                      if (t === "Inbox") {
                        setInbox(true);
                        setStarr(false);
                        setChill(false);
                      } else if (t === "Starred") {
                        setInbox(false);
                        setStarr(true);
                        setChill(false);
                      } else if (t === "Chill Section") {
                        setInbox(false);
                        setStarr(false);
                        setChill(true);
                      }
                    }}
                  >
                    <ListItemIcon sx={{ color: "#E94560" }}>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={t} sx={{ color: "white" }} />
                  </ListItem>
                )
              )}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {inbox && (
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item>
                <BlogCard />
              </Grid>
              <Grid item>
                <BlogCard />
              </Grid>
              <Grid item>
                <BlogCard />
              </Grid>
              <Grid item>
                <BlogCard />
              </Grid>
            </Grid>
          )}
          {starr && <p>This is starred</p>}

          {chill && <ChillSection />}
        </Box>
      </Box>
  );
}
