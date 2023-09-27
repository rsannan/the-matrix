import { useState, useEffect } from "react";
import { DBGetUser } from "../database";
import { supabase } from "../database";

export default function ProfileDisplay() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
  });
  useEffect(() => {
    async function getUser() {
      const { id } = await DBGetUser();

      const { data, error } = await supabase
        .from("profile")
        .select()
        .eq("user_id", id);
      const { first_name, last_name, username } = data[0];
      setUser({ first_name, last_name, username });
    }
    getUser();
  }, []);
  function onChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  async function onSubmit(e) {
    e.preventDefault();
    const { id } = await DBGetUser();
    const { error } = await supabase
      .from("profile")
      .update(user)
      .eq("user_id", id);
    if (error) {
      alert("Profile update error: " + error);
    } else {
      alert("Update successfull");
    }
  }
  return (
    <>
      <div className="container rounded mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">
                {user.first_name} {user.last_name}
              </span>
              <span className="text-black-50">{user.username}</span>
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
                      placeholder={user.username}
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
                      placeholder={user.first_name}
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
                      placeholder={user.last_name}
                      id="edlname"
                    />
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button"
                    type="submit"
                    id="acbtn"
                  >
                    <i className="fa-solid fa-floppy-disk"></i> Edit User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
