import { useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import Preferences from "./Preferences";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./Login";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/preferences" element={<Preferences />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
