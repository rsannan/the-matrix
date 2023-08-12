import { useEffect, useState } from "react";
import { Sidebar, PostDisplay, Trending } from "../../components";
import "./dashboard.css";
import { useUser } from "../../context";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const user = useUser();
  const navigate = useNavigate();
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
      <h5 className="loginreminder">Please Login</h5>
      {setTimeout(() => {
        navigate("/login");
      }, 1000)}
    </>
  );
}
