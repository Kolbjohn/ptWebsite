import React, { Component } from "react";
import VocabDataService from "../services/vocab.service";
export default class AddVocab extends Component {
  constructor(props) {
    super(props);
    this.onChangeWord = this.onChangeWord.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveVocab = this.saveVocab.bind(this);
    this.newVocab = this.newVocab.bind(this);
    this.state = {
      id: null,
      word: "",
      description: "", 
      submitted: false
    };
  }
  onChangeWord(e) {
    this.setState({
      word: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  saveVocab() {
    let data = {
      word: this.state.word,
      description: this.state.description,
    };

    VocabDataService.create(data)
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
  newVocab() {
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
              <button className="btn btn-success" onClick={() => this.newVocab()}>
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
                  required
                  value={this.state.word}
                  onChange={(e) => this.onChangeWord(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={this.state.description}
                  onChange={(e) => this.onChangeDescription(e)}
                />
              </div>
              <button onClick={() => this.saveVocab()} className="btn btn-success">
                Add
              </button>
            </div>
          )}
        </div>
      );
  }
}