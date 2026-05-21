const BASE_API_URL = "http://localhost:3000";

async function fetchMovies() {
  try {
    const res = await fetch(`${BASE_API_URL}/movies`);
    const movies = await res.json();

    const table = document.getElementById("movies-table");
    movies.forEach((movie) => {
      const row = table.insertRow();
      row.innerHTML = `
                <td>${movie.id}</td>
                <td>${movie.title}</td>
                <td>${movie.genre}</td>
                <td>${movie.rating}</td>
                <td>${movie.year}</td>
                <td>${movie.watched === 1 ? "Yes" : "No"}</td>
            `;
    });
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

fetchMovies();
