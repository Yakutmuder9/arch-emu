import './about.css'
import { useState } from 'react'

const AboutPage = () => {
    return (
        <div className='about-page pt-4'>
            <div className='about-page-container '>
                <div className='row about-txt '>
                    <div className='col-12 col-md-6'>
                        <p>Why you should choose us?</p>
                        <h3>We designed with your lifestyle in mind</h3>
                        <div className='about-img'>
                            <img src='../img/house.png' alt='' />
                        </div>
                    </div>
                    <div className='col-12 col-md-6  h-100 mb-3'>
                        <p>We always analyze what you need and what your lifestyle is like, off all that later we will find an idea to make a house that suit what the client expects and what they deam of.</p>
                        
                        <img src='https://thumbs.dreamstime.com/b/abstract-tunnel-d-background-white-blue-rectangle-windows-render-illustration-95111489.jpg' style={{width:"100%"}}  className="rounded hallway"/>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default AboutPage