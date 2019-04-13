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
    this.setState(prevState => {
      if (prevState.ballsCount === 3) return { ballsCount: 0 }
      return { ballsCount: prevState.ballsCount + 1 }
    })
  }

  strikeClickHandler = () => {
    this.setState(prevState => {
      if (prevState.strikesCount === 2) return { strikesCount: 0 }
      return { strikesCount: prevState.strikesCount + 1 }
    })
  }

  hitClickHandler = () => {
    this.setState({ strikesCount: 0, ballsCount: 0 })
  }

  foulClickHandler = () => {
    this.setState(prevState => {
      if (prevState.strikesCount < 2)
        return { strikesCount: prevState.strikesCount + 1 }
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
          <Dashboard
            ballClick={this.ballClickHandler}
            strikeClick={this.strikeClickHandler}
            hitClick={this.hitClickHandler}
            foulClick={this.foulClickHandler}
          />
        </main>
      </div>
    )
  }
}

export default App
