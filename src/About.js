function About() {
  return (
    <>
      <table style={{ margin: 10 }}>
        <tr>
          <td>
            <div class="container" id="main">
              <img
                class="image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5FK7tENCn7CtG5R2nK0Kn4oB7rKTF9WxpJBg4DVRq_phE7sznDbaG-RUsUhqwjsJADw&usqp=CAU"
                alt="Card image cap"
                style={{ width: "100%" }}
              />
              <button class="btn">
                <h5>About Us&nbsp;&nbsp;&nbsp;&nbsp;</h5>
              </button>
            </div>
            <div class="about">
              <br />
              <p>
                <h4 style={{ textAlign: "center" }} class="mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut.
                </h4>
              </p>
              <br />
              <p>
                <h5 style={{ textAlign: "center" }} class="mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </h5>
              </p>
              <br />
              <h5 style={{ textAlign: "center" }} class="mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </h5>
              <br />
              <h6 style={{ textAlign: "center" }} class="mx-auto">
                {" "}
                consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ulla
              </h6>
            </div>
          </td>
        </tr>
      </table>
    </>
  );
}

export default About;
