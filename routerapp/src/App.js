import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textBox: '',
      complete: [],
      incomplete: [],
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ textBox: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    
    alert('An item was submitted: ' + this.state.textBox)
  }


  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <button>
              <Link to="/done">Done</Link>
            </button>
            <button>
              <Link to="/todo">Todo</Link>
            </button>
            <button>
              <Link to="/all">All</Link>
            </button>
          </nav>

          <Switch>
            <Route path="/todo">
              <Todo />
            </Route>
            <Route path="/all">
              <All />
            </Route>
            <Route path="/done">
              <Done />
            </Route>
          </Switch>
        </Router>

        <form onSubmit={this.handleSubmit}>
          <label>
            New Todo Item:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}

function Done() {
  return <h2>Done</h2>;
}

function Todo() {
  return <h2>Todo</h2>;
}

function All() {
  return <h2>All</h2>;
}
export default App;
