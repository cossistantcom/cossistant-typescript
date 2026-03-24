// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class ID extends APIResource {
  /**
   * Soft deletes a contact
   *
   * @example
   * ```ts
   * await client.contacts.id.deleteID();
   * ```
   */
  deleteID(options?: RequestOptions): APIPromise<void> {
    return this._client.delete('/v1/contacts/:id', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __security: {},
    });
  }

  /**
   * Retrieves a contact by ID
   *
   * @example
   * ```ts
   * const response = await client.contacts.id.retrieveID();
   * ```
   */
  retrieveID(options?: RequestOptions): APIPromise<IDRetrieveIDResponse> {
    return this._client.get('/v1/contacts/:id', { ...options, __security: {} });
  }

  /**
   * Updates an existing contact
   *
   * @example
   * ```ts
   * const response = await client.contacts.id.updateID();
   * ```
   */
  updateID(
    body: IDUpdateIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IDUpdateIDResponse> {
    return this._client.patch('/v1/contacts/:id', { body, ...options, __security: {} });
  }

  /**
   * Merges the provided metadata into the contact profile
   *
   * @example
   * ```ts
   * const response = await client.contacts.id.updateMetadata({
   *   metadata: { plan: 'premium', role: 'admin' },
   * });
   * ```
   */
  updateMetadata(
    body: IDUpdateMetadataParams,
    options?: RequestOptions,
  ): APIPromise<IDUpdateMetadataResponse> {
    return this._client.patch('/v1/contacts/:id/metadata', { body, ...options, __security: {} });
  }
}

export interface IDRetrieveIDResponse {
  /**
   * The contact's unique identifier (ULID).
   */
  id: string;

  /**
   * The contact organization ID this contact belongs to.
   */
  contactOrganizationId: string | null;

  /**
   * When the contact was first created.
   */
  createdAt: string;

  /**
   * The contact's email address.
   */
  email: string | null;

  /**
   * External identifier for the contact.
   */
  externalId: string | null;

  /**
   * The contact's avatar/image URL.
   */
  image: string | null;

  /**
   * Additional custom metadata for the contact.
   */
  metadata: { [key: string]: string | number | boolean | null } | null;

  /**
   * The contact's name.
   */
  name: string | null;

  /**
   * The organization's unique identifier that the contact belongs to.
   */
  organizationId: string;

  /**
   * When the contact record was last updated.
   */
  updatedAt: string;

  /**
   * The user ID if the contact is linked to a registered user.
   */
  userId: string | null;

  /**
   * The website's unique identifier that the contact belongs to.
   */
  websiteId: string;
}

export interface IDUpdateIDResponse {
  /**
   * The contact's unique identifier (ULID).
   */
  id: string;

  /**
   * The contact organization ID this contact belongs to.
   */
  contactOrganizationId: string | null;

  /**
   * When the contact was first created.
   */
  createdAt: string;

  /**
   * The contact's email address.
   */
  email: string | null;

  /**
   * External identifier for the contact.
   */
  externalId: string | null;

  /**
   * The contact's avatar/image URL.
   */
  image: string | null;

  /**
   * Additional custom metadata for the contact.
   */
  metadata: { [key: string]: string | number | boolean | null } | null;

  /**
   * The contact's name.
   */
  name: string | null;

  /**
   * The organization's unique identifier that the contact belongs to.
   */
  organizationId: string;

  /**
   * When the contact record was last updated.
   */
  updatedAt: string;

  /**
   * The user ID if the contact is linked to a registered user.
   */
  userId: string | null;

  /**
   * The website's unique identifier that the contact belongs to.
   */
  websiteId: string;
}

export interface IDUpdateMetadataResponse {
  /**
   * The contact's unique identifier (ULID).
   */
  id: string;

  /**
   * The contact organization ID this contact belongs to.
   */
  contactOrganizationId: string | null;

  /**
   * When the contact was first created.
   */
  createdAt: string;

  /**
   * The contact's email address.
   */
  email: string | null;

  /**
   * External identifier for the contact.
   */
  externalId: string | null;

  /**
   * The contact's avatar/image URL.
   */
  image: string | null;

  /**
   * Additional custom metadata for the contact.
   */
  metadata: { [key: string]: string | number | boolean | null } | null;

  /**
   * The contact's name.
   */
  name: string | null;

  /**
   * The organization's unique identifier that the contact belongs to.
   */
  organizationId: string;

  /**
   * When the contact record was last updated.
   */
  updatedAt: string;

  /**
   * The user ID if the contact is linked to a registered user.
   */
  userId: string | null;

  /**
   * The website's unique identifier that the contact belongs to.
   */
  websiteId: string;
}

export interface IDUpdateIDParams {
  /**
   * The contact organization ID this contact belongs to.
   */
  contactOrganizationId?: string | null;

  /**
   * The contact's email address.
   */
  email?: string;

  /**
   * External identifier for the contact.
   */
  externalId?: string;

  /**
   * The contact's avatar/image URL.
   */
  image?: string;

  /**
   * Additional custom metadata for the contact.
   */
  metadata?: { [key: string]: string | number | boolean | null };

  /**
   * The contact's name.
   */
  name?: string;
}

export interface IDUpdateMetadataParams {
  /**
   * Metadata payload to merge into the contact's profile.
   */
  metadata: { [key: string]: string | number | boolean | null };
}

export declare namespace ID {
  export {
    type IDRetrieveIDResponse as IDRetrieveIDResponse,
    type IDUpdateIDResponse as IDUpdateIDResponse,
    type IDUpdateMetadataResponse as IDUpdateMetadataResponse,
    type IDUpdateIDParams as IDUpdateIDParams,
    type IDUpdateMetadataParams as IDUpdateMetadataParams,
  };
}
