import "./App.css";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import Experts from "./pages/Experts";
import Form from "./components/Form";
import Signin from "./components/Signin";
import Room from "./components/Room";
import Chatbot from "./pages/Chatbot";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={< Signin />} />
        <Route path="/Experts" element={<Experts />} />
        <Route path="/forms" element={<Form/>} />
        <Route path="/room/:roomID" element={<Room/>} />
        <Route path="/chat" element={<Chatbot/>} />
      </Routes>
    </>
  );
}

export default App;
