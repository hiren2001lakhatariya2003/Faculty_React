import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function FacultyAdd() {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState;

  useEffect(() => {
    if (params.id > 0) {
      fetch(
        "https:/62dad437d1d97b9e0c473bed/.mockapi.io/faculty/" + params.id,
        {
          method: "GET"
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
        });
    }
  }, []);

  return (
    <>
      <table>
        <tr>
          <td>Enter Faculty Name</td>
          <td>:</td>
          <td>
            <input
              value={data.FacultyName}
              onChange={(e) => {
                setData({ ...data, FacultyName: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Enter Faculty Image</td>
          <td>:</td>
          <td>
            <input
              value={data.FacultyImage}
              onChange={(e) => {
                setData({ ...data, FacultyImage: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Enter Faculty Mobile</td>
          <td>:</td>
          <td>
            <input
              value={data.FacultyMobile}
              onChange={(e) => {
                setData({ ...data, FacultyMobile: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td>Enter Faculty Email</td>
          <td>:</td>
          <td>
            <input
              value={data.FacultyEmail}
              onChange={(e) => {
                setData({ ...data, FacultyEmail: e.target.value });
              }}
              type="text"
            />
          </td>
        </tr>
        <tr>
          <td colSpan="3">
            <button
              onClick={() => {
                if (params.id > 0) {
                  fetch(
                    "https:/62dad437d1d97b9e0c473bed/.mockapi.io/faculties/" +
                      params.id,
                    {
                      method: "PUT",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }
                  ).then(() => {
                    navigate("/faculties");
                  });
                } else {
                  fetch(
                    "https:/62dad437d1d97b9e0c473bed/.mockapi.io/faculties/",
                    {
                      method: "POST",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }
                  ).then(() => {
                    navigate("/faculties");
                  });
                }
              }}
            >
              {params.id > 0 && "Edit  "}
              {!(params.id > 0) && "Add  "}
              Faculty
            </button>
          </td>
        </tr>
      </table>
    </>
  );
}
export default FacultyAdd;
