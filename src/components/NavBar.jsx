function NavBar(props) {
    return (
            <div className="ui container">
                <div className="sidenav ui secondary pointing menu" style={{ width: '25%', paddingTop: '20px' }}>
                    <a className="item ui left floated" href="#home">Home</a>
                    <a className="item ui left floated" href="#ourstory">Our Story</a>
                    <a className="item ui left floated" href="#locationInfo">When & Where</a>
                    <a className="item ui left floated" href="#registry">Registry</a>
                    <a className="item ui left floated" href="#bridalPartyContainer">Bridal Party</a>  
                    <a className="item ui left floated" href="#gallery">Gallery</a>
                    <a className="item ui left floated" href="#rsvp">RSVP</a>  
                </div>
            </div>
    )
}

export default NavBar