import React from "react"
import { render, fireEvent, cleanup } from "react-testing-library"

import App from "./App"
import Display from "./components/display/Display.js"
import Dashboard from "./components/dashboard/Dashboard.js"

describe("<App />", () => {
  it("renders without crashing", () => {
    render(<App />)
    cleanup()
  })

  it("when ball button is clicked, ball count increases by 1", () => {
    const { getByTestId } = render(<App />)
    // get current number of balls
    const ballsCount = Number(getByTestId("balls").textContent)
    // find the button
    // const ballButton = getByText(/ball/i)
    const ballButton = getByTestId("ballBtn")
    // click the button
    fireEvent.click(ballButton)
    // Get the new number of balls
    const newBallsCount = Number(getByTestId("balls").textContent)
    expect(newBallsCount).toBe(ballsCount + 1)
    cleanup()
  })

  it("when strike button is clicked, strike count increases by 1", () => {
    const { getByTestId } = render(<App />)
    // get current number of balls
    const strikesCount = Number(getByTestId("strikes").textContent)
    // find the button
    const strikeButton = getByTestId("strikeBtn")
    // click the button
    fireEvent.click(strikeButton)
    // Get the new number of strikes
    const newStrikesCount = Number(getByTestId("strikes").textContent)
    expect(newStrikesCount).toBe(strikesCount + 1)
    cleanup()
  })

  it("balls reset to 0 when a player reaches 4 balls", () => {
    const { getByTestId } = render(<App />)
    // find the button
    const ballButton = getByTestId("ballBtn")
    // click the button 4 times to set the balls count to 4 (0)
    for (let i = 0; i < 4; i++) fireEvent.click(ballButton)
    // Get the new number of balls
    const ballsCount = getByTestId("balls").textContent
    expect(ballsCount).toBe("0")
    cleanup()
  })

  it("strikes reset to 0 when a player reaches 3 strikes", () => {
    const { getByTestId } = render(<App />)
    // find the button
    const strikeButton = getByTestId("strikeBtn")
    // click the button 3 times to set the strikes count to 3 (0)
    for (let i = 0; i < 3; i++) fireEvent.click(strikeButton)
    // Get the new number of strikes
    const strikesCount = getByTestId("strikes").textContent
    expect(strikesCount).toBe("0")
    cleanup()
  })

  it("balls and strikes reset to 0 when a `hit` is recorded", () => {
    const { getByTestId } = render(<App />)
    //find strike button
    const strikeButton = getByTestId("strikeBtn")
    //find ball button
    const ballButton = getByTestId("ballBtn")
    // find the hit button
    const hitButton = getByTestId("hitBtn")
    // click ball and strike button to increment balls and strikes
    fireEvent.click(ballButton)
    fireEvent.click(strikeButton)
    // click the hit button to reset balls ans strikes to 0
    fireEvent.click(hitButton)
    const ballsCount = getByTestId("balls").textContent
    const strikesCount = getByTestId("strikes").textContent
    expect(ballsCount).toBe("0")
    expect(strikesCount).toBe("0")
    cleanup()
  })
})
4
