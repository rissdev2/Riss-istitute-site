import Head from 'next/head'
import React from 'react'
import BeforeAfter from './BeforeAfter'

export default function QuestionForYou() {
  return (
    <>
   
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="container">
        <div className="row fot-txt">
            <div className="col-md-12 text-start">
                <h3>We have a <span className='main-color'>Question for you</span></h3>
                <h2>We have a <span className='main-color'>Question for you</span></h2>
                <h1>We have a <span className='main-color'>Question for you</span></h1>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-md-12">
            <iframe frameborder="0" class="juxtapose" width="100%" height="740" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=7199a636-40f2-11ed-b5bc-6595d9b17862"></iframe>
            {/* <BeforeAfter /> */}
            </div>
        </div>
    </div>
    
    </>
  )
}
