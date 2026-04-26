// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cossistant from 'cossistant';

const client = new Cossistant({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource id', () => {
  // Mock server tests are disabled
  test.skip('deleteID', async () => {
    const responsePromise = client.contacts.id.deleteID();
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
    const responsePromise = client.contacts.id.retrieveID();
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
    const responsePromise = client.contacts.id.updateID();
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
    await expect(client.contacts.id.updateID({
    contactOrganizationId: '01JG000000000000000000000',
    email: 'john.doe@example.com',
    externalId: 'user_12345',
    image: 'https://example.com/avatar.png',
    metadata: { plan: 'premium', role: 'admin' },
    name: 'John Doe',
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cossistant.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('updateMetadata: only required params', async () => {
    const responsePromise = client.contacts.id.updateMetadata({ metadata: { plan: 'premium', role: 'admin' } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateMetadata: required and optional params', async () => {
    const response = await client.contacts.id.updateMetadata({ metadata: { plan: 'premium', role: 'admin' } });
  });
});
