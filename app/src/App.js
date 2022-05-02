import React, { Component } from 'react';
import './App.css';
import Select from 'react-select'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Routes, Route } from "react-router-dom";
import AddExercise from './components/add-exercise.component';
import Exercise from './components/exercise.component';
import ExercisesList from './components/exercise-list.component';
import AddVocab from './components/add-vocab.component';
import VocabList from './components/vocab-list.component';

class App extends Component {
  // const options = [
  //   { value: 'Head', label: 'Head' },
  //   { value: 'Shoulders', label: 'Shoulders' },
  //   { value: 'Knees', label: 'Knees' },
  //   { value: 'Toes', label: 'Toes' }
  // ];

  constructor(props) {
    super(props);
    this.state = { 
      isAddVocab: false
    };
  }
  componentDidMount() {
    this.setState({
      isAddVocab: false
    });
  }

  render() {
    console.log(this.state.isAddVocab);

    return (
      <div>
        {!this.state.isAddVocab ? (
          <div>
          <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => this.setState({isAddVocab: true})}
        >
          Add
        </button>
          <VocabList />
        </div>
        ) : (
          <div>
          <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => this.setState({isAddVocab: false})}
        >
          Search
        </button>
            <AddVocab />
        </div>
        )}
        {/* <div className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/exercises" className="navbar-brand">
              bezKoder
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Tutorials
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add
                </Link>
              </li>
            </div>
          </div>
        <div className="container mt-3">
          <Routes>
            <Route path={["/", "/exercises"]} element={ExercisesList} />
            <Route path="/add" element={AddExercise} />
            <Route path="/exercises/:id" element={Exercise} />
          </Routes>
        </div>
        {/* <div>
          <Select options={options} />
        </div> */}
      </div>
    );
  }
}

export default App;