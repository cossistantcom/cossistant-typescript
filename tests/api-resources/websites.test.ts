// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cossistant from 'cossistant';

const client = new Cossistant({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource websites', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.websites.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.websites.retrieve(
        {
          Origin: 'https://example.com',
          'X-Public-Key': 'pk_test_xxx',
          'X-Visitor-Id': '01JG000000000000000000000',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cossistant.NotFoundError);
  });
});
