import Alan from "./Components/Alan";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { Button } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spotify from "./Components/Spotify";
import Gmeet from "./Components/Gmeet";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AnimatePresence } from "framer-motion";
import Home from "./Pages/Home"
import { useLocation } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import ReadBlog from "./Pages/ReadBlog";

function App() {
  const loc = useLocation();
  const theme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#1A1A2E",
      },
      secondary: {
        main: "#E94560",
      },
    },
    typography: {
      fontFamily: "Fredoka, Montserrat, sans-serif",
      fontWeightRegular: 500,
    },
  });
  return (
    <>
     {/* <Spotify />  */}
      <ThemeProvider theme={theme}>
        <AnimatePresence exitBeforeEnter>
            <Routes location={loc} key={loc.key}>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/dash" element={<Dashboard />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/home" element={<Home />}></Route>

            </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
