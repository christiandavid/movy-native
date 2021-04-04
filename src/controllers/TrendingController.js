import { strings } from '@/localization';
import { HttpClient } from '@/controllers';

export class TrendingController {
  static async getTrendingNow() {
    try {
      const { results } = await HttpClient.get('/trending/all/day', {
        params: { page: 1 },
      });

      return results;
    } catch (err) {
      throw new Error(strings.common.invalidRequest);
    }
  }
}
