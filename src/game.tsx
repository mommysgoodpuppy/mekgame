import { PointerLockControls, Sky } from "@react-three/drei"
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier"
import { MechScene } from "./mechscene.tsx";
import { DesktopCharacterController } from "./desktopcharactercontroller.tsx";

function Ground() {
  return (
    <RigidBody type="fixed" position-y={-0.5}>
      <CuboidCollider args={[100, 0.5, 100]} />
    </RigidBody>
  )
}

export function Scene() {
  return (
    <>
      <Physics gravity={[0, -30, 0]}>
        <Sky azimuth={1} inclination={0.6} distance={1000} />
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 2.76, 2.1]} intensity={9.48} color="white" castShadow />
        <MechScene/>
        <DesktopCharacterController spawnPosition={[0, 5, 0]} />
        <Ground />
      </Physics>
      <PointerLockControls />
    </>
  );
}
