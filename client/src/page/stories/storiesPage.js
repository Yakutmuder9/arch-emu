import './stories.css'
import { useState } from 'react'
import { response } from 'express'

const StoriesPage = () => {

  return (
    <div className='stories-page'>
      <div className='stories-page-container'>
        <Main />
      </div>
    </div>
  )
}

export default StoriesPage



const PostsData = [
  {
    "category": "News",
    "title": "CNN Acquire BEME",
    "text": "CNN purchased Casey Neistat's Beme app for $25million.",
    "image": "https://source.unsplash.com/user/erondu/600x400"
  },
  {
    "category": "Travel",
    "title": "Nomad Lifestyle",
    "text": "Learn our tips and tricks on living a nomadic lifestyle",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  {
    "category": "Development",
    "title": "React and the WP-API",
    "text": "The first ever decoupled starter theme for React & the WP-API",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  },
  {
    "category": "News",
    "title": "CNN Acquire BEME",
    "text": "CNN purchased Casey Neistat's Beme app for $25million.",
    "image": "https://source.unsplash.com/user/erondu/600x400"
  },
  {
    "category": "Travel",
    "title": "Nomad Lifestyle",
    "text": "Learn our tips and tricks on living a nomadic lifestyle",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  {
    "category": "Development",
    "title": "React and the WP-API",
    "text": "The first ever decoupled starter theme for React & the WP-API",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  }
]


// Start App

const Main = () => {
  const [state, setState] = useState({ posts: {} })

  // const componentWillMount=() =>{
  //   setState({posts: PostsData });
  // }


  return <div>
    <header className="app-header"></header>
    <Title />
    <div className="app-card-list" id="app-card-list">
      {
        Object
          .keys(state.posts)
          .map(key => <Card key={key} index={key} details={state.posts[key]} />)
      }
    </div>
  </div>
}


const Title = () => {

  return (<section className="app-title">
    <div className="app-title-content">
      <h1>Latest News</h1>
      <p>Covering March & April 2015</p>
      <a className="designer-link" href="https://dribbble.com/shots/1978243-Latest-News" target="_blank">Design from <i className="fa fa-dribbble"></i></a>
    </div>
  </section>)

}


const Button = () => {
  return (
    <button className="button button-primary">
      <i className="fa fa-chevron-right"></i> Find out more
    </button>
  )
}


const CardHeader = (props) => {

  const { image, category } = props;
  var style = {
    backgroundImage: 'url(' + image + ')',
  };
  return (
    <header style={style} className="card-header">
      <h4 className="card-header--title">{category}</h4>
    </header>
  )

}


const CardBody = (props) => {
  return (
    <div className="card-body">
      <p className="date">March 20 2015</p>

      <h2>{props.title}</h2>

      <p className="body-content">{props.text}</p>

      <Button />
    </div>
  )
}


const Card = (props) => {

  return (
    <article className="card">
      <CardHeader category={props.details.category} image={props.details.image} />
      <CardBody title={props.details.title} text={props.details.text} />
    </article>
  )
}
