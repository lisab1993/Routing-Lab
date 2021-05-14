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
      list: [
        {
          name: '',
          complete: '',
        }
      ]
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ textBox: event.target.value })
    // console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ list: [{ name: this.state.textBox, complete: 'true' }, ...this.state.list] })
    document.getElementById('textInput').value = ''
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">

        {/* Form to add items */}
        <form onSubmit={this.handleSubmit}>
          <label>
            New Todo Item:
          <input type="text" id='textInput' value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        {/* Navigation */}
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
              {/* Use props to pass the state to the components */}
              <Todo list={this.state.list} />
            </Route>

            <Route path="/all">
              <All list={this.state.list} />
            </Route>

            <Route path="/done">
              <Done list={this.state.list} />
            </Route>
          </Switch>
        </Router>

        {/* Display items */}
        {/* <div>
          {this.state.list.map((element) => (
            <div key={element.name}>{element.name}</div>
          ))}
        </div> */}
      </div>
    );
  }

}

function Done(props) {
  return (
    <div>
      <h1>Completed Items</h1>
      {props.list.filter(item => item.complete === 'true').map((item, index) => {
        return (
          <>
            {item.name}
          </>
        )
      })}
    </div>
  )
}


function Todo(props) {
  return <div>
    <h1>Incomplete Items</h1>
  </div>
}

function All(props) {
  return (
    <div>
      <h1>All Items</h1>
      {props.list.map((item, index) => {
        return (
          <div key={index}>{item.name}</div>
       )
      })}
    </div>
  )
}


export default App;
