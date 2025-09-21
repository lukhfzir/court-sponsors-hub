import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Html } from "@react-three/drei";
import { Mesh, Group } from "three";

interface Jersey3DProps {
  playerName: string;
  playerNumber: string;
}

const JerseyMesh = ({ playerName, playerNumber }: Jersey3DProps) => {
  const jerseyRef = useRef<Group>(null);

  useFrame(() => {
    if (jerseyRef.current) {
      jerseyRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={jerseyRef}>
      {/* Main Jersey Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.5, 3.5, 0.3]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>

      {/* Yellow Accent Stripes */}
      <mesh position={[-1.1, 0, 0.16]}>
        <boxGeometry args={[0.2, 3.5, 0.05]} />
        <meshStandardMaterial color="#facc15" />
      </mesh>
      <mesh position={[1.1, 0, 0.16]}>
        <boxGeometry args={[0.2, 3.5, 0.05]} />
        <meshStandardMaterial color="#facc15" />
      </mesh>

      {/* Collar */}
      <mesh position={[0, 1.6, 0.16]}>
        <boxGeometry args={[1, 0.3, 0.05]} />
        <meshStandardMaterial color="#facc15" />
      </mesh>

      {/* Sleeves */}
      <mesh position={[-1.8, 1, 0]} rotation={[0, 0, 0.3]}>
        <boxGeometry args={[1.2, 0.8, 0.25]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>
      <mesh position={[1.8, 1, 0]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[1.2, 0.8, 0.25]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>

      {/* Yellow sleeve cuffs */}
      <mesh position={[-2.2, 0.6, 0]} rotation={[0, 0, 0.3]}>
        <boxGeometry args={[1.2, 0.15, 0.26]} />
        <meshStandardMaterial color="#facc15" />
      </mesh>
      <mesh position={[2.2, 0.6, 0]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[1.2, 0.15, 0.26]} />
        <meshStandardMaterial color="#facc15" />
      </mesh>

      {/* Front Logo */}
      <Text
        position={[0, 0.5, 0.2]}
        fontSize={0.3}
        color="#facc15"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Arial-Bold.ttf"
      >
        COURT
      </Text>
      <Text
        position={[0, 0.1, 0.2]}
        fontSize={0.3}
        color="#facc15"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Arial-Bold.ttf"
      >
        SPONSOR
      </Text>

      {/* Back Text - Player Name */}
      <Text
        position={[0, 0.8, -0.2]}
        rotation={[0, Math.PI, 0]}
        fontSize={0.25}
        color="#facc15"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Arial-Bold.ttf"
      >
        {playerName || "PLAYER"}
      </Text>

      {/* Back Text - Player Number */}
      <Text
        position={[0, -0.2, -0.2]}
        rotation={[0, Math.PI, 0]}
        fontSize={1.2}
        color="#facc15"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Arial-Bold.ttf"
      >
        {playerNumber || "00"}
      </Text>

      {/* Front badge decoration */}
      <mesh position={[0, -0.8, 0.2]}>
        <circleGeometry args={[0.3, 32]} />
        <meshStandardMaterial color="#facc15" />
      </mesh>
      <Text
        position={[0, -0.8, 0.21]}
        fontSize={0.15}
        color="#1e40af"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Arial-Bold.ttf"
      >
        PICKLEBALL
      </Text>
    </group>
  );
};

const Jersey3D = ({ playerName, playerNumber }: Jersey3DProps) => {
  return (
    <div className="w-full h-[500px] relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />

        {/* Jersey */}
        <JerseyMesh playerName={playerName} playerNumber={playerNumber} />

        {/* Controls */}
        <OrbitControls 
          enablePan={false}
          enableZoom={true}
          minDistance={5}
          maxDistance={12}
          autoRotate={false}
        />
      </Canvas>
      
      {/* Instructions overlay */}
      <div className="absolute bottom-4 left-4 bg-black/70 text-white p-2 rounded-lg text-sm">
        <p>🖱️ Click and drag to rotate</p>
        <p>🔄 Scroll to zoom</p>
      </div>
    </div>
  );
};

export default Jersey3D;