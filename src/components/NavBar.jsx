function NavBar(props) {
    return (
        <div className="ui secondary  menu">
            <div className="sidenav" style={{ width: '25%', paddingTop: '20px' }}>
                <a className="active item" href="#section">Home</a>
                <a className="item" href="#section">Our Story</a>
                <a className="item" href="#section">When & Where</a>
                <a className="item" href="#section">Registry</a>
                <a className="item" href="#section">Bridal Party</a>  
                <a className="item" href="#section">Gallery</a>
                <a className="item" href="#section">RSVP</a>  
            </div>
        </div>
    )
}

export default NavBar