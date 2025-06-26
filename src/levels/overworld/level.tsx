import { Suspense } from "react";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import Grass from "./grass.tsx";
import { Sky } from "@react-three/drei";
import { Player } from "../../player/player.tsx";
import { BoxWithGrass } from "./BoxWithGrass.tsx";

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
      <Player spawnPosition={[0, 5, 0]} />
      <Level />
    </>
  );
}


export function LevelGeo() {
  return (
    <>
      <group name="box1" position={[0, 0, 0]} scale={[1, 1, 1]}>
        <BoxWithGrass position={[0, -2, 0]} size={[20, 4, 20]} />
        <BoxWithGrass position={[25, -5, -10]} size={[10, 10, 15]} />
        <BoxWithGrass position={[-20, 0, -25]} size={[33.56, 6, 50.24]} />
      </group>
    </>
  )
}

export function Level() {
  return (
    <>
      <Sky azimuth={1} inclination={0.6} distance={1000} />
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 2.76, 2.1]} intensity={9.48} color="white" castShadow />
      <Suspense fallback={null}>
        <group position={[0, -8.68, 0]}>

        </group>
      </Suspense>
      <Ground />
    </>
  );
}
