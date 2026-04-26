// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cossistant from 'cossistant';

const client = new Cossistant({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource id', () => {
  // Mock server tests are disabled
  test.skip('retrieveID', async () => {
    const responsePromise = client.visitors.id.retrieveID();
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
    const responsePromise = client.visitors.id.updateID();
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
    await expect(client.visitors.id.updateID({
    attribution: {
    firstTouch: {
    capturedAt: '2026-03-12T10:00:00.000Z',
    channel: 'referral',
    clickIds: {
    fbclid: 'fbclid_123',
    gbraid: 'gbraid_123',
    gclid: 'gclid_123',
    li_fat_id: 'li_fat_id_123',
    msclkid: 'msclkid_123',
    ttclid: 'ttclid_123',
    twclid: 'twclid_123',
    wbraid: 'wbraid_123',
  },
    isDirect: false,
    landing: {
    path: '/pricing',
    title: 'Pricing | Example',
    url: 'https://app.example.com/pricing?utm_source=hn&utm_medium=community',
  },
    referrer: { domain: 'news.ycombinator.com', url: 'https://news.ycombinator.com/item?id=123' },
    utm: {
    campaign: 'launch_week',
    content: 'hero_cta',
    medium: 'community',
    source: 'hn',
    term: 'ai support',
  },
  },
    version: 1,
  },
    browser: 'Chrome',
    browserVersion: '120.0.0',
    city: 'San Francisco',
    country: 'United States',
    countryCode: 'US',
    currentPage: {
    path: '/pricing',
    referrerUrl: 'https://news.ycombinator.com/item?id=123',
    title: 'Pricing | Example',
    updatedAt: '2026-03-12T10:00:05.000Z',
    url: 'https://app.example.com/pricing',
  },
    device: 'MacBook Pro',
    deviceType: 'desktop',
    email: 'john.doe@example.com',
    externalId: 'user_12345',
    ip: '192.168.1.1',
    language: 'en-US',
    latitude: 37.7749,
    longitude: -122.4194,
    metadata: { plan: 'premium', role: 'admin' },
    name: 'John Doe',
    os: 'Windows',
    osVersion: '11',
    region: 'California',
    screenResolution: '1920x1080',
    timezone: 'America/Los_Angeles',
    viewport: '1920x900',
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cossistant.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('updateMetadata: only required params', async () => {
    const responsePromise = client.visitors.id.updateMetadata({ metadata: { plan: 'premium', role: 'admin' } });
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
    const response = await client.visitors.id.updateMetadata({ metadata: { plan: 'premium', role: 'admin' } });
  });
});
