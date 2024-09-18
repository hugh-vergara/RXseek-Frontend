import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Registration />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
