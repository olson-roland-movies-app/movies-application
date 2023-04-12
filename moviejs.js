



fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(movieData => {
        console.log(movieData)
        // sets all the data we get back into html list
        let moviesHTML = movieData.map(movie =>{
            return `<div class="card"></div>
            <div class="card-title">
            <h3>Movie Name & Rating</h3>
</div>
<div class="card-body">
<p>${movie.title}</p>
<p>${movie.rating}</p>
</div>`
        })
// from that list, I will append/concat this html form snippet to my pre-existing html(the moviesHTML variable turns into a string by using the join method)
        moviesHTML = `<div id="movies-list"></div>
<div id="add-movie-form">
    <h2>Add a New Movie</h2>
    <form>
        <label for="title">Title:</label>
        <input type="text" id="title" name="title">
        <label for="rating">Rating:</label>
        <input type="number" id="rating" name="rating" min="1" max="10">
        <button type="submit">Add Movie</button>
    </form>
</div>
<div id="edit-movie-form">
    <h2>Edit Movie</h2>
    <form>
        <input type="hidden" id="edit-movie-id" name="id">
        <label for="edit-movie-title">Title:</label>
        <input type="text" id="edit-movie-title" name="title">
        <label for="edit-movie-rating">Rating:</label>
        <input type="number" id="edit-movie-rating" name="rating" min="1" max="10">
        <button type="submit">Save Changes</button>
    </form>
</div>` + moviesHTML.join("")
        console.log(moviesHTML)
        // set my html with the id of movie-content equal to moviesHTML
        document.getElementById("movie-content")
            .innerHTML= moviesHTML;


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

const addMovieButton = document.querySelector('#add-movie-form button[type="submit"]');
addMovieButton.addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values of the input fields
    const title = document.querySelector('#add-movie-form input[name="title"]').value;
    const rating = document.querySelector('#add-movie-form input[name="rating"]').value;

    // Create a JavaScript object containing the values of the input fields
    const newMovie = {
        title: title,
        rating: rating
    };

    fetch('http://localhost:3000/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMovie)
    })
        .then(response => response.json())
        .then(movieData => {
            console.log(movieData);
            // Reload the page or update the DOM to show the new movie entry
        })
        .catch(error => console.log(error));
});


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





