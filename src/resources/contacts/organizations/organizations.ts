// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as IDAPI from './id';
import { ID, IDRetrieveIDResponse, IDUpdateIDParams, IDUpdateIDResponse } from './id';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Organizations extends APIResource {
  id: IDAPI.ID = new IDAPI.ID(this._client);

  /**
   * Creates a new contact organization for the website
   *
   * @example
   * ```ts
   * const organization =
   *   await client.contacts.organizations.create({
   *     name: 'Acme Corporation',
   *   });
   * ```
   */
  create(body: OrganizationCreateParams, options?: RequestOptions): APIPromise<OrganizationCreateResponse> {
    return this._client.post('/v1/contacts/organizations', { body, ...options, __security: {} });
  }
}

export interface OrganizationCreateResponse {
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

export interface OrganizationCreateParams {
  /**
   * The organization name.
   */
  name: string;

  /**
   * Description of the organization.
   */
  description?: string;

  /**
   * The organization's domain.
   */
  domain?: string;

  /**
   * External identifier for the organization (e.g. from your CRM).
   */
  externalId?: string;

  /**
   * Additional custom metadata for the organization.
   */
  metadata?: { [key: string]: string | number | boolean | null };
}

Organizations.ID = ID;

export declare namespace Organizations {
  export {
    type OrganizationCreateResponse as OrganizationCreateResponse,
    type OrganizationCreateParams as OrganizationCreateParams,
  };

  export {
    ID as ID,
    type IDRetrieveIDResponse as IDRetrieveIDResponse,
    type IDUpdateIDResponse as IDUpdateIDResponse,
    type IDUpdateIDParams as IDUpdateIDParams,
  };
}
