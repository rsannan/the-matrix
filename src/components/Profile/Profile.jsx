import { useState, useEffect } from "react";
import {
  DBGetProfilePicture,
  DBGetUser,
  DBPostProfilePicture,
  DBUpdateProfilePicture,
} from "../database";
import { supabase } from "../database";
import { useSelector } from "react-redux";
import { checkImage } from "../../utility";
import { useNavigate } from "react-router-dom";
export default function ProfileDisplay() {
  const [userP, setUserP] = useState({
    first_name: "",
    last_name: "",
    username: "",
  });
  const { user } = useSelector((store) => store.autoLogin);
  const [imgUrl, setImgUrl] = useState();
  const [file, setFile] = useState();
  const [imgPreview, setImgPreview] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    async function getUser() {
      const { data, error } = await supabase
        .from("profile")
        .select()
        .eq("user_id", user.id);
      const { first_name, last_name, username } = data[0];
      setUserP({ first_name, last_name, username });
    }
    getUser();
    getImg();
  }, []);
  function onChange(e) {
    const { name, value } = e.target;
    setUserP({ ...userP, [name]: value });
  }
  async function onSubmit(e) {
    e.preventDefault();
    const { error } = await supabase
      .from("profile")
      .update(userP)
      .eq("user_id", user.id);
    if (error) {
      alert("Profile update error: " + error);
    } else {
      alert("Update successful");
      navigate("/dashboard");
    }
  }
  async function getImg() {
    const imgUrl = await DBGetProfilePicture(user.id);
    checkImage(
      imgUrl,
      () => {
        //if img exists
        setImgUrl(imgUrl);
      },
      () => {
        setImgUrl(
          //if img doesnt exist
          "https://xxeeeikbupnwhalaidac.supabase.co/storage/v1/object/public/profile-pictures/5856.jpg?t=2023-11-22T15%3A07%3A03.486Z"
        );
      }
    );
  }
  function handleImgChange(e) {
    const { files } = e.target;
    setFile(files[0]);
    setImgPreview(URL.createObjectURL(files[0]));
  }
  async function handleImgSubmit(e) {
    e.preventDefault();
    const result = await DBPostProfilePicture(user.id, file);
    alert(
      "Update successful, It might take a minute for you picture to change"
    );
    navigate("/dashboard");
  }
  return (
    <>
      <div className="container rounded mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              {imgUrl ? (
                <img
                  className="rounded-circle mt-5"
                  width="150px"
                  src={imgUrl}
                />
              ) : (
                <div className="profile-loader"></div>
              )}
              <span className="font-weight-bold">
                {userP.first_name} {userP.last_name}
              </span>
              <span className="text-black-50">{userP.username}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Edit User</h4>
              </div>
              <form onSubmit={onSubmit} onChange={onChange}>
                <div className="row mt-2">
                  <div className="col-md-10">
                    <label className="labels" htmlFor="eduname">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder={userP.username}
                      id="eduname"
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-10">
                    <label className="labels" htmlFor="edfname">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="first_name"
                      placeholder={userP.first_name}
                      id="edfname"
                    />
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-md-10">
                    <label className="labels" htmlFor="edlname">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="last_name"
                      placeholder={userP.last_name}
                      id="edlname"
                    />
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <button
                    className="css-button-3d--grey profile-button"
                    type="submit"
                    id="acbtn"
                  >
                    <i className="fa-solid fa-floppy-disk"></i> Edit User
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col pt-5">
            <h4>Edit Profile Picture</h4>
            <form action="post" onSubmit={handleImgSubmit}>
              <label htmlFor="avatar" className="form-label">
                Choose a profile picture:
              </label>

              <input
                onChange={handleImgChange}
                className="form-control"
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
              />
              <div>
                {imgPreview ? (
                  <div className="preview">
                    <img
                      src={imgPreview}
                      alt="preview"
                      height="150px"
                      width="150px"
                      className="previewImg"
                    />
                  </div>
                ) : null}
              </div>
              <button type="submit" className="css-button-3d--grey">
                Change Picture
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
