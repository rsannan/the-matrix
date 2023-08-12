import { useEffect, useState } from "react";
import { useUser } from "../../context";
import { supabase } from "../database";
import { Scrollbar } from "react-scrollbars-custom";

export default function PostItem(props) {
  const { post_id, post_user_id, content } = props;
  const user = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  useEffect(() => {
    async function getPostUser() {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("profile")
        .select("username")
        .eq("user_id", post_user_id);
      if (error) {
        alert(error.message);
      } else {
        setUsername(data[0].username);
        setIsLoading(false);
      }
    }
    getPostUser();
  }, []);
  async function handleLikeClick() {
    const { error } = await supabase
      .from("likes")
      .insert({ user_id: user.id, post_id });
  }
  const likecount = 10;
  return (
    <div className="py-3 dashpostitem ">
      <div className=".container">
        <div className="row">
          <div className="col-1">
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="50"
              height="50"
              class="rounded-circle me-2 d-inline"
            />
          </div>
          <div className="col">
            <h4>{isLoading ? "..." : username}</h4>
            <p>{content}</p>
            <button
              type="button"
              class="btn btn-secondary likebtn"
              onClick={handleLikeClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
              </svg>
            </button>
            <p className="d-inline ms-2">
              <strong>{likecount}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
