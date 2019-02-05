import React from "react";


import Three from './Three.jsx'

class Two extends React.Component {
  render() {
    return (
      <>
        <div>hi there from Two</div>
        <Three /> 
      </>
    )
  }
}

export default Two;
