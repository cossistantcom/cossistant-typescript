// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class ID extends APIResource {
  /**
   * Retrieves visitor information by visitor ID
   *
   * @example
   * ```ts
   * const response = await client.visitors.id.retrieveID();
   * ```
   */
  retrieveID(options?: RequestOptions): APIPromise<IDRetrieveIDResponse> {
    return this._client.get('/v1/visitors/:id', { ...options, __security: {} });
  }

  /**
   * Updates an existing visitor's browser, device, and location data. The visitor
   * must already exist in the system.
   *
   * @example
   * ```ts
   * const response = await client.visitors.id.updateID();
   * ```
   */
  updateID(
    body: IDUpdateIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IDUpdateIDResponse> {
    return this._client.patch('/v1/visitors/:id', { body, ...options, __security: {} });
  }

  /**
   * Merges the provided metadata into the contact profile associated with the
   * visitor. The visitor must be identified first (linked to a contact) via the
   * /contacts/identify endpoint.
   *
   * @example
   * ```ts
   * const response = await client.visitors.id.updateMetadata({
   *   metadata: { plan: 'premium', role: 'admin' },
   * });
   * ```
   */
  updateMetadata(
    body: IDUpdateMetadataParams,
    options?: RequestOptions,
  ): APIPromise<IDUpdateMetadataResponse> {
    return this._client.patch('/v1/visitors/:id/metadata', { body, ...options, __security: {} });
  }
}

export interface IDRetrieveIDResponse {
  /**
   * The visitor's unique identifier (ULID).
   */
  id: string;

  /**
   * Normalized acquisition data captured for this visitor.
   */
  attribution: IDRetrieveIDResponse.Attribution | null;

  /**
   * When the visitor was blocked, if applicable.
   */
  blockedAt: string | null;

  /**
   * Identifier of the team member who blocked the visitor.
   */
  blockedByUserId: string | null;

  /**
   * The visitor's browser.
   */
  browser: string | null;

  /**
   * The visitor's browser version.
   */
  browserVersion: string | null;

  /**
   * The visitor's city.
   */
  city: string | null;

  contact: IDRetrieveIDResponse.Contact | null;

  /**
   * The visitor's country.
   */
  country: string | null;

  /**
   * The visitor's country code (ISO 3166-1 alpha-2).
   */
  countryCode: string | null;

  /**
   * When the visitor was first seen.
   */
  createdAt: string;

  /**
   * Latest page context captured for this visitor.
   */
  currentPage: IDRetrieveIDResponse.CurrentPage | null;

  /**
   * The visitor's device.
   */
  device: string | null;

  /**
   * The visitor's device type.
   */
  deviceType: string | null;

  /**
   * The visitor's IP address.
   */
  ip: string | null;

  /**
   * Whether the visitor is currently blocked.
   */
  isBlocked: boolean;

  /**
   * The visitor's preferred language.
   */
  language: string | null;

  /**
   * When the visitor was last connected or active.
   */
  lastSeenAt: string | null;

  /**
   * The visitor's latitude.
   */
  latitude: number | null;

  /**
   * The visitor's longitude.
   */
  longitude: number | null;

  /**
   * The organization's unique identifier that the visitor belongs to.
   */
  organizationId: string;

  /**
   * The visitor's operating system.
   */
  os: string | null;

  /**
   * The visitor's operating system version.
   */
  osVersion: string | null;

  /**
   * The visitor's region/state.
   */
  region: string | null;

  /**
   * The visitor's screen resolution.
   */
  screenResolution: string | null;

  /**
   * The visitor's timezone.
   */
  timezone: string | null;

  /**
   * When the visitor record was last updated.
   */
  updatedAt: string;

  /**
   * The visitor's viewport size.
   */
  viewport: string | null;

  /**
   * The website's unique identifier that the visitor belongs to.
   */
  websiteId: string;
}

export namespace IDRetrieveIDResponse {
  /**
   * Normalized acquisition data captured for this visitor.
   */
  export interface Attribution {
    firstTouch: Attribution.FirstTouch;

    /**
     * Schema version for the attribution payload.
     */
    version: 1;
  }

  export namespace Attribution {
    export interface FirstTouch {
      /**
       * When the first-touch attribution snapshot was captured.
       */
      capturedAt: string;

      /**
       * Derived acquisition channel.
       */
      channel: 'direct' | 'email' | 'paid' | 'organic_search' | 'social' | 'referral';

