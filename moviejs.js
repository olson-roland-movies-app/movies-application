"use strict";
const loadingElement = document.querySelector('.loading');
loadingElement.style.display = 'flex';
const popUpScreen = document.getElementById("popUpScreen");
const titleInput = document.getElementById("titleInput");
const genreInput = document.getElementById("genreInput");
const directorInput = document.getElementById("directorInput");
const yearInput = document.getElementById("yearInput");
const ratingInput = document.getElementById("ratingInput");
const okBtn = document.getElementById("okBtn");
const cancelBtn = document.getElementById("cancelBtn");
let addMovieBtn = document.getElementById('addMovieBtn');
const editPopUpScreen = document.getElementById("editPopUpScreen");
const titleInput1 = document.getElementById("titleInput1");
const genreInput1 = document.getElementById("genreInput1");
const directorInput1 = document.getElementById("directorInput1");
const yearInput1 = document.getElementById("yearInput1");
const ratingInput1 = document.getElementById("ratingInput1");
const okBtn1 = document.getElementById("okBtn1");
const cancelBtn1 = document.getElementById("cancelBtn1");
`<script src="keys.js"></script>`
// Show the pop-up screen
function showPopUp() {
    popUpScreen.style.display = "flex";
}
function showPopUp1() {
    editPopUpScreen.style.display = "flex";
}
// Hide the pop-up screen
function hidePopUp() {
    popUpScreen.style.display = "none";
}
function hidePopup1() {
    editPopUpScreen.style.display = "none";
}
// Add click event listener to OK button
okBtn.addEventListener("click", function () {
    const title = titleInput.value;
    const genre = genreInput.value;
    const director = directorInput.value;
    const year = yearInput.value;
    const rating = ratingInput.value;
    if (title && genre && director && year && rating) {
        // Create a JSON object with the movie details
        const movie = {
            title: title,
            genre: genre,
            director: director,
            year: year,
            rating: rating
        };
        // Perform action with the movie details, e.g., send them to the server using fetch
        fetch("http://localhost:3000/movies", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        })
            .then(response => {
                if (response.ok) {
                    // successfully added response
                    console.log('Movie added successfully');
                    hidePopUp();
                    location.reload();
                } else {
                    // failed to add response
                    console.error('Failed to add movie');
                }
            })
            .catch(error => {
                // display an error message
                console.error('Failed to add movie:', error);
            });
    } else {
        // message to fill in all fields
        alert("Please fill in all the fields.");
    }
});
// Add click event listener to Cancel button
cancelBtn.addEventListener("click", function () {
    hidePopUp();
    // Hide the pop-up screen
});
// Add click event listener to Add Movie button
addMovieBtn.addEventListener("click", function () {
    showPopUp(); // Show the pop-up screen when Add Movie button is clicked
});
fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(data => {
        loadingElement.style.display = 'none';
        const jsonDataElement = document.getElementById('json-data');
        data.forEach(movie => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            const imgElement = document.createElement('img');
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': key,
                    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
                }
            };
            fetch(`https://online-movie-database.p.rapidapi.com/title/find?q=${movie.title}`, options)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    imgElement.src = data.results[0].image.url;
                })
            imgElement.classList.add('img');
            const titleElement = document.createElement('h2');
            titleElement.textContent = movie.title;
            const directorElement = document.createElement('p');
            directorElement.textContent = 'Director: ' + movie.director;
            const yearElement = document.createElement('p');
            yearElement.textContent = 'Year: ' + movie.year;
            const ratingElement = document.createElement('p');
            ratingElement.textContent = 'Rating: ' + movie.rating;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            deleteButton.classList.add('delete');
            editButton.classList.add('edit');
            cardElement.appendChild(imgElement);
            cardElement.appendChild(titleElement);
            cardElement.appendChild(directorElement);
            cardElement.appendChild(yearElement);
            cardElement.appendChild(ratingElement);
            jsonDataElement.appendChild(cardElement);
            cardElement.appendChild(deleteButton);
            cardElement.appendChild(editButton);
            deleteButton.addEventListener('click', () => {
                fetch(`http://localhost:3000/movies/${movie.id}`, {
                    method: 'DELETE',
                })
                    .then(response => {
                        if (response.ok) {
                            cardElement.remove();
                        } else {
                            console.error('error')
                        }
                    })
            });
            editButton.addEventListener("click", function () {
                // Get the current movie data
                const title = movie.title;
                const genre = movie.genre;
                const director = movie.director;
                const year = movie.year;
                const rating = movie.rating;
                // Show the pop-up screen with the current movie data
                showPopUp1();
                titleInput1.value = title;
                genreInput1.value = genre;
                directorInput1.value = director;
                yearInput1.value = year;
                ratingInput1.value = rating;
                // Add click event listener to OK button
                okBtn1.addEventListener("click", function updateMovie () {
                    const newTitle = titleInput1.value;
                    const newGenre = genreInput1.value;
                    const newDirector = directorInput1.value;
                    const newYear = yearInput1.value;
                    const newRating = ratingInput1.value;
                    if (newTitle && newGenre && newDirector && newYear && newRating) {
                        // Create a JSON object with the updated movie details
                        const updatedMovie = {
                            title: newTitle,
                            genre: newGenre,
                            director: newDirector,
                            year: newYear,
                            rating: newRating
                        };
                        // Perform action with the updated movie details, e.g., send them to the server using fetch
                        fetch(`http://localhost:3000/movies/${movie.id}`, {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(updatedMovie)
                        })
                            .then(response => {
                                if (response.ok) {
                                    // Successfully updated movie
                                    console.log('Movie updated successfully');
                                    // Update the UI with the new movie data
                                    titleElement.textContent = newTitle;
                                    directorElement.textContent = 'Director: ' + newDirector;
                                    yearElement.textContent = 'Year: ' + newYear;
                                    ratingElement.textContent = 'Rating: ' + newRating;
                                    hidePopup1();
                                    location.reload()
                                } else {
                                    // Failed to update movie
                                    console.error('Failed to update movie');
                                }
                            })
                            .catch(error => {
                                // Display an error message
                                console.error('Failed to update movie:', error);
                            });
                    } else {
                        // Message to fill in all fields
                        alert("Please fill in all the fields.");
                    }
                });
            });
