import React from "react"

const Dashboard = props => {
  const { strikeClick, ballClick } = props
  return (
    <>
      <h3>Dashboard</h3>
      <button data-testid='strikeBtn' onClick={strikeClick}>
        Strike
      </button>
      <button data-testid='ballBtn' onClick={ballClick}>
        Ball
      </button>
      <button>Foul</button>
      <button>hit</button>
    </>
  )
}

export default Dashboard
