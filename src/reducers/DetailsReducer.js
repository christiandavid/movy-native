import { TYPES } from '@/actions/DetailsActions';
import { IMAGE_PATH } from '@/constants';

export const initialState = {
  id: null,
  title: null,
  genres: [],
  posterPath: null,
  video: {},
  overview: null,
  voteAverage: null,
  releaseDate: null,
};

export const detailsReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case TYPES.DETAILS_SUCCESS:
      return {
        ...state,
        id: payload.details.id,
        title: payload.details.title,
        genres: payload.details.genres,
        posterPath: payload.details.posterPath
          ? `${IMAGE_PATH}/${payload.details.posterPath}`
          : null,
        video: payload.details.video,
        overview: payload.details.overview,
        voteAverage: payload.details.voteAverage,
        releaseDate: payload.details.releaseDate,
      };
    case TYPES.CLEAR_STORE:
      return { ...initialState };
    default:
      return state;
  }
};
