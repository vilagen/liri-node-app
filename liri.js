require("dotenv").config();


var keys = require("./keys.js")
var axios = require("axios")

// use a switch set to process arg 2 for what if statements for each command. 
// then make arg 3 follow what the user inputs.



// concert-this: "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

artist = process.argv[2]
queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

axios.get(queryURL).then(
    function(response) {
        events = response.data
        for(var i = 0; i < events.length; i++) {
            console.log(" ---------- " +
                        "\n" + events[i].venue.name +
                        "\n" + events[i].venue.city +
                        "\n" + events[i].datetime)
        }
}).catch(function(error) {
    if (error.response) {
     console.log(error)
    }
    else if (error.request) {
    // request was made but no response
    console.log(error.request)
    }
    else {
    // for anything else that may have caused an error.
    console.log("Error", error.message)
    }
})

// spofity-this-song

var Spotify = require('node-spotify-api')

var spotify = new Spotify(keys.spotify);

spotify.search({type: "track", query: "Best Friends"}).then(function(response){
    console.log(response);
})
.catch(function(err){
    console.log(err)
})




// key = 8a89666fd78449fb9f60c22d6eed8650


// movie-this

// do-what-it-says