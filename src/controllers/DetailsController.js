import { strings } from '@/localization';
import { HttpClient } from '@/controllers';

export class DetailsController {
  static async getMovieDetails(movieId) {
    try {
      const {
        id,
        original_title: title,
        genres,
        poster_path: posterPath,
        overview,
        vote_average: voteAverage,
        release_date: releaseDate,
        videos: { results: videos },
      } = await HttpClient.get(`/movie/${movieId}`, {
        params: { append_to_response: 'videos' },
      });

      return {
        id,
        title,
        genres,
        posterPath,
        video: videos.find(
          ({ type, site }) => type === 'Trailer' && site === 'YouTube'
        ),
        overview,
        voteAverage,
        releaseDate,
      };
    } catch (err) {
      throw new Error(strings.common.invalidRequest);
    }
  }
}
