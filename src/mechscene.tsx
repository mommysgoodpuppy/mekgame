import { RoundedBox } from "@react-three/drei";
import { Geometry, Base, Subtraction } from '@react-three/csg'



function Closet() {
  return (
    <>
      <group name={"closet"}>
        <group position={[0, 0.45, 0]}>
          <group position={[0, 0, 0]} scale={[0.73, 0.73, 0.73]}>
            <mesh castShadow receiveShadow scale={[1, 1, 1]}>
              <RoundedBox args={[1, 1, 1]} radius={0.05} smoothness={4} scale={[1, 0.9, 1]}>
                <meshStandardMaterial />
              </RoundedBox>
            </mesh>
          </group>
          <group position={[0, 0.53, 0]} scale={[1, 1, 1]}>
            <mesh castShadow receiveShadow scale={[1, 1, 1]}>
              <RoundedBox args={[0.73, 0.3, 0.73]} radius={0.05} smoothness={4} position={[0, -0.0499999999999999, 0]}>
                <meshStandardMaterial />
              </RoundedBox>
            </mesh>
          </group>
        </group>
        <group>
          <group position={[0, 1.51, 0]} scale={[0.73, 0.73, 0.73]}>
            <mesh castShadow receiveShadow scale={[1, 1, 1]}>
              <RoundedBox args={[1, 1, 1]} radius={0.05} smoothness={4} scale={[1, 1.77, 0.65]} position={[0, 0.32, -0.14]}>
                <meshStandardMaterial color={"#919191"} />
              </RoundedBox>
            </mesh>
          </group>
          <group position={[0.07, 1.51, 0.35]} scale={[0.73, 0.73, 0.73]} rotation={[0, 0.4014257279586958, 0]}>
            <mesh castShadow receiveShadow scale={[1, 1, 1]}>
              <RoundedBox args={[1, 1, 1]} radius={0.05} smoothness={4} scale={[1, 1.61, 0.17]} position={[0, 0.32, -0.01]}>
                <meshStandardMaterial color={"#dedede"} />
              </RoundedBox>
            </mesh>
          </group>
        </group>
      </group>
    </>
  );
}

function Chair() {
  return (
    <>


      <group>
        <mesh castShadow receiveShadow scale={[1, 0.17, 1]} position={[0, 1.03, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"#b5b5b5"} />
        </mesh>
        <mesh castShadow receiveShadow scale={[1.18, 0.2, 1.18]} position={[0, 0.96, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial />
        </mesh>
      </group>

      <group position={[0.86, 1.58, 0]} rotation={[0, 0, 1.0471975511965976]}>
        <mesh castShadow receiveShadow scale={[0.3, 0.17, 1]} position={[0, 0.0600000000000001, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"#b5b5b5"} />
        </mesh>
        <mesh castShadow receiveShadow scale={[0.3, 0.17, 1]} position={[-0.34, 0.0600000000000001, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"#b5b5b5"} />
        </mesh>
        <mesh castShadow receiveShadow scale={[0.3, 0.17, 1]} position={[0.35, 0.0600000000000001, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"#b5b5b5"} />
        </mesh>
        <mesh castShadow receiveShadow scale={[1.18, 0.2, 1.18]} position={undefined}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial />
        </mesh>
      </group >

      <mesh castShadow receiveShadow scale={[0.21, 0.81, 0.21]} position={[0, 0.54, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"#b5b5b5"} />
      </mesh>


    </>
  );
}

function Ladder() {
  return (
    <>
      <group name="ladder">
        {/* Left rail */}
        <mesh castShadow receiveShadow scale={[0.1, 2, 0.1]} position={[-0.3, 1, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>

        {/* Right rail */}
        <mesh castShadow receiveShadow scale={[0.1, 2, 0.1]} position={[0.3, 1, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>

        {/* Rungs */}
        {[0.3, 0.7, 1.1, 1.5, 1.9].map((y, index) => (
          <mesh key={index} castShadow receiveShadow scale={[0.6, 0.05, 0.1]} position={[0, y, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
        ))}
      </group>
    </>
  );
}

export function MechScene() {
  return (
    <>
      <pointLight position={[0, 2.76, 2.1]} intensity={9.48} color="white" />
      <group name={"floor"} scale={[3.22, 1, 3.56]}>
        <mesh castShadow receiveShadow scale={[1.58, 0.21, 1.56]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial />
        </mesh>
      </group>
      <group name={"floor2"} scale={[3.22, 0.64, 3.56]} position={[0, 1.74, 0]}>
        <mesh castShadow receiveShadow>
          <Geometry>
            <Base>
              <boxGeometry args={[0.52, 0.21, 0.48]} />
            </Base>
            <Subtraction position={[0.13, 0, 0]} scale={[1.03, 1.1, 1.04]}>
              <boxGeometry args={[0.2, 0.2, 0.2]} />
            </Subtraction>
          </Geometry>
          <meshStandardMaterial />
        </mesh>
      </group>
      <group position={[1.05, -0.04, -0.99]} scale={[0.75, 0.75, 0.75]}>
        <Closet />
      </group>
      <group scale={[0.42, 0.42, 0.42]} position={[-0.02, 0, 0]} rotation={[0, -1.5707963267948966, 0]}>
        <Chair />
      </group>
      <group position={[0.37, 0, 0]} rotation={[0, -1.5707963267948966, 0]} scale={[0.77, 1.07, 0.77]}>
        <Ladder />
      </group>
    </>
  );
}
