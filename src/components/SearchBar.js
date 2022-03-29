import React from "react";

class SearchBar extends React.Component {
  state = {
    searchQuery: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-row mb-5">
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                placeholder="Search a movie"
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
                value={this.state.searchQuery}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
