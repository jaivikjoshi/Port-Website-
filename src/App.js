import { ParallaxProvider } from "react-scroll-parallax";
import FullpageScroll from "./Componets/FullpageScroll";
import AboutMe from "./Pages/AboutMe";
import Homepage from "./Pages/Homepage"
import Projects from "./Pages/Projects";
function App() {
  return (
    <ParallaxProvider>
    <div className="App">
      <FullpageScroll/>
    </div>
    </ParallaxProvider>
  );
}

export default App;
