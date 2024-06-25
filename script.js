const apiKey = "057770cf3f16d8f2013e24f77e4dbcc3";
const apiUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`;
const moviesContainer = document.getElementById("movies");

async function fetchMovies() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        data.results.forEach(media => {
            const movieCard = createMovieCard(media);
            moviesContainer.appendChild(movieCard);
        });
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}

function createMovieCard(media) {
    const { title, name, backdrop_path, release_date } = media;

    const movieCard = document.createElement("div");
    movieCard.classList.add("movie_item");

    movieCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="movie_img_rounded">
        <div class="title">${title || name}</div>
        <div class="release_date">${release_date}</div>
    `;
    return movieCard;
}

fetchMovies();
