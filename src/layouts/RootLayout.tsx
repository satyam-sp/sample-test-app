import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Sun, Moon, Sparkles } from "lucide-react";
import { useIsDarkMode, toggleTheme } from "../store/themeStore";
import { PageContainer, Navbar, Logo, NavLinks, ToggleContainer, ToggleTrack, ToggleThumb } from "../pages/LandingPage.styled";

const RootLayout: React.FC = () => {
  const isDarkMode = useIsDarkMode();

  return (
    <PageContainer $isDark={isDarkMode}>
      {/* PERSISTENT GLOBAL NAVBAR: Stays visible across ALL route changes */}
      <Navbar>
        <Logo>
          <Link to="/" className="flex items-center text-inherit no-underline">
            <Sparkles size={18} className="text-pink-500 mr-2" /> Test.io
          </Link>
        </Logo>
        
        <NavLinks>
          <Link to="/notes" className="font-semibold text-sm transition-opacity hover:opacity-80">
            Notes
          </Link>

          {/* Persistent Custom Toggle Switch Component Container */}
          <ToggleContainer onClick={toggleTheme} aria-label="Toggle Theme Mode">
            <Sun size={15} className="text-amber-500 z-10" />
            <ToggleTrack>
              <ToggleThumb $isDark={isDarkMode} />
            </ToggleTrack>
            <Moon size={14} className="text-slate-400 z-10" />
          </ToggleContainer>
        </NavLinks>
      </Navbar>

      {/* DYNAMIC VIEWPORT INJECTION SLOT: Pages render right here */}
      <main className="relative z-10">
        <Outlet />
      </main>
    </PageContainer>
  );
};

export default RootLayout;