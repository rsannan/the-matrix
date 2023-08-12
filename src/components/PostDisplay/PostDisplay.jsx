import PostItem from "./PostItem";
import AddPost from "./AddPost";
import { useEffect, useState } from "react";
import { supabase } from "../database";
import Login from "../Login/LoginForm";
export default function () {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  async function getPosts() {
    setIsLoading(true);
    const { data, error } = await supabase.from("posts").select();
    if (error) {
      alert(error);
    } else {
      setPosts(data.reverse());
      setIsLoading(false);
    }
  }
  function refresh() {
    getPosts();
  }
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className=".container vh-100 postdiv" id="style-1">
      <button className="btn refreshbtn" onClick={refresh}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-clockwise"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
          />
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
        </svg>
      </button>
      <AddPost />
      

      {isLoading ? (
        <div className="dashloader">
        <div class="custom-loader"></div>
      </div>
      ) : (
        posts.map((post) => {
          return (
            <PostItem
              key={post.id}
              post_id={post.id}
              post_user_id={post.user_id}
              content={post.content}
            />
          );
        })
      )}
    </div>
  );
}
