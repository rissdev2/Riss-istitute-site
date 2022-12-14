import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Footer() {
    const router = useRouter();
    const currentRoute = router.pathname;
  return (
    <>
    <section className='bg-white'>
    <div className="container">
        <div className="row  mt-5">
            <div className="col-md-1"></div>
            <div className="col-md-5 foter-txt mt-5">
              
                <img src="assets/img/fotter-logo.svg" className='img-fluid mb-4' alt="logo" />
            <div className=' fot-txt foter-icons mt-3'>
            <div className='d-flex gap-2'>
                <img src="assets/img/f-mbl.svg" className='img-fluid' alt="mobile icon" />
                <p>(056-3678338, +92 3471663003)</p>
                </div>
                <div className='d-flex gap-2'>
                <img src="assets/img/f-mail.svg" className='img-fluid' alt="email icon" />
                <p>info@theriss.net</p>
                </div>
            </div>
            <div className='fot-txt foter-icons mt-3'>
            <div className='d-flex gap-2'>

                <img src="assets/img/location.svg" className='img-fluid' alt="location icon" />
                <p>Farooq Town Street 1/2 , Ghang road, Sheikhupra</p>
</div>
            </div>
            <h3 className='sub-fot mt-4 mb-4'>Social profiles</h3>
            <div className='foter-icons'>
            <ul className="d-flex mt-2">
                <li><a href="https://www.facebook.com/rissgroup" target="blank"> <img src="assets/img/f-facebook.svg" className="img-fluid me-2" alt="facebook icon" /></a></li>
                <li><a href="https://www.instagram.com/rissgroup/?fbclid=IwAR1qVzwEavFoNm-5_pEgTSJMSRnFSMDSvzNHaNg-1DJsXISW71pyQd7g_os" target="blank"><img src="assets/img/f-instagram.svg" className="img-fluid me-2" alt="instagram-icon" /></a></li>
                <li><a href="https://twitter.com/rissgroups?fbclid=IwAR2IiH49HjAvcCJ1OUR9-745-EG1-4w2ZT2vv_gEL2Zpe-M7Uz-0ZEs5u38" target="blank"><img src="assets/img/f-twitter.svg" className="img-fluid me-2" alt="Twitter icon" /></a></li>
                <li><a href="https://www.linkedin.com/in/rissinstitute/" target="blank"><img src="assets/img/f-linkdin.svg" className="img-fluid " alt="LinkedIn icon" /></a></li>
            </ul>
            </div>
            </div>
            <div className="col-md-2 crs-links mt-3 mt-md-5">
                <h3 className='sub-fot mb-4'>Trainings we offer</h3>
                <Link href="/BasicComputing">
              <a  >
             <p>Basic computing</p> 
              </a>
              </Link>
              <Link href="/VirtualAssistant">
              <a  >
          <p>Virtual assistant</p> 
              </a>
              </Link>
              <Link href="/CMS">
              <a  >
              <p>CMS</p>
              </a>
              </Link>
              <Link href="/GraphicDesigning">
              <a  >
             <p>Graphic designing</p>
              </a>
              </Link>
              <Link href="/WebDevelopment">
              <a  >
            <p>Web development</p>
              </a>
              </Link>




                
              
                
               
                
                
            </div>

            <div className="col-md-1"></div>
           
            <div className="col-md-2 crs-links mt-0 mt-md-5">
            <br className="br-hide" />
            <br className="br-hide" />
            <Link href="/Freelancing">
              <a  >
         <p>Freelancing</p>  
              </a>
              </Link>
              <Link href="/DigitalMarketing">
              <a  >
             <p>Digital marketing</p>
              </a>
              </Link>
              <Link href="/DesktopAppDevelopment">
              <a  >
               <p>Desktop app development</p>
              </a>
              </Link>
              <Link href="/AndroidAppDevelopment">
              <a  >
              <p>Android app development </p>
              </a>
              </Link>



           
               
                
                
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
          <Link href="/Tranings">
            <a className={currentRoute === "/Tranings" ? "active1" : "non-active1"}>Tranings</a>
          </Link>
        </li>
        <li>
          <Link href="/FeeStructer">
            <a className={currentRoute === "/FeeStructer" ? "active1" : "non-active1"}>Fee Structure</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className={currentRoute === "/about" ? "active1" : "non-active1"}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/Contct">
            <a className={currentRoute === "/Contct" ? "active1" : "non-active1"}>Contact us</a>
          </Link>
        </li>
                </ul>
            </div>
            <div className="col-md-2 fot-links"></div>
            <div className="col-md-2  fot-links">
                <p className='mt-3'>Copyright ?? 2022 ??? RISS Institue</p>
            </div>
            <div className="col-md-1"></div>
        </div>
    </div>
    </section>
    </>
  )
}
