import { FaUniversity } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import { BsFolderSymlink } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

function Contact() {
  return (
    <>
      <table style={{ margin: 10 }} id="main" width="98%" align="center">
        <tr>
          <td width="100%" colSpan="2">
            <div class="container" id="main">
              <img
                class="image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5FK7tENCn7CtG5R2nK0Kn4oB7rKTF9WxpJBg4DVRq_phE7sznDbaG-RUsUhqwjsJADw&usqp=CAU"
                alt="Card image cap"
                style={{ width: "100%" }}
              />
              <button class="btn">
                <h5>Contact Us&nbsp;&nbsp;&nbsp;&nbsp;</h5>
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <td style={{ verticalAlign: "top" }}>
            <button class="contactbuttonsmain">
              <FaUniversity /> University Campus
            </button>
            <button class="contactbuttons">
              <BsBuilding /> Morbi
            </button>
            <button class="contactbuttons">
              <BsBuilding /> Rajkot
            </button>
            <button class="contactbuttons">
              <BsBuilding /> Gondal
            </button>
            <button class="contactbuttons">
              <BsBuilding /> Jamnagar
            </button>
            <hr style={{ marginTop: "0px", color: "grey" }} />

            <table>
              <tr>
                <td>
                  {" "}
                  <table align="left" margin="30">
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
                      <td>+91 - 97277 47310</td>
                    </tr>

                    <tr>
                      <td></td>
                      <td></td>
                      <td>(O) : </td>
                      <td>+91 - 97277 47311</td>
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
                      <td colSpan="2">info@darshan.ac.in</td>
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
                      <td colSpan="2">
                        Rajkot - Morbi Highway,
                        <br />
                        Rajkot - 363650, Gujarat (INDIA)
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
          <td id="contactform">
            <h5>
              <span>
                <BsFolderSymlink />{" "}
              </span>{" "}
              Send Message
            </h5>
            <hr style={{ marginTop: "0px", color: "black" }} />
            <p id="para">
              Fill up the form and hit the "Send Message".
              <br /> Our representatives will get back to you as soon as
              possible.
            </p>
            <table>
              <tbody>
                <tr>
                  <td>
                    <div class="row" style={{ textAlign: "center" }}>
                      <div class="col mb-4">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="First name"
                          aria-label="First name"
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Last name"
                          aria-label="Last name"
                        />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-12">
                        <input
                          type="email"
                          class="form-control"
                          id="inputEmail4"
                          placeholder="Email"
                        />
                      </div>
                      <br />
                    </div>
                    <input
                      type="text"
                      id="defaultRegisterPhonePassword"
                      class="form-control"
                      placeholder="Phone number"
                      aria-describedby="defaultRegisterFormPhoneHelpBlock"
                    />

                    <small
                      id="defaultRegisterFormPhoneHelpBlock"
                      class="form-text text-muted mb-4"
                    >
                      Optional - for two step authentication
                    </small>

                    <div class="form-floting">
                      <textarea
                        class="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        style={{ height: "100px" }}
                      ></textarea>
                    </div>
                    <br />
                    <button
                      type="button"
                      class="btn btn-outline-"
                      style={{ textAlign: "center" }}
                    >
                      Send Message <BsArrowRight />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </table>
    </>
  );
}
export default Contact;
