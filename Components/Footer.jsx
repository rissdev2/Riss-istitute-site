import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Footer() {
    const router = useRouter();
    const currentRoute = router.pathname;
  return (
    <>
    <div className="container">
        <div className="row  mt-5">
            <div className="col-md-1"></div>
            <div className="col-md-5 foter-txt mt-5">
                <img src="assets/img/fotter-logo.svg" className='img-fluid mb-4' alt="" />
            <div className=' fot-txt foter-icons mt-3'>
                <img src="assets/img/f-mbl.svg" className='img-fluid' alt="" />
                <p>(056-3678338, +92 3471663003)</p>
                <img src="assets/img/f-mail.svg" className='img-fluid' alt="" />
                <p>info@theriss.net</p>
            </div>
            <div className='fot-txt foter-icons mt-3'>
                <img src="assets/img/location.svg" className='img-fluid' alt="" />
                <p>Farooq Town Street 1/2 , Ghang road, Sheikhupra</p>
            </div>
            <h3 className='sub-fot mt-4 mb-4'>Social profiles</h3>
            <div className='foter-icons'>
            <ul className="d-flex mt-2">
                <li><img src="assets/img/f-facebook.svg" className="img-fluid me-2" alt="" /></li>
                <li><img src="assets/img/f-instagram.svg" className="img-fluid me-2" alt="" /></li>
                <li><img src="assets/img/f-twitter.svg" className="img-fluid me-2" alt="" /></li>
                <li><img src="assets/img/f-linkdin.svg" className="img-fluid " alt="" /></li>
            </ul>
            </div>
            </div>
            <div className="col-md-2 mt-5">
                <h3 className='sub-fot mb-4'>Trainings we offer</h3>
                <p>Basic computing</p>
                <p>Virtual assistant</p>
                <p>CMS</p>
                <p>Graphic designing</p>
                <p>Web development</p>
                
            </div>

            <div className="col-md-1"></div>
           
            <div className="col-md-2 mt-5">
            <br />
            <br />
              
            <p>Freelancing</p>
                <p>Digital marketing</p>
                <p>Desktop app development</p>
                <p>Android app development</p>
            </div>
            <div className="col-md-1"></div>
        </div>
        <div className="row ">
            <div className="col-md-1"></div>
            <div className="col-md-6 fot-links">
                <ul className=' sub-fot mt-3'>
                    
                    <li>
            <Link href="/">
            <a className={currentRoute === "/" ? "active1" : "non-active1"}>Home</a>
          </Link>
        </li>
      
        <li>
          <Link href="/Courses">
            <a className={currentRoute === "/Courses" ? "active1" : "non-active1"}>Tranings</a>
          </Link>
        </li>
        <li>
          <Link href="/FeeStruct">
            <a className={currentRoute === "/FeeStruct" ? "active1" : "non-active1"}>Fee Structure</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={currentRoute === "/about" ? "active1" : "non-active1"}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/Contct">
            <a className={currentRoute === "/about" ? "active1" : "non-active1"}>Contact us</a>
          </Link>
        </li>
                </ul>
            </div>
            <div className="col-md-2 fot-links"></div>
            <div className="col-md-2  fot-links">
                <p className='mt-3'>Copyright © 2022 • RISS Institue</p>
            </div>
            <div className="col-md-1"></div>
        </div>
    </div>
    
    </>
  )
}