      clickIds: FirstTouch.ClickIDs;

      /**
       * Whether the visit should be treated as direct traffic.
       */
      isDirect: boolean;

      landing: FirstTouch.Landing;

      referrer: FirstTouch.Referrer;

      utm: FirstTouch.Utm;
    }

    export namespace FirstTouch {
      export interface ClickIDs {
        /**
         * Meta click identifier.
         */
        fbclid: string | null;

        /**
         * Google iOS app click identifier.
         */
        gbraid: string | null;

        /**
         * Google Ads click identifier.
         */
        gclid: string | null;

        /**
         * LinkedIn click identifier.
         */
        li_fat_id: string | null;

        /**
         * Microsoft Ads click identifier.
         */
        msclkid: string | null;

        /**
         * TikTok click identifier.
         */
        ttclid: string | null;

        /**
         * X/Twitter click identifier.
         */
        twclid: string | null;

        /**
         * Google web-to-app click identifier.
         */
        wbraid: string | null;
      }

      export interface Landing {
        /**
         * Landing page path.
         */
        path: string | null;

        /**
         * Document title captured on the landing page.
         */
        title: string | null;

        /**
         * Sanitized landing page URL including only supported attribution params.
         */
        url: string | null;
      }

      export interface Referrer {
        /**
         * Normalized referrer hostname.
         */
        domain: string | null;

        /**
         * Sanitized external referrer URL without arbitrary query data.
         */
        url: string | null;
      }

      export interface Utm {
        /**
         * UTM campaign value.
         */
        campaign: string | null;

        /**
         * UTM content value.
         */
        content: string | null;

        /**
         * UTM medium value.
         */
        medium: string | null;

        /**
         * UTM source value.
         */
        source: string | null;

        /**
         * UTM term value.
         */
        term: string | null;
      }
    }
  }

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

  /**
   * Latest page context captured for this visitor.
   */
  export interface CurrentPage {
    /**
     * Current page path.
     */
    path: string | null;

    /**
     * Sanitized document referrer URL for the current page context.
     */
    referrerUrl: string | null;

    /**
     * Current document title.
     */
    title: string | null;

    /**
     * When the current page context was last updated.
     */
    updatedAt: string;

    /**
     * Sanitized current page URL including only supported attribution params.
     */
    url: string | null;
  }
}

export interface IDUpdateIDResponse {
  /**
   * The visitor's unique identifier (ULID).
   */
  id: string;

  /**
   * Normalized acquisition data captured for this visitor.
   */
  attribution: IDUpdateIDResponse.Attribution | null;

  /**
   * When the visitor was blocked, if applicable.
   */
  blockedAt: string | null;

  /**
   * Identifier of the team member who blocked the visitor.
   */
  blockedByUserId: string | null;

  /**
   * The visitor's browser.
   */
  browser: string | null;

  /**
   * The visitor's browser version.
   */
  browserVersion: string | null;

  /**
   * The visitor's city.
   */
  city: string | null;

  contact: IDUpdateIDResponse.Contact | null;

  /**
   * The visitor's country.
   */
  country: string | null;

  /**
   * The visitor's country code (ISO 3166-1 alpha-2).
   */
  countryCode: string | null;

  /**
   * When the visitor was first seen.
   */
  createdAt: string;

  /**
   * Latest page context captured for this visitor.
   */
  currentPage: IDUpdateIDResponse.CurrentPage | null;

  /**
   * The visitor's device.
   */
  device: string | null;

  /**
   * The visitor's device type.
   */
  deviceType: string | null;

  /**
   * The visitor's IP address.
   */
  ip: string | null;

  /**
   * Whether the visitor is currently blocked.
   */
  isBlocked: boolean;

  /**
   * The visitor's preferred language.
   */
  language: string | null;

  /**
   * When the visitor was last connected or active.
   */
  lastSeenAt: string | null;

  /**
   * The visitor's latitude.
   */
  latitude: number | null;

  /**
   * The visitor's longitude.
   */
  longitude: number | null;

  /**
   * The organization's unique identifier that the visitor belongs to.
   */
  organizationId: string;

  /**
   * The visitor's operating system.
   */
  os: string | null;

  /**
   * The visitor's operating system version.
   */
  osVersion: string | null;

  /**
   * The visitor's region/state.
   */
  region: string | null;

  /**
   * The visitor's screen resolution.
   */
  screenResolution: string | null;

  /**
   * The visitor's timezone.
   */
  timezone: string | null;