// Add click event listener to Cancel button
            cancelBtn1.addEventListener("click", function () {
                hidePopup1();
                // Hide the pop-up screen
            });
        });
    });
let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let rocks = document.getElementById('rocks');
let forest = document.getElementById('forest');
let header = document.getElementById('header');
window.addEventListener('scroll', function () {
    let value = window.scrollY;
    text.style.top = 50 + value * -0.5 + '%';
    bird1.style.top = value * -1.5 + 'px';
    bird1.style.left = value * 2 + 'px';
    bird2.style.top = value * -1.5 + 'px';
    bird2.style.left = value * -5 + 'px';
    addMovieBtn.style.marginTop = value * 1.5 + 'px';
    rocks.style.top = value * -0.12 + 'px';
    forest.style.top = value * 0.25 + 'px';
    header.style.top = value * 0.5 + 'px';
})
function addImg(title) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };
    fetch(`https://online-movie-database.p.rapidapi.com/title/find?q=${title}`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let movieTitle = data.results[0].
            console.log(movieTitle)
            let movieImage = data.results[0].image.url
            console.log(movieImage)
            fetch('http://localhost:3000/movies', {
                // establish the method, GET is the default method.
                method: 'POST',
                headers: {
                    // the server needs to know what format we are sending data n.
                    'Content-Type': 'application/json'
                },
                // convert JS object to JSON object
                body: JSON.stringify({
                    title: movieTitle,
                    genre: $('#genre').val(),
                    rating: $('#rating').val(),
                    imgUrl: movieImage
                })
            }).then(response => myMovies())
        })
}

















