

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
        document.getElementsByTagName("body")
            [0].innerHTML=moviesHTML.join("");


    })
    .catch (error => console.error(error));








fetch("http://localhost:3000/movies")
   .then(response => response.json())
   .then(data => console.log(data))
   .catch (error => console.error(error));


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

}) .then(response => response.json(response))
   .then(data => console.log(data))
   .catch (error => console.error(error));

function deleteMovie(id) {
   fetch(`http://localhost:3000/movies/${id}`, {
       method: 'DELETE',
   }).then(response => response.json(response))
       .then(data => console.log(data))
       .catch (error => console.error(error));
}

deleteMovie(4)





