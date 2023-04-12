fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(movieData => {
        console.log(movieData)
        // sets all the data we get back into html list
        let moviesHTML = movieData.map(movie =>{
            return `
<div class="card">
            <div class="float-container">
                <div class="column">
            <div class="cards"></div>
            <div class="card-title">
            <h3>Movie Name & Rating</h3>

<div class="card-body">
</div>
<p>${movie.title}</p>
<p>${movie.rating}</p>
            </div>
        </div>
       </div>
    </div>
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
        <button type="submit" id="add-btn">Add Movie</button>
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
        <button type="submit" id="edit-btn">Save Changes</button>
    </form>
</div>` + moviesHTML.join("")
        // set my html with the id of movie-content equal to moviesHTML
        document.getElementById("movie-content")
            .innerHTML= moviesHTML;


    })
    .catch (error => console.log(error));


fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch (error => console.log(error));

function deleteMovie(id) {
    fetch(`http://localhost:3000/movies/${id}`, {
        method: 'DELETE',
    }).then(response => response.json())
        .then(data => console.log(data))
        .catch (error => console.log(error));
}

// deleteMovie(11)
setTimeout(function (){
    const addMovieButton = $('#add-btn');
// const addMovieButton = document.querySelector('#add-btn');
    console.log(addMovieButton)
    addMovieButton.click(function(event) {

        event.preventDefault();


        const title = document.querySelector('#title').value;
        const rating = document.querySelector('#rating').value;
        console.log(title)


        const newMovie = {
            title: title,
            rating: rating
        };
        //post request(fetch)
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
                location.reload();

            })
            .catch(error => console.log(error));
    });
}, 1500)






















