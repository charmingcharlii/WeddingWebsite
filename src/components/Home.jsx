function Home(props) {
    const coverImageStyle={
        position: 'relative',
        backgroundImage: "url('/engagmentMtn.jpg')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style = {coverImageStyle}>
            <p className = "welcomeMessage">Some kind of welcome</p>
            <div className="ui animated button green rsvpButton" tabindex="0">
            <div className="visible content">RSVP</div>
            <div className="hidden content">
                <i className="right arrow icon"></i>
            </div>
            </div>
        </div>
    )
}

export default Home