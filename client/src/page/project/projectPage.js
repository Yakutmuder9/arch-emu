import './project.css'
import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'

const ProjectPage = () => {
    return (
        <div className='project-page'>
            <div className='project-page-container'>
                <div className='project-txt d-md-flex pt-4'>
                    <div>
                        <p className='mt-3 fw-bolder fs-3'>Our Projects</p>
                        <h2 className='mt-3 fw-bolder fs-1'>Wide range of our newest and best quality projects</h2>
                        <p className='mt-3  fs-4'>We don’t build exterior designs, but you also give the best offer to build the interior of your home</p>
                    </div>
                    <div className='project-btn-con'>
                        <button className='bg-dark rounded-circle p-2'>Explore for more <br /> <AiOutlineArrowDown /></button>
                    </div>


                </div>

                <div className="content">
                        <Tabs />
                </div>

            </div>
        </div>
    )
}

export default ProjectPage


let data = [
    {
        name: '2019',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil, nisi, voluptate ad quis ea omnis quidem minima fugit adipisci, porro ut velit officiis natus eligendi autem inventore dolor fuga unde nesciunt expedita, beatae officia nostrum labore. Reiciendis, commodi adipisci eius est recusandae ipsa incidunt repellat explicabo nobis corporis debitis non ullam, eos itaque, quia, iste repudiandae. Iusto numquam consectetur quo, et, quis deleniti ipsam eaque perferendis. Repellat ad, molestiae id deserunt praesentium distinctio similique nesciunt itaque. Repellat error enim blanditiis esse, odio commodi exercitationem nostrum perferendis veniam quod, recusandae provident aspernatur aliquam placeat odit cumque fugit ducimus, voluptatibus ad?'
    },
    {
        name: '2020',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores perspiciatis repellat soluta dolorum, quam quos possimus atque rerum porro voluptate beatae dolor incidunt! Corporis, tempore quasi fugit est. Ex, quae!Aliquam nulla explicabo facilis, consequuntur tenetur! Rem architecto veritatis quo corporis sapiente nesciunt culpa at enim similique officiis adipisci in commodi suscipit, natus facilis, repellat laboriosam eaque obcaecati quaerat vero!'
    },
    {
        name: '2021',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minus similique architecto sequi delectus non, nobis consequuntur officia, laboriosam reiciendis ea! Natus iste quas perspiciatis magnam repellat, voluptate excepturi esse.'
    }
    ,
    {
        name: '2022',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minus similique architecto sequi delectus non, nobis consequuntur officia, laboriosam reiciendis ea! Natus iste quas perspiciatis magnam repellat, voluptate excepturi esse.'
    }
];

class Tabs extends React.Component {
    constructor() {
        super();

        this.state = {
            activeTab: 0,
            data: data
        }

        this.changeTabOnClick = this.changeTabOnClick.bind(this);
    }

    changeTabOnClick(index) {
        this.setState({
            activeTab: index
        });
    }

    render() {
        return (
            <div className="tabs-body">
                <TabHeader data={this.state.data}
                              click={this.changeTabOnClick}
                              activeId={this.state.activeTab} />
                <TabContent data={this.state.data}
                               activeId={this.state.activeTab} />
            </div>
        )
    }
}

class TabHeader extends React.Component {
    doClick(index) {
        this.props.click(index);
    }

    render() {
        let activeClass = this.props.activeId;

        let tabs = this.props.data.map((item, index) => {
            return <li className={(activeClass === index ? 'active' : '')} key={index}>
                        <a onClick={this.doClick.bind(this, index)} ><span>{item.name}</span></a>
                    </li>
        });

        return (
            <ul className="tabs-header">{tabs}</ul>
        )
    }

}

class TabContent extends React.Component {
    render() {
        let activeClass = this.props.activeId;

        let content = this.props.data.map((item, index) => {
            return <div  className={'tabs-textItem ' + (activeClass === index ? 'show' : '')} key={index}><p>{item.text}</p></div>
        });
        console.log(content);
        return (
            <div className="tabs-content">
                <img src={content}/>
            </div>

        );
    }
}

