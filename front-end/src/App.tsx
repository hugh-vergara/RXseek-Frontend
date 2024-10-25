import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import Homepage from "./Homepage";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Registration />} />
        <Route path="/homepage" element={<Homepage />}></Route>
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
