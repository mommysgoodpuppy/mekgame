import { Physics } from "@react-three/rapier";
import { KeyboardControls } from "@react-three/drei";

export function CanvasProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "backward", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
        { name: "jump", keys: ["Space"] },
      ]}>
      <Physics gravity={[0, -30, 0]}>{children}</Physics>
    </KeyboardControls>
  );
}