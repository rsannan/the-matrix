import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { LandingPage, SignIn, Dashboard, ProfilePage } from "./pages";
import { Route, Routes, useNavigate } from "react-router-dom";
import TestUpload from "./pages/testupload";
import { useSelector, useDispatch } from "react-redux";
import { getSessionUser } from "./features/autoLogin";
import { useEffect } from "react";
function App() {
  const { isLoading, user } = useSelector((store) => store.autoLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSessionUser());
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/upload" element={<TestUpload />} />
    </Routes>
  );
}

export default App;
