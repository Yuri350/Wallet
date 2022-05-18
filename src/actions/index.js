import { ADD_FORMS } from '../reducers';

function user(email) { // user e passado no mapdispatchtoprops
  return {
    type: ADD_FORMS,
    payload: email,
  };
}

export default user;
