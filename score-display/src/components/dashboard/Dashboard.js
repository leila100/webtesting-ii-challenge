import React from "react"

const Dashboard = props => {
  return (
    <>
      <h3>Dashboard</h3>
      <button>Strike</button>
      <button onClick={props.ballClick}>Ball</button>
      <button>Foul</button>
      <button>hit</button>
    </>
  )
}

export default Dashboard
