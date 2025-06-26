import { PointerLockControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { OverWorld } from "./levels/overworld/level.tsx";



export function Scene() {

  return (
    <>
      <Physics gravity={[0, -30, 0]}>
        <OverWorld />
      </Physics>
      <PointerLockControls />
    </>
  );
}
