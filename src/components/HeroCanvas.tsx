import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useIsDarkMode } from "../store/themeStore";
import * as THREE from "three";

// Individual procedurally built UFO component
const ProceduralUFO = () => {
  const ufoRef = useRef<THREE.Group>(null);
  const lightsRef = useRef<THREE.Group>(null);
  const isDarkMode = useIsDarkMode();

  // Premium space-grade metallic textures
  const hullMaterial = {
    /* CHANGED: Swapped deep indigo/black for a premium metallic light pink (#fbcfe8) in dark mode */
    color: isDarkMode ? "#fbcfe8" : "#cbd5e1", 
    roughness: 0.15,
    metalness: 0.9,
  };

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (ufoRef.current) {
      // Passive floating/hovering animation to simulate weightlessness
      ufoRef.current.position.y = Math.sin(time * 2.0) * 0.2;
      
      // Continuous rotational spin along its own central axis
      ufoRef.current.rotation.y = time * 0.6;
      
      // Subtle space-wobble tilt accent
      ufoRef.current.rotation.x = Math.sin(time * 1.2) * 0.08;
    }

    // Sequence blinking patterns onto individual peripheral propulsion light nodes
    if (lightsRef.current) {
      lightsRef.current.children.forEach((light, index) => {
        const mesh = light as THREE.Mesh;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        // Alternating wave sequences create a rolling, sequential tracking animation ring
        const intensityFactor = Math.sin(time * 5 + index * 0.8) * 0.5 + 0.5;
        mat.emissiveIntensity = intensityFactor * (isDarkMode ? 3.0 : 1.5);
      });
    }
  });

  // Calculate coordinates for a ring of 8 perimeter tracking node lights
  const lightCount = 8;
  const lightRadius = 1.35;

  return (
    <group ref={ufoRef} scale={1.6}>
      {/* --- MAIN STRUCTURE --- */}

      {/* 1. Upper Cockpit Window Dome */}
      <mesh position={[0, 0.25, 0]}>
        {/* Slices a sphere perfectly in half along the theta boundary [0 to PI/2] */}
        <sphereGeometry args={[0.6, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial 
          color={isDarkMode ? "#f472b6" : "#0ea5e9"} /* CHANGED: Pink cockpit highlight for dark mode */
          roughness={0.0}
          metalness={0.5}
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* 2. Primary Metallic Ship Hull Saucer */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.5, 1.5, 0.35, 32, 1]} />
        <meshStandardMaterial {...hullMaterial} />
      </mesh>

      {/* 3. Tapered Lower Engine Slats */}
      <mesh position={[0, -0.22, 0]}>
        <cylinderGeometry args={[1.4, 0.7, 0.2, 32, 1]} />
        {/* CHANGED: Complimented the lower slats with a slightly deeper pink shade (#f472b6) */}
        <meshStandardMaterial color={isDarkMode ? "#f472b6" : "#94a3b8"} roughness={0.3} />
      </mesh>

      {/* 4. Bottom Main Tractor Beam Propulsion Core */}
      <mesh position={[0, -0.33, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.05, 32, 1]} />
        <meshStandardMaterial 
          color={isDarkMode ? "#f472b6" : "#38bdf8"}
          emissive={isDarkMode ? "#f472b6" : "#38bdf8"}
          emissiveIntensity={isDarkMode ? 4.0 : 2.0}
        />
      </mesh>


      {/* --- PERIPHERAL PROPULSION BLINKING LIGHT RING --- */}
      <group ref={lightsRef}>
        {Array.from({ length: lightCount }).map((_, i) => {
          const angle = (i / lightCount) * Math.PI * 2;
          const posX = Math.cos(angle) * lightRadius;
          const posZ = Math.sin(angle) * lightRadius;

          return (
            <mesh key={i} position={[posX, 0.02, posZ]}>
              <sphereGeometry args={[0.07, 16, 16]} />
              <meshStandardMaterial 
                color={isDarkMode ? "#fff1f2" : "#22c55e"} /* CHANGED: Soft white-pink neon blinkers */
                emissive={isDarkMode ? "#fff1f2" : "#22c55e"}
                roughness={0.1}
              />
            </mesh>
          );
        })}
      </group>
    </group>
  );
};

const HeroCanvas = () => {
  const isDarkMode = useIsDarkMode();

  return (
    <div className="w-full h-[700px] md:h-[900px] cursor-grab active:cursor-grabbing">
      <Canvas 
        camera={{ position: [0, 1.8, 4.5], fov: 55 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <ambientLight intensity={isDarkMode ? 1.2 : 2.0} />
        
        {/* Dynamic global highlights to capture metallic curves and shadows */}
        <pointLight position={[10, 15, 10]} intensity={Math.PI * 2} color={isDarkMode ? "#fbcfe8" : "#ffffff"} />
        <directionalLight position={[-8, 5, 4]} intensity={Math.PI} />
        <pointLight position={[0, -4, 0]} intensity={3} color={isDarkMode ? "#f472b6" : "#38bdf8"} />
        
        <ProceduralUFO />
        
        <OrbitControls 
          enableZoom={false} 
          autoRotate={false}
          minPolarAngle={Math.PI / 4} // Prevents tilting directly over the ship
          maxPolarAngle={Math.PI / 1.7} // Prevents tilting under the floor boundary
        />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;