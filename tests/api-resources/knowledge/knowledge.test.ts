// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cossistant from 'cossistant';

const client = new Cossistant({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource knowledge', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.knowledge.create({
    origin: 'manual',
    payload: { markdown: '# Welcome to the Help Center' },
    type: 'url',
  });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.knowledge.create({
    origin: 'manual',
    payload: {
    markdown: '# Welcome to the Help Center',
    estimatedTokens: 2048,
    headings: [{ level: 2, text: 'Getting started' }],
    images: [{ alt: 'Agent dashboard hero illustration', src: 'https://cdn.cossistant.com/assets/hero.png' }],
    links: ['https://docs.cossistant.com/guide'],
  },
    type: 'url',
    aiAgentId: '01JG000000000000000000002',
    metadata: { locale: 'bar', source: 'bar' },
    sourceTitle: 'Getting started with the Cossistant dashboard',
    sourceUrl: 'https://docs.cossistant.com/getting-started',
  });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.knowledge.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.knowledge.list({
    aiAgentId: '01JG000000000000000000002',
    limit: 20,
    page: 1,
    type: 'url',
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cossistant.NotFoundError);
  });
});
