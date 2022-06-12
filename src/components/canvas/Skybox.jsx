import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";

export default function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    "/skybox/xneg.png",
    "/skybox/ypos.png",
    "/skybox/zpos.png",
    "/skybox/zneg.png",
    "/skybox/xpos.png",
    "/skybox/yneg.png",
  ]);

  // Set the scene background property to the resulting texture.
  scene.background = texture;
  return null;
}