const ADD_LOGIN = 'ADD_LOGIN';

export function userEmail(email) { // user e passado no mapdispatchtoprops
  return {
    type: ADD_LOGIN,
    payload: email,
  };
}

export default userEmail;
