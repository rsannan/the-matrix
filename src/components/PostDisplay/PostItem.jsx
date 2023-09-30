import { useEffect, useState } from "react";
import { supabase } from "../database";
import { Scrollbar } from "react-scrollbars-custom";
import { DBGetUser } from "../database";
export default function PostItem(props) {
  const { post_id, post_user_id, content, getPosts } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  async function getLikes(post_id) {
    const user = await DBGetUser();
    const { data, error } = await supabase
      .from("likes")
      .select()
      .eq("post_id", post_id);

    const userlike = await supabase
      .from("likes")
      .select()
      .match({ user_id: user.id, post_id });
    if (userlike.data.length !== 0) {
      setLiked(true);
    }
    setLikeCount(data.length);
  }
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
    getLikes(post_id);
    getPostUser();
  }, []);
  async function handleLikeClick() {
    const user = await DBGetUser();
    const userlike = await supabase
      .from("likes")
      .select()
      .match({ user_id: user.id, post_id });
    if (userlike.data.length !== 0) {
      const { error } = await supabase
        .from("likes")
        .delete()
        .match({ user_id: user.id, post_id });
      getLikes(post_id);
      setLiked(false);
    } else {
      const { likeserror } = await supabase
        .from("likes")
        .insert({ user_id: user.id, post_id });
      getLikes(post_id);
      setLiked(true);
    }
  }
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
              {liked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c0392b"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-heart"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                </svg>
              )}
            </button>
            <p className="d-inline ms-2">
              <strong>{isLoading ? "..." : likeCount}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
