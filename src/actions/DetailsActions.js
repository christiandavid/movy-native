import { DetailsController } from '@/controllers';

export const TYPES = {
  DETAILS: 'DETAILS',
  DETAILS_REQUEST: 'DETAILS_REQUEST',
  DETAILS_ERROR: 'DETAILS_ERROR',
  DETAILS_SUCCESS: 'DETAILS_SUCCESS',
  CLEAR_STORE: 'CLEAR_STORE',
};

const detailsRequest = () => ({
  type: TYPES.DETAILS_REQUEST,
  payload: null,
});

const detailsError = error => ({
  type: TYPES.DETAILS_ERROR,
  payload: { error },
});

const detailsSuccess = details => ({
  type: TYPES.DETAILS_SUCCESS,
  payload: { details },
});

export const fetchDetails = movieId => async dispatch => {
  dispatch(detailsRequest());
  try {
    const details = await DetailsController.getMovieDetails(movieId);
    return dispatch(detailsSuccess(details));
  } catch (error) {
    return dispatch(detailsError(error.message));
  }
};
