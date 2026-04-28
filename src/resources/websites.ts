// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Websites extends APIResource {
  /**
   * Returns the website information associated with the provided API key. This
   * endpoint supports both public and private API keys with different authentication
   * methods.
   */
  retrieve(
    params: WebsiteRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebsiteRetrieveResponse> {
    const { Origin, 'X-Public-Key': xPublicKey, 'X-Visitor-Id': xVisitorID } = params ?? {};
    return this._client.get('/v1/websites', {
      ...options,
      headers: buildHeaders([
        {
          ...(Origin != null ? { Origin: Origin } : undefined),
          ...(xPublicKey != null ? { 'X-Public-Key': xPublicKey } : undefined),
          ...(xVisitorID != null ? { 'X-Visitor-Id': xVisitorID } : undefined),
        },
        options?.headers,
      ]),
      __security: {},
    });
  }
}

export interface WebsiteRetrieveResponse {
  /**
   * The website's unique identifier.
   */
  id: string;

  availableAIAgents: Array<WebsiteRetrieveResponse.AvailableAIAgent>;

  availableHumanAgents: Array<WebsiteRetrieveResponse.AvailableHumanAgent>;

  /**
   * The website's description.
   */
  description: string | null;

  /**
   * The website's domain.
   */
  domain: string;

  /**
   * The website's support last online date.
   */
  lastOnlineAt: string | null;

  /**
   * The website's logo URL.
   */
  logoUrl: string | null;

  /**
   * The website's name.
   */
  name: string;

  /**
   * The organization's unique identifier.
   */
  organizationId: string;

  /**
   * The website's status.
   */
  status: string;

  /**
   * The visitor information. Either existing visitor data or newly created visitor.
   */
  visitor: WebsiteRetrieveResponse.Visitor;
}

export namespace WebsiteRetrieveResponse {
  export interface AvailableAIAgent {
    /**
     * The AI agent's unique identifier.
     */
    id: string;

    /**
     * The AI agent's avatar URL.
     */
    image: string | null;

    /**
     * The AI agent's name.
     */
    name: string;
  }

  export interface AvailableHumanAgent {
    /**
     * The human agent's unique identifier.
     */
    id: string;

    /**
     * The agent's avatar URL.
     */
    image: string | null;

    /**
     * The agent's last online timestamp, used to determine if the agent is online. If
     * the agent is offline, this will be null or more than 5 minutes ago.
     */
    lastSeenAt: string | null;

    /**
     * The agent's name.
     */
    name: string | null;
  }

  /**
   * The visitor information. Either existing visitor data or newly created visitor.
   */
  export interface Visitor {
    /**
     * The visitor's unique identifier (ULID).
     */
    id: string;

    /**
     * Contact information if the visitor has been identified via .identify().
     */
    contact: Visitor.Contact | null;

    /**
     * Whether the visitor is currently blocked.
     */
    isBlocked: boolean;

    /**
     * The visitor's preferred language.
     */
    language: string | null;
  }

  export namespace Visitor {
    /**
     * Contact information if the visitor has been identified via .identify().
     */
    export interface Contact {
      /**
       * The contact's unique identifier.
       */
      id: string;

      /**
       * The contact's email address.
       */
      email: string | null;

      /**
       * The contact's avatar/profile image URL.
       */
      image: string | null;

      /**
       * The contact's name.
       */
      name: string | null;

      /**
       * Hash of the contact's metadata. Used to detect if metadata has changed without
       * comparing full objects.
       */
      metadataHash?: string;
    }
  }
}

export interface WebsiteRetrieveParams {
  /**
   * Required when using public API keys. Must match one of the whitelisted domains
   * for the website. Automatically set by browsers.
   */
  Origin?: string;

  /**
   * Public API key for browser-based authentication. Can only be used from
   * whitelisted domains. Format: `pk_[live|test]_...`
   */
  'X-Public-Key'?: string;

  /**
   * Visitor ID from localStorage. If provided, returns existing visitor data. If not
   * provided, creates a new visitor.
   */
  'X-Visitor-Id'?: string;
}

export declare namespace Websites {
  export {
    type WebsiteRetrieveResponse as WebsiteRetrieveResponse,
    type WebsiteRetrieveParams as WebsiteRetrieveParams,
  };
}
