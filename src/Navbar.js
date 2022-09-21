import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap-dropdown-menu";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
          <img
            src="https://www.darshan.ac.in/Content/media/DU_Logo.svg"
            width="150vh"
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              marginRight: "20px"
            }}
          />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="./" style={{ textDecoration: "none", color: "red" }}>
                  Home
                </Link>{" "}
                &nbsp;&nbsp;&nbsp;
              </li>
              <li class="nav-item">
                <Link
                  to="./contact"
                  style={{ textDecoration: "none", color: "red" }}
                >
                  contact
                </Link>{" "}
                &nbsp;&nbsp;&nbsp;
              </li>

              <li class="nav-item">
                <Link
                  to="./about"
                  style={{ textDecoration: "none", color: "red" }}
                >
                  About
                </Link>{" "}
                &nbsp;&nbsp;&nbsp;
              </li>

              <li class="nav-item">
                <Link
                  to="./faculties"
                  style={{ textDecoration: "none", color: "red" }}
                >
                  All Faculties
                </Link>{" "}
                &nbsp;&nbsp;&nbsp;
              </li>
              <li>
                <Link
                  to="./faculty/add"
                  style={{ textDecoration: "none", color: "red" }}
                >
                  Add Faculty
                </Link>{" "}
                &nbsp;&nbsp;&nbsp;
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
