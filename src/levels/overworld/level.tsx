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
      <group position={[0, -3.24, 1.46]} scale={0.32}>
        <group position={[0, 12.72, 0]}>
          <Player spawnPosition={[0, 5, 0]} />
        </group>
        <group position={[0, 6.34, 0]}>
          <Level />
        </group>
      </group>
    </>
  );
}

export function LevelGeo() {
  return (
    <>
      <group name="box1" position={[0, 0, 0]} scale={[1, 1, 1]}>
        <BoxWithGrass position={[0, -5.2, 0]} size={[30, 4, 30]} />
        <BoxWithGrass position={[25, -5, -10]} size={[10, 10, 15]} />
        <BoxWithGrass position={[-33.82, -2.4, -25]} size={[33.56, 6, 50.24]} />
      </group>
    </>
  );
}

export function Level() {
  return (
    <>
      <Sky azimuth={1} inclination={0.6} distance={1000} />
      <ambientLight intensity={0.7} />
      <pointLight
        position={[0, 20.69, 2.1]}
        distance={100}
        intensity={109.48}
        color="white"
        castShadow
      />
      <Suspense fallback={null}>
        <group position={[0, 6.36, 0]}>
          <LevelGeo />
        </group>
      </Suspense>
      <Ground />
    </>
  );
}
