import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { LandingPage, SignIn, Dashboard, ProfilePage } from "./pages";
import { Route, Routes, useNavigate } from "react-router-dom";
import Provider from "./context";
function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Provider>
  );
}

export default App;
