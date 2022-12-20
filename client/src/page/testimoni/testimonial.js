import './testimoni.css'

const Testimonial = () => {
  return (
    <div className='testimonial py-3'>

        <div className='testimonial-topic d-flex align-items-center justify-content-between px-3 pb-5' >
            <div className='testimonial-people-say'><h2>What people are saying about us</h2></div>
            <div className='testimonial-people-dic ps-4'><p>Everything you need to accept card payments and grow your business anywhere on the planet.</p></div>
        </div>

        <div className='testimonial-card d-md-flex align-items-center justify-content-between'>
            <div className='testimonial-card-1'>
                <div>What people are saying about us</div>
            </div>
            <div className='testimonial-card-1 mx-4'>
                <div>What people are saying about us</div>
            </div>
            <div className='testimonial-card-1'>
                <div>What people are saying about us</div>
            </div>
        </div>
        
        <div className='testimonial-r/n d-flex align-items-center justify-content-between'>
                <span>What people </span>
                <span>What people </span>
                <span>What people </span>
                <span>What people </span>
        </div>
    </div>
  )
}

export default Testimonial