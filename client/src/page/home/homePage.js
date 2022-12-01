import './homePage.css'

const HomePage = () => {
    return (
        <div className='home-page'>
            <div className='home-page-container '>
                <div className='deco-ellipse'></div>
                <div className='home-intro-txt'>
                    <div>
                        <h3>We help people to realize their dream home </h3>
                        <p>We are creative people who provide the best for you who want to have a new comfortable and sutable place</p>
                        <button>Get Started</button>
                    </div>
                </div>
                <div className='home-side-img'>
                    <img src='../img/apt.png' />
                </div>
            </div>
        </div>
    )
}

export default HomePage;