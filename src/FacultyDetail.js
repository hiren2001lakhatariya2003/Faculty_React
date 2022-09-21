import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
function FacultyDetial() {
  let params = useParams();
  const navigate = useNavigate();
  const [faculty, setfaculty] = useState({});
  useEffect(() => {
    fetch(
      "https://62dad437d1d97b9e0c473bed.mockapi.io/faculties/" + params.id,
      {
        method: "GET"
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setfaculty(res);
      });
  }, []);

  return (
    //
    <>
      <table style={{ margin: 10 }} id="main">
        <tr>
          <td colSpan="2" width="100%">
            <div class="container" id="main">
              <img
                class="image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5FK7tENCn7CtG5R2nK0Kn4oB7rKTF9WxpJBg4DVRq_phE7sznDbaG-RUsUhqwjsJADw&usqp=CAU"
                alt="Card image cap"
                style={{ width: "100%" }}
              />
              <button class="btn">
                {faculty.FacultyName}
                <h6>{faculty.FacultyDesignation}</h6>
              </button>
            </div>
          </td>
        </tr>

        <tr>
          <td id="maintd1">
            <div class="card" id="main">
              <img
                class="card-img-top center"
                src={faculty.FacultyImage}
                alt="Card image cap"
                align="center"
                style={{ align: "center" }}
              />
              <div class="card-body">
                <h5 class="card-title" align="center">
                  {faculty.FacultyName}
                </h5>
                <h6
                  class="text-denger text-center "
                  style={{ color: "red", fontSize: "14px" }}
                >
                  {faculty.FacultyDesignation}
                </h6>
                <hr class="u-divider-linear-gradient u-divider-linear-gradient--gray-light-v2 g-my-5" />
                <div class="col-12" align="center">
                  <span style={{ fontSize: "16px", color: "gray" }}>
                    {faculty.FacultyHighestEducation}
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
                    <td style={{ fontSize: "12px", color: "gray" }}>
                      Experience
                    </td>
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
                        {faculty.FacultyExperienceInYears}
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
                        {faculty.FacultyWorkingSince}
                      </button>
                    </td>
                  </tr>
                </table>
                <hr class="u-divider-linear-gradient u-divider-linear-gradient--gray-light-v2 g-my-5" />
                <table align="center">
                  <tr>
                    <td>
                      &nbsp;
                      <img
                        class="card-img-top center"
                        src="https://cdn-icons-png.flaticon.com/512/15/15407.png"
                        alt="Card image cap"
                        align="center"
                        style={{ width: "14px" }}
                      />
                    </td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td>(M) :&nbsp;</td>
                    <td>{faculty.FacultyMobileNumber}</td>
                  </tr>

                  <tr>
                    <td></td>
                    <td></td>
                    <td>(O) : </td>
                    <td>{faculty.FacultyMobileNumber}</td>
                  </tr>
                  <br />
                  <tr>
                    <td>
                      <img
                        class="card-img-top center"
                        src="https://pixsector.com/cache/dc0ee776/avd5c445f01ca4712be88.png"
                        alt="Card image cap"
                        align="center"
                        style={{ width: "25px" }}
                      />
                    </td>

                    <td></td>
                    <td colSpan="2">{faculty.FacultyEmailAddress}</td>
                  </tr>
                  <br />
                  <tr>
                    <td>
                      <img
                        class="card-img-top center"
                        src="https://www.kindpng.com/picc/m/9-97493_icon-location-vector-free-clipart-png-download-vector.png"
                        alt="Card image cap"
                        align="center"
                        style={{ width: "22px" }}
                      />
                    </td>
                    <td></td>
                    <td colSpan="2">{faculty.FacultySeating}</td>
                  </tr>
                </table>
              </div>
            </div>
          </td>
          <td id="maintd2">
            <th id="th">Profile</th>
            <hr id="hr" style={{ marginTop: "0px", color: "grey" }} />
            <p style={{ color: "grey" }}>{faculty.FacultyProfileDescription}</p>
            <table align="center" id="rightSecondTable">
              <tr>
                <td id="rightInsideLeftTd">
                  <h6
                    align="right"
                    style={{ marginTop: "1px", fontWeight: "bold" }}
                  >
                    Area of Specialization
                  </h6>
                </td>
                <td style={{ verticalAlign: "top" }} id="areaAndSubjectDetail">
                  <ul id="ul">
                    <li id="li">{faculty.FacultyAreaSpecialization}</li>
                    <li id="li">{faculty.FacultyAreaSpecialization}</li>
                    <li id="li">{faculty.FacultyAreaSpecialization}</li>
                    <li id="li">{faculty.FacultyAreaSpecialization}</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td id="rightInsideLeftTd">
                  <h6
                    align="right"
                    style={{ marginTop: "3px", fontWeight: "bold" }}
                  >
                    Subjects Taught
                  </h6>
                </td>
                <td id="subjectTaught">
                  <p style={{ marginLeft: "15px", color: "grey" }}>
                    {faculty.FacultySubjectsTaught}
                  </p>
                </td>
              </tr>
              <tr>
                <td id="rightInsideLeftTd">
                  <h6
                    align="right"
                    style={{ marginTop: "1px", fontWeight: "bold" }}
                  >
                    Membership
                  </h6>
                </td>
                <td id="subjectTaught">
                  <p style={{ marginLeft: "15px", color: "grey" }}>
                    {faculty.Membership}
                  </p>
                </td>
              </tr>
              <tr>
                <td id="rightInsideLeftTd">
                  <h6
                    align="right"
                    style={{ marginTop: "1px", fontWeight: "bold" }}
                  >
                    Current Activities
                  </h6>
                </td>
                <td id="subjectTaught">
                  <p style={{ marginLeft: "15px", color: "grey" }}>
                    {faculty.CurrentActivities}
                  </p>
                </td>
              </tr>
            </table>

            <th id="th">Qualification</th>
            <hr id="hr" style={{ marginTop: "0px", color: "grey" }} />

            <table width="100%">
              <tr>
                <th id="heading">Qualification</th>
                <th id="heading">Specialization</th>
                <th id="heading">Institute / University</th>
                <th id="heading">Passing Year</th>
              </tr>
              <tr>
                <td class="qualification">{faculty.Qualification}</td>
                <td class="qualification">{faculty.Specialization}</td>
                <td class="qualification">{faculty.Institute}</td>
                <td class="qualification">{faculty.PassingYear}</td>
              </tr>
              <tr>
                <td class="qualification">{faculty.Qualification}</td>
                <td class="qualification">{faculty.Specialization}</td>
                <td class="qualification">{faculty.Institute}</td>
                <td class="qualification">{faculty.PassingYear}</td>
              </tr>
              <tr>
                <td class="qualification">{faculty.Qualification}</td>
                <td class="qualification">{faculty.Specialization}</td>
                <td class="qualification">{faculty.Institute}</td>
                <td class="qualification">{faculty.PassingYear}</td>
              </tr>
            </table>
          </td>
        </tr>
        <br />
        <tr>
          <td align="center">
            <Link
              to="../faculties"
              class="button"
              class="btn btn-outline-"
              style={{ textAlign: "center", width: "103px", padding: "10px" }}
            >
              <BsArrowLeft /> Go back
            </Link>
          </td>
          <td align="center">
            <button
              onClick={() => {
                fetch(
                  "https:/62dad437d1d97b9e0c473bed/.mockapi.io/faculties/" +
                    params.id,
                  {
                    method: "DELETE"
                  }
                ).then((res) => {
                  navigate("/faculties");
                });
              }}
              class="button"
              class="btn btn-outline-"
              style={{ textAlign: "center", width: "103px", padding: "10px" }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                navigate("/faculty/edit/" + params.id);
              }}
              class="button"
              class="btn btn-outline"
              style={{ textAlign: "center", width: "103px", padding: "10px" }}
            >
              Edit
            </button>
          </td>
        </tr>
      </table>
    </>
  );
}
export default FacultyDetial;
