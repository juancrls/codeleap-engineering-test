import "./styles/index.scss";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
// import { AuthProvider } from "./contexts/AuthContext"


function App() {
  return (
    <Router>
      {/* <AuthProvider> */}
        <Routes>
          <Route exact path="/" element={<Navigate to="/feed" />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/feed" element={<Feed />} />
          </Route>
        </Routes>
      {/* </AuthProvider> */}
    </Router>
  );
}

export default App;
