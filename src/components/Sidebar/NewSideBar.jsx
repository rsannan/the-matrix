import React from "react";
import { useNavigate } from "react-router-dom";
import { DBGetPostUser, supabase, DBGetProfilePicture } from "../database";
import { useSelector, useDispatch } from "react-redux";
import "./sidebar.css";
import { logout } from "../../features/autoLogin";
import { useEffect, useState } from "react";
import { checkImage } from "../../utility";
function NewSideBar() {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.autoLogin);
  const [name, setName] = useState(null);
  const [IsLoading, setIsLoading] = useState(true);
  const [imgUrl, setImgUrl] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    async function getName() {
      setIsLoading(true);
      const name = await DBGetPostUser(user.id);
      setName(name);
      setIsLoading(false);
    }
    getImg();
    getName();
  }, []);
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
  async function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
    const { error } = await supabase.auth.signOut();
    navigate("/login");
  }
  return (
    <div className="" style={{ height: "100%" }}>
      <nav
        class="navbar  bg-dark navbar-expand-md py-0 mb-0 "
        data-bs-theme="dark"
        style={{ height: "100%" }}
      >
        <div
          class="container-fluid flex-nowrap flex-column align-items-start justify-content-start px-0"
          style={{ height: "100%" }}
        >
          <button
            class="navbar-toggler mx-2 my-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-start flex-column align-items-start"
            id="navbarSupportedContent"
            // style={{ width: "100%" }}
            tabindex="-1"
          >
            <div class="offcanvas-header" style={{ width: "100%" }}>
              <button
                type="button"
                class="btn-close ms-auto"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <a
              className="navbar-brand"
              href="#"
              id="brandLogo"
              style={{ color: "#fff" }}
            >
              <div className="brandlogo-rec mt-3"></div>
              TheMatrix
            </a>
            <hr
              style={{
                borderTop: "1px solid #fff",
                width: "100%",
                opacity: "1",
              }}
            />
            <ul className="nav nav-underline flex-column mb-auto ps-3">
              <li className="nav-item sideli">
                <a className="nav-link" aria-current="page" href="/dashboard">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-house"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                  </svg>
                  Home
                </a>
              </li>
              <li className="nav-item sideli">
                <a className="nav-link" href="/profile">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                  Profile
                </a>
              </li>
            </ul>
            <hr
              className="profileDivider"
              style={{
                borderTop: "1px solid #fff",
                width: "100%",
                opacity: "1",
              }}
            />
            <div className="dropup">
              <button
                type="button"
                className="btn btn-outline-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {imgUrl ? (
                  <img
                    src={imgUrl}
                    alt=""
                    width="32"
                    height="32"
                    className="rounded-circle me-2 "
                  />
                ) : (
                  <div className="profile-loader"></div>
                )}
                <p className="d-inline"> {IsLoading ? "..." : name}</p>
              </button>
              <ul className="dropdown-menu">
                <li className="sidabard">
                  <a className="dropdown-item" onClick={handleLogout}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-door-closed"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z" />
                      <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
                    </svg>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NewSideBar;
