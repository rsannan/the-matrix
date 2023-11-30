import { ProfileDisplay, Sidebar } from "../../components";
import NewSideBar from "../../components/Sidebar/NewSideBar";
import "./profile.css";

export default function ProfilePage() {
  return (
    <>
      <div className="pdashgrid">
        <div className="pdashdiv1">
          <ProfileDisplay />
        </div>
        <div className="pdashdiv2">
          <NewSideBar/>
        </div>
      </div>
    </>
  );
}
