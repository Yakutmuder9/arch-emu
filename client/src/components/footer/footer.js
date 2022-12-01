import "./footer.css"
import { BsArrowUpRight } from "react-icons/bs";
import { FaTelegramPlane, FaDiscord, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer d-flex jusify-content-center flex-column align-items-center">
      <div className="footer-container d-flex flex-column justify-content-between h-100 w-100 ">

        <div className="footer-disc-cont d-flex justify-content-between ">
          <h3>Looking for dearm house? <br />Let’s discuss with us</h3>
          <img src="https://www.freeiconspng.com/uploads/line-png-21.png" alt="" style={{ height: '180px', width: "50%", position: "absolute", marginTop: "-40px", left: "30%", zIndex: "1", opacity: "0.4" }} className="d-none d-lg-block" />
          <button>Get Started <span><BsArrowUpRight /></span> </button>
        </div>

        <div className="d-flex d-md-flex justify-content-between foot-list-items">
          <div className="foot-copywrite">

            <div className='d-flex align-items-center '>
              <div className='logo-ellipse'>EM</div>
              <div className='logo-text text-light'>Architect
                <div className='logo-back-ellipse'></div>
              </div>
            </div>

            <p>EM ARCHITECT Ⓒ 2022 ALL RIGHT RESERVED <br />DEVELOPED BY YAKUT AHMENDIN</p>
          </div>

          <div className="d-flex">
            <div className="foot-about-list">
              <ul className="">
                <h3>About</h3>
                <li>About</li>
                <li>Benefits</li>
                <li>Projects</li>
              </ul>
            </div>

            <div className="foot-info-list">
              <ul>
                <h3>INFO</h3>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="foot-share-list">
            <p>Curious about new devlopment and update? <br /> follow our social media</p>
            <div >
              <button><a><FaTelegramPlane /></a></button>
              <button><a><FaDiscord /></a></button>
              <button> <a><FaYoutube /></a></button>
            </div>
          </div>
        </div>


      </div>
      <div className="footer-border"></div>
    </div>
  )
}

export default Footer
