import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <Link to="./" class="nav-link px-2 text-muted">
              Home
            </Link>
          </li>

          <li class="nav-item">
            <Link to="./about" class="nav-link px-2 text-muted">
              About
            </Link>
          </li>

          <li class="nav-item">
            <Link to="./contact" class="nav-link px-2 text-muted">
              Contact
            </Link>
          </li>

          <li class="nav-item">
            <Link to="./faculties" class="nav-link px-2 text-muted">
              All Faculties
            </Link>
          </li>
        </ul>
        <p class="text-center text-muted">© 2022 Darshan, India</p>
      </footer>
    </>
  );
}

export default Footer;
