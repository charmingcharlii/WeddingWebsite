function Home(props) {
    const myStyle={
        position: 'relative',
        backgroundImage: "url('/engagmentMtn.jpg')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style = {myStyle}>
            <p className = "welcomeMessage">Some kind of welcome</p>
        </div>
    )
}

export default Home