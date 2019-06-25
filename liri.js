require("dotenv").config();

var moment = require("moment")
var keys = require("./keys.js")
var axios = require("axios")
var fs = require('fs')
var input = process.argv.slice(3).join(" ")

var command = process.argv[2]

switch(command) {

case "concert-this":
    concert();
    break;

case "spotify-this-song":
    spotify();
    break;

case "movie-this":
    omdb();
    break;

case "do-what-it-says":
    random();
    break;
}

// use a switch set to process arg 2 for what if statements for each command. 
// then make arg 3 follow what the user inputs.

function concert(){

queryURL = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp"

axios.get(queryURL).then(
    function(response) {
        events = response.data
        for(var i = 0; i < events.length; i++) {
            console.log(" ---------- " +
                        "\n Venue: " + events[i].venue.name +
                        "\n Venue City: " + events[i].venue.city +
                        "\n Datetime: " + moment(events[i].datetime).format("L"))
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
}

// spofity-this-song

function spotify() {
var Spotify = require('node-spotify-api')
// var song = process.argv.slice(3).join(" ")

var trackURL = "https://api.spotify.com/v1/search?q=" + input + "&type=track&limit=3"


var spotify = new Spotify(keys.spotify);


spotify.request(trackURL)
.then(function(data) {
        console.log(data.tracks.items[0].artists[0].name)
        trackInfo = data.tracks.items
        for(var i = 0; i < trackInfo.length; i++) {
            console.log(" ------------- " +
            "\n Artist: " + data.tracks.items[i].artists[0].name +
            "\n Track: " + data.tracks.items[i].name +
            "\n Spotify Link: " + data.tracks.items[i].external_urls.spotify +
            "\n Album: " + data.tracks.items[i].album.name)
        }
})
.catch(function(err){
    console.error('Error occured: ' + err)
})
}

// movie-this

function omdb() {
// movie = process.argv.slice(3).join(" ")

var movieSearch = "https://www.omdbapi.com/?t=" + input + "&apikey=5074847d"

axios.get(movieSearch).then(
    function(response){
            console.log(" ----------- " +
            "\n Title: " + response.data.Title +
            "\n Year of Release: " + response.data.Year +
            "\n IMDB Rating: " + response.data.imdbRating +
            "\n " + response.data.Ratings[1].Source + ": " + response.data.Ratings[1].Value +
            "\n Country: " + response.data.Country +
            "\n Langauge: " + response.data.Language +
            "\n Plot: " + response.data.Plot +
            "\n Actors: " + response.data.Actors)
})
    .catch(function(error) {
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
}

// do-what-it-says

function random(){

fs.readFile("random.txt", "utf8", function(err, data){
    if(err) {
        return console.log(err)
    }

    var dwis = data.split(",")
    input = dwis[1]

    switch(dwis[0]) {

    case "concert-this":
        concert();
        break

    case "spotify-this-song":
        spotify();
        break

    case "movie-this":
        omdb();
        break
    }
})
}