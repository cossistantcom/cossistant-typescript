// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Feedback extends APIResource {
  /**
   * Returns a paginated list of feedback for the website. Supports filtering by
   * trigger, source, conversation, and visitor.
   *
   * @example
   * ```ts
   * const feedbacks = await client.feedback.list();
   * ```
   */
  list(query: FeedbackListParams | null | undefined = {}, options?: RequestOptions): APIPromise<FeedbackListResponse> {
    return this._client.get('/v1/feedback', { query, ...options, __security: {  } });
  }

  /**
   * Retrieves a single feedback entry by ID
   *
   * @example
   * ```ts
   * const response = await client.feedback.retrieveID();
   * ```
   */
  retrieveID(options?: RequestOptions): APIPromise<FeedbackRetrieveIDResponse> {
    return this._client.get('/v1/feedback/:id', { ...options, __security: {  } });
  }

  /**
   * Submit feedback with a rating, optional topic, and optional comment. Can be tied
   * to a conversation or standalone.
   *
   * @example
   * ```ts
   * const response = await client.feedback.submit({
   *   rating: 5,
   * });
   * ```
   */
  submit(body: FeedbackSubmitParams, options?: RequestOptions): APIPromise<FeedbackSubmitResponse> {
    return this._client.post('/v1/feedback', { body, ...options, __security: {  } });
  }
}

/**
 * Paginated list of feedback
 */
export interface FeedbackListResponse {
  feedback: Array<FeedbackListResponse.Feedback>;

  pagination: FeedbackListResponse.Pagination;
}

export namespace FeedbackListResponse {
  /**
   * Feedback record
   */
  export interface Feedback {
    /**
     * Unique identifier for the feedback
     */
    id: string;

    /**
     * Optional written feedback
     */
    comment: string | null;

    /**
     * Contact ID if visitor has one
     */
    contactId: string | null;

    /**
     * Conversation ID if feedback is tied to a conversation
     */
    conversationId: string | null;

    /**
     * When the feedback was submitted
     */
    createdAt: string;

    /**
     * Organization ID
     */
    organizationId: string;

    /**
     * Rating from 1 to 5
     */
    rating: number;

    /**
     * Source of the feedback (e.g., 'widget', 'api', 'email')
     */
    source: string;

    /**
     * Optional structured topic selected by the visitor
     */
    topic: string | null;

    /**
     * What triggered this feedback (e.g., 'churn', 'conversation_resolved',
     * 'nps_survey')
     */
    trigger: string | null;

    /**
     * When the feedback was last updated
     */
    updatedAt: string;

    /**
     * Visitor ID who submitted the feedback
     */
    visitorId: string | null;

    /**
     * Website ID the feedback belongs to
     */
    websiteId: string;
  }

  export interface Pagination {
    hasMore: boolean;

    limit: number;

    page: number;

    total: number;

    totalPages: number;
  }
}

/**
 * Response containing a single feedback record
 */
export interface FeedbackRetrieveIDResponse {
  /**
   * Feedback record
   */
  feedback: FeedbackRetrieveIDResponse.Feedback;
}

export namespace FeedbackRetrieveIDResponse {
  /**
   * Feedback record
   */
  export interface Feedback {
    /**
     * Unique identifier for the feedback
     */
    id: string;

    /**
     * Optional written feedback
     */
    comment: string | null;

    /**
     * Contact ID if visitor has one
     */
    contactId: string | null;

    /**
     * Conversation ID if feedback is tied to a conversation
     */
    conversationId: string | null;

    /**
     * When the feedback was submitted
     */
    createdAt: string;

    /**
     * Organization ID
     */
    organizationId: string;

    /**
     * Rating from 1 to 5
     */
    rating: number;

    /**
     * Source of the feedback (e.g., 'widget', 'api', 'email')
     */
    source: string;

    /**
     * Optional structured topic selected by the visitor
     */
    topic: string | null;

    /**
     * What triggered this feedback (e.g., 'churn', 'conversation_resolved',
     * 'nps_survey')
     */
    trigger: string | null;

    /**
     * When the feedback was last updated
     */
    updatedAt: string;

    /**
     * Visitor ID who submitted the feedback
     */
    visitorId: string | null;

    /**
     * Website ID the feedback belongs to
     */
    websiteId: string;
  }
}

/**
 * Response containing the created feedback
 */
export interface FeedbackSubmitResponse {
  /**
   * Feedback record
   */
  feedback: FeedbackSubmitResponse.Feedback;
}

export namespace FeedbackSubmitResponse {
  /**
   * Feedback record
   */
  export interface Feedback {
    /**
     * Unique identifier for the feedback
     */
    id: string;

    /**
     * Optional written feedback
     */
    comment: string | null;

    /**
     * Contact ID if visitor has one
     */
    contactId: string | null;

    /**
     * Conversation ID if feedback is tied to a conversation
     */
    conversationId: string | null;

    /**
     * When the feedback was submitted
     */
    createdAt: string;

    /**
     * Organization ID
     */
    organizationId: string;

    /**
     * Rating from 1 to 5
     */
    rating: number;

    /**
     * Source of the feedback (e.g., 'widget', 'api', 'email')
     */
    source: string;

    /**
     * Optional structured topic selected by the visitor
     */
    topic: string | null;

    /**
     * What triggered this feedback (e.g., 'churn', 'conversation_resolved',
     * 'nps_survey')
     */
    trigger: string | null;

    /**
     * When the feedback was last updated
     */
    updatedAt: string;

    /**
     * Visitor ID who submitted the feedback
     */
    visitorId: string | null;

    /**
     * Website ID the feedback belongs to
     */
    websiteId: string;
  }
}

export interface FeedbackListParams {
  conversationId?: string;

  limit?: string;

  page?: string;

  source?: string;

  trigger?: string;

  visitorId?: string;
}

export interface FeedbackSubmitParams {
  /**
   * Rating from 1 to 5
   */
  rating: number;

  /**
   * Optional written feedback
   */
  comment?: string;

  /**
   * Contact ID if visitor has one
   */
  contactId?: string;

  /**
   * Conversation ID if feedback is tied to a conversation
   */
  conversationId?: string;

  /**
   * Source of the feedback (e.g., 'widget', 'api', 'email')
   */
  source?: string;

  /**
   * Optional structured topic selected by the visitor
   */
  topic?: string;

  /**
   * What triggered this feedback (e.g., 'churn', 'conversation_resolved',
   * 'nps_survey')
   */
  trigger?: string;

  /**
   * Visitor ID who submitted the feedback
   */
  visitorId?: string;
}

export declare namespace Feedback {
  export {
    type FeedbackListResponse as FeedbackListResponse,
    type FeedbackRetrieveIDResponse as FeedbackRetrieveIDResponse,
    type FeedbackSubmitResponse as FeedbackSubmitResponse,
    type FeedbackListParams as FeedbackListParams,
    type FeedbackSubmitParams as FeedbackSubmitParams
  };
}
