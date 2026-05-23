import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useIsDarkMode } from "./store/themeStore";
import RootLayout from "./layouts/RootLayout";
import LandingPage from "./pages/LandingPage";
import NotesPage from "./pages/NotesPage";

const App: React.FC = () => {
  const isDarkMode = useIsDarkMode();

  return (
    <ThemeProvider theme={{ mode: isDarkMode ? "dark" : "light" }}>
      <Router>
        <Routes>
          {/* Main Layout Shell Wrapper Component */}
          <Route path="/" element={<RootLayout />}>
            {/* Index Route renders automatically at localhost:3000/ */}
            <Route index element={<LandingPage />} />
            
            {/* Notes Route inherits the layout structural properties automatically at localhost:3000/notes */}
            <Route path="notes" element={<NotesPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;