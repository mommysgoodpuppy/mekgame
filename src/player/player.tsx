import { MechScene } from "../mechscene.tsx";
import { DesktopCharacterController } from "../gamelogic/desktopcharactercontroller.tsx";

export function Player({ spawnPosition }: { spawnPosition: [number, number, number] }) {
  return (
    <>

      <group scale={3}><MechScene/></group>
      <DesktopCharacterController spawnPosition={spawnPosition} />
    </>
  );
}
