import PostItem from "./PostItem";
import AddPost from "./AddPost";
import { useEffect, useState } from "react";
import { supabase } from "../database";
import Login from "../Login/LoginForm";
export default function () {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      setIsLoading(true);
      const { data, error } = await supabase.from("posts").select();
      if (error) {
        alert(error);
      } else {
        setPosts(data);
        setIsLoading(false);
      }
    }
    getPosts();
  }, []);
  return (
    <div className=".container vh-100">
      <AddPost />
      {isLoading ? (
        <div class="custom-loader"></div>
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
