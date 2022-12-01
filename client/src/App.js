import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Loading from './components/loading/loading';
import AboutPage from './page/about/aboutPage';
import HomePage from './page/home/homePage';
import ProjectPage from './page/project/projectPage';
import QualityPage from './page/quality/qualityPage';
import StoriesPage from './page/stories/storiesPage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <AboutPage />
      <QualityPage />
      <ProjectPage />
      <StoriesPage />
      <StoriesPage />
      <Footer />
    </div>
  )
}

export default App

