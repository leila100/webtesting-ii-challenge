import React from "react"

const Dashboard = props => {
  const { strikeClick, ballClick, hitClick, foulClick } = props
  return (
    <>
      <h3>Dashboard</h3>
      <button data-testid='strikeBtn' onClick={strikeClick}>
        Strike
      </button>
      <button data-testid='ballBtn' onClick={ballClick}>
        Ball
      </button>
      <button data-testid='foulBtn' onClick={foulClick}>
        Foul
      </button>
      <button data-testid='hitBtn' onClick={hitClick}>
        hit
      </button>
    </>
  )
}

export default Dashboard
