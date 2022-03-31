import React from "react";

class AddMovie extends React.Component {
  render() {
    return (
      <div className="container">
        <form className="mt-5">
          <input
            type="text"
            className="form-control"
            id="disabledInput"
            placeholder="Fill The Form to Add A Movie..."
            disabled
          />
          <div className="form-row d-flex">
            <div className="form-group col-md-10 ">
              <label htmlFor="inputName">Name</label>
              <input type="text" className="form-control mr-2" name="name" />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputRating">Raitng</label>
              <input type="text" className="form-control" name="rating" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputImage">Image URL</label>
              <input type="text" className="form-control" name="imgURL" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="overviewTextArea">Overview</label>
              <textarea
                name="overview"
                className="form-control"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <input
              type="submit"
              className="btn btn-danger btn-lg btn-block my-2"
              value="Add Movie"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddMovie;
