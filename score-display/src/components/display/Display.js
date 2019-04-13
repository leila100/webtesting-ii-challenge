import React from "react"

const Display = props => {
  const { ballsCount = 0, strikesCount = 0 } = props
  return (
    <>
      <h3>Display</h3>
      <div>
        Balls count: <span data-testid='balls'>{ballsCount}</span>
      </div>
      <div>
        Strikes count: <span data-testid='strikes'>{strikesCount}</span>
      </div>
    </>
  )
}

export default Display
