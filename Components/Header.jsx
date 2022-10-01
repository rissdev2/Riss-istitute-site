import React from 'react';
import { useRouter } from 'next/router'

import Link from 'next/link'

export default function header() {
  const router = useRouter();
const currentRoute = router.pathname;
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#"><img src="assets/img/Logo.png" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link href="/">
            <a className={currentRoute === "/" ? "active" : "non-active"}>Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/Courses">
            <a className={currentRoute === "/Courses" ? "active" : "non-active"}>Tranings</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/FeeStruct">
            <a className={currentRoute === "/FeeStruct" ? "active" : "non-active"}>Fee Structure</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about">
            <a className={currentRoute === "/about" ? "active" : "non-active"}>About</a>
          </Link>
        </li>
      </ul>
     
    </div>
   <div>
   <Link href="/Contct">
    <a  className='nav-buttn'>
      Contact us
    </a>
    </Link> 
   </div>
  </div>
</nav>
    </>
  )
}
