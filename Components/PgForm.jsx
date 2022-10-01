import React from 'react'

export default function PgForm() {
  return (
    <>
      
            <div className="row crd-form">
              <div className="col-md-12">
                <input type="text" placeholder="Full name" required />
                <input type="text" placeholder="Email" required />
                <input type="email" placeholder="Phone number" required />
                <textarea name="" id="" cols="45" placeholder="Ask your question" rows="10" required></textarea>
                <div className="mt-lg-3 ms-3">
              <a href="" className="hero-buttn">
                Send
              </a>
            </div>
              </div>
            </div>
    
    </>
  )
}
