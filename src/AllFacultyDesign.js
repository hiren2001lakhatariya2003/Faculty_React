import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
function AllFacultyDesign() {
  const [faculties, setfaculties] = useState([]);
  useEffect(() => {
    fetch("https://62dad437d1d97b9e0c473bed.mockapi.io/faculties")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setfaculties(res);
      });
  }, []);

  const formatedfaculties = faculties.map((fac) => {
    return (
      <>
        <div class="card col-md-3" style={{ marginTop: 4 }} id="main">
          <img
            class="card-img-top center"
            src={fac.FacultyImage}
            alt="Card image cap"
            align="center"
            style={{ align: "center", margin: 5 }}
          />
          <div class="card-body">
            <h5 class="card-title" align="center">
              {fac.FacultyName}
            </h5>
            <h6
              class="text-denger text-center "
              style={{ color: "red", fontSize: "14px" }}
            >
              {fac.FacultyDesignation}
            </h6>
            <hr class="u-divider-linear-gradient u-divider-linear-gradient--gray-light-v2 g-my-5" />
            <div class="col-12">
              <span style={{ fontSize: "16px", color: "gray" }}>
                {fac.FacultyHighestEducation}
              </span>
            </div>
            <hr class="u-divider-linear-gradient u-divider-linear-gradient--gray-light-v2 g-my-5" />

            <table
              align="center"
              cellPadding="7px"
              class="text-center"
              border="0px"
            >
              <tr>
                <td style={{ fontSize: "12px", color: "gray" }}>Experience</td>
                <td style={{ fontSize: "12px", color: "gray" }}>
                  Working Since
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    type="button"
                    disabled
                    style={{
                      color: "blue",
                      backgroundColor: "lightskyblue",
                      fontSize: "20px"
                    }}
                  >
                    {fac.FacultyExperienceInYears}
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    disabled
                    style={{
                      color: "black",
                      backgroundColor: "lightgrey",
                      fontSize: "20px"
                    }}
                  >
                    {fac.FacultyWorkingSince}
                  </button>
                </td>
              </tr>
            </table>
            <hr class="u-divider-linear-gradient u-divider-linear-gradient--gray-light-v2 g-my-5" />
            <Link
              to={"/faculty/" + fac.id}
              style={{
                textDecoration: "none",
                fontSize: 14,
                fontStyle: "italic"
              }}
              class="hover-underline-animation"
              id="viewprofile"
              align="center"
            >
              view profile&nbsp;&nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <h1 align="center">
        <div class="row">{formatedfaculties}</div>
      </h1>
    </>
  );
}

export default AllFacultyDesign;
