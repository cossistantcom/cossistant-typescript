// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cossistant from 'cossistant';

const client = new Cossistant({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource messages', () => {
  // Mock server tests are disabled
  test.skip('send: only required params', async () => {
    const responsePromise = client.messages.send({
    conversationId: 'conversationId',
    item: { text: 'text' },
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
  test.skip('send: required and optional params', async () => {
    const response = await client.messages.send({
    conversationId: 'conversationId',
    item: {
    text: 'text',
    id: 'id',
    aiAgentId: 'aiAgentId',
    createdAt: 'createdAt',
    parts: [{
    text: 'text',
    type: 'text',
    state: 'streaming',
  }],
    tool: 'tool',
    type: 'message',
    userId: 'userId',
    visibility: 'public',
    visitorId: 'visitorId',
  },
    'X-Public-Key': 'pk_test_xxx',
    'X-Visitor-Id': '01JG000000000000000000000',
  });
  });
});
