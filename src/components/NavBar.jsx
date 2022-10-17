function NavBar(props) {
    return (
            <div className="ui container">
                <div className="sidenav ui secondary pointing menu" style={{ width: '25%', paddingTop: '20px' }}>
                    <a className="item ui left floated" href="#section">Home</a>
                    <a className="item ui left floated" href="#section">Our Story</a>
                    <a className="item ui left floated" href="#section">When & Where</a>
                    <a className="item ui left floated" href="#section">Registry</a>
                    <a className="item ui left floated" href="#section">Bridal Party</a>  
                    <a className="item ui left floated" href="#section">Gallery</a>
                    <a className="item ui left floated" href="#section">RSVP</a>  
                </div>
            </div>
    )
}

export default NavBar