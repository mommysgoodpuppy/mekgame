import { Suspense } from "react"
import { Sky, OrbitControls } from "@react-three/drei"
import Grass from "./grass.tsx"

export default function Level() {
  return (
    <>
      <Sky azimuth={1} inclination={0.6} distance={1000} />
      <ambientLight intensity={10} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Grass />
      </Suspense>
      <OrbitControls minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 2.5} />
    </>
  )
}
