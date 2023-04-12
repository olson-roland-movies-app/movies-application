fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(movieData => {
        console.log(movieData)
        let moviesHTML = movieData.map(movie =>{
            return `<div class="card"></div>
            <div class="card-title">
            <h3>Title</h3>
</div>
<div class="card-body">
<p>${movie.title}</p>
<p>${movie.rating}</p>
</div>`
        })
        document.getElementById("movie-content")
            .innerHTML=moviesHTML.join("");


    })
    .catch (error => console.log(error));








fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch (error => console.log(error));


function addMovie(title, rating){
    // title = prompt("Add A Movie")
    // rating = prompt("Give Your Movie A Rating")
    // return {title, rating};
}

// console.log(addMovie())



fetch("http://localhost:3000/movies",{
    method: 'POST',
    headers:{
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(addMovie())

}) .then(response => response.json())
    .then(data => console.log(data))
    .catch (error => console.log(error));

function deleteMovie(id) {
    fetch(`http://localhost:3000/movies/${id}`, {
        method: 'DELETE',
    }).then(response => response.json())
        .then(data => console.log(data))
        .catch (error => console.log(error));
}

deleteMovie(11)


// {
//     $(document).ready(function () {
//         // Display loading message
//         $('#loading-message').show();
//
//         // Get all movies
//         fetch({
//             url: 'https://localhost:3000/movies',
//             method: 'GET',
//             success: function (response) {
//                 // Remove loading message
//                 $('#loading-message').hide();
//
//                 // Generate HTML for movies list
//                 let moviesHtml = '';
//                 for (let i = 0; i < response.length; i++) {
//                     let movie = response[i];
//                     moviesHtml += '<div class="movie" data-id="' + movie.id + '">';
//                     moviesHtml += '<h3>' + movie.title + '</h3>';
//                     moviesHtml += '<p>Rating: ' + movie.rating + '</p>';
//                     moviesHtml += '<button class="edit-movie">Edit</button>';
//                     moviesHtml += '<button class="delete-movie">Delete</button>';
//                     moviesHtml += '</div>';
//                 }
//                 $('#movies-list').html(moviesHtml);
//             },
//             // error: function () {
//             //     alert('An error occurred while fetching movie list.');
//             // }
//         });
//
//
//         // Add movie form submission
//         $('#add-movie-form form').submit(function (event) {
//             event.preventDefault();
//             let title = $('#add-movie-form #title').val();
//             let rating = $('#add-movie-form #rating').val();
//                 fetch({
//                 url: 'https://localhost:3000/movies',
//                 method: 'POST',
//                 data: {title: title, rating: rating},
//                 success: function (response) {
//                     // Append new movie to list
//                     var movieHtml = '<div class="movie" data-id="' + response.id + '">';
//                     movieHtml += '<h3>' + response.title + '</h3>';
//                     movieHtml += '<p>Rating: ' + response.rating + '</p>';
//                     movieHtml += '<button class="edit-movie">Edit</button>';
//                     movieHtml += '<button class="delete-movie">Delete</button>';
//                     movieHtml += '</div>';
//                     $('#movies-list').append(movieHtml);
//                 }
//             })
//         })
//     })
// }
//
//
//
//
//
//





