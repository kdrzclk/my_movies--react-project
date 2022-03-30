import React from "react";
import SearchBar from "./SearchBar.js";
import MovieList from "./MovieList.js";
import axios from "axios";

class App extends React.Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  // fetch ile
  // async componentDidMount() {
  //   const baseURL = "http://localhost:3002/movies";
  //   const response = await fetch(baseURL);
  //   console.log(response);
  //   const data = await response.json();
  //   console.log(data);
  //   this.setState({ movies: data });
  // }

  async componentDidMount() {
    const response = await axios.get("http://localhost:3002/movies");
    console.log(response);
    this.setState({ movies: response.data });
  }

  // deleteMovie = (movie) => {
  //   const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

  //   // this.setState({
  //   //   movies: newMovieList,
  //   // });  // array boş olsaydı herhangi bir bilgi olmasaydı daha mantıklıydı.

  //   this.setState((state) => ({
  //     movies: newMovieList,
  //   })); // listeyi güncellemek için bunu kullanmak daha mantıklı.
  // };

  // Fetch API
  // deleteMovie = async (movie) => {
  //   const baseURL = `http://localhost:3002/movies/${movie.id}`;
  //   await fetch(baseURL, {
  //     method: "DELETE",
  //   });
  //   const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

  //   this.setState((state) => ({
  //     movies: newMovieList,
  //   }));
  // };

  //Axios API
  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3002/movies/${movie.id}`);
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  searchMovie = (e) => {
    // console.log(e.target.value);
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.name
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });
    return (
      <div>
        <div className="container" style={{ width: "75%" }}>
          <div className="row">
            <div className="col-lg-12">
              <SearchBar searchMovieProp={this.searchMovie} />
            </div>
          </div>
          <MovieList
            movies={filteredMovies}
            deleteMovieProp={this.deleteMovie}
          />
        </div>
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div>
//       <h1>My Movies</h1>
//     </div>
//   );
// };

export default App;
