import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Main from "./Components/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/calendar-mobile-app/" />} />
        <Route path="/calendar-mobile-app/" element={<Home />} />
        <Route path="/calendar-mobile-app/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