  /**
   * When the visitor record was last updated.
   */
  updatedAt: string;

  /**
   * The visitor's viewport size.
   */
  viewport: string | null;

  /**
   * The website's unique identifier that the visitor belongs to.
   */
  websiteId: string;
}

export namespace IDUpdateIDResponse {
  /**
   * Normalized acquisition data captured for this visitor.
   */
  export interface Attribution {
    firstTouch: Attribution.FirstTouch;

    /**
     * Schema version for the attribution payload.
     */
    version: 1;
  }

  export namespace Attribution {
    export interface FirstTouch {
      /**
       * When the first-touch attribution snapshot was captured.
       */
      capturedAt: string;

      /**
       * Derived acquisition channel.
       */
      channel: 'direct' | 'email' | 'paid' | 'organic_search' | 'social' | 'referral';

      clickIds: FirstTouch.ClickIDs;

      /**
       * Whether the visit should be treated as direct traffic.
       */
      isDirect: boolean;

      landing: FirstTouch.Landing;

      referrer: FirstTouch.Referrer;

      utm: FirstTouch.Utm;
    }

    export namespace FirstTouch {
      export interface ClickIDs {
        /**
         * Meta click identifier.
         */
        fbclid: string | null;

        /**
         * Google iOS app click identifier.
         */
        gbraid: string | null;

        /**
         * Google Ads click identifier.
         */
        gclid: string | null;

        /**
         * LinkedIn click identifier.
         */
        li_fat_id: string | null;

        /**
         * Microsoft Ads click identifier.
         */
        msclkid: string | null;

        /**
         * TikTok click identifier.
         */
        ttclid: string | null;

        /**
         * X/Twitter click identifier.
         */
        twclid: string | null;

        /**
         * Google web-to-app click identifier.
         */
        wbraid: string | null;
      }

      export interface Landing {
        /**
         * Landing page path.
         */
        path: string | null;

        /**
         * Document title captured on the landing page.
         */
        title: string | null;

        /**
         * Sanitized landing page URL including only supported attribution params.
         */
        url: string | null;
      }

      export interface Referrer {
        /**
         * Normalized referrer hostname.
         */
        domain: string | null;

        /**
         * Sanitized external referrer URL without arbitrary query data.
         */
        url: string | null;
      }

      export interface Utm {
        /**
         * UTM campaign value.
         */
        campaign: string | null;

        /**
         * UTM content value.
         */
        content: string | null;

        /**
         * UTM medium value.
         */
        medium: string | null;

        /**
         * UTM source value.
         */
        source: string | null;

        /**
         * UTM term value.
         */
        term: string | null;
      }
    }
  }

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

  /**
   * Latest page context captured for this visitor.
   */
  export interface CurrentPage {
    /**
     * Current page path.
     */
    path: string | null;

    /**
     * Sanitized document referrer URL for the current page context.
     */
    referrerUrl: string | null;

    /**
     * Current document title.
     */
    title: string | null;

    /**
     * When the current page context was last updated.
     */
    updatedAt: string;

    /**
     * Sanitized current page URL including only supported attribution params.
     */
    url: string | null;
  }
}

export interface IDUpdateMetadataResponse {
  /**
   * The visitor's unique identifier (ULID).
   */
  id: string;

  /**
   * Normalized acquisition data captured for this visitor.
   */
  attribution: IDUpdateMetadataResponse.Attribution | null;

  /**
   * When the visitor was blocked, if applicable.
   */
  blockedAt: string | null;

  /**
   * Identifier of the team member who blocked the visitor.
   */
  blockedByUserId: string | null;

  /**
   * The visitor's browser.
   */
  browser: string | null;

  /**
   * The visitor's browser version.
   */
  browserVersion: string | null;

  /**
   * The visitor's city.
   */
  city: string | null;

  contact: IDUpdateMetadataResponse.Contact | null;

  /**
   * The visitor's country.
   */
  country: string | null;

  /**
   * The visitor's country code (ISO 3166-1 alpha-2).
   */
  countryCode: string | null;

  /**
   * When the visitor was first seen.
   */
  createdAt: string;

  /**
   * Latest page context captured for this visitor.
   */
  currentPage: IDUpdateMetadataResponse.CurrentPage | null;

  /**
   * The visitor's device.
   */
  device: string | null;

  /**
   * The visitor's device type.
   */
  deviceType: string | null;

  /**
   * The visitor's IP address.
   */
  ip: string | null;

