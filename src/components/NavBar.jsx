import React from 'react'
import { Sidebar } from 'semantic-ui-react'
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
    const [visible, setVisible] = React.useState(false)
    return(
        <div className='nav-container'>
        <Sidebar className="ui left menu visible pushable"
        id='navbar' 
        animation='overlay'
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width='thin'> 
            <ul>
                <li className="item link">Home</li>
                <li className="item link">Our Story</li>
                <li className="item link">When & Where</li>
                <li className="item link">Registry</li>
                <li className="item link">Bridal Party</li>
                <li className="item link">Gallery</li>
                <li className="item link">RSVP</li>
            </ul>
        </Sidebar>
        </div>
     
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