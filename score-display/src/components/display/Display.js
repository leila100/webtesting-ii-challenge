import React from "react"

const Display = props => {
  const { ballsCount = 0, strikesCount = 0 } = props
  return (
    <>
      <h3>Display</h3>
      <div>
        B-count: <span data-testid='balls'>{ballsCount}</span>
      </div>
      <div>
        Strikes: <span data-testid='strikes'>{strikesCount}</span>
      </div>
    </>
  )
}

export default Display
