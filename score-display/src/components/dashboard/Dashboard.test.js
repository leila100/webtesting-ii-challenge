import React from "react"
import { render } from "react-testing-library"

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
