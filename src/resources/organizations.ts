// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Organizations extends APIResource {
  /**
   * Retrieve an organization by its ID for the authenticated organization.
   */
  retrieveID(options?: RequestOptions): APIPromise<OrganizationRetrieveIDResponse> {
    return this._client.get('/v1/organizations/:id', options);
  }
}

export interface OrganizationRetrieveIDResponse {
  /**
   * The organization's unique identifier.
   */
  id: string;

  /**
   * The organization's name.
   */
  name: string;
}

export declare namespace Organizations {
  export {
    type OrganizationRetrieveIDResponse as OrganizationRetrieveIDResponse
  };
}
