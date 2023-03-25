import Link from "next/link";
import React from "react";
function Footer() {
  return (
   <div className="foot p-3 wrapper">
     <div className='footer'>
      <div>
        <h1 className="h2">SGN EMPIRE</h1>
      </div>
      <div>
        <h1 className="h3">Address</h1>
        <p>Bem József St. 09, District 2,</p>
        <p>Budapest 1027, Hungary</p>
      </div>
      <div>
        <h1 className="h3">Contact</h1>
        <Link href='samutech144@gmail.com' legacyBehavior>
          <a className="tex">samutech144@gmail.com</a>
        </Link>
        <p>phone:(+254) 742337899</p>
      </div>
      <div>
        <h1 className="h3">Socials</h1>
        <Link href='/' legacyBehavior>
          <a className='tex'>facebook</a>
        </Link><br/>
        <Link href='/' legacyBehavior>
          <a className="tex">Twitter</a>
        </Link><br/>
      </div>
    </div>
    <h4 className="text-center">copyrights:samutech144@gmial.com</h4>
   </div>
  );
}

export default Footer;
