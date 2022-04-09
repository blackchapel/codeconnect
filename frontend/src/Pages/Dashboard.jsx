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
import LogoutIcon from '@mui/icons-material/Logout';
import BlogCard from "../Components/BlogCard";
import { Grid } from "@mui/material";
import ChillSection from "../Pages/ChillSection";
import { GlobalStyles } from "@mui/material";
import { Backdrop } from "@mui/material";
import { Modal } from "@mui/material";
import { FaEdit } from "react-icons/fa";
import { FormControl, TextField } from "@mui/material";
import PostCard from '../Components/PostCard'
import axios from 'axios'
const drawerWidth = 240;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

export default function Dashboard() {
  const [formData, setFormData] = React.useState({
    Heading: '',
    Content: '',
    Author : JSON.parse( localStorage.getItem( 'user_id' ))
  })
  const [inbox, setInbox] = React.useState(false);
  const [starr, setStarr] = React.useState(false);
  const [chill, setChill] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  React.useEffect(() => {
    setInbox(true);
  }, []);
  const onChange = (e) => {

    setFormData((prevState) => ({

      ...prevState,
      [e.target.name]: e.target.value,

    }))
  }
  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    const response = await axios.post('http://localhost:3001/api/blog/create',formData)
    console.log(response);
    setOpen(false)
  }
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
          <Typography variant="h6" noWrap component="div" sx={{flexGrow : 1}}>
            Clipped drawer
          </Typography>
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
            height: "40%",
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
            {["Inbox", "Starred", "Chill Section", "Drafts"].map((t, index) => (
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
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {inbox && (
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item>
              <Button onClick={handleOpen}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="flex-start"
                  spacing={1}
                >
                  <Grid item sx={{ fontSize: "40px", color: "#E94560" }}>
                    <FaEdit />
                  </Grid>
                  <Grid item sx={{ color: "#E94560" }}>
                    <h4>Write a Blog</h4>
                  </Grid>
                </Grid>
              </Button>
              <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Box sx={style} component="form" noValidate>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="Heading"
                    label="Heading"
                    name="Heading"
                    onChange={onChange}
                    autoComplete="Heading"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="Content"
                    label="Content"
                    type="Content"
                    onChange={onChange}
                    id="Content"
                    autoComplete="current-password"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    color="secondary"
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{ mt: 3, mb: 2, boxShadow: 0, color: "white" }}
                  >
                    Submit
                  </Button>
                </Box>
              </Modal>
            </Grid>
            <Grid item>
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
                  <BlogCard/>
                </Grid>
                <Grid item>
                  <BlogCard />
                </Grid>
                <Grid item>
                  <PostCard />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
        {starr && <p>This is starred</p>}
        {chill && <ChillSection />}
      </Box>
    </Box>
  );
}
