import { Suspense } from "react";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import Grass from "./grass.tsx";
import { Sky } from "@react-three/drei";
import { Player } from "../../player/player.tsx";

function Ground() {
  return (
    <RigidBody type="fixed" position-y={-0.5}>
      <CuboidCollider args={[100, 0.5, 100]} />
    </RigidBody>
  );
}

export function OverWorld() {
  return (
    <>
      <Sky azimuth={1} inclination={0.6} distance={1000} />
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 2.76, 2.1]} intensity={9.48} color="white" castShadow />
      <Player spawnPosition={[0, 5, 0]} />
      <Suspense fallback={null}>
        <group position={[0, -8.68, 0]}>
          <Grass />
        </group>
      </Suspense>
      <Ground />
    </>
  );
}
