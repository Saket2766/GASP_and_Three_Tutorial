import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebViewer from "./components/WebViewer";
import { useRef } from "react"

function App() {

  const webViewerRef = useRef();
  const contentRef = useRef();
  const handlePreview = () => {
    webViewerRef.current.triggerPreview();
  }

  return (
    <div className="App">
      <div ref={contentRef} id="content">
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebViewer contentRef = {contentRef} ref={webViewerRef} />
    </div>
  );
}

export default App;
