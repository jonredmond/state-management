import { SET_LIST } from './types';

const addItemInServer = item =>
  fetch('/list', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({ value: item })
  });

const getListFromServer = () => fetch('/list');

const setList = list => ({
  type: SET_LIST,
  list
});

export const addItem = item => async dispatch => {
  let response = await addItemInServer(item);
  response = await response.json();

  return dispatch(setList(response));
};

export const getList = () => async dispatch => {
  let response = await getListFromServer();
  response = await response.json();

  return dispatch(setList(response));
};
