import { Sidebar, PostDisplay, Trending } from "../../components"
import "./dashboard.css"
export default function Dashboard(){
    return(<>
        <div className="dashgrid">
            <div className="dashdiv1">
                <PostDisplay/>
            </div>
            <div className="dashdiv2">
                <Sidebar/>
            </div>
            <div className="dashdiv3">
    <Trending/>
            </div>
        </div>
    </>)
}