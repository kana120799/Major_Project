import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="flexbox">
        <div>
          <div className="flexchild">ABOUT</div>

          <Link className="list" to="/">
            Contact Us
          </Link>
          <Link className="list" to="/">
            About Us
          </Link>
          <Link className="list" to="/">
            Flipkart Stories
          </Link>
          <Link className="list" to="/">
            Press
          </Link>
        </div>
        <div>
          <div className="flexchild">HELP</div>

          <Link className="list" to="/">
            Payments
          </Link>
          <Link className="list" to="/">
            Shipping
          </Link>
          <Link className="list" to="/">
            Cancellation & Returns
          </Link>
          <Link className="list" to="/">
            FAQ
          </Link>
        </div>
        <div>
          <div className="flexchild">POLICY</div>

          <Link className="list" to="/">
            Return Policy
          </Link>
          <Link className="list" to="/">
            Term Of Use
          </Link>
          <Link className="list" to="/">
            Security
          </Link>
          <Link className="list" to="/">
            Privacy
          </Link>
        </div>
        <div>
          <div className="flexchild">SOCIAL</div>

          <Link className="list" to="/">
            Facebook
          </Link>
          <Link className="list" to="/">
            Twitter
          </Link>
          <Link className="list" to="/">
            YouTube{" "}
          </Link>
        </div>
        <div>
          <div className="flexchild">Mail Us:</div>
          <p className="para">Flipkart Internet Private Limited,</p>
          <p className="para">Buildings Alyssa, Beogonia &</p>
          <p className="para">Clove Embassy Tech Village,</p>
          <p className="para">Outer Ring Road, Devarabeesanahali Village,</p>
        </div>
        <div>
          <div className="flexchild">Registered Office Address:</div>
          <p className="para">Flipkart Internet Private Limited,</p>
          <p className="para">Buildings Alyssa, Beogonia &</p>
          <p className="para">Clove Embassy Tech Village,</p>
          <p className="para">Bengaluru,560103,</p>
          <p className="para">Karnataka,India</p>
          <p className="para">CIN : U51109KA021544PTC015</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
