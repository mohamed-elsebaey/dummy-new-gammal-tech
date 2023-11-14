import Link from "next/link";
import classes from "./Footer.module.css";

import GammalTechLogo from "../header/GammalTechLogo";

import {
  FaFacebookF,
  FaTiktok,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <section className={classes.footerSection}>
      <div className={classes.container}>
        <div className={classes.footer1}>
          <div className={classes.footer1A}>
            <Link href="/">
              <GammalTechLogo />
            </Link>
            <div className={classes.footer1AText}>
              We are an online educational platform that capitalizes on human
              potential by assisting professionals and aspiring individuals to
              succeed in their goals.
            </div>
          </div>
          <div className={classes.footer1B}>
            <Link href="/">
              <h3>1. Featured links</h3>
            </Link>
            <ul>
              <li>
                <div>Home</div>
              </li>
              <li>
                <div>Contact us</div>
              </li>
              <li>
                <div>Courses</div>
              </li>
              <li>
                <div>Terms &amp; Conditions</div>
              </li>
              <li>
                <div>About us</div>
              </li>
              <li>
                <div>Privacy Policy</div>
              </li>
            </ul>
          </div>
          <div className={classes.footer1C}>
            <h3>2. Connect with us</h3>
            <div>
              <button>
                <span>
                  <FaFacebookF />
                </span>
              </button>
              <button>
                <span>
                  <FaTwitter />
                </span>
              </button>
              <button>
                <span>
                  <FaYoutube />
                </span>
              </button>
              <button>
                <span>
                  <FaInstagram />
                </span>
              </button>
              <button>
                <span>
                  <FaLinkedinIn />
                </span>
              </button>
              <button>
                <span>
                  <FaTiktok />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className={classes.footer2}>
          <div>© 2023 Gammal Tech</div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
