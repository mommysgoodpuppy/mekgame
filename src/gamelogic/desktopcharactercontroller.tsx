import * as THREE from "three"
import * as RAPIER from "@dimforge/rapier3d-compat"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { CapsuleCollider, RigidBody, useRapier, RapierRigidBody } from "@react-three/rapier"

const SPEED = 5
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()

type DesktopCharacterControllerProps = {
  spawnPosition?: [number, number, number];
}

export function DesktopCharacterController({ spawnPosition = [0, 10, 0] }: DesktopCharacterControllerProps) {
  const ref = useRef<RapierRigidBody>(null)
  const { world } = useRapier()
  const [, get] = useKeyboardControls()
  
  useFrame((state) => {
    if (!ref.current) return;

    const { forward, backward, left, right, jump } = get()
    const velocity = ref.current.linvel()
    
    // update camera
    const { x, y, z } = ref.current.translation()
    state.camera.position.set(x, y, z)
    
    // movement
    frontVector.set(0, 0, Number(backward) - Number(forward))
    sideVector.set(Number(left) - Number(right), 0, 0)
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(state.camera.rotation)
    ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z }, true)
    
    // jumping
    const origin = ref.current.translation()
    const ray = world.castRayAndGetNormal(new RAPIER.Ray(origin, { x: 0, y: -1, z: 0 }), 10, true)
    const grounded = ray && ray.collider && Math.abs(ray.timeOfImpact) <= 1.0
    if (jump && grounded) {
        ref.current.setLinvel({ x: velocity.x, y: 7.5, z: velocity.z }, true)
    }
  })

  return (
    <RigidBody ref={ref} colliders={false} mass={1} type="dynamic" position={spawnPosition} enabledRotations={[false, false, false]}>
      <CapsuleCollider args={[0.75, 0.5]} />
    </RigidBody>
  )
}