import React from "react"
import { render } from "react-testing-library"

import Display from "./Display"

describe("<Display />", () => {
  it("renders without crashing", () => {
    render(<Display />)
  })

  it("displays balls count information", () => {
    const { getByText } = render(<Display />)
    getByText(/balls/i)
  })
})
