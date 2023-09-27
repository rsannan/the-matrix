import { ProfileDisplay, Sidebar } from "../../components";
import "./profile.css";

export default function ProfilePage() {
  return (
    <>
      <div className="pdashgrid">
        <div className="pdashdiv1">
          <ProfileDisplay />
        </div>
        <div className="pdashdiv2">
          <Sidebar />
        </div>
      </div>
    </>
  );
}
