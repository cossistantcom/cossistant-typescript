// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cossistant from 'cossistant';

const client = new Cossistant({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource id', () => {
  // Mock server tests are disabled
  test.skip('deleteID', async () => {
    const responsePromise = client.knowledge.id.deleteID();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveID', async () => {
    const responsePromise = client.knowledge.id.retrieveID();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateID', async () => {
    const responsePromise = client.knowledge.id.updateID();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateID: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.knowledge.id.updateID({
    aiAgentId: '01JG000000000000000000002',
    metadata: { locale: 'bar', source: 'bar' },
    payload: {
    markdown: '# Welcome to the Help Center',
    estimatedTokens: 2048,
    headings: [{ level: 2, text: 'Getting started' }],
    images: [{ alt: 'Agent dashboard hero illustration', src: 'https://cdn.cossistant.com/assets/hero.png' }],
    links: ['https://docs.cossistant.com/guide'],
  },
    sourceTitle: 'Getting started with the Cossistant dashboard',
    sourceUrl: 'https://docs.cossistant.com/getting-started',
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cossistant.NotFoundError);
  });
});
