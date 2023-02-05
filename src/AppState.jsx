import React, { useReducer,useContext } from "react";


///////////////////
// INITIAL STATE
//////////////

const initialState = {
  url: "",
};

/////////////////
// REDUCER
/////////////////
// action {type: "", payload: ---}
const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//////////////////
// AppContext
//////////////////

const AppContext = React.createContext(null);

/////////////////////
// AppState Component
////////////////////
export const AppState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

    return <AppContext.Provider value={{state, dispatch}}>
            {props.children}
    </AppContext.Provider>
};

////////////////////////
// useAppState hook
///////////////////////

export const useAppState = () => {
    return React.useContext(AppContext)
}

