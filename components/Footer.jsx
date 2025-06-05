import { FaLocationDot, FaInstagram } from "react-icons/fa6";
import { FaPhone, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer space">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3 col-3">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Our Business</Link>
              </li>
              <li>
                <Link href="/">Eco Initiatives</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-1 col-2">
            <ul>
              <li>
                <Link href="/">Insights</Link>
              </li>
              <li>
                <Link href="/">Media</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
              <li>
                <Link href="/">Career</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-5 col-7">
            <div className="f_logo">
              <img src="/images/logo.png" alt="logo" />
            </div>
            <div className="social">
              <Link href="/">
                <FaFacebookF />
              </Link>

              <Link href="/">
                <FaInstagram />
              </Link>
              <Link href="/">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="content">
              <div className="getIn">Get in Touch!</div>
              <div className="office mb-3">
                <FaLocationDot />
                <strong>Project Office:</strong>
                <br />
                <strong>Atyule Krishi Vana</strong>
                <br />
                Mithlesh Nagar, Village: Ramgarh, P.O: Brijish Nagar, Tehsil:
                Icchawar, Dist: Sehore, Bhopal, (MP)- 466115
              </div>
              <div className="phone">
                <FaPhone />
                +91 9220152225
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
