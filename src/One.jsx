import React from "react";

import Two from './Two.jsx'


class One extends React.Component {
  render() {
    return (
      <>
        <div>hi there from One</div>
        <Two />
      </>
    )
  }
}

export default One;
