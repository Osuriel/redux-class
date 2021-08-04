// ACTIONS
export const LOG_IN_ACTION = 'codeImmersives/logIn';

// ACTION CREATORS
export const loginActionCreator = (authorizedUser) => {
  return {
    type: LOG_IN_ACTION,
    payload: {
      id: authorizedUser.id,
      userName: authorizedUser.userName,
      name: authorizedUser.name,
      city: authorizedUser.city,
    },
  }
};

export const initialState = null;

// REDUCER
export const reducer = (state, action) => { 
  if(action.type === LOG_IN_ACTION) {
    return {
      id: action.payload.name,
      userName: action.payload.name,
      name: action.payload.name,
      city: action.payload.city,
    };
  }
  
  if(!state) return null;
  return state;
};


