import Link from "next/link";
import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
function Header() {
  const sideM = useRef();

  const Toggle = () => {
    let toggId = document.getElementById("togg");
    if (toggId?.classList.contains("toggle")) {
      toggId?.classList.remove("toggle");
      const sidemuu = sideM?.current;
      sidemuu?.classList.add("display-none");
    } else {
      toggId?.classList.add("toggle");
      const sidemu = document.getElementById("side-menu");
      if (sidemu?.classList.contains("display-none")) {
        sidemu?.classList.remove("display-none");
      }
    }
  };
  const unToggle = () => {
    let toggId = document.getElementById("togg");
    if (toggId?.classList.contains("toggle")) {
      toggId?.classList.remove("toggle");
      const sidemuu = sideM?.current;
      sidemuu?.classList.add("display-none");
    }
  };
  return (
    <div className="wrapper2 hd">
      <div className="header">
        <div className="header__logo font-weight-bold display-5">
          SGN EMPIRE
        </div>
        <div className="hide-for-mobile header__links">
          <div>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </div>
          <div>
            <Link href="/about" legacyBehavior>
              <a>About us</a>
            </Link>
          </div>
          <div>
            <Link href="/properties" legacyBehavior>
              <a>properties</a>
            </Link>
          </div>
          <div>
            <Link href="/faq" legacyBehavior>
              <a>f.a.q</a>
            </Link>
          </div>
          <div>
            <Link href="/contact" legacyBehavior>
              <a>Contact Us</a>
            </Link>
          </div>
        </div>
        <div className="herburger hide-for-desktop">
          <div onClick={Toggle} id="togg">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          className="hide-for-desktop mobile-side-menu display-none"
          id="side-menu"
          ref={sideM}
        >
          <ul className='bg-gray'>
            <li className='text-2xl'>
              <Link href="/" onClick={unToggle}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="ac2" onClick={unToggle}>
                About us
              </Link>
            </li>
            <li>
              <Link href="/properties" onClick={unToggle}>
                Properties
              </Link>
            </li>
            <li>
              <Link href="/faq" onClick={unToggle}>
                f.a.q
              </Link>
            </li>
            <li>
              <Link href="/contact" className="ac2" onClick={unToggle}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
