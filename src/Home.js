import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide me-2 mx-2"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src='https://darshan.ac.in/U01/Slider/Slide_2.jpg?V=1"
              '
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src='https://darshan.ac.in/U01/Slider/Slide_3.jpg?V=1"'
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src='https://darshan.ac.in/U01/Slider/Slide_6.jpg?V=1"'
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <table
          align="center"
          width="100%"
          style={{ align: "center" }}
          id="tablehome1"
        >
          <tr align="center">
            <td width="25%">
              <button class="homeManubutton">
                for Admission 2022-23
                <br />
                <h5>Apply Now</h5>
              </button>
            </td>
            <td width="25%">
              <button class="homeManubutton">
                virtual
                <br />
                <h5>Campus tour</h5>
              </button>
            </td>
            <td width="25%">
              <button class="homeManubutton">
                Download
                <br />
                <h5>Brochures</h5>
              </button>
            </td>
            <td width="25%">
              <button class="homeManubutton">
                Admission
                <br />
                <h5>Inquiry</h5>
              </button>
            </td>
          </tr>
        </table>
        <div class="media g-mb-15 g-mt-15" align="center">
          <br />
          <div class="media-body align-self-center">
            <h3 class="h5 g-color-black g-line-height-1_6 mb-0">
              <Link to="" class="gs">
                B.Tech. (Computer Science and Engineering)
              </Link>
            </h3>
            <span class="d">
              <Link to="" class="g">
                Placement
              </Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <Link to="" class="g">
                Syllabus
              </Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <Link to="" class="g">
                Faculty
              </Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <Link to="" class="g">
                Laboratory
              </Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <Link to="" class="g">
                ASWDC
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