  /**
   * Whether the visitor is currently blocked.
   */
  isBlocked: boolean;

  /**
   * The visitor's preferred language.
   */
  language: string | null;

  /**
   * When the visitor was last connected or active.
   */
  lastSeenAt: string | null;

  /**
   * The visitor's latitude.
   */
  latitude: number | null;

  /**
   * The visitor's longitude.
   */
  longitude: number | null;

  /**
   * The organization's unique identifier that the visitor belongs to.
   */
  organizationId: string;

  /**
   * The visitor's operating system.
   */
  os: string | null;

  /**
   * The visitor's operating system version.
   */
  osVersion: string | null;

  /**
   * The visitor's region/state.
   */
  region: string | null;

  /**
   * The visitor's screen resolution.
   */
  screenResolution: string | null;

  /**
   * The visitor's timezone.
   */
  timezone: string | null;

  /**
   * When the visitor record was last updated.
   */
  updatedAt: string;

  /**
   * The visitor's viewport size.
   */
  viewport: string | null;

  /**
   * The website's unique identifier that the visitor belongs to.
   */
  websiteId: string;
}

export namespace IDUpdateMetadataResponse {
  /**
   * Normalized acquisition data captured for this visitor.
   */
  export interface Attribution {
    firstTouch: Attribution.FirstTouch;

    /**
     * Schema version for the attribution payload.
     */
    version: 1;
  }

  export namespace Attribution {
    export interface FirstTouch {
      /**
       * When the first-touch attribution snapshot was captured.
       */
      capturedAt: string;

      /**
       * Derived acquisition channel.
       */
      channel: 'direct' | 'email' | 'paid' | 'organic_search' | 'social' | 'referral';

      clickIds: FirstTouch.ClickIDs;

      /**
       * Whether the visit should be treated as direct traffic.
       */
      isDirect: boolean;

      landing: FirstTouch.Landing;

      referrer: FirstTouch.Referrer;

      utm: FirstTouch.Utm;
    }

    export namespace FirstTouch {
      export interface ClickIDs {
        /**
         * Meta click identifier.
         */
        fbclid: string | null;

        /**
         * Google iOS app click identifier.
         */
        gbraid: string | null;

        /**
         * Google Ads click identifier.
         */
        gclid: string | null;

        /**
         * LinkedIn click identifier.
         */
        li_fat_id: string | null;

        /**
         * Microsoft Ads click identifier.
         */
        msclkid: string | null;

        /**
         * TikTok click identifier.
         */
        ttclid: string | null;

        /**
         * X/Twitter click identifier.
         */
        twclid: string | null;

        /**
         * Google web-to-app click identifier.
         */
        wbraid: string | null;
      }

      export interface Landing {
        /**
         * Landing page path.
         */
        path: string | null;

        /**
         * Document title captured on the landing page.
         */
        title: string | null;

        /**
         * Sanitized landing page URL including only supported attribution params.
         */
        url: string | null;
      }

      export interface Referrer {
        /**
         * Normalized referrer hostname.
         */
        domain: string | null;

        /**
         * Sanitized external referrer URL without arbitrary query data.
         */
        url: string | null;
      }

      export interface Utm {
        /**
         * UTM campaign value.
         */
        campaign: string | null;

        /**
         * UTM content value.
         */
        content: string | null;

        /**
         * UTM medium value.
         */
        medium: string | null;

        /**
         * UTM source value.
         */
        source: string | null;

        /**
         * UTM term value.
         */
        term: string | null;
      }
    }
  }

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

  /**
   * Latest page context captured for this visitor.
   */
  export interface CurrentPage {
    /**
     * Current page path.
     */
    path: string | null;

    /**
     * Sanitized document referrer URL for the current page context.
     */
    referrerUrl: string | null;

    /**
     * Current document title.
     */
    title: string | null;

    /**
     * When the current page context was last updated.
     */
    updatedAt: string;

    /**
     * Sanitized current page URL including only supported attribution params.
     */
    url: string | null;
  }
}

export interface IDUpdateIDParams {
  /**
   * Normalized acquisition data captured for this visitor.
   */
  attribution?: IDUpdateIDParams.Attribution;

  /**
   * The visitor's browser.
   */
  browser?: string;

  /**
   * The visitor's browser version.
   */
  browserVersion?: string;

  /**
   * The visitor's city.
   */
  city?: string;

  /**
   * The visitor's country.
   */
  country?: string;

