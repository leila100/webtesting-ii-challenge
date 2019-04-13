import React, { Component } from "react"

// import "./App.css"
import Display from "./components/display/Display.js"
import Dashboard from "./components/dashboard/Dashboard.js"

class App extends Component {
  state = {
    ballsCount: 0,
    strikesCount: 0
  }

  ballClickHandler = () => {
    console.log("in ballClickHandler")
    this.setState(prevState => {
      return {
        ballsCount: prevState.ballsCount + 1
      }
    })
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Welcome to webtesting-ii</h1>
        </header>
        <main>
          <Display
            ballsCount={this.state.ballsCount}
            strikesCount={this.state.strikesCount}
          />
          <Dashboard ballClick={this.ballClickHandler} />
        </main>
      </div>
    )
  }
}

export default App
