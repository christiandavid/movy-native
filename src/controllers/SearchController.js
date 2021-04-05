import { strings } from '@/localization';
import { HttpClient } from '@/controllers';

export class SearchController {
  static async search({ query, page }) {
    try {
      const {
        results,
        page: currentPage,
        total_pages: totalPages,
      } = await HttpClient.get('/search/movie', {
        params: { query, page, include_adult: false },
      });

      return { results, page: currentPage, totalPages };
    } catch (err) {
      throw new Error(strings.common.invalidRequest);
    }
  }
}
