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

  // async componentDidMount() {
  //   const response = await axios.get("http://localhost:3002/movies");
  //   console.log(response);
  //   this.setState({ movies: response.data });
  // }

  // API TMDB kendi veri tabanı
  // async componentDidMount() {
  //   const response = await axios.get(
  //     "https://api.themoviedb.org/3/movie/popular?language=en-U&page=1&api_key=a04a00625a04fa5e774d2a0b553b0210"
  //   );
  //   console.log(response.data.results);
  //   this.setState({ movies: response.data.results });
  // }

  // API TMDB kendi veri tabanından bize ayırdığı liste
  // async componentDidMount() {
  //   const response = await axios.get(
  //     "https://api.themoviedb.org/3/movie/popular?language=en-U&page=1&api_key=a04a00625a04fa5e774d2a0b553b0210"
  //   );
  //   console.log(response.data.results);
  //   this.setState({ movies: response.data.results });
  // }

  // API TMDB kendi veri tabanından bize ayırdığı kendi oluşturduğumuz liste
  async componentDidMount() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/list/8196753?api_key=a04a00625a04fa5e774d2a0b553b0210&language=en-US"
    );
    console.log(response.data.items);
    this.setState({ movies: response.data.items });
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
  // deleteMovie = async (movie) => {
  //   axios.delete(`http://localhost:3002/movies/${movie.id}`);
  //   const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

  //   this.setState((state) => ({
  //     movies: newMovieList,
  //   }));
  // };

  // Gerçek Id yetkilendirerek uzak api'den silme
  deleteMovie = async (movie) => {
    axios.post(
      `https://api.themoviedb.org/3/list/8196753/remove_item?media_id=${movie.id}&session_id=45b975819bd1ecdf23611a724c744fe6c06be5d1&api_key=a04a00625a04fa5e774d2a0b553b0210`
    );
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
        movie.title
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
