import React from "react"
import { render, cleanup } from "react-testing-library"
afterEach(cleanup)

import Dashboard from "./Dashboard"

describe("<Dashboard />", () => {
  it("renders without crashing", () => {
    render(<Dashboard />)
  })

  it("should display all the buttons", () => {
    const { getByText } = render(<Dashboard />)
    getByText(/strike/i)
    getByText(/ball/i)
    getByText(/foul/i)
    getByText(/hit/i)
  })
})
