function Gallery() {
    return (
        <div className="" id="gallery">
            <h1 className="galleryHeading">Gallery</h1>
                <div className= "ui two column grid row galleryContainer">
                    <h3>Engagement</h3>
                    <h3>Wedding</h3>
                </div>
                <div className= "ui two column grid row galleryContainer">
                <img class="ui large image" alt= "" src="/engagmentMtn.jpg"></img>
                <img class="ui large image" alt= "" src="/engagmentMtn.jpg"></img>
                </div>
        </div>
    )
}

export default Gallery 