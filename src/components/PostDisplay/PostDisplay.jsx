import PostItem from "./PostItem";
import AddPost from "./AddPost";
export default function () {
  return (
    <div className=".container vh-100">
      <AddPost />
      <PostItem />
      <PostItem />
    </div>
  );
}
