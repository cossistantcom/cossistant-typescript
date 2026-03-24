// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cossistant from 'cossistant';

const client = new Cossistant({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource uploads', () => {
  // Mock server tests are disabled
  test.skip('createSignURL: only required params', async () => {
    const responsePromise = client.uploads.createSignURL({
      contentType: 'image/png',
      scope: {
        conversationId: 'conv_01HZYFJ5P7DQ0VE8F68G5VYBAQ',
        organizationId: 'org_01HZYFG9W5V6YB5R6T6V7N9M2Q',
        type: 'conversation',
        websiteId: 'site_01HZYFH3KJ3MYHJJ3JJ6Y2RNAV',
      },
      websiteId: 'websiteId',
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
  test.skip('createSignURL: required and optional params', async () => {
    const response = await client.uploads.createSignURL({
      contentType: 'image/png',
      scope: {
        conversationId: 'conv_01HZYFJ5P7DQ0VE8F68G5VYBAQ',
        organizationId: 'org_01HZYFG9W5V6YB5R6T6V7N9M2Q',
        type: 'conversation',
        websiteId: 'site_01HZYFH3KJ3MYHJJ3JJ6Y2RNAV',
      },
      websiteId: 'websiteId',
      expiresInSeconds: 900,
      fileExtension: 'png',
      fileName: 'profile-picture.png',
      path: 'assets/avatars',
      useCdn: true,
    });
  });
});
