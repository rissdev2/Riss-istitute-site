import React from 'react'
import Link from 'next/link'
export default function Motivation() {
  return (
    <>
    <br className="br-hide" />
    <br className="br-hide" />
    <br className="br-hide" />
    <br className="br-hide" />
    <br className="br-hide" />
    <div className="container">
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10 text-center mtv-txt">
                <h2>“Most people don’t want to live their lives working for someone else. Fortunately, people are realizing that they can make more money online working for themselves and have time and freedom”</h2>
                <div className="mt-5">
                  <Link href="/Contct"><a  className="hero-buttn">
               Reach us
              </a></Link>
              
            </div>
            </div>
            <div className="col-md-1"></div>
        </div>
    </div>
    <br className="br-hide" />
    <br className="br-hide" />
    <br />
    <br  />
    </>
  )
}
