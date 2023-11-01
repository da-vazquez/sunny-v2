import React, { useState, useContext } from "react";

const initialState = {
  name: ""
  age: "",
  location: "",
}

const ExampleContext = React.createContext()

export const ExampleContextProvider = (props) => {
  const [details, setDetails] = useState(initialState)

  const resetState = () => {
    setDetails(initialState)
  }

  const locationHandler = (newLocation) => {
    setDetails(prev => ({
      ...prev,
      location: newLocation
    }))
  }

  const contextValue = {
    ...details,
    reset: resetState,
    changeLocation: locationHandler,
  }

  return (
    <ExampleContext.Provider value={contextValue}>
      {props.children}
    </ExampleContext.Provider>
  )
}


export default ExampleContext;