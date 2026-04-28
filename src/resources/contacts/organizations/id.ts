// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class ID extends APIResource {
  /**
   * Soft deletes a contact organization
   *
   * @example
   * ```ts
   * await client.contacts.organizations.id.deleteID();
   * ```
   */
  deleteID(options?: RequestOptions): APIPromise<void> {
    return this._client.delete('/v1/contacts/organizations/:id', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __security: {},
    });
  }

  /**
   * Retrieves a contact organization by ID
   *
   * @example
   * ```ts
   * const response =
   *   await client.contacts.organizations.id.retrieveID();
   * ```
   */
  retrieveID(options?: RequestOptions): APIPromise<IDRetrieveIDResponse> {
    return this._client.get('/v1/contacts/organizations/:id', { ...options, __security: {} });
  }

  /**
   * Updates an existing contact organization
   *
   * @example
   * ```ts
   * const response =
   *   await client.contacts.organizations.id.updateID();
   * ```
   */
  updateID(
    body: IDUpdateIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IDUpdateIDResponse> {
    return this._client.patch('/v1/contacts/organizations/:id', { body, ...options, __security: {} });
  }
}

export interface IDRetrieveIDResponse {
  /**
   * The organization's unique identifier (ULID).
   */
  id: string;

  /**
   * When the organization was first created.
   */
  createdAt: string;

  /**
   * Description of the organization.
   */
  description: string | null;

  /**
   * The organization's domain.
   */
  domain: string | null;

  /**
   * External identifier for the organization.
   */
  externalId: string | null;

  /**
   * Additional custom metadata for the organization.
   */
  metadata: { [key: string]: string | number | boolean | null } | null;

  /**
   * The organization name.
   */
  name: string;

  /**
   * The organization's unique identifier that the organization belongs to.
   */
  organizationId: string;

  /**
   * When the organization record was last updated.
   */
  updatedAt: string;

  /**
   * The website's unique identifier that the organization belongs to.
   */
  websiteId: string;
}

export interface IDUpdateIDResponse {
  /**
   * The organization's unique identifier (ULID).
   */
  id: string;

  /**
   * When the organization was first created.
   */
  createdAt: string;

  /**
   * Description of the organization.
   */
  description: string | null;

  /**
   * The organization's domain.
   */
  domain: string | null;

  /**
   * External identifier for the organization.
   */
  externalId: string | null;

  /**
   * Additional custom metadata for the organization.
   */
  metadata: { [key: string]: string | number | boolean | null } | null;

  /**
   * The organization name.
   */
  name: string;

  /**
   * The organization's unique identifier that the organization belongs to.
   */
  organizationId: string;

  /**
   * When the organization record was last updated.
   */
  updatedAt: string;

  /**
   * The website's unique identifier that the organization belongs to.
   */
  websiteId: string;
}

export interface IDUpdateIDParams {
  /**
   * Description of the organization.
   */
  description?: string;

  /**
   * The organization's domain.
   */
  domain?: string;

  /**
   * External identifier for the organization.
   */
  externalId?: string;

  /**
   * Additional custom metadata for the organization.
   */
  metadata?: { [key: string]: string | number | boolean | null };

  /**
   * The organization name.
   */
  name?: string;
}

export declare namespace ID {
  export {
    type IDRetrieveIDResponse as IDRetrieveIDResponse,
    type IDUpdateIDResponse as IDUpdateIDResponse,
    type IDUpdateIDParams as IDUpdateIDParams,
  };
}
