import styled from "styled-components";

// Smooth global color interpolation config matching exact timing guidelines
const themeTransition = "background-color 0.5s ease-in-out, color 0.4s ease-in-out, border-color 0.4s ease-in-out, shadow 0.4s ease-in-out";

export const PageContainer = styled.div<{ $isDark: boolean }>`
  min-h-screen: 100vh;
  width: 100%;
  box-sizing: border-box;
  background-color: ${(props) => (props.$isDark ? "#09090b" : "#f8fafc")};
  color: ${(props) => (props.$isDark ? "#f8fafc" : "#0f172a")};
  transition: ${themeTransition};
  overflow-x: hidden;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  max-width: 1280px;
  margin: 0 auto;
  
  @media (max-width: 640px) {
    padding: 20px 16px;
  }
`;

export const Logo = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 20px;
  letter-spacing: -0.5px;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  a {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: inherit;
    text-decoration: none;
    opacity: 0.7;
    transition: opacity 0.2s;
    
    &:hover { opacity: 1; }
    
    @media (max-width: 640px) {
      display: none; /* Auto-hides descriptive link decks onto mobile devices cleanly */
    }
  }
`;

/* --- Custom Styled Toggle Switch Structure --- */
export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 68px;
  height: 34px;
  background-color: rgba(120, 120, 120, 0.15);
  border: 1px solid rgba(120, 120, 120, 0.2);
  border-radius: 20px;
  padding: 0 6px;
  cursor: pointer;
  user-select: none;
`;

export const ToggleTrack = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  border-radius: 20px;
  z-index: 1;
`;

export const ToggleThumb = styled.div<{ $isDark: boolean }>`
  position: absolute;
  top: 3px;
  left: ${(props) => (props.$isDark ? "50px" : "4px")};
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${(props) => (props.$isDark ? "#ffffff" : "#000000")};
  box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
  transition: left 0.25s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s;
  z-index: 2;
`;

/* --- Responsive Responsive Hero Positioning System Grid --- */
export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 40px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 60px 32px;

  /* Tablet responsive view breakdown */
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 40px 24px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export const HeroTitle = styled.h1`
  font-family: 'Georgia', serif;
  font-size: 54px;
  font-weight: 700;
  line-height: 1.15;
  margin: 0 0 20px 0;
  letter-spacing: -1px;

  @media (max-width: 768px) { font-size: 38px; }
  @media (max-width: 480px) { font-size: 32px; }
`;

export const HeroDescription = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  opacity: 0.7;
  margin: 0 0 32px 0;
  max-width: 540px;
`;

export const PrimaryBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: inherit;
  background: transparent;
  border: 2px solid currentColor;
  border-radius: 30px;
  padding: 14px 32px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    transform: translateY(-2px);
    background-color: rgba(120, 120, 120, 0.1);
  }
`;

/* --- Feature Container Cards Section --- */
export const FeatureSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 60px 32px 100px 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 40px 16px 80px 16px;
  }
`;

export const FeatureCard = styled.div<{ $isDark: boolean }>`
  padding: 32px;
  border-radius: 20px;
  background-color: ${(props) => (props.$isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)")};
  border: 1px solid ${(props) => (props.$isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)")};
  transition: ${themeTransition};

  .icon-box {
    margin-bottom: 20px;
    color: ${(props) => (props.$isDark ? "#3b82f6" : "#000000")};
  }

  h4 {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 10px 0;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    line-height: 1.5;
    opacity: 0.6;
    margin: 0;
  }
`;