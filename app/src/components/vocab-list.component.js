import React, { Component } from "react";
import VocabDataService from "../services/vocab.service";
import { Link } from "react-router-dom";
export default class VocabList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchWord = this.onChangeSearchWord.bind(this);
    this.retrieveVocabs = this.retrieveVocabs.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveVocab = this.setActiveVocab.bind(this);
    this.searchWord = this.searchWord.bind(this);
    this.state = {
      vocabs: [],
      currentVocab: null,
      currentIndex: -1,
      searchWord: ""
    };
  }

  // TODO: get rid of this when the results get to be to many
  componentDidMount() {
    this.retrieveVocabs();
  }
  onChangeSearchWord(e) {
    this.setState({
      searchWord: e.target.value
    });
  }
  retrieveVocabs() {
    VocabDataService.search({word: '', description: ''})
      .then(response => {
        this.setState({
          vocabs: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveVocabs();
    this.setState({
      currentVocab: null,
      currentIndex: -1
    });
  }
  setActiveVocab(vocab, index) {
    this.setState({
      currentVocab: vocab,
      currentIndex: index
    });
  }
  searchWord() {
    VocabDataService.search({word: this.state.searchWord, description: ''})
      .then(response => {
        this.setState({
          vocabs: response.data,
          currentVocab: null,
          currentIndex: -1
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={this.state.searchWord}
              onChange={(e) => this.onChangeSearchWord(e)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => this.searchWord()}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Vocab List</h4>
          <ul className="list-group">
            {this.state.vocabs.length > 0 &&
              this.state.vocabs.map((vocab, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === this.state.currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveVocab(vocab, index)}
                  key={index}
                >
                  {vocab.word}
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-6">
          {this.state.currentVocab ? (
            <div>
              <h4>Vocab</h4>
              <div>
                <label>
                  <strong>Word:</strong>
                </label>{" "}
                {this.state.currentVocab.word}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {this.state.currentVocab.description}
              </div>
              {/* <Link
                to={"/tutorials/" + currentTutorial.id}
                className="badge badge-warning"
              >
                Edit
              </Link> */}
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Vocab...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}