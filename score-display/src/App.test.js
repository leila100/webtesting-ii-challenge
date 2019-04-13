import React from "react"
import { render, fireEvent, cleanup } from "react-testing-library"
afterEach(cleanup)

import App from "./App"

describe("<App />", () => {
  it("renders without crashing", () => {
    render(<App />)
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
  })

  it("when strike button is clicked, strike count increases by 1", () => {
    const { getByTestId } = render(<App />)
    // get current number of strikes
    const strikesCount = Number(getByTestId("strikes").textContent)
    // find the strike button
    const strikeButton = getByTestId("strikeBtn")
    // click the strike button
    fireEvent.click(strikeButton)
    // Get the new number of strikes
    const newStrikesCount = Number(getByTestId("strikes").textContent)
    expect(newStrikesCount).toBe(strikesCount + 1)
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
  })

  it("a `foul` increases strikes", () => {
    const { getByTestId } = render(<App />)
    // get current number of strikes
    const strikesCount = Number(getByTestId("strikes").textContent)
    // find the button
    const foulButton = getByTestId("foulBtn")
    // click the button
    fireEvent.click(foulButton)
    // Get the new number of strikes
    const newStrikesCount = Number(getByTestId("strikes").textContent)
    expect(newStrikesCount).toBe(strikesCount + 1)
  })

  it("With two strikes a foul has no effect, count stays at 2 strikes.", () => {
    const { getByTestId } = render(<App />)
    // find the foul button
    const foulButton = getByTestId("foulBtn")
    // click the foul button three times to make sure strikes doesn't go over 2
    for (let i = 0; i < 3; i++) fireEvent.click(foulButton)
    // Get the new number of strikes
    const strikesCount = Number(getByTestId("strikes").textContent)
    expect(strikesCount).toBe(2)
  })
})
4
