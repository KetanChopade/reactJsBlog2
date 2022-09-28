import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Topbar from "./components/topbar/Topbar";
import Home from "./Pages/Home/Home";

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Setting from "./Pages/Setting/Setting";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  const user = true;
  return (
    <div className="App">
        <Router>
        <Topbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:postId"  element={<Single/>} />
            <Route path="/write"  element={user ?<Write/> : <Register/>} />
            <Route path="/settings"  element={user ? <Setting/> : <Register/>} />
            <Route path="/settings"  element={<Setting/>} />
            <Route path="/login"  element={user ? <Home/> : <Login/>} />
            <Route path="/register"  element={user ? <Home/> : <Register/>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
