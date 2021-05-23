const film1 = {
	"async": true,
	"crossDomain": true,
	"url": "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt1375666",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "72fb1076b3mshac0fdd38f76318cp1a0383jsn89d73758a814",
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
	}
};
$.ajax(film1).done(function (response) {
    document.getElementById('title').innerHTML=response.title;
    document.getElementById('info').innerHTML=response.plot;
    document.getElementById('box').src=response.poster;
    console.log(response.title);
});

const film2 = {
	"async": true,
	"crossDomain": true,
	"url": "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt1675434",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "72fb1076b3mshac0fdd38f76318cp1a0383jsn89d73758a814",
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
	}
};
$.ajax(film2).done(function (response) {
    document.getElementById('title2').innerHTML=response.title;
    document.getElementById('info2').innerHTML=response.plot;
    document.getElementById('box').src=response.poster;
    console.log(response);
});

const film3 = {
	"async": true,
	"crossDomain": true,
	"url": "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt0068646",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "72fb1076b3mshac0fdd38f76318cp1a0383jsn89d73758a814",
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
	}
};

$.ajax(film3).done(function (response) {
    document.getElementById('title3').innerHTML=response.title;
    document.getElementById('info3').innerHTML=response.plot;
    document.getElementById('box3').src=response.poster;
    console.log(response);
});
 

const film4 = {
	"async": true,
	"crossDomain": true,
	"url": "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt0478087",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "72fb1076b3mshac0fdd38f76318cp1a0383jsn89d73758a814",
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
	}
};
$.ajax(film4).done(function (response) {
    document.getElementById('title4').innerHTML=response.title;
    document.getElementById('info4').innerHTML=response.plot;
    document.getElementById('box4').src=response.poster;
    console.log(response);
});
const film5 = {
	"async": true,
	"crossDomain": true,
	"url": "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt0407887",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "72fb1076b3mshac0fdd38f76318cp1a0383jsn89d73758a814",
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
	}
};
$.ajax(film5).done(function (response) {
    document.getElementById('title5').innerHTML=response.title;
    document.getElementById('info5').innerHTML=response.plot;
    document.getElementById('box5').src=response.poster;
    console.log(response);
});
const film6 = {
	"async": true,
	"crossDomain": true,
	"url": "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt2713180",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "72fb1076b3mshac0fdd38f76318cp1a0383jsn89d73758a814",
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
	}
};
$.ajax(film6).done(function (response) {
    document.getElementById('title6').innerHTML=response.title;
    document.getElementById('info6').innerHTML=response.plot;
    document.getElementById('box6').src=response.poster;
    console.log(response);
});
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/departed",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "72fb1076b3mshac0fdd38f76318cp1a0383jsn89d73758a814",
            "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });