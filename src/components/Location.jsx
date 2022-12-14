
function Location() {
    // Set the date we're counting down to
    var countDownDate = new Date("May 5, 2023 18:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
        
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
        
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
    }, 1000);
    return(
        <div id= "locationInfo">
            <h1 id="demo"> ooh</h1>
            <h2>Location:</h2>
            <a className="" href="https://www.thegreystoneestate.com/">The GreyStone Estate</a>
            <h3>200 GREYSTONE ESTATE BALL GROUND, GA 30107</h3>
        </div>
    )
}

export default Location