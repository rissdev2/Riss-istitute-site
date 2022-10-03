import React from 'react';
import { useRouter } from 'next/router'
import { useState } from 'react';
import Link from 'next/link'

export default function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  
  const router = useRouter();
const currentRoute = router.pathname;
  return (
    <>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
  <a className="navbar-brand"><img src="assets/img/Logo.png" alt="" /></a>
      <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end `} id="navbarsExample09">
      
      <div className='ms-auto'>
    <ul className="navbar-nav ms-auto">
        <li className="nav-item ">
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
      <div className='d-flex justify-content-center ms-auto '>
      <Link href="/Contct">
    <a  className='nav-buttn '>
      Contact us
    </a>
    </Link>
    </div>
    </div>
   
  </div>
</nav>
    </>
  )
}
