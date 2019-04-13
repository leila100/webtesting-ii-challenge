import React from "react"
import { render, cleanup } from "react-testing-library"
import "jest-dom/extend-expect"

import Display from "./Display"

describe("<Display />", () => {
  it("renders without crashing", () => {
    render(<Display />)
    cleanup()
  })

  it("displays balls text", () => {
    const { getByText } = render(<Display />)
    getByText(/balls/i)
    cleanup()
  })

  it("displays balls count information passed through props", () => {
    const count = 5
    const { getByTestId } = render(<Display ballsCount={count} />)
    const balls = getByTestId("balls")
    console.log("balls ", balls.textContent)
    expect(balls.textContent).toBe(count.toString())
    cleanup()
  })
})
