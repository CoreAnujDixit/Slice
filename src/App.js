import { Route, Routes } from "react-router";
import Navbar from "./Comps/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
function App() {
  return (
    <div>
      <div>
        <Navbar />
        hivuuu
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
export default App;
