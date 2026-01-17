// https://youtu.be/j9ZD_hlyHOA?si=kDzB9pJqEyYXtWW_

import { Navbar, Welcome, Dock } from "./components";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable)
import { Terminal } from "./windows/index.js";



const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>

     <Terminal />
    </main>
  )
}
export default App;
