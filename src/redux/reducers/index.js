import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE, SET_SEARCH_RESULTS } from '../action/actions';

const initialState = {
  favorite: {
    list: [],
  },
  searchResults: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorite: {
          ...state.favorite,
          list: [...state.favorite.list, action.payload],
        },
      };
    case 'REMOVE_FROM_FAVORITE':
      return {
        ...state,
        favorite: {
          ...state.favorite,
          list: state.favorite.list.filter((fav) => fav !== action.payload),
        },
      };
    case 'SET_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
