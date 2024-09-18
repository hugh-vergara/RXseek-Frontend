import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import Homepage from "./Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Registration />} />
        <Route path="/homepage" element={<Homepage />}></Route>
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
