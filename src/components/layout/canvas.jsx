import { Canvas } from '@react-three/fiber'
import { TrackballControls, Preload } from '@react-three/drei'
import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'
import SkyBox from '../canvas/Skybox'

const LControl = () => {
  const dom = useStore((state) => state.dom)
  const control = useRef(null)

  useEffect(() => {
    if (control.current) {
      const domElement = dom.current
      const originalTouchAction = domElement.style['touch-action'] 
      domElement.style['touch-action'] = 'none'

      return () => {
        domElement.style['touch-action'] = originalTouchAction
      }
    }
  }, [dom, control])
  // @ts-ignore
  return (
    <TrackballControls 
      ref={control} 
      domElement={dom.current} 
      noZoom
      noPan
    />
  );
}
const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)

  return (
    <Canvas
      mode='concurrent'
      style={{
        position: 'absolute',
        top: 0,
      }}
      onCreated={(state) => state.events.connect(dom.current)}
    >
      <LControl />
      <Preload all />
      <ambientLight />
      <SkyBox />
      {children}
    </Canvas>
  )
}

export default LCanvas
