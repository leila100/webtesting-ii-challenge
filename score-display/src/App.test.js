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
    const { getByText, getByTestId } = render(<App />)
    // get current number of balls
    const ballsCount = Number(getByTestId("balls").textContent)
    // find the button
    const ballButton = getByText(/ball/i)
    // click the button
    fireEvent.click(ballButton)
    // Get the new number of balls
    const newBallsCount = Number(getByTestId("balls").textContent)
    expect(newBallsCount).toBe(ballsCount + 1)
    cleanup()
  })
})
