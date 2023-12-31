import { useState } from "react";
import { supabase } from "../database";
import { DBGetUser } from "../database";
export default function AddPost(props) {
  const { getPosts } = props;
  const [content, setContent] = useState("");
  const [isloading, setisLoading] = useState(false);
  function handleContentChange(e) {
    setContent(e.target.value);
  }
  async function handleSubmit() {
    setisLoading(true);
    const user = await DBGetUser();
    const { error } = await supabase
      .from("posts")
      .insert({ user_id: user.id, content });
    setisLoading(false);
    await getPosts();
    document.getElementById("closeModal").click();

    if (error) {
      alert("Add post Error: " + error.message);
    }
  }
  return (
    <div className="py-3">
      <button
        type="button"
        className="css-button-sliding-to-left--green ms-auto"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
        Add Post
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title fs-5" id="staticBackdropLabel">
                What Do You Want To Talk About?
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="closeModal"
              ></button>
            </div>
            <div className="modal-body">
              {isloading && <div className="custom-loader"></div>}
              <div className="input-wrapper">
                <textarea
                  maxLength="300"
                  rows="5"
                  placeholder="Type here..."
                  name="text"
                  className="modalinput"
                  onChange={handleContentChange}
                  value={content}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="css-button-fully-rounded--green"
                onClick={handleSubmit}
                disabled={isloading ? "true" : ""}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-send-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                </svg>
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
