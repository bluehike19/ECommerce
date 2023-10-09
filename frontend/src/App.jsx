import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Sidebar />
      </div>
    </>
  );
}

export default App;
