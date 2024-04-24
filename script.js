let movies = [
    {
        name:"THE OFFERING",
        poster:"https://th.bing.com/th/id/OIP.crgRwUJ7ErGD78sc464i4AHaLP?w=186&h=284&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        rating:8.7
    },
    {
        name:"seven",
        poster:"https://th.bing.com/th/id/OIP.rnkIKnWpq5o_Riaps-jyRwHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        rating:7.4
    },
    {
        name:"Titanic",
        poster:"https://th.bing.com/th/id/OIP.3YspgclFK57Onq-mYLQt9AHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        rating:9.4
    },
    {
        name:"Captain Marvel",
        poster:"https://th.bing.com/th/id/OIP.LqrlXfGAbgi5-Nd1NKcLtgHaK-?w=186&h=276&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        rating:9.9
    },
    {
        name:"NIGHTMARE",
        poster:"https://th.bing.com/th/id/OIP.eMtL7RYeTLFcYn5-VAXaowAAAA?w=186&h=270&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        rating:5.4
    },
    {
        name:"WAR",
        poster:"https://th.bing.com/th/id/OIP.bprolYm10OMNCa0D2wDAsAHaKY?w=186&h=260&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        rating:7.4
    },
    {
        name:"DARK",
        poster:"https://th.bing.com/th/id/OIP.kobiz4GIdyNCRBsciOsQLwHaKe?w=186&h=263&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        rating:6.4
    },
    {
        name:"THE GREY",
        poster:"https://th.bing.com/th/id/OIP.f7F7juG6nh2rLIzeHJp20gHaLb?w=186&h=287&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        rating:8.5
    },
    {
        name:"IDENTITY",
        poster:"https://th.bing.com/th/id/OIP.GZU3Yp_EAB0Y0lsbJlBOwgAAAA?w=186&h=276&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        rating:4.5
    },
    {
        name:"RAEES",
        poster:"https://th.bing.com/th/id/OIP.-b1Lvh8aKVJplqb-PmjGfQAAAA?w=186&h=248&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        rating:8.9
    },
    {
        name:"THE GODFATHER",
        poster:"https://th.bing.com/th/id/OIP.QvOvmopUxb8khtc3d0HL7QHaLK?w=186&h=281&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        rating:8.1
    },
    {
        name:"JAWS",
        poster:"https://th.bing.com/th/id/OIP.iYJv4eVrVH4qkSaGI5C2hgAAAA?w=186&h=278&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        rating:3.6
    },
    {
        name:"AVTAR",
        poster:"https://th.bing.com/th/id/OIP.pV3VBmxyDDAVaerE8IIMnwHaK9?w=186&h=276&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        rating:9.9
    },
    {
        name:"The Walk",
        poster:"https://th.bing.com/th/id/OIP.6s300J3x8dJP4Og8GAVsIQHaKe?w=186&h=263&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        rating:4.9
    },

];

function searchMovie()
{
    let movieName = document.getElementById('search').value;
    
    if(movieName !== "")
    {

        let result =movies.filter(function(movie)
                    {
                        return movie.name.toUpperCase().includes(movieName.toUpperCase());
                    });
       displayMovies(result);
    }
    else 
    {
        displayMovies(movies);
    }
}


// function displayMovies(data)
// {
    
//     document.getElementById("movies").innerHTML="";

//     let htmlString = ``;


//     for(let i=0;i<data.length;i++)
//     {


//         htmlString=htmlString+`
//             <div class="movie">
//                 <div class="overlay">

//                     <div class="video">

//                     </div>

//                     <div class="details">

//                         <h1>${data[i].name}</h1>
//                         <h2>IMDB : ${data[i].rating}</h2>
//                         <p>Rami Malek . Jhon Jacobs . Emma Stone</p>

//                     </div>

//                 </div>
//                 <img class="poster" src="${data[i].poster}" alt="poster">
//             </div>
//         `
//     }

//     console.log(htmlString);

//     document.getElementById("movies").innerHTML=htmlString;

// }


// displayMovies(movies);

function displayMovies(data)
{
    let moviesContainer = document.getElementById('movies'); // Assuming there is a container with id 'movies'
    moviesContainer.innerHTML = ''; 
    
    data.forEach(movie => {
        let movieDIV = document.createElement('div');
        movieDIV.classList.add("movie");

        let overlay = document.createElement("div");
        overlay.classList.add("overlay");

        let video = document.createElement("div");
        video.classList.add("video");

        overlay.appendChild(video);

        let details = document.createElement("div");
        details.className = "details";

        let movieName  = document.createElement('h2');
        movieName.textContent = movie.name; 


        let movieRating = document.createElement('p');
        movieRating.textContent = 'Rating of IMDB: ' + movie.rating;

        details.appendChild(movieName);
        details.appendChild(movieRating);

        let moviePoster = document.createElement('img');
        moviePoster.className = "poster";
        moviePoster.src = movie.poster;
        moviePoster.alt = movie.name;


        // overlay.appendChild(video);
        overlay.appendChild(details);
        movieDIV.appendChild(overlay);
        movieDIV.appendChild(moviePoster)

        moviesContainer.appendChild(movieDIV);
    });
    // console.log(movieDIV)

}
document.getElementById('search').addEventListener('keyup',searchMovie);

displayMovies(movies);


// function searchMovie() {
//     let movieName = document.getElementById('search').value;
    
//     if (movieName !== "") {
//         let result = movies.filter(function(movie) {
//             return movie.name.toUpperCase().includes(movieName.toUpperCase());
//         });
//         displayMovies(result);
//     } else {
//         displayMovies(movies);
//     }
// }

// function displayMovies(data) {
//     let moviesContainer = document.getElementById('movies');
//     moviesContainer.innerHTML = '';

//     data.forEach(movie => {
//         let movieDiv = document.createElement('div');
//         movieDiv.className = 'movie';

//         let overlay = document.createElement('div');
//         overlay.className = 'overlay';

//         let details = document.createElement('div');
//         details.className = 'details';

//         let movieTitle = document.createElement('h1');
//         movieTitle.textContent = movie.name;

//         let movieRating = document.createElement('h2');
//         movieRating.textContent = 'IMDB: ' + movie.rating;

//         details.appendChild(movieTitle);
//         details.appendChild(movieRating);

//         let moviePoster = document.createElement('img');
//         moviePoster.className = 'poster';
//         moviePoster.src = movie.poster;
//         moviePoster.alt = movie.name;

//         overlay.appendChild(details);
//         movieDiv.appendChild(overlay);
//         movieDiv.appendChild(moviePoster);

//         moviesContainer.appendChild(movieDiv);
//     });
// }

// // Event listener for the search box
// document.getElementById('search').addEventListener('keyup', searchMovie);

// // Initial display of all movies
// displayMovies(movies);
