import React from 'react';
import './App.css';
import Select from 'react-select'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Switch, Route } from "react-router-dom";
import AddExercise from './components/add-exercise.component';
import Exercise from './components/exercise.component';
import ExercisesList from './components/exercise-list.component';

function App() {
  const options = [
    { value: 'Head', label: 'Head' },
    { value: 'Shoulders', label: 'Shoulders' },
    { value: 'Knees', label: 'Knees' },
    { value: 'Toes', label: 'Toes' }
  ];

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
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
        </nav>
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/tutorials"]} component={ExercisesList} />
          <Route exact path="/add" component={AddExercise} />
          <Route path="/tutorials/:id" component={Exercise} />
        </Switch>
      </div>
      <div>
        <Select options={options} />
      </div>
    </div>
  );
}

export default App;