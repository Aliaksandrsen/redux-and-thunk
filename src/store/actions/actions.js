export function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool,
  };
}

export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool,
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items,
  };
}

export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      })
      .then((items) => {
        dispatch(itemsFetchDataSuccess(items));
      })
      .catch(() => dispatch(itemsHasErrored(true)))
      .finally(() => dispatch(itemsIsLoading(false)));
  };
}

/* 
export const itemsFetchData2 = (url) => (dispatch) => {
  dispatch(itemsIsLoading(true));

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response.json();
    })
    .then((items) => {
      dispatch(itemsFetchDataSuccess(items));
    })
    .catch(() => dispatch(itemsHasErrored(true)))
    .finally(() => dispatch(itemsIsLoading(false)));
}; 
 */

/* 
export const itemsFetchData3 = (url) => async (dispatch) => {
  dispatch(itemsIsLoading(true));
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const items = await response.json();
    dispatch(itemsFetchDataSuccess(items));
  } catch (e) {
    dispatch(itemsHasErrored(true));
  } finally {
    dispatch(itemsIsLoading(false));
  }
};
 */
