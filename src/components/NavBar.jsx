function NavBar(props) {
    return (
            <div className="sidenav ui secondary pointing menu" style={{ width: '25%', paddingTop: '20px' }}>
                <a className="active item" href="#section">Home</a>
                <a className="item" href="#section">Our Story</a>
                <a className="item" href="#section">When & Where</a>
                <a className="item" href="#section">Registry</a>
                <a className="item" href="#section">Bridal Party</a>  
                <a className="item" href="#section">Gallery</a>
                <a className="item" href="#section">RSVP</a>  
            </div>
    )
}

export default NavBar