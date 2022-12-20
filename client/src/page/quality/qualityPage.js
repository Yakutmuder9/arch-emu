import './quality.css'
import { useState } from 'react'

const QualityPage = () => {

  return (
    <div className='quality-page'>
      <div className='quality-container'>

        <div className='qty-text'>
          <p>Advantage working with us?</p>
          <h2>High quality architectural design that suits to you</h2>
        </div>

        <div className='row qty-bottom'>
          <div className='col-12 col-md-6 notic-card-container'>
            <div className='notice-card'>
              <h5>Affordable Price</h5>
              <p>We provide the Best for you. The price offer accordance with the quality we provide</p>
            </div>
            <div className='notice-card'>
              <h5>Clear legality</h5>
              <p>We are leagaly entity with official legality in the relevant government</p>
            </div>
            <div className='notice-card'>
              <h5>Experienced personel</h5>
              <p>We always work with experts in their fields so that can provide the best quality</p>
            </div>
          </div>

          <div className='col-12 col-md-6 qty-img position-relative'>
            <img src='../img/apt2.png' style={{scale:"1.2", marginLeft:"-10%", zIndex: 2, marginTop:"8%"}}/>
          </div>

          <div className='qty-ellipse position-absloute' style={{ zIndex: 1}}>
            <div>
              <div id='last-ellipse'></div> <div></div> <div></div> <div></div> <div></div> <div></div>
              <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default QualityPage