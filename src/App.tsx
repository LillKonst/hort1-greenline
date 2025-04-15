import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./routes/home/Home";
import Contact from "./routes/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
