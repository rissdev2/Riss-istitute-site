import React from 'react'
import Link from 'next/link'

export default function Goals() {
  return (
    <>
    <div className="container">
        <div className="row goal-sec">
            <div className="col-md-12 text-lg-center">
                <h1>our GOals</h1>
                <br className="br-hide" />
                <br className="br-hide" />
                <br className="br-hide" />
            </div>
        </div>
        <div className="row goal-sec">
            <div className="col-md-5">
                <img src="assets/img/goal.svg" className='img-fluid' alt="Person icon" />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
                <p>uncompromising commitment to provide students theoretical as well as practical aspect of the subject.</p>
                <p>A focus on a student learning outcome based approach and give them extra attention and hours – we acknowledge the onus is on us</p>
                <p>to provide our students  internships in RISS software house, to gain practical experience for their skills. With a completely marketplace approach on the live projects.</p>
            </div>
        </div>
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <br className="br-hide" />
        <div className="row goal-sec mt-5">
            <div className="col-md-12 text-center">
                <h2>We believe education is the ability to meet life’s situations</h2>
                <div className="mt-5">
                    <Link href="/Contct">
              <a  className="hero-buttn">
              Get in touch!
              </a>
              </Link>
            </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
