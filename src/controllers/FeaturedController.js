import { strings } from '@/localization';
import { HttpClient } from '@/controllers';

export class FeaturedController {
  static async getFeaturedMovie() {
    try {
      const {
        results: [featured],
      } = await HttpClient.get('/movie/now_playing', {
        params: { page: 1 },
      });

      const { id: movieId } = featured;
      const genres = await this.getGenres(movieId);

      return { ...featured, genres };
    } catch (err) {
      throw new Error(strings.common.invalidRequest);
    }
  }

  static async getGenres(movieId) {
    const { genres } = await HttpClient.get(`/movie/${movieId}`, {
      params: { id: movieId },
    });

    return genres.map(({ name }) => name);
  }
}
