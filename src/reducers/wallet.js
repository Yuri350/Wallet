// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

export const ADD_WALLET = 'ADD_WALLET';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_WALLET:
    return { ...state, ...action.payload };
  default:
    return state;
  }
}

export default wallet;
