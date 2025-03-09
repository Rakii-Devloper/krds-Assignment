import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage.js />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
