import dynamic from 'next/dynamic'
import Navbar from "../components/dom/Navbar";

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
  ssr: false,
})

// dom components goes here
const Page = (props) => {
  return (
    <>
    </>
  )
}

// canvas components goes here
// It will receive same props as Page component (from getStaticProps, etc.)
// Insert routes here
Page.r3f = (props) => (
  <>
    <Shader position={[4.5,0,0]} route="/page1" />
    <Shader position={[0,0,-4]} route="/page2" />
    <Shader position={[-4.5,0,0]} route="/page3" />
  </>
)

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Metaverse Portfolio',
    },
  }
}
