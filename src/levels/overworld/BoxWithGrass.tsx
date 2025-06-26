import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { Base, Geometry, Subtraction } from "@react-three/csg";
import Grass from "./grass.tsx";

const DENSITY = 50000 / (100 * 100); // Base density from original Grass component

export function BoxWithGrass(
  { position, size }: {
    position: [number, number, number];
    size: [number, number, number];
  },
) {
  const [width, height, depth] = size;
  const instances = Math.round(width * depth * DENSITY);

  return (
    <group position={position}>
      <RigidBody type="fixed" colliders={false}>
        <CuboidCollider args={[width / 2, height / 2, depth / 2]} />
        <mesh castShadow receiveShadow>
          <Geometry>
            <Base>
              <boxGeometry args={[width, height - 0.1, depth]} />
            </Base>
            <Subtraction >
              <boxGeometry args={[width - 0.9, height, depth - 0.9]} />
            </Subtraction>
          </Geometry>

          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </RigidBody>

      <group position={[0, height / 2 - 0.2, 0]}>
        <Grass
          size={[width - 1, depth - 1]}
          instances={instances}
          showGround={true}
        />
      </group>
    </group>
  );
}
