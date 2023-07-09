import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import PingedPeople from "./routes/PingedPeople";
import Points from "./routes/Points";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<PingedPeople/>}/>
        <Route path="/" element={<Points/>}/>
      </Routes>
    </div>
  );
}