const ADD_TO_FAVORITE= 'ADD_TO_FAVORITE'
const REMOVE_FROM_FAVORITE= 'REMOVE_FROM_FAVORITE'
const SET_SEARCH_RESULTS= 'SET_SEARCH_RESULTS'
export const addToFavorite = (companyName) => ({
  type: ADD_TO_FAVORITE,
  payload: companyName,
});

export const removeFromFavorite = (companyName) => ({
  type: REMOVE_FROM_FAVORITE,
  payload: companyName,
});

export const setSearchResults = (results) => ({
  type: SET_SEARCH_RESULTS,
  payload: results,
});

  
  