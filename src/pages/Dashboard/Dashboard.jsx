import { useEffect, useState } from "react";
import { Sidebar, PostDisplay, Trending } from "../../components";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import { getSessionUser, skipLoading } from "../../features/autoLogin";
import { useDispatch, useSelector } from "react-redux";
export default function Dashboard() {
  const { user, isLoading } = useSelector((store) => store.autoLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("session")) {
      dispatch(skipLoading());
      return;
    }
    if (!user) {
      dispatch(getSessionUser());
    }
  }, []);

  function handleLogin() {
    navigate("/login");
  }
  if (isLoading) {
    return <h1>...Loading</h1>;
  } else {
    return user ? (
      <>
        <div className="dashgrid">
          <div className="dashdiv1">
            <PostDisplay />
          </div>
          <div className="dashdiv2">
            <Sidebar />
          </div>
          <div className="dashdiv3">
            <Trending />
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="container logincont">
          <h5 className="loginreminder">Please Login</h5>
          <button
            className="css-button-sliding-to-left--grey"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </>
    );
  }
}
