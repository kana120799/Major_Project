import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import { Box } from "@mui/material";
// ==============================================================================
import BlueBar from "./Components/Header/BlueBar";
import DetailView from "./Components/ItemDetails/DetailView";
import TemplateProvider from "./templates/TemplateProvider";
import ContextProvider from "./context/ContextProvider";

import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <>
      <TemplateProvider>
        <ContextProvider>
          <BrowserRouter>
            <BlueBar />
            <Box style={{ marginTop: 54 }}>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/product/:id" element={<DetailView />} />
                <Route exact path="*" element={<NotFound />}></Route>
              </Routes>
            </Box>
          </BrowserRouter>
        </ContextProvider>
      </TemplateProvider>
    </>
  );
}

export default App;
