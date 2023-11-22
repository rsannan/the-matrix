import React, { useEffect, useState } from "react";
import { supabase } from "../components/database";
function TestUpload() {
  const [img, setImg] = useState(null);
  const [file, setFile] = useState();
  const [imgpubl, setPublic] = useState();
  useEffect(() => {
    async function getimg() {
      const imgUrl = await getPictureUrl();
      checkImage(
        imgUrl.data.publicUrl,
        () => {
          setPublic(imgUrl.data.publicUrl);
        },
        () => {
          setPublic(
            "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
          );
        }
      );
    }

    getimg();
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    const { data, error } = await supabase.storage
      .from("profile-pictures")
      .upload("test", file,{upsert: true});
    console.log(data);
    console.log(error);
  }
  function handleChange(e) {
    const { files } = e.target;
    setFile(files[0]);
    setImg(URL.createObjectURL(files[0]));
  }
  async function getPictureUrl() {
    return await supabase.storage
      .from("profile-pictures")
      .getPublicUrl("user1/images.jfif");
  }
  function checkImage(imageSrc, good, bad) {
    var img = new Image();
    img.onload = good;
    img.onerror = bad;
    img.src = imageSrc;
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
          <img src={imgpubl ? imgpubl : null} alt="test" />
        </div>
      </div>
    </>
  );
}

export default TestUpload;
