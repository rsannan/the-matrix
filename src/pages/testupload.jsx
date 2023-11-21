import React, { useEffect, useState } from "react";
import { supabase } from "../components/database";
function TestUpload() {
  const [img, setImg] = useState(null);
  const [file, setFile] = useState();
  const publicUrl = supabase.storage
    .from("profile-pictures")
    .getPublicUrl("user1/images.jfif");

  async function handleSubmit(e) {
    e.preventDefault();
    const { data, error } = await supabase.storage
      .from("profile-pictures")
      .upload("user2/" + file.name, file);
    console.log(data);
    console.log(error);
  }
  function handleChange(e) {
    const { files } = e.target;
    setFile(files[0]);
    setImg(URL.createObjectURL(files[0]));
  }
  return (
    <>
      <div className="container">
        <form action="post" onSubmit={handleSubmit} className="form">
          <label htmlFor="avatar" className="form-label">
            Choose a profile picture:
          </label>

          <input
            onChange={handleChange}
            className="form-control"
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
          <button type="submit">submit</button>
        </form>
        <div>
          {img ? (
            <div>
              <img src={img} alt="preview" />
            </div>
          ) : null}
          <img src={publicUrl.data.publicUrl} alt="test" />
        </div>
      </div>
    </>
  );
}

export default TestUpload;
