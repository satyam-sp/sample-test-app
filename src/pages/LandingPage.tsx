import React from "react";
import { ArrowRight, Cpu, Layers, Shield } from "lucide-react";
import { useIsDarkMode } from "../store/themeStore";
import HeroCanvas from "../components/HeroCanvas";
import {
  HeroGrid,
  HeroContent,
  HeroTitle,
  HeroDescription,
  PrimaryBtn,
  FeatureSection,
  FeatureCard
} from "./LandingPage.styled";

const LandingPage: React.FC = () => {
  const isDarkMode = useIsDarkMode();

  return (
    <>
      {/* Hero Core Structural Layout Grid */}
      <HeroGrid>
        <HeroContent>
          <HeroTitle>Next Generation Digital Experiences</HeroTitle>
          <HeroDescription>
            Engineered with absolute precision. Bring your design schemas to life using smooth transitions, responsive modular infrastructure layers, and interactive 3D assets.
          </HeroDescription>
          <PrimaryBtn>
            Get Started <ArrowRight size={16} />
          </PrimaryBtn>
        </HeroContent>

        {/* Interactive ThreeJS 3D Stage Section Node */}
        <div className="w-full flex items-center justify-center">
          <HeroCanvas />
        </div>
      </HeroGrid>

      {/* Feature Showcases Card Grid Deck */}
      <FeatureSection id="features">
        <FeatureCard $isDark={isDarkMode}>
          <div className="icon-box"><Cpu size={22} /></div>
          <h4>Zustand State Engine</h4>
          <p>Manages the core dark/light theme switch outside the standard React rendering tree, preventing lags during heavy execution threads.</p>
        </FeatureCard>

        <FeatureCard $isDark={isDarkMode}>
          <div className="icon-box"><Layers size={22} /></div>
          <h4>Three.js Render Stage</h4>
          <p>Calculates complex procedural vectors for the hovering UFO hull, material transparency, and interactive blinking light rings.</p>
        </FeatureCard>

        <FeatureCard $isDark={isDarkMode}>
          <div className="icon-box"><Shield size={22} /></div>
          <h4>Styled Components Layout</h4>
          <p>Injects highly fluid, responsive properties dynamically to transition colors seamlessly into metallic pink rose-gold gradients on dark mode.</p>
        </FeatureCard>
      </FeatureSection>
    </>
  );
};

export default LandingPage;