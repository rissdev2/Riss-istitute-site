import React from 'react'
import PgForm from "../Components/PgForm";

export default function CntctUs() {
  return (
    <>
    <div className="container">
        <div className="row cntct-sec align-items-center">
            <div className="col-md-1"></div>
            <div className="col-md-5">
                <h1>Hello, there! we’ll be <span className='main-color'> glad to here from you.</span></h1>
                <p>We would love to hear from also feel free to suggest to us anything you like we are very open to them or if you have any queries regarding any of the RISS Training we would love to answer them.</p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4">
                <PgForm />
            </div>
            <div className="col-md-1"></div>

        </div>
    </div>
    
    
    
    
    </>
  )
}
