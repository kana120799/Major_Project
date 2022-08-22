import { Box } from "@mui/material";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home";
function App() {
  return (
    <>
      <Header></Header>
      <Box>
        <Home></Home>
      </Box>
    </>
  );
}

export default App;
