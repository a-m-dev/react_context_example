import React from "react";

import { NameContext } from './NameContextProvider.jsx'



class Three extends React.Component {
  render() {
    return (
      <div>
        <NameContext.Consumer>
          {(_c) => (
            <div>hi there from Three => {_c.name}</div>
          )} 
        </NameContext.Consumer>
      </div>
    )
  }
}

export default Three;
