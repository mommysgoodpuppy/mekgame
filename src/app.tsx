import { Canvas } from "@react-three/fiber";
import { Scene } from "./game.tsx";
import { KeyboardControls } from "@react-three/drei";

export function App() {
  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "backward", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
        { name: "jump", keys: ["Space"] },
      ]}>
      <Canvas shadows camera={{ fov: 75 }}>
        <Scene />
      </Canvas>
    </KeyboardControls>
  );
}
