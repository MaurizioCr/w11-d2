import { setSearchResults } from './actions';

export const fetchSearchResults = (query) => async (dispatch) => {
  try {
    const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`);
    if (response.ok) {
      const { data } = await response.json();
      dispatch(setSearchResults(data));
    } else {
      alert('Error fetching results');
    }
  } catch (error) {
    console.log(error);
  }
};
