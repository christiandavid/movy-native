import { Config } from 'react-native-config';
import { DetailsController } from '@/controllers/DetailsController';
import mockAxios from '@/controllers/__mocks__/mockAxios';

describe('Details Controller', () => {
  it('Should handle a success request', async () => {
    const fetchUrl = `${Config.API_BASE_URL}/movie/1`;

    mockAxios.onGet(fetchUrl).reply(200, 'Success');

    const details = await DetailsController.getMovieDetails(1);
    expect(details).toBe('Success');
  });

  // test('Should handle a failed request', async () => {
  //   const fetchUrl = 'http://mockUrl';

  //   mockAxios
  //     .onGet(fetchUrl)
  //     .reply(404, new Error('Request failed with status code 404'));

  //   try {
  //     await fetchData(fetchUrl);
  //   } catch (error) {
  //     expect(error.message).toBe('Error: Request failed with status code 404');
  //   }
  // });
});
