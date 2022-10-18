function BridalParty() {
    return (
        <div className="bridalPartyContainer" id="bridalPartyContainer">
            <h1 className="bridalparty">Bridal Party</h1>
                {/* Christina and Matt */}
                <div className= "ui four column grid row bridalPartyRows">
                    <img class="ui medium circular image" alt= "" src="/engagmentMtn.jpg"></img>
                    <p>MOH - Christina Cone</p>
                    <p>BM - Matthew McCadden</p>
                    <img class="ui medium circular image" alt= "" src="/engagmentMtn.jpg"></img>
                </div>
                {/* Dominique and Cameron */}
                <div className= "ui four column grid row bridalPartyRows">
                    <p>Dominique Akesse</p>
                    <img class="ui medium circular image" alt= "" src="/engagmentMtn.jpg"></img>
                    <img class="ui medium circular image" alt= "" src="/engagmentMtn.jpg"></img>
                    <p>Cameron Hendrix</p>
                </div>
                {/* Madison and Logan */}
                <div className= "ui four column grid row bridalPartyRows">
                    <img class="ui medium circular image" alt= "" src="/engagmentMtn.jpg"></img>
                    <p>Madison Norrington</p>
                    <p>Logan Griffith</p>
                    <img class="ui medium circular image" alt= "" src="/engagmentMtn.jpg"></img>
                </div>
                {/* Natalee and Jon */}
                <div className= "ui four column grid row bridalPartyRows">
                    <p>Natalee Castro</p>
                    <img class="ui medium circular image" alt= "" src="/engagmentMtn.jpg"></img>
                    <img class="ui medium circular image" alt= "" src="/engagmentMtn.jpg"></img>
                    <p>Jon Upshaw</p>
                </div>
        </div>
    )
}

export default BridalParty