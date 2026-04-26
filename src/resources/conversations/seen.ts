// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Seen extends APIResource {
  /**
   * Fetch the seen data (read receipts) for a conversation, showing who has seen
   * messages and when.
   *
   * @example
   * ```ts
   * const response =
   *   await client.conversations.seen.getSeenData(
   *     'conversationId',
   *   );
   * ```
   */
  getSeenData(conversationID: string, options?: RequestOptions): APIPromise<SeenGetSeenDataResponse> {
    return this._client.get(path`/v1/conversations/${conversationID}/seen`, { ...options, __security: {  } });
  }

  /**
   * Record a visitor's last seen timestamp for a specific conversation.
   *
   * @example
   * ```ts
   * const response = await client.conversations.seen.markAsSeen(
   *   'conversationId',
   * );
   * ```
   */
  markAsSeen(conversationID: string, body: SeenMarkAsSeenParams | null | undefined = {}, options?: RequestOptions): APIPromise<SeenMarkAsSeenResponse> {
    return this._client.post(path`/v1/conversations/${conversationID}/seen`, { body, ...options, __security: {  } });
  }
}

export interface SeenGetSeenDataResponse {
  seenData: Array<SeenGetSeenDataResponse.SeenData>;
}

export namespace SeenGetSeenDataResponse {
  export interface SeenData {
    id: string;

    aiAgentId: string | null;

    conversationId: string;

    createdAt: string;

    deletedAt: string | null;

    lastSeenAt: string;

    updatedAt: string;

    userId: string | null;

    visitorId: string | null;
  }
}

/**
 * Response confirming the conversation has been marked as seen
 */
export interface SeenMarkAsSeenResponse {
  /**
   * The ID of the conversation that was marked as seen
   */
  conversationId: string;

  /**
   * Timestamp indicating when the visitor last saw the conversation
   */
  lastSeenAt: string;
}

export interface SeenMarkAsSeenParams {
  /**
   * Visitor ID associated with the conversation. Optional if provided via the
   * X-Visitor-Id header.
   */
  visitorId?: string;
}

export declare namespace Seen {
  export {
    type SeenGetSeenDataResponse as SeenGetSeenDataResponse,
    type SeenMarkAsSeenResponse as SeenMarkAsSeenResponse,
    type SeenMarkAsSeenParams as SeenMarkAsSeenParams
  };
}
