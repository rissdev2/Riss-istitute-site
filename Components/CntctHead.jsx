import React from "react";

export default function CntctHead() {
  return (
    <>
    <section className="cntct-head">
      <div className="container ">
        <div className="row cntct-head">
          <div className="col-md-3 ">
            <img src="assets/img/mbl.svg" className="img-fluid me-2" alt="" />
            (056-3678338 , +92 3471663003 )
          </div>
          <div className="col-md-3 cntct-head">
          <img src="assets/img/email.svg" className="img-fluid me-2" alt="" />
              info@riss.net 
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-2 d-none d-md-block">
            <ul className="d-flex justify-content-end mt-2">
                <li><img src="assets/img/facebook.svg" className="img-fluid me-2" alt="" /></li>
                <li><img src="assets/img/insta.svg" className="img-fluid me-2" alt="" /></li>
                <li><img src="assets/img/twitter.svg" className="img-fluid me-2" alt="" /></li>
                <li><img src="assets/img/linkedin.svg" className="img-fluid " alt="" /></li>
            </ul>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
