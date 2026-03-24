// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cossistant from 'cossistant';

const client = new Cossistant({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource conversations', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.conversations.create({
      defaultTimelineItems: [
        {
          aiAgentId: 'aiAgentId',
          conversationId: 'conversationId',
          createdAt: 'createdAt',
          organizationId: 'organizationId',
          parts: [{ text: 'text', type: 'text' }],
          text: 'text',
          type: 'message',
          userId: 'userId',
          visibility: 'public',
          visitorId: 'visitorId',
        },
      ],
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
    const response = await client.conversations.create({
      defaultTimelineItems: [
        {
          aiAgentId: 'aiAgentId',
          conversationId: 'conversationId',
          createdAt: 'createdAt',
          organizationId: 'organizationId',
          parts: [
            {
              text: 'text',
              type: 'text',
              state: 'streaming',
            },
          ],
          text: 'text',
          type: 'message',
          userId: 'userId',
          visibility: 'public',
          visitorId: 'visitorId',
          id: 'id',
          deletedAt: 'deletedAt',
          tool: 'tool',
        },
      ],
      channel: 'channel',
      conversationId: 'conversationId',
      visitorId: 'visitorId',
      'X-Public-Key': 'pk_test_xxx',
      'X-Visitor-Id': '01JG000000000000000000000',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.conversations.retrieve('conversationId');
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
      client.conversations.retrieve(
        'conversationId',
        { 'X-Public-Key': 'pk_test_xxx', 'X-Visitor-Id': '01JG000000000000000000000' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cossistant.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.conversations.list();
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
    await expect(
      client.conversations.list(
        {
          limit: 1,
          order: 'asc',
          orderBy: 'createdAt',
          page: 1,
          status: 'open',
          visitorId: 'visitorId',
          'X-Public-Key': 'pk_test_xxx',
          'X-Visitor-Id': '01JG000000000000000000000',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cossistant.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getTimeline', async () => {
    const responsePromise = client.conversations.getTimeline('conversationId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getTimeline: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.conversations.getTimeline(
        'conversationId',
        { cursor: 'cursor', limit: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cossistant.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('reportTyping: only required params', async () => {
    const responsePromise = client.conversations.reportTyping('conversationId', { isTyping: true });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('reportTyping: required and optional params', async () => {
    const response = await client.conversations.reportTyping('conversationId', {
      isTyping: true,
      visitorId: 'visitorId',
      visitorPreview: 'visitorPreview',
    });
  });

  // Mock server tests are disabled
  test.skip('submitRating: only required params', async () => {
    const responsePromise = client.conversations.submitRating('conversationId', { rating: 5 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('submitRating: required and optional params', async () => {
    const response = await client.conversations.submitRating('conversationId', {
      rating: 5,
      comment: 'comment',
      visitorId: 'visitorId',
    });
  });
});