  /**
   * The visitor's country code (ISO 3166-1 alpha-2).
   */
  countryCode?: string;

  /**
   * Latest page context captured for this visitor.
   */
  currentPage?: IDUpdateIDParams.CurrentPage;

  /**
   * The visitor's device.
   */
  device?: string;

  /**
   * The visitor's device type.
   */
  deviceType?: 'desktop' | 'mobile' | 'tablet' | 'unknown';

  /**
   * The visitor's email address.
   */
  email?: string;

  /**
   * External identifier for the visitor (e.g. from your system).
   */
  externalId?: string;

  /**
   * The visitor's IP address.
   */
  ip?: string;

  /**
   * The visitor's preferred language.
   */
  language?: string;

  /**
   * The visitor's latitude.
   */
  latitude?: number;

  /**
   * The visitor's longitude.
   */
  longitude?: number;

  /**
   * Additional custom metadata for the visitor.
   */
  metadata?: { [key: string]: string | number | boolean | null };

  /**
   * The visitor's name.
   */
  name?: string;

  /**
   * The visitor's operating system.
   */
  os?: string;

  /**
   * The visitor's operating system version.
   */
  osVersion?: string;

  /**
   * The visitor's region/state.
   */
  region?: string;

  /**
   * The visitor's screen resolution.
   */
  screenResolution?: string;

  /**
   * The visitor's timezone.
   */
  timezone?: string;

  /**
   * The visitor's viewport size.
   */
  viewport?: string;
}

export namespace IDUpdateIDParams {
  /**
   * Normalized acquisition data captured for this visitor.
   */
  export interface Attribution {
    firstTouch: Attribution.FirstTouch;

    /**
     * Schema version for the attribution payload.
     */
    version: 1;
  }

  export namespace Attribution {
    export interface FirstTouch {
      /**
       * When the first-touch attribution snapshot was captured.
       */
      capturedAt: string;

      /**
       * Derived acquisition channel.
       */
      channel: 'direct' | 'email' | 'paid' | 'organic_search' | 'social' | 'referral';

      clickIds: FirstTouch.ClickIDs;

      /**
       * Whether the visit should be treated as direct traffic.
       */
      isDirect: boolean;

      landing: FirstTouch.Landing;

      referrer: FirstTouch.Referrer;

      utm: FirstTouch.Utm;
    }

    export namespace FirstTouch {
      export interface ClickIDs {
        /**
         * Meta click identifier.
         */
        fbclid: string | null;

        /**
         * Google iOS app click identifier.
         */
        gbraid: string | null;

        /**
         * Google Ads click identifier.
         */
        gclid: string | null;

        /**
         * LinkedIn click identifier.
         */
        li_fat_id: string | null;

        /**
         * Microsoft Ads click identifier.
         */
        msclkid: string | null;

        /**
         * TikTok click identifier.
         */
        ttclid: string | null;

        /**
         * X/Twitter click identifier.
         */
        twclid: string | null;

        /**
         * Google web-to-app click identifier.
         */
        wbraid: string | null;
      }

      export interface Landing {
        /**
         * Landing page path.
         */
        path: string | null;

        /**
         * Document title captured on the landing page.
         */
        title: string | null;

        /**
         * Sanitized landing page URL including only supported attribution params.
         */
        url: string | null;
      }

      export interface Referrer {
        /**
         * Normalized referrer hostname.
         */
        domain: string | null;

        /**
         * Sanitized external referrer URL without arbitrary query data.
         */
        url: string | null;
      }

      export interface Utm {
        /**
         * UTM campaign value.
         */
        campaign: string | null;

        /**
         * UTM content value.
         */
        content: string | null;

        /**
         * UTM medium value.
         */
        medium: string | null;

        /**
         * UTM source value.
         */
        source: string | null;

        /**
         * UTM term value.
         */
        term: string | null;
      }
    }
  }

  /**
   * Latest page context captured for this visitor.
   */
  export interface CurrentPage {
    /**
     * Current page path.
     */
    path: string | null;

    /**
     * Sanitized document referrer URL for the current page context.
     */
    referrerUrl: string | null;

    /**
     * Current document title.
     */
    title: string | null;

    /**
     * When the current page context was last updated.
     */
    updatedAt: string;

    /**
     * Sanitized current page URL including only supported attribution params.
     */
    url: string | null;
  }
}

export interface IDUpdateMetadataParams {
  /**
   * Metadata payload to merge into the visitor's profile.
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
