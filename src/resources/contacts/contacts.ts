// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as IDAPI from './id';
import {
  ID,
  IDRetrieveIDResponse,
  IDUpdateIDParams,
  IDUpdateIDResponse,
  IDUpdateMetadataParams,
  IDUpdateMetadataResponse,
} from './id';
import * as OrganizationsAPI from './organizations/organizations';
import {
  OrganizationCreateParams,
  OrganizationCreateResponse,
  Organizations,
} from './organizations/organizations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Contacts extends APIResource {
  organizations: OrganizationsAPI.Organizations = new OrganizationsAPI.Organizations(this._client);
  id: IDAPI.ID = new IDAPI.ID(this._client);

  /**
   * Creates a new contact for the website. If externalId is provided and already
   * exists for the website, the contact is updated and returned.
   *
   * @example
   * ```ts
   * const contact = await client.contacts.create();
   * ```
   */
  create(
    body: ContactCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ContactCreateResponse> {
    return this._client.post('/v1/contacts', { body, ...options, __security: {} });
  }

  /**
   * Creates or updates a contact for a visitor. If a contact with the same
   * externalId or email exists, it will be updated. The visitor will be linked to
   * the contact.
   *
   * @example
   * ```ts
   * const response = await client.contacts.identify({
   *   visitorId: '01JG000000000000000000000',
   * });
   * ```
   */
  identify(body: ContactIdentifyParams, options?: RequestOptions): APIPromise<ContactIdentifyResponse> {
    return this._client.post('/v1/contacts/identify', { body, ...options, __security: {} });
  }
}

export interface ContactCreateResponse {
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

export interface ContactIdentifyResponse {
  contact: ContactIdentifyResponse.Contact;

  /**
   * The visitor ID that was linked to the contact.
   */
  visitorId: string;
}

export namespace ContactIdentifyResponse {
  export interface Contact {
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
}

export interface ContactCreateParams {
  /**
   * The contact organization ID this contact belongs to.
   */
  contactOrganizationId?: string;

  /**
   * The contact's email address.
   */
  email?: string;

  /**
   * External identifier for the contact (e.g. from your CRM).
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

export interface ContactIdentifyParams {
  /**
   * The visitor ID to link to the contact.
   */
  visitorId: string;

  /**
   * Optional contact ID to update when linking the visitor to an existing contact.
   */
  id?: string;

  /**
   * The contact organization ID this contact belongs to.
   */
  contactOrganizationId?: string;

  /**
   * The contact's email address. Used to find existing contacts.
   */
  email?: string;

  /**
   * External identifier for the contact. Used to find existing contacts.
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

Contacts.Organizations = Organizations;
Contacts.ID = ID;

export declare namespace Contacts {
  export {
    type ContactCreateResponse as ContactCreateResponse,
    type ContactIdentifyResponse as ContactIdentifyResponse,
    type ContactCreateParams as ContactCreateParams,
    type ContactIdentifyParams as ContactIdentifyParams,
  };

  export {
    Organizations as Organizations,
    type OrganizationCreateResponse as OrganizationCreateResponse,
    type OrganizationCreateParams as OrganizationCreateParams,
  };

  export {
    ID as ID,
    type IDRetrieveIDResponse as IDRetrieveIDResponse,
    type IDUpdateIDResponse as IDUpdateIDResponse,
    type IDUpdateMetadataResponse as IDUpdateMetadataResponse,
    type IDUpdateIDParams as IDUpdateIDParams,
    type IDUpdateMetadataParams as IDUpdateMetadataParams,
  };
}
