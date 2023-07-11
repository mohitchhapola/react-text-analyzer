import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  return (
    <>
      <Navbar title="Text Analyzer"/>
      
      <div className="container mx-auto">
        <TextForm heading="Text Analyzer"/>
      </div>
    </>
  );
}

export default App;
