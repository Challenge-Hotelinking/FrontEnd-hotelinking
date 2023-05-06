import { Toaster } from "sonner";
import "./App.css";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Toaster position="top-center" duration={2000}/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
