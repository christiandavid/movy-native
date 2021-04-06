import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const mockAdapter = new MockAdapter(axios);

beforeEach(() => {
  mockAdapter.reset();
});

export default mockAdapter;
