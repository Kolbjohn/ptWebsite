import React, { Component } from "react";
import ExerciseDataService from "../services/exercise.service";
export default class AddVocab extends Component {
  constructor(props) {
    super(props);
    this.onChangeWord = this.onChangeWord.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveExercise = this.saveExercise.bind(this);
    this.newExercise = this.newExercise.bind(this);
    this.state = {
      id: null,
      word: "",
      description: "", 
      submitted: false
    };
  }
  onChangeWord(e) {
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
    let data = {
      name: this.state.word,
      description: this.state.description,
    };

    ExerciseDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          word: response.data.word,
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
        word: "",
        description: "", 
        submitted: false
    });
  }
  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You Added Vocab Successfully!</h4>
              <button className="btn btn-success" onClick={this.newExercise}>
                Add Another
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="title">Word</label>
                <input
                  type="text"
                  className="form-control"
                  id="Word"
                  required
                  value={this.state.word}
                  onChange={this.onChangeWord}
                  name="word"
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
                Add
              </button>
            </div>
          )}
        </div>
      );
  }
}