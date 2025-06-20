import { Canvas } from "@react-three/fiber";
import { Scene } from "./scene.tsx";
import { OrbitControls } from "@react-three/drei";

export function App() {
  return (
    <Canvas shadows>
      <color attach="background" args={['#f58851']} />
      <OrbitControls/>
      <Scene />
    </Canvas>
  );
}
