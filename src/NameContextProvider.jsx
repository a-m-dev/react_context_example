import React from 'react'



export const NameContext = React.createContext()
class NameContextProvider extends React.Component {

  state = {
    name: 'Eric'
  }

  render() {
    return(
      <NameContext.Provider value={{
        name: this.state.name
      }}>
        {this.props.children}
      </NameContext.Provider>
    )
  }
}

export default NameContextProvider