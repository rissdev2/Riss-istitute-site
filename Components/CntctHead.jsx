import React from "react";

export default function CntctHead() {
  return (
    <>
    <section className="cntct-head">
      <div className="container ">
        <div className="row cntct-head">
          <div className="col-7 col-md-3 ">
            <img src="assets/img/mbl.svg" className="img-fluid me-2" alt="Mobile-svg" />
            (056-3678338 ,+92 3471663003)
          </div>
          <div className="col-5 col-md-3 cntct-head">
          <img src="assets/img/email.svg" className="img-fluid me-2" alt="mail-svg" />
              info@theriss.net 
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-2 d-none d-md-block">
            <ul className="d-flex justify-content-end mt-2">
                <li><a href="https://www.facebook.com/rissgroup" target="blank"><img src="assets/img/facebook.svg" className="img-fluid me-2" alt="Facebook-icon" /></a> </li>
                <li><a href="https://www.instagram.com/rissgroup/?fbclid=IwAR1qVzwEavFoNm-5_pEgTSJMSRnFSMDSvzNHaNg-1DJsXISW71pyQd7g_os" target="blank"><img src="assets/img/insta.svg" className="img-fluid me-2" alt="Instagram-icon" /></a> </li>
                <li><a href="https://twitter.com/rissgroups?fbclid=IwAR2IiH49HjAvcCJ1OUR9-745-EG1-4w2ZT2vv_gEL2Zpe-M7Uz-0ZEs5u38" target="blank"> <img src="assets/img/twitter.svg" className="img-fluid me-2" alt="Twitter-icon" /></a></li>
                <li><a href="https://www.linkedin.com/in/rissinstitute/" target="blank"><img src="assets/img/linkedin.svg" className="img-fluid " alt="LinkedIn-icon" /></a> </li>
            </ul>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
