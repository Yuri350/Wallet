// Esse reducer será responsável por tratar as informações da pessoa usuária

const ADD_LOGIN = 'ADD_LOGIN';

const INITIAL_STATE = {
  email: '',
};

export function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_LOGIN:
    return { ...state, ...action.payload };
  default:
    return state;
  }
}

export default user;
