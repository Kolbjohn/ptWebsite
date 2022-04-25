import React, { Component } from "react";
import ExerciseDataService from "../services/exercise.service";
export default class AddExercise extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveExercise = this.saveExercise.bind(this);
    this.newExercise = this.newExercise.bind(this);
    this.state = {
      id: null,
      name: "",
      location: "",
      type: "",
      image: "",
      description: "", 
      submitted: false
    };
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  saveExercise() {
    var data = {
      name: this.state.name,
      image: this.state.image,
      location: this.state.location,
      type: this.state.type,
      description: this.state.description,

    };
    ExerciseDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          image: response.data.image,
          location: response.data.location,
          type: response.data.type,
          description: response.data.description,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  newExercise() {
    this.setState({
        id: null,
        name: "",
        location: "",
        type: "",
        image: "",
        description: "", 
        submitted: false
    });
  }
  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newExercise}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={this.state.name}
                  onChange={this.onChangeName}
                  name="title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  name="description"
                />
              </div>
              <button onClick={this.saveExercise} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
  }
}