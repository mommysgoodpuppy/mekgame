import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { Base, Geometry, Subtraction } from "@react-three/csg";
import Grass from "./grass.tsx";

const DENSITY = 50000 / (100 * 40); // Base density from original Grass component

export function BoxWithGrass(
  { position, size, grassHeight = 1.2}: {
    position: [number, number, number];
    size: [number, number, number];
    grassHeight?: number;
  },
) {
  const [width, height, depth] = size;
  const instances = Math.round(width * depth * DENSITY);
  const sideWidth = 0.9;
  const grassInset = 0.9;

  return (
    <group position={position}>
      <RigidBody type="fixed" colliders={false}>
        <CuboidCollider args={[width / 2, height / 2, depth / 2]} />
        <mesh castShadow receiveShadow>
          <Geometry>
            <Base>
              <boxGeometry args={[width, height, depth]} />
            </Base>
            <Subtraction>
              <boxGeometry
                args={[width - sideWidth, height, depth - sideWidth]}
              />
            </Subtraction>
          </Geometry>

          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </RigidBody>

      <group position={[0, height / 2 - grassInset, 0]}>
        <Grass
          bladeHeight={grassHeight}
          size={[width - 1, depth - 1]}
          instances={instances}
          showGround={true}
        />
      </group>
    </group>
  );
}
