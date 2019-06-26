# liri-node-app

This project was part of the UNCC bootcamp course. It was made solely
by myself. Below is information about the liri app.

So what is this app doing?

Liri was created as a quick way to search for some of your favorite
media. This app searches for concert dates, music, and movies. It uses
three different API's to return the information that is found: Bands in
Town, Spotify, and OMDB. Make sure to run "npm install" on the command
line to install the packages needed to run the app. It includes:

* axios (to retrieve API calls)
* dotenv
* moment.js
* node-spotify-api
* ombd

The different APIs that are called depend on the input that is written
on the command line when calling liri.js. For example, to call the API 
Bands in Town, the user would want to input the following on the command
line:

node liri.js concert-this <add band name>

"concert-this" will call the Bands in Town, and the band name is the 
band that the API will search for. The API will return:

* Venue
* Venue City
* Datetime (MM/DD/YYYY)


The spotify API is used to find information about a track. Since there 
are many songs with similar titles, it is set to return 3 results for
any song that is searched for. To call this API, input the following 
on the command line:

node liri.js "spotify-this-song" <add song name>

It will return the following information:

* Artist
* Track name
* Spotify Link
* Album


Finally, the OMDB API is used to get information about movies. Use this 
command to call it:

node liri.js "movie-this" <"add movie title">

**It's best to use quotation marks around the movie title.

The OMBD API information will return:

* Title of the movie
* Year the movie came out
* IMDB Rating of the movie
* Rotten Tomatoes Rating of the movie
* Country where the movie was produced
* Language of the movie
* Plot of the movie
* Actors in the movie.

There is another command known as "do-what-it-says". To call that
command, user would input:

node liri.js do-what-it-says

There is not anything else to input. This will look at text in a
file called "random.txt" and return the command, and media input,
that the text has. By default, it is set to "movie-this,Star Wars:
Episode IV."

Below are examples of each 

concert-this:

https://github.com/vilagen/liri-node-app/blob/master/liri_pics/concert-this.PNG


do-what-it-says:

https://github.com/vilagen/liri-node-app/blob/master/liri_pics/do-what-it-says.PNG


movie-this:

https://github.com/vilagen/liri-node-app/blob/master/liri_pics/movie-this.PNG


spotify-this-song: 

https://github.com/vilagen/liri-node-app/blob/master/liri_pics/spotify-this-song.PNG