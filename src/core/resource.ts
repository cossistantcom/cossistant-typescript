// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Cossistant } from '../client';

export abstract class APIResource {
  protected _client: Cossistant;

  constructor(client: Cossistant) {
    this._client = client;
  }
}
