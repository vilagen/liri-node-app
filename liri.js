require('dotenv').config();

var keys = require("./keys.js")
var axios = require("axios")

var spofity = new Spotify(keys.spotify);

// concert-this: "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

artist = process.argv[2]

axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")

// spofity-this-song

// movie-this

// do-what-it-says