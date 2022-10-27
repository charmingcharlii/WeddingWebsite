import React from 'react'
// import { Sidebar } from 'semantic-ui-react'
// import {
//     Checkbox,
//     Grid,
//     Header,
//     Icon,
//     Image,
//     Menu,
//     Segment,
//     Sidebar,
//   } from 'semantic-ui-react'

function NavBar() {
    // const [visible, setVisible] = React.useState(false)
    return(
        <>
        <div>
            <div className="ui top attached menu">
                <a className="item">
                    <i className="sidebar icon"></i> Menu
                </a>
            </div>
            <div className="ui bottom attached segment">
                <div className="ui inverted labeled icon left inline vertical demo sidebar menu">
                    <a className="item">
                        <i className="home icon"></i> Home
                    </a>
                    <a className="item">
                        <i className="block layout icon"></i> Topics
                    </a>
                    <a className="item">
                        <i className="smile icon"></i> Friends
                    </a>
                    <a className="item">
                        <i className="calendar icon"></i> History
                    </a>
                </div>
            </div>
      </div>
      </>
    )
}
export default NavBar
                    // <a className="item ui left floated" href="#home">Home</a>
                    // <a className="item ui left floated" href="#ourstory">Our Story</a>
                    // <a className="item ui left floated" href="#locationInfo">When & Where</a>
                    // <a className="item ui left floated" href="#registry">Registry</a>
                    // <a className="item ui left floated" href="#bridalPartyContainer">Bridal Party</a>  
                    // <a className="item ui left floated" href="#gallery">Gallery</a>
                    // <a className="item ui left floated" href="#rsvp">RSVP</a>  