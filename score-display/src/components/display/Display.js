import React from "react"

const Display = props => {
  const { ballsCount } = props
  return (
    <>
      <h3>Display</h3>
      <div>
        Balls: <span data-testid='balls'>{ballsCount}</span>
      </div>
    </>
  )
}

export default Display
