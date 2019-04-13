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
    const count = 2
    const { getByTestId } = render(<Display ballsCount={count} />)
    const balls = getByTestId("balls")
    expect(balls.textContent).toBe(count.toString())
    cleanup()
  })

  it("displays strikes text", () => {
    const { getByText } = render(<Display />)
    getByText(/strikes/i)
    cleanup()
  })

  it("displays strikes count information passed through props", () => {
    const count = 3
    const { getByTestId } = render(<Display strikesCount={count} />)
    const strikes = getByTestId("strikes")
    expect(strikes.textContent).toBe(count.toString())
    cleanup()
  })
})
