import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Prvni from "./pages/Prvni";
import Treti from "./pages/Treti";
import Pet from "./pages/Pet";
import Header from "./components/Header";
import { ContextMainProvider } from "./context/ContextMain"; // Aktualizovaný import
import DataList from "./components/DataList";

function App() {
  return (
    <ContextMainProvider>
    <Router>
      {/* Header se zobrazí na každé stránce */}
      <Header />
      
      {/* Definice jednotlivých stránek */}
      <Routes>
        <Route path="/prvni" element={<Prvni />} />
        <Route path="/treti" element={<Treti />} />
        <Route path="/pet" element={<Pet />} />
        <Route path="/treti2" element={<Treti />} />
        <Route path="/dataList" element={<DataList />} />
        {/* <Route path="/druha" element={<Druha />} /> */}
      </Routes>
    </Router>
    </ContextMainProvider>
  );
}

export default App;
