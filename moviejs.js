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
            
        <label for="edit-movie-rating">Rating:</label>
        <input type="number" id="edit-movie-rating" name="rating" min="1" max="10">
        <button type="submit" id="edit-btn" data-editId=${movie.id}>Edit/Save</button>
<div class="card-body">
</div>

<p>${movie.title}</p>
<p>${movie.rating}</p>
<button id="deletebutton" data-deleteId=${movie.id}>delete</button>
            </div>
        </div>
       </div>
    </div>
</div>
`

        })
// from that list, I will append/concat this html form snippet to my pre-existing html(the moviesHTML variable turns into a string by using the join method)
        moviesHTML = `<div id="movies-list"></div>


  
 
<section> 
<div class="content"> 
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

</section>
 
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
//1. Make event listener
//2. grab the dataAttribute so that I can pass that id into my function
//ex: Number(deleteBtn.getAttribute("data-deleteId"));
 deleteMovie(deleteBtn.getAttribute("data-deleteId"))
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




setTimeout(function (){
    const editMovieButton = $('#edit-btn');
// const addMovieButton = document.querySelector('#add-btn');
    console.log(editMovieButton)
    editMovieButton.click(function(event) {

        event.preventDefault();


        const title = document.querySelector('#edit-movie-title').value;
        const rating = document.querySelector('#edit-movie-rating').value;
        console.log(title)


        const editMovie = {
            title: title,
            rating: rating
        };
        //post request(fetch)
        fetch(`http://localhost:3000/movies/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editMovie)
        })
            .then(response => response.json())
            .then(movieData => {
                console.log(movieData);
                location.reload();

            })
            .catch(error => console.log(error));
    });
}, 1500)


//1. put edit form each movie card
//2. on your edit and delete button, put a !data attribute! that will contain the id of the movie you want to delete or edit
//3. make event listener for delete and edit movie
//4. get data attribute using grabAttribute method to grab the id of the movie so that you can edit and delete a movie




















