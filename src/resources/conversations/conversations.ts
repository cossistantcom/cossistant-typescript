// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SeenAPI from './seen';
import { Seen, SeenGetSeenDataResponse, SeenMarkAsSeenParams, SeenMarkAsSeenResponse } from './seen';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Conversations extends APIResource {
  seen: SeenAPI.Seen = new SeenAPI.Seen(this._client);

  /**
   * Create a conversation; optionally pass a conversationId and a set of default
   * timeline items.
   *
   * @example
   * ```ts
   * const conversation = await client.conversations.create({
   *   defaultTimelineItems: [
   *     {
   *       aiAgentId: 'aiAgentId',
   *       conversationId: 'conversationId',
   *       createdAt: 'createdAt',
   *       organizationId: 'organizationId',
   *       parts: [{ text: 'text', type: 'text' }],
   *       text: 'text',
   *       type: 'message',
   *       userId: 'userId',
   *       visibility: 'public',
   *       visitorId: 'visitorId',
   *     },
   *   ],
   * });
   * ```
   */
  create(params: ConversationCreateParams, options?: RequestOptions): APIPromise<ConversationCreateResponse> {
    const { 'X-Public-Key': xPublicKey, 'X-Visitor-Id': xVisitorID, ...body } = params;
    return this._client.post('/v1/conversations', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(xPublicKey != null ? { 'X-Public-Key': xPublicKey } : undefined),
          ...(xVisitorID != null ? { 'X-Visitor-Id': xVisitorID } : undefined),
        },
        options?.headers,
      ]),
      __security: {},
    });
  }

  /**
   * Fetch a specific conversation by its ID.
   *
   * @example
   * ```ts
   * const conversation = await client.conversations.retrieve(
   *   'conversationId',
   * );
   * ```
   */
  retrieve(
    conversationID: string,
    params: ConversationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConversationRetrieveResponse> {
    const { 'X-Public-Key': xPublicKey, 'X-Visitor-Id': xVisitorID } = params ?? {};
    return this._client.get(path`/v1/conversations/${conversationID}`, {
      ...options,
      headers: buildHeaders([
        {
          ...(xPublicKey != null ? { 'X-Public-Key': xPublicKey } : undefined),
          ...(xVisitorID != null ? { 'X-Visitor-Id': xVisitorID } : undefined),
        },
        options?.headers,
      ]),
      __security: {},
    });
  }

  /**
   * Fetch paginated list of conversations for a specific visitor with optional
   * filters.
   *
   * @example
   * ```ts
   * const conversations = await client.conversations.list();
   * ```
   */
  list(
    params: ConversationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConversationListResponse> {
    const { 'X-Public-Key': xPublicKey, 'X-Visitor-Id': xVisitorID, ...query } = params ?? {};
    return this._client.get('/v1/conversations', {
      query,
      ...options,
      headers: buildHeaders([
        {
          ...(xPublicKey != null ? { 'X-Public-Key': xPublicKey } : undefined),
          ...(xVisitorID != null ? { 'X-Visitor-Id': xVisitorID } : undefined),
        },
        options?.headers,
      ]),
      __security: {},
    });
  }

  /**
   * Fetch paginated timeline items (messages and events) for a conversation in
   * chronological order.
   *
   * @example
   * ```ts
   * const response = await client.conversations.getTimeline(
   *   'conversationId',
   * );
   * ```
   */
  getTimeline(
    conversationID: string,
    query: ConversationGetTimelineParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConversationGetTimelineResponse> {
    return this._client.get(path`/v1/conversations/${conversationID}/timeline`, {
      query,
      ...options,
      __security: {},
    });
  }

  /**
   * Emit a typing indicator event for the visitor. Either visitorId must be provided
   * via body or headers.
   *
   * @example
   * ```ts
   * const response = await client.conversations.reportTyping(
   *   'conversationId',
   *   { isTyping: true },
   * );
   * ```
   */
  reportTyping(
    conversationID: string,
    body: ConversationReportTypingParams,
    options?: RequestOptions,
  ): APIPromise<ConversationReportTypingResponse> {
    return this._client.post(path`/v1/conversations/${conversationID}/typing`, {
      body,
      ...options,
      __security: {},
    });
  }

  /**
   * Record a visitor rating (1-5) for a resolved conversation. Requires visitor
   * ownership.
   *
   * @example
   * ```ts
   * const response = await client.conversations.submitRating(
   *   'conversationId',
   *   { rating: 5 },
   * );
   * ```
   */
  submitRating(
    conversationID: string,
    body: ConversationSubmitRatingParams,
    options?: RequestOptions,
  ): APIPromise<ConversationSubmitRatingResponse> {
    return this._client.post(path`/v1/conversations/${conversationID}/rating`, {
      body,
      ...options,
      __security: {},
    });
  }
}

/**
 * Body including created conversation and default messages
 */
export interface ConversationCreateResponse {
  conversation: ConversationCreateResponse.Conversation;

  initialTimelineItems: Array<ConversationCreateResponse.InitialTimelineItem>;
}

export namespace ConversationCreateResponse {
  export interface Conversation {
    id: string;

    createdAt: string;

    updatedAt: string;

    visitorId: string;

    websiteId: string;

    deletedAt?: string | null;

    lastTimelineItem?: Conversation.LastTimelineItem;

    status?: 'open' | 'resolved' | 'spam';

    title?: string;

    visitorLastSeenAt?: string | null;

    visitorRating?: number | null;

    visitorRatingAt?: string | null;
  }

  export namespace Conversation {
    export interface LastTimelineItem {
      /**
       * ID of the AI agent that created this timeline item, if applicable
       */
      aiAgentId: string | null;

      /**
       * ID of the conversation this timeline item belongs to
       */
      conversationId: string;

      /**
       * ISO 8601 timestamp when the timeline item was created
       */
      createdAt: string;

      /**
       * ID of the organization this timeline item belongs to
       */
      organizationId: string;

      /**
       * Array of timeline parts that make up the timeline item content. Includes AI SDK
       * compatible parts (text, reasoning, tool-\*, source-url, source-document,
       * step-start, file, image) and Cossistant-specific parts (event, metadata).
       */
      parts: Array<
        | LastTimelineItem.UnionMember0
        | LastTimelineItem.UnionMember1
        | LastTimelineItem.UnionMember2
        | LastTimelineItem.UnionMember3
        | LastTimelineItem.UnionMember4
        | LastTimelineItem.Type
        | LastTimelineItem.UnionMember6
        | LastTimelineItem.UnionMember7
        | LastTimelineItem.UnionMember8
        | LastTimelineItem.UnionMember9
      >;

      /**
       * Main text content of the timeline item
       */
      text: string | null;

      /**
       * Type of timeline item - message, event, identification, or tool call
       */
      type: 'message' | 'event' | 'identification' | 'tool';

      /**
       * ID of the user who created this timeline item, if applicable
       */
      userId: string | null;

      /**
       * Visibility level of the timeline item
       */
      visibility: 'public' | 'private';

      /**
       * ID of the visitor who created this timeline item, if applicable
       */
      visitorId: string | null;

      /**
       * Unique identifier for the timeline item
       */
      id?: string;

      /**
       * ISO 8601 timestamp when the timeline item was deleted, if applicable
       */
      deletedAt?: string | null;

      /**
       * Optional tool identifier associated with this timeline item
       */
      tool?: string | null;
    }

    export namespace LastTimelineItem {
      export interface UnionMember0 {
        /**
         * The text content
         */
        text: string;

        /**
         * Text content part - matches AI SDK TextUIPart
         */
        type: 'text';

        /**
         * AI SDK state: 'streaming' = still processing, 'done' = complete
         */
        state?: 'streaming' | 'done';
      }

      export interface UnionMember1 {
        /**
         * The reasoning text content
         */
        text: string;

        /**
         * AI reasoning/chain-of-thought - matches AI SDK ReasoningUIPart
         */
        type: 'reasoning';

        providerMetadata?: UnionMember1.ProviderMetadata;

        /**
         * AI SDK state: 'streaming' = still processing, 'done' = complete
         */
        state?: 'streaming' | 'done';
      }

      export namespace UnionMember1 {
        export interface ProviderMetadata {
          cossistant?: ProviderMetadata.Cossistant;

          [k: string]: unknown;
        }

        export namespace ProviderMetadata {
          export interface Cossistant {
            /**
             * Reference to a Cossistant knowledge entry
             */
            knowledgeId?: string;

            /**
             * Custom progress message to display during execution
             */
            progressMessage?: string;

            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            toolTimeline?: Cossistant.ToolTimeline;

            /**
             * Part-level visibility control for filtering
             */
            visibility?: 'public' | 'private';
          }

          export namespace Cossistant {
            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            export interface ToolTimeline {
              /**
               * Tool timeline classification: conversation-visible, log-only, or decision stage
               */
              logType: 'customer_facing' | 'log' | 'decision';

              /**
               * Message ID that triggered the tool/decision workflow execution
               */
              triggerMessageId: string;

              /**
               * Workflow run identifier used to correlate tool timeline updates
               */
              workflowRunId: string;

              /**
               * Visibility of the trigger message at the time the tool was executed
               */
              triggerVisibility?: 'public' | 'private';
            }
          }
        }
      }

      export interface UnionMember2 {
        /**
         * Input parameters passed to the tool
         */
        input: { [key: string]: unknown };

        /**
         * AI SDK tool state: 'partial' = executing, 'result' = success, 'error' = failed
         */
        state: 'partial' | 'result' | 'error';

        /**
         * Unique identifier for this tool invocation
         */
        toolCallId: string;

        /**
         * Name of the tool being invoked
         */
        toolName: string;

        /**
         * Tool type following AI SDK pattern: tool-{toolName}
         */
        type: string;

        callProviderMetadata?: UnionMember2.CallProviderMetadata;

        /**
         * Error message when state is 'error'
         */
        errorText?: string;

        /**
         * Output returned by the tool (when state is 'result')
         */
        output?: unknown;

        providerMetadata?: UnionMember2.ProviderMetadata;
      }

      export namespace UnionMember2 {
        export interface CallProviderMetadata {
          cossistant?: CallProviderMetadata.Cossistant;

          [k: string]: unknown;
        }

        export namespace CallProviderMetadata {
          export interface Cossistant {
            /**
             * Reference to a Cossistant knowledge entry
             */
            knowledgeId?: string;

            /**
             * Custom progress message to display during execution
             */
            progressMessage?: string;

            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            toolTimeline?: Cossistant.ToolTimeline;

            /**
             * Part-level visibility control for filtering
             */
            visibility?: 'public' | 'private';
          }

          export namespace Cossistant {
            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            export interface ToolTimeline {
              /**
               * Tool timeline classification: conversation-visible, log-only, or decision stage
               */
              logType: 'customer_facing' | 'log' | 'decision';

              /**
               * Message ID that triggered the tool/decision workflow execution
               */
              triggerMessageId: string;

              /**
               * Workflow run identifier used to correlate tool timeline updates
               */
              workflowRunId: string;

              /**
               * Visibility of the trigger message at the time the tool was executed
               */
              triggerVisibility?: 'public' | 'private';
            }
          }
        }

        export interface ProviderMetadata {
          cossistant?: ProviderMetadata.Cossistant;

          [k: string]: unknown;
        }

        export namespace ProviderMetadata {
          export interface Cossistant {
            /**
             * Reference to a Cossistant knowledge entry
             */
            knowledgeId?: string;

            /**
             * Custom progress message to display during execution
             */
            progressMessage?: string;

            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            toolTimeline?: Cossistant.ToolTimeline;

            /**
             * Part-level visibility control for filtering
             */
            visibility?: 'public' | 'private';
          }

          export namespace Cossistant {
            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            export interface ToolTimeline {
              /**
               * Tool timeline classification: conversation-visible, log-only, or decision stage
               */
              logType: 'customer_facing' | 'log' | 'decision';

              /**
               * Message ID that triggered the tool/decision workflow execution
               */
              triggerMessageId: string;

              /**
               * Workflow run identifier used to correlate tool timeline updates
               */
              workflowRunId: string;

              /**
               * Visibility of the trigger message at the time the tool was executed
               */
              triggerVisibility?: 'public' | 'private';
            }
          }
        }
      }

      export interface UnionMember3 {
        /**
         * Unique identifier for this source
         */
        sourceId: string;

        /**
         * URL source citation - matches AI SDK SourceUrlUIPart
         */
        type: 'source-url';

        /**
         * URL of the source
         */
        url: string;

        providerMetadata?: UnionMember3.ProviderMetadata;

        /**
         * Title of the source
         */
        title?: string;
      }

      export namespace UnionMember3 {
        export interface ProviderMetadata {
          cossistant?: ProviderMetadata.Cossistant;

          [k: string]: unknown;
        }

        export namespace ProviderMetadata {
          export interface Cossistant {
            /**
             * Reference to a Cossistant knowledge entry
             */
            knowledgeId?: string;

            /**
             * Custom progress message to display during execution
             */
            progressMessage?: string;

            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            toolTimeline?: Cossistant.ToolTimeline;

            /**
             * Part-level visibility control for filtering
             */
            visibility?: 'public' | 'private';
          }

          export namespace Cossistant {
            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            export interface ToolTimeline {
              /**
               * Tool timeline classification: conversation-visible, log-only, or decision stage
               */
              logType: 'customer_facing' | 'log' | 'decision';

              /**
               * Message ID that triggered the tool/decision workflow execution
               */
              triggerMessageId: string;

              /**
               * Workflow run identifier used to correlate tool timeline updates
               */
              workflowRunId: string;

              /**
               * Visibility of the trigger message at the time the tool was executed
               */
              triggerVisibility?: 'public' | 'private';
            }
          }
        }
      }

      export interface UnionMember4 {
        /**
         * IANA media type of the document
         */
        mediaType: string;

        /**
         * Unique identifier for this source
         */
        sourceId: string;

        /**
         * Title of the document
         */
        title: string;

        /**
         * Document source citation - matches AI SDK SourceDocumentUIPart
         */
        type: 'source-document';

        /**
         * Filename of the document
         */
        filename?: string;

        providerMetadata?: UnionMember4.ProviderMetadata;
      }

      export namespace UnionMember4 {
        export interface ProviderMetadata {
          cossistant?: ProviderMetadata.Cossistant;

          [k: string]: unknown;
        }

        export namespace ProviderMetadata {
          export interface Cossistant {
            /**
             * Reference to a Cossistant knowledge entry
             */
            knowledgeId?: string;

            /**
             * Custom progress message to display during execution
             */
            progressMessage?: string;

            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            toolTimeline?: Cossistant.ToolTimeline;

            /**
             * Part-level visibility control for filtering
             */
            visibility?: 'public' | 'private';
          }

          export namespace Cossistant {
            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            export interface ToolTimeline {
              /**
               * Tool timeline classification: conversation-visible, log-only, or decision stage
               */
              logType: 'customer_facing' | 'log' | 'decision';

              /**
               * Message ID that triggered the tool/decision workflow execution
               */
              triggerMessageId: string;

              /**
               * Workflow run identifier used to correlate tool timeline updates
               */
              workflowRunId: string;

              /**
               * Visibility of the trigger message at the time the tool was executed
               */
              triggerVisibility?: 'public' | 'private';
            }
          }
        }
      }

      export interface Type {
        /**
         * Step boundary marker - matches AI SDK StepStartUIPart
         */
        type: 'step-start';
      }

      export interface UnionMember6 {
        /**
         * IANA media type of the file
         */
        mediaType: string;

        /**
         * File attachment - matches AI SDK FileUIPart
         */
        type: 'file';

        /**
         * URL of the file (can be hosted URL or Data URL)
         */
        url: string;

        /**
         * Original filename
         */
        filename?: string;

        /**
         * Size of the file in bytes
         */
        size?: number;
      }

      export interface UnionMember7 {
        /**
         * IANA media type of the image
         */
        mediaType: string;

        /**
         * Image attachment with dimensions
         */
        type: 'image';

        /**
         * URL of the image
         */
        url: string;

        /**
         * Original filename of the image
         */
        filename?: string;

        /**
         * Height of the image in pixels
         */
        height?: number;

        /**
         * Size of the image in bytes
         */
        size?: number;

        /**
         * Width of the image in pixels
         */
        width?: number;
      }

      export interface UnionMember8 {
        /**
         * AI agent that triggered the event, if applicable
         */
        actorAiAgentId: string | null;

        /**
         * User that triggered the event, if applicable
         */
        actorUserId: string | null;

        /**
         * Type of event that occurred
         */
        eventType:
          | 'assigned'
          | 'unassigned'
          | 'participant_requested'
          | 'participant_joined'
          | 'participant_left'
          | 'status_changed'
          | 'priority_changed'
          | 'tag_added'
          | 'tag_removed'
          | 'resolved'
          | 'reopened'
          | 'visitor_blocked'
          | 'visitor_unblocked'
          | 'visitor_identified'
          | 'ai_paused'
          | 'ai_resumed';

        /**
         * AI agent targeted by the event, if applicable
         */
        targetAiAgentId: string | null;

        /**
         * User targeted by the event, if applicable
         */
        targetUserId: string | null;

        /**
         * Type of timeline part - always 'event' for event parts
         */
        type: 'event';

        /**
         * Optional human readable message attached to the event
         */
        message?: string | null;
      }

      export interface UnionMember9 {
        /**
         * Source channel through which the message was created
         */
        source: 'email' | 'widget' | 'api';

        /**
         * Type of timeline part - always 'metadata' for metadata parts
         */
        type: 'metadata';
      }
    }
  }

  export interface InitialTimelineItem {
    /**
     * ID of the AI agent that created this timeline item, if applicable
     */
    aiAgentId: string | null;

    /**
     * ID of the conversation this timeline item belongs to
     */
    conversationId: string;

    /**
     * ISO 8601 timestamp when the timeline item was created
     */
    createdAt: string;

    /**
     * ID of the organization this timeline item belongs to
     */
    organizationId: string;

    /**
     * Array of timeline parts that make up the timeline item content. Includes AI SDK
     * compatible parts (text, reasoning, tool-\*, source-url, source-document,
     * step-start, file, image) and Cossistant-specific parts (event, metadata).
     */
    parts: Array<
      | InitialTimelineItem.UnionMember0
      | InitialTimelineItem.UnionMember1
      | InitialTimelineItem.UnionMember2
      | InitialTimelineItem.UnionMember3
      | InitialTimelineItem.UnionMember4
      | InitialTimelineItem.Type
      | InitialTimelineItem.UnionMember6
      | InitialTimelineItem.UnionMember7
      | InitialTimelineItem.UnionMember8
      | InitialTimelineItem.UnionMember9
    >;

    /**
     * Main text content of the timeline item
     */
    text: string | null;

    /**
     * Type of timeline item - message, event, identification, or tool call
     */
    type: 'message' | 'event' | 'identification' | 'tool';

    /**
     * ID of the user who created this timeline item, if applicable
     */
    userId: string | null;

    /**
     * Visibility level of the timeline item
     */
    visibility: 'public' | 'private';

    /**
     * ID of the visitor who created this timeline item, if applicable
     */
    visitorId: string | null;

    /**
     * Unique identifier for the timeline item
     */
    id?: string;

    /**
     * ISO 8601 timestamp when the timeline item was deleted, if applicable
     */
    deletedAt?: string | null;

    /**
     * Optional tool identifier associated with this timeline item
     */
    tool?: string | null;
  }

  export namespace InitialTimelineItem {
    export interface UnionMember0 {
      /**
       * The text content
       */
      text: string;

      /**
       * Text content part - matches AI SDK TextUIPart
       */
      type: 'text';

      /**
       * AI SDK state: 'streaming' = still processing, 'done' = complete
       */
      state?: 'streaming' | 'done';
    }

    export interface UnionMember1 {
      /**
       * The reasoning text content
       */
      text: string;

      /**
       * AI reasoning/chain-of-thought - matches AI SDK ReasoningUIPart
       */
      type: 'reasoning';

      providerMetadata?: UnionMember1.ProviderMetadata;

      /**
       * AI SDK state: 'streaming' = still processing, 'done' = complete
       */
      state?: 'streaming' | 'done';
    }

    export namespace UnionMember1 {
      export interface ProviderMetadata {
        cossistant?: ProviderMetadata.Cossistant;

        [k: string]: unknown;
      }

      export namespace ProviderMetadata {
        export interface Cossistant {
          /**
           * Reference to a Cossistant knowledge entry
           */
          knowledgeId?: string;

          /**
           * Custom progress message to display during execution
           */
          progressMessage?: string;

          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          toolTimeline?: Cossistant.ToolTimeline;

          /**
           * Part-level visibility control for filtering
           */
          visibility?: 'public' | 'private';
        }

        export namespace Cossistant {
          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          export interface ToolTimeline {
            /**
             * Tool timeline classification: conversation-visible, log-only, or decision stage
             */
            logType: 'customer_facing' | 'log' | 'decision';

            /**
             * Message ID that triggered the tool/decision workflow execution
             */
            triggerMessageId: string;

            /**
             * Workflow run identifier used to correlate tool timeline updates
             */
            workflowRunId: string;

            /**
             * Visibility of the trigger message at the time the tool was executed
             */
            triggerVisibility?: 'public' | 'private';
          }
        }
      }
    }

    export interface UnionMember2 {
      /**
       * Input parameters passed to the tool
       */
      input: { [key: string]: unknown };

      /**
       * AI SDK tool state: 'partial' = executing, 'result' = success, 'error' = failed
       */
      state: 'partial' | 'result' | 'error';

      /**
       * Unique identifier for this tool invocation
       */
      toolCallId: string;

      /**
       * Name of the tool being invoked
       */
      toolName: string;

      /**
       * Tool type following AI SDK pattern: tool-{toolName}
       */
      type: string;

      callProviderMetadata?: UnionMember2.CallProviderMetadata;

      /**
       * Error message when state is 'error'
       */
      errorText?: string;

      /**
       * Output returned by the tool (when state is 'result')
       */
      output?: unknown;

      providerMetadata?: UnionMember2.ProviderMetadata;
    }

    export namespace UnionMember2 {
      export interface CallProviderMetadata {
        cossistant?: CallProviderMetadata.Cossistant;

        [k: string]: unknown;
      }

      export namespace CallProviderMetadata {
        export interface Cossistant {
          /**
           * Reference to a Cossistant knowledge entry
           */
          knowledgeId?: string;

          /**
           * Custom progress message to display during execution
           */
          progressMessage?: string;

          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          toolTimeline?: Cossistant.ToolTimeline;

          /**
           * Part-level visibility control for filtering
           */
          visibility?: 'public' | 'private';
        }

        export namespace Cossistant {
          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          export interface ToolTimeline {
            /**
             * Tool timeline classification: conversation-visible, log-only, or decision stage
             */
            logType: 'customer_facing' | 'log' | 'decision';

            /**
             * Message ID that triggered the tool/decision workflow execution
             */
            triggerMessageId: string;

            /**
             * Workflow run identifier used to correlate tool timeline updates
             */
            workflowRunId: string;

            /**
             * Visibility of the trigger message at the time the tool was executed
             */
            triggerVisibility?: 'public' | 'private';
          }
        }
      }

      export interface ProviderMetadata {
        cossistant?: ProviderMetadata.Cossistant;

        [k: string]: unknown;
      }

      export namespace ProviderMetadata {
        export interface Cossistant {
          /**
           * Reference to a Cossistant knowledge entry
           */
          knowledgeId?: string;

          /**
           * Custom progress message to display during execution
           */
          progressMessage?: string;

          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          toolTimeline?: Cossistant.ToolTimeline;

          /**
           * Part-level visibility control for filtering
           */
          visibility?: 'public' | 'private';
        }

        export namespace Cossistant {
          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          export interface ToolTimeline {
            /**
             * Tool timeline classification: conversation-visible, log-only, or decision stage
             */
            logType: 'customer_facing' | 'log' | 'decision';

            /**
             * Message ID that triggered the tool/decision workflow execution
             */
            triggerMessageId: string;

            /**
             * Workflow run identifier used to correlate tool timeline updates
             */
            workflowRunId: string;

            /**
             * Visibility of the trigger message at the time the tool was executed
             */
            triggerVisibility?: 'public' | 'private';
          }
        }
      }
    }

    export interface UnionMember3 {
      /**
       * Unique identifier for this source
       */
      sourceId: string;

      /**
       * URL source citation - matches AI SDK SourceUrlUIPart
       */
      type: 'source-url';

      /**
       * URL of the source
       */
      url: string;

      providerMetadata?: UnionMember3.ProviderMetadata;

      /**
       * Title of the source
       */
      title?: string;
    }

    export namespace UnionMember3 {
      export interface ProviderMetadata {
        cossistant?: ProviderMetadata.Cossistant;

        [k: string]: unknown;
      }

      export namespace ProviderMetadata {
        export interface Cossistant {
          /**
           * Reference to a Cossistant knowledge entry
           */
          knowledgeId?: string;

          /**
           * Custom progress message to display during execution
           */
          progressMessage?: string;

          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          toolTimeline?: Cossistant.ToolTimeline;

          /**
           * Part-level visibility control for filtering
           */
          visibility?: 'public' | 'private';
        }

        export namespace Cossistant {
          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          export interface ToolTimeline {
            /**
             * Tool timeline classification: conversation-visible, log-only, or decision stage
             */
            logType: 'customer_facing' | 'log' | 'decision';

            /**
             * Message ID that triggered the tool/decision workflow execution
             */
            triggerMessageId: string;

            /**
             * Workflow run identifier used to correlate tool timeline updates
             */
            workflowRunId: string;

            /**
             * Visibility of the trigger message at the time the tool was executed
             */
            triggerVisibility?: 'public' | 'private';
          }
        }
      }
    }

    export interface UnionMember4 {
      /**
       * IANA media type of the document
       */
      mediaType: string;

      /**
       * Unique identifier for this source
       */
      sourceId: string;

      /**
       * Title of the document
       */
      title: string;

      /**
       * Document source citation - matches AI SDK SourceDocumentUIPart
       */
      type: 'source-document';

      /**
       * Filename of the document
       */
      filename?: string;

      providerMetadata?: UnionMember4.ProviderMetadata;
    }

    export namespace UnionMember4 {
      export interface ProviderMetadata {
        cossistant?: ProviderMetadata.Cossistant;

        [k: string]: unknown;
      }

      export namespace ProviderMetadata {
        export interface Cossistant {
          /**
           * Reference to a Cossistant knowledge entry
           */
          knowledgeId?: string;

          /**
           * Custom progress message to display during execution
           */
          progressMessage?: string;

          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          toolTimeline?: Cossistant.ToolTimeline;

          /**
           * Part-level visibility control for filtering
           */
          visibility?: 'public' | 'private';
        }

        export namespace Cossistant {
          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          export interface ToolTimeline {
            /**
             * Tool timeline classification: conversation-visible, log-only, or decision stage
             */
            logType: 'customer_facing' | 'log' | 'decision';

            /**
             * Message ID that triggered the tool/decision workflow execution
             */
            triggerMessageId: string;

            /**
             * Workflow run identifier used to correlate tool timeline updates
             */
            workflowRunId: string;

            /**
             * Visibility of the trigger message at the time the tool was executed
             */
            triggerVisibility?: 'public' | 'private';
          }
        }
      }
    }

    export interface Type {
      /**
       * Step boundary marker - matches AI SDK StepStartUIPart
       */
      type: 'step-start';
    }

    export interface UnionMember6 {
      /**
       * IANA media type of the file
       */
      mediaType: string;

      /**
       * File attachment - matches AI SDK FileUIPart
       */
      type: 'file';

      /**
       * URL of the file (can be hosted URL or Data URL)
       */
      url: string;

      /**
       * Original filename
       */
      filename?: string;

      /**
       * Size of the file in bytes
       */
      size?: number;
    }

    export interface UnionMember7 {
      /**
       * IANA media type of the image
       */
      mediaType: string;

      /**
       * Image attachment with dimensions
       */
      type: 'image';

      /**
       * URL of the image
       */
      url: string;

      /**
       * Original filename of the image
       */
      filename?: string;

      /**
       * Height of the image in pixels
       */
      height?: number;

      /**
       * Size of the image in bytes
       */
      size?: number;

      /**
       * Width of the image in pixels
       */
      width?: number;
    }

    export interface UnionMember8 {
      /**
       * AI agent that triggered the event, if applicable
       */
      actorAiAgentId: string | null;

      /**
       * User that triggered the event, if applicable
       */
      actorUserId: string | null;

      /**
       * Type of event that occurred
       */
      eventType:
        | 'assigned'
        | 'unassigned'
        | 'participant_requested'
        | 'participant_joined'
        | 'participant_left'
        | 'status_changed'
        | 'priority_changed'
        | 'tag_added'
        | 'tag_removed'
        | 'resolved'
        | 'reopened'
        | 'visitor_blocked'
        | 'visitor_unblocked'
        | 'visitor_identified'
        | 'ai_paused'
        | 'ai_resumed';

      /**
       * AI agent targeted by the event, if applicable
       */
      targetAiAgentId: string | null;

      /**
       * User targeted by the event, if applicable
       */
      targetUserId: string | null;

      /**
       * Type of timeline part - always 'event' for event parts
       */
      type: 'event';

      /**
       * Optional human readable message attached to the event
       */
      message?: string | null;
    }

    export interface UnionMember9 {
      /**
       * Source channel through which the message was created
       */
      source: 'email' | 'widget' | 'api';

      /**
       * Type of timeline part - always 'metadata' for metadata parts
       */
      type: 'metadata';
    }
  }
}

/**
 * Response containing a single conversation
 */
export interface ConversationRetrieveResponse {
  conversation: ConversationRetrieveResponse.Conversation;
}

export namespace ConversationRetrieveResponse {
  export interface Conversation {
    id: string;

    createdAt: string;

    updatedAt: string;

    visitorId: string;

    websiteId: string;

    deletedAt?: string | null;

    lastTimelineItem?: Conversation.LastTimelineItem;

    status?: 'open' | 'resolved' | 'spam';

    title?: string;

    visitorLastSeenAt?: string | null;

    visitorRating?: number | null;

    visitorRatingAt?: string | null;
  }

  export namespace Conversation {
    export interface LastTimelineItem {
      /**
       * ID of the AI agent that created this timeline item, if applicable
       */
      aiAgentId: string | null;

      /**
       * ID of the conversation this timeline item belongs to
       */
      conversationId: string;

      /**
       * ISO 8601 timestamp when the timeline item was created
       */
      createdAt: string;

      /**
       * ID of the organization this timeline item belongs to
       */
      organizationId: string;

      /**
       * Array of timeline parts that make up the timeline item content. Includes AI SDK
       * compatible parts (text, reasoning, tool-\*, source-url, source-document,
       * step-start, file, image) and Cossistant-specific parts (event, metadata).
       */
      parts: Array<
        | LastTimelineItem.UnionMember0
        | LastTimelineItem.UnionMember1
        | LastTimelineItem.UnionMember2
        | LastTimelineItem.UnionMember3
        | LastTimelineItem.UnionMember4
        | LastTimelineItem.Type
        | LastTimelineItem.UnionMember6
        | LastTimelineItem.UnionMember7
        | LastTimelineItem.UnionMember8
        | LastTimelineItem.UnionMember9
      >;

      /**
       * Main text content of the timeline item
       */
      text: string | null;

      /**
       * Type of timeline item - message, event, identification, or tool call
       */
      type: 'message' | 'event' | 'identification' | 'tool';

      /**
       * ID of the user who created this timeline item, if applicable
       */
      userId: string | null;

      /**
       * Visibility level of the timeline item
       */
      visibility: 'public' | 'private';

      /**
       * ID of the visitor who created this timeline item, if applicable
       */
      visitorId: string | null;

      /**
       * Unique identifier for the timeline item
       */
      id?: string;

      /**
       * ISO 8601 timestamp when the timeline item was deleted, if applicable
       */
      deletedAt?: string | null;

      /**
       * Optional tool identifier associated with this timeline item
       */
      tool?: string | null;
    }

    export namespace LastTimelineItem {
      export interface UnionMember0 {
        /**
         * The text content
         */
        text: string;

        /**
         * Text content part - matches AI SDK TextUIPart
         */
        type: 'text';

        /**
         * AI SDK state: 'streaming' = still processing, 'done' = complete
         */
        state?: 'streaming' | 'done';
      }

      export interface UnionMember1 {
        /**
         * The reasoning text content
         */
        text: string;

        /**
         * AI reasoning/chain-of-thought - matches AI SDK ReasoningUIPart
         */
        type: 'reasoning';

        providerMetadata?: UnionMember1.ProviderMetadata;

        /**
         * AI SDK state: 'streaming' = still processing, 'done' = complete
         */
        state?: 'streaming' | 'done';
      }

      export namespace UnionMember1 {
        export interface ProviderMetadata {
          cossistant?: ProviderMetadata.Cossistant;

          [k: string]: unknown;
        }

        export namespace ProviderMetadata {
          export interface Cossistant {
            /**
             * Reference to a Cossistant knowledge entry
             */
            knowledgeId?: string;

            /**
             * Custom progress message to display during execution
             */
            progressMessage?: string;

            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            toolTimeline?: Cossistant.ToolTimeline;

            /**
             * Part-level visibility control for filtering
             */
            visibility?: 'public' | 'private';
          }

          export namespace Cossistant {
            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            export interface ToolTimeline {
              /**
               * Tool timeline classification: conversation-visible, log-only, or decision stage
               */
              logType: 'customer_facing' | 'log' | 'decision';

              /**
               * Message ID that triggered the tool/decision workflow execution
               */
              triggerMessageId: string;

              /**
               * Workflow run identifier used to correlate tool timeline updates
               */
              workflowRunId: string;

              /**
               * Visibility of the trigger message at the time the tool was executed
               */
              triggerVisibility?: 'public' | 'private';
            }
          }
        }
      }

      export interface UnionMember2 {
        /**
         * Input parameters passed to the tool
         */
        input: { [key: string]: unknown };

        /**
         * AI SDK tool state: 'partial' = executing, 'result' = success, 'error' = failed
         */
        state: 'partial' | 'result' | 'error';

        /**
         * Unique identifier for this tool invocation
         */
        toolCallId: string;

        /**
         * Name of the tool being invoked
         */
        toolName: string;

        /**
         * Tool type following AI SDK pattern: tool-{toolName}
         */
        type: string;

        callProviderMetadata?: UnionMember2.CallProviderMetadata;

        /**
         * Error message when state is 'error'
         */
        errorText?: string;

        /**
         * Output returned by the tool (when state is 'result')
         */
        output?: unknown;

        providerMetadata?: UnionMember2.ProviderMetadata;
      }

      export namespace UnionMember2 {
        export interface CallProviderMetadata {
          cossistant?: CallProviderMetadata.Cossistant;

          [k: string]: unknown;
        }

        export namespace CallProviderMetadata {
          export interface Cossistant {
            /**
             * Reference to a Cossistant knowledge entry
             */
            knowledgeId?: string;

            /**
             * Custom progress message to display during execution
             */
            progressMessage?: string;

            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            toolTimeline?: Cossistant.ToolTimeline;

            /**
             * Part-level visibility control for filtering
             */
            visibility?: 'public' | 'private';
          }

          export namespace Cossistant {
            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            export interface ToolTimeline {
              /**
               * Tool timeline classification: conversation-visible, log-only, or decision stage
               */
              logType: 'customer_facing' | 'log' | 'decision';

              /**
               * Message ID that triggered the tool/decision workflow execution
               */
              triggerMessageId: string;

              /**
               * Workflow run identifier used to correlate tool timeline updates
               */
              workflowRunId: string;

              /**
               * Visibility of the trigger message at the time the tool was executed
               */
              triggerVisibility?: 'public' | 'private';
            }
          }
        }

        export interface ProviderMetadata {
          cossistant?: ProviderMetadata.Cossistant;

          [k: string]: unknown;
        }

        export namespace ProviderMetadata {
          export interface Cossistant {
            /**
             * Reference to a Cossistant knowledge entry
             */
            knowledgeId?: string;

            /**
             * Custom progress message to display during execution
             */
            progressMessage?: string;

            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            toolTimeline?: Cossistant.ToolTimeline;

            /**
             * Part-level visibility control for filtering
             */
            visibility?: 'public' | 'private';
          }

          export namespace Cossistant {
            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            export interface ToolTimeline {
              /**
               * Tool timeline classification: conversation-visible, log-only, or decision stage
               */
              logType: 'customer_facing' | 'log' | 'decision';

              /**
               * Message ID that triggered the tool/decision workflow execution
               */
              triggerMessageId: string;

              /**
               * Workflow run identifier used to correlate tool timeline updates
               */
              workflowRunId: string;

              /**
               * Visibility of the trigger message at the time the tool was executed
               */
              triggerVisibility?: 'public' | 'private';
            }
          }
        }
      }

      export interface UnionMember3 {
        /**
         * Unique identifier for this source
         */
        sourceId: string;

        /**
         * URL source citation - matches AI SDK SourceUrlUIPart
         */
        type: 'source-url';

        /**
         * URL of the source
         */
        url: string;

        providerMetadata?: UnionMember3.ProviderMetadata;

        /**
         * Title of the source
         */
        title?: string;
      }

      export namespace UnionMember3 {
        export interface ProviderMetadata {
          cossistant?: ProviderMetadata.Cossistant;

          [k: string]: unknown;
        }

        export namespace ProviderMetadata {
          export interface Cossistant {
            /**
             * Reference to a Cossistant knowledge entry
             */
            knowledgeId?: string;

            /**
             * Custom progress message to display during execution
             */
            progressMessage?: string;

            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            toolTimeline?: Cossistant.ToolTimeline;

            /**
             * Part-level visibility control for filtering
             */
            visibility?: 'public' | 'private';
          }

          export namespace Cossistant {
            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            export interface ToolTimeline {
              /**
               * Tool timeline classification: conversation-visible, log-only, or decision stage
               */
              logType: 'customer_facing' | 'log' | 'decision';

              /**
               * Message ID that triggered the tool/decision workflow execution
               */
              triggerMessageId: string;

              /**
               * Workflow run identifier used to correlate tool timeline updates
               */
              workflowRunId: string;

              /**
               * Visibility of the trigger message at the time the tool was executed
               */
              triggerVisibility?: 'public' | 'private';
            }
          }
        }
      }

      export interface UnionMember4 {
        /**
         * IANA media type of the document
         */
        mediaType: string;

        /**
         * Unique identifier for this source
         */
        sourceId: string;

        /**
         * Title of the document
         */
        title: string;

        /**
         * Document source citation - matches AI SDK SourceDocumentUIPart
         */
        type: 'source-document';

        /**
         * Filename of the document
         */
        filename?: string;

        providerMetadata?: UnionMember4.ProviderMetadata;
      }

      export namespace UnionMember4 {
        export interface ProviderMetadata {
          cossistant?: ProviderMetadata.Cossistant;

          [k: string]: unknown;
        }

        export namespace ProviderMetadata {
          export interface Cossistant {
            /**
             * Reference to a Cossistant knowledge entry
             */
            knowledgeId?: string;

            /**
             * Custom progress message to display during execution
             */
            progressMessage?: string;

            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            toolTimeline?: Cossistant.ToolTimeline;

            /**
             * Part-level visibility control for filtering
             */
            visibility?: 'public' | 'private';
          }

          export namespace Cossistant {
            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            export interface ToolTimeline {
              /**
               * Tool timeline classification: conversation-visible, log-only, or decision stage
               */
              logType: 'customer_facing' | 'log' | 'decision';

              /**
               * Message ID that triggered the tool/decision workflow execution
               */
              triggerMessageId: string;

              /**
               * Workflow run identifier used to correlate tool timeline updates
               */
              workflowRunId: string;

              /**
               * Visibility of the trigger message at the time the tool was executed
               */
              triggerVisibility?: 'public' | 'private';
            }
          }
        }
      }

      export interface Type {
        /**
         * Step boundary marker - matches AI SDK StepStartUIPart
         */
        type: 'step-start';
      }

      export interface UnionMember6 {
        /**
         * IANA media type of the file
         */
        mediaType: string;

        /**
         * File attachment - matches AI SDK FileUIPart
         */
        type: 'file';

        /**
         * URL of the file (can be hosted URL or Data URL)
         */
        url: string;

        /**
         * Original filename
         */
        filename?: string;

        /**
         * Size of the file in bytes
         */
        size?: number;
      }

      export interface UnionMember7 {
        /**
         * IANA media type of the image
         */
        mediaType: string;

        /**
         * Image attachment with dimensions
         */
        type: 'image';

        /**
         * URL of the image
         */
        url: string;

        /**
         * Original filename of the image
         */
        filename?: string;

        /**
         * Height of the image in pixels
         */
        height?: number;

        /**
         * Size of the image in bytes
         */
        size?: number;

        /**
         * Width of the image in pixels
         */
        width?: number;
      }

      export interface UnionMember8 {
        /**
         * AI agent that triggered the event, if applicable
         */
        actorAiAgentId: string | null;

        /**
         * User that triggered the event, if applicable
         */
        actorUserId: string | null;

        /**
         * Type of event that occurred
         */
        eventType:
          | 'assigned'
          | 'unassigned'
          | 'participant_requested'
          | 'participant_joined'
          | 'participant_left'
          | 'status_changed'
          | 'priority_changed'
          | 'tag_added'
          | 'tag_removed'
          | 'resolved'
          | 'reopened'
          | 'visitor_blocked'
          | 'visitor_unblocked'
          | 'visitor_identified'
          | 'ai_paused'
          | 'ai_resumed';

        /**
         * AI agent targeted by the event, if applicable
         */
        targetAiAgentId: string | null;

        /**
         * User targeted by the event, if applicable
         */
        targetUserId: string | null;

        /**
         * Type of timeline part - always 'event' for event parts
         */
        type: 'event';

        /**
         * Optional human readable message attached to the event
         */
        message?: string | null;
      }

      export interface UnionMember9 {
        /**
         * Source channel through which the message was created
         */
        source: 'email' | 'widget' | 'api';

        /**
         * Type of timeline part - always 'metadata' for metadata parts
         */
        type: 'metadata';
      }
    }
  }
}

/**
 * Paginated list of conversations
 */
export interface ConversationListResponse {
  conversations: Array<ConversationListResponse.Conversation>;

  pagination: ConversationListResponse.Pagination;
}

export namespace ConversationListResponse {
  export interface Conversation {
    id: string;

    createdAt: string;

    updatedAt: string;

    visitorId: string;

    websiteId: string;

    deletedAt?: string | null;

    lastTimelineItem?: Conversation.LastTimelineItem;

    status?: 'open' | 'resolved' | 'spam';

    title?: string;

    visitorLastSeenAt?: string | null;

    visitorRating?: number | null;

    visitorRatingAt?: string | null;
  }

  export namespace Conversation {
    export interface LastTimelineItem {
      /**
       * ID of the AI agent that created this timeline item, if applicable
       */
      aiAgentId: string | null;

      /**
       * ID of the conversation this timeline item belongs to
       */
      conversationId: string;

      /**
       * ISO 8601 timestamp when the timeline item was created
       */
      createdAt: string;

      /**
       * ID of the organization this timeline item belongs to
       */
      organizationId: string;

      /**
       * Array of timeline parts that make up the timeline item content. Includes AI SDK
       * compatible parts (text, reasoning, tool-\*, source-url, source-document,
       * step-start, file, image) and Cossistant-specific parts (event, metadata).
       */
      parts: Array<
        | LastTimelineItem.UnionMember0
        | LastTimelineItem.UnionMember1
        | LastTimelineItem.UnionMember2
        | LastTimelineItem.UnionMember3
        | LastTimelineItem.UnionMember4
        | LastTimelineItem.Type
        | LastTimelineItem.UnionMember6
        | LastTimelineItem.UnionMember7
        | LastTimelineItem.UnionMember8
        | LastTimelineItem.UnionMember9
      >;

      /**
       * Main text content of the timeline item
       */
      text: string | null;

      /**
       * Type of timeline item - message, event, identification, or tool call
       */
      type: 'message' | 'event' | 'identification' | 'tool';

      /**
       * ID of the user who created this timeline item, if applicable
       */
      userId: string | null;

      /**
       * Visibility level of the timeline item
       */
      visibility: 'public' | 'private';

      /**
       * ID of the visitor who created this timeline item, if applicable
       */
      visitorId: string | null;

      /**
       * Unique identifier for the timeline item
       */
      id?: string;

      /**
       * ISO 8601 timestamp when the timeline item was deleted, if applicable
       */
      deletedAt?: string | null;

      /**
       * Optional tool identifier associated with this timeline item
       */
      tool?: string | null;
    }

    export namespace LastTimelineItem {
      export interface UnionMember0 {
        /**
         * The text content
         */
        text: string;

        /**
         * Text content part - matches AI SDK TextUIPart
         */
        type: 'text';

        /**
         * AI SDK state: 'streaming' = still processing, 'done' = complete
         */
        state?: 'streaming' | 'done';
      }

      export interface UnionMember1 {
        /**
         * The reasoning text content
         */
        text: string;

        /**
         * AI reasoning/chain-of-thought - matches AI SDK ReasoningUIPart
         */
        type: 'reasoning';

        providerMetadata?: UnionMember1.ProviderMetadata;

        /**
         * AI SDK state: 'streaming' = still processing, 'done' = complete
         */
        state?: 'streaming' | 'done';
      }

      export namespace UnionMember1 {
        export interface ProviderMetadata {
          cossistant?: ProviderMetadata.Cossistant;

          [k: string]: unknown;
        }

        export namespace ProviderMetadata {
          export interface Cossistant {
            /**
             * Reference to a Cossistant knowledge entry
             */
            knowledgeId?: string;

            /**
             * Custom progress message to display during execution
             */
            progressMessage?: string;

            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            toolTimeline?: Cossistant.ToolTimeline;

            /**
             * Part-level visibility control for filtering
             */
            visibility?: 'public' | 'private';
          }

          export namespace Cossistant {
            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            export interface ToolTimeline {
              /**
               * Tool timeline classification: conversation-visible, log-only, or decision stage
               */
              logType: 'customer_facing' | 'log' | 'decision';

              /**
               * Message ID that triggered the tool/decision workflow execution
               */
              triggerMessageId: string;

              /**
               * Workflow run identifier used to correlate tool timeline updates
               */
              workflowRunId: string;

              /**
               * Visibility of the trigger message at the time the tool was executed
               */
              triggerVisibility?: 'public' | 'private';
            }
          }
        }
      }

      export interface UnionMember2 {
        /**
         * Input parameters passed to the tool
         */
        input: { [key: string]: unknown };

        /**
         * AI SDK tool state: 'partial' = executing, 'result' = success, 'error' = failed
         */
        state: 'partial' | 'result' | 'error';

        /**
         * Unique identifier for this tool invocation
         */
        toolCallId: string;

        /**
         * Name of the tool being invoked
         */
        toolName: string;

        /**
         * Tool type following AI SDK pattern: tool-{toolName}
         */
        type: string;

        callProviderMetadata?: UnionMember2.CallProviderMetadata;

        /**
         * Error message when state is 'error'
         */
        errorText?: string;

        /**
         * Output returned by the tool (when state is 'result')
         */
        output?: unknown;

        providerMetadata?: UnionMember2.ProviderMetadata;
      }

      export namespace UnionMember2 {
        export interface CallProviderMetadata {
          cossistant?: CallProviderMetadata.Cossistant;

          [k: string]: unknown;
        }

        export namespace CallProviderMetadata {
          export interface Cossistant {
            /**
             * Reference to a Cossistant knowledge entry
             */
            knowledgeId?: string;

            /**
             * Custom progress message to display during execution
             */
            progressMessage?: string;

            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            toolTimeline?: Cossistant.ToolTimeline;

            /**
             * Part-level visibility control for filtering
             */
            visibility?: 'public' | 'private';
          }

          export namespace Cossistant {
            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            export interface ToolTimeline {
              /**
               * Tool timeline classification: conversation-visible, log-only, or decision stage
               */
              logType: 'customer_facing' | 'log' | 'decision';

              /**
               * Message ID that triggered the tool/decision workflow execution
               */
              triggerMessageId: string;

              /**
               * Workflow run identifier used to correlate tool timeline updates
               */
              workflowRunId: string;

              /**
               * Visibility of the trigger message at the time the tool was executed
               */
              triggerVisibility?: 'public' | 'private';
            }
          }
        }

        export interface ProviderMetadata {
          cossistant?: ProviderMetadata.Cossistant;

          [k: string]: unknown;
        }

        export namespace ProviderMetadata {
          export interface Cossistant {
            /**
             * Reference to a Cossistant knowledge entry
             */
            knowledgeId?: string;

            /**
             * Custom progress message to display during execution
             */
            progressMessage?: string;

            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            toolTimeline?: Cossistant.ToolTimeline;

            /**
             * Part-level visibility control for filtering
             */
            visibility?: 'public' | 'private';
          }

          export namespace Cossistant {
            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            export interface ToolTimeline {
              /**
               * Tool timeline classification: conversation-visible, log-only, or decision stage
               */
              logType: 'customer_facing' | 'log' | 'decision';

              /**
               * Message ID that triggered the tool/decision workflow execution
               */
              triggerMessageId: string;

              /**
               * Workflow run identifier used to correlate tool timeline updates
               */
              workflowRunId: string;

              /**
               * Visibility of the trigger message at the time the tool was executed
               */
              triggerVisibility?: 'public' | 'private';
            }
          }
        }
      }

      export interface UnionMember3 {
        /**
         * Unique identifier for this source
         */
        sourceId: string;

        /**
         * URL source citation - matches AI SDK SourceUrlUIPart
         */
        type: 'source-url';

        /**
         * URL of the source
         */
        url: string;

        providerMetadata?: UnionMember3.ProviderMetadata;

        /**
         * Title of the source
         */
        title?: string;
      }

      export namespace UnionMember3 {
        export interface ProviderMetadata {
          cossistant?: ProviderMetadata.Cossistant;

          [k: string]: unknown;
        }

        export namespace ProviderMetadata {
          export interface Cossistant {
            /**
             * Reference to a Cossistant knowledge entry
             */
            knowledgeId?: string;

            /**
             * Custom progress message to display during execution
             */
            progressMessage?: string;

            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            toolTimeline?: Cossistant.ToolTimeline;

            /**
             * Part-level visibility control for filtering
             */
            visibility?: 'public' | 'private';
          }

          export namespace Cossistant {
            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            export interface ToolTimeline {
              /**
               * Tool timeline classification: conversation-visible, log-only, or decision stage
               */
              logType: 'customer_facing' | 'log' | 'decision';

              /**
               * Message ID that triggered the tool/decision workflow execution
               */
              triggerMessageId: string;

              /**
               * Workflow run identifier used to correlate tool timeline updates
               */
              workflowRunId: string;

              /**
               * Visibility of the trigger message at the time the tool was executed
               */
              triggerVisibility?: 'public' | 'private';
            }
          }
        }
      }

      export interface UnionMember4 {
        /**
         * IANA media type of the document
         */
        mediaType: string;

        /**
         * Unique identifier for this source
         */
        sourceId: string;

        /**
         * Title of the document
         */
        title: string;

        /**
         * Document source citation - matches AI SDK SourceDocumentUIPart
         */
        type: 'source-document';

        /**
         * Filename of the document
         */
        filename?: string;

        providerMetadata?: UnionMember4.ProviderMetadata;
      }

      export namespace UnionMember4 {
        export interface ProviderMetadata {
          cossistant?: ProviderMetadata.Cossistant;

          [k: string]: unknown;
        }

        export namespace ProviderMetadata {
          export interface Cossistant {
            /**
             * Reference to a Cossistant knowledge entry
             */
            knowledgeId?: string;

            /**
             * Custom progress message to display during execution
             */
            progressMessage?: string;

            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            toolTimeline?: Cossistant.ToolTimeline;

            /**
             * Part-level visibility control for filtering
             */
            visibility?: 'public' | 'private';
          }

          export namespace Cossistant {
            /**
             * Tool timeline metadata used to classify visibility and trigger linkage
             */
            export interface ToolTimeline {
              /**
               * Tool timeline classification: conversation-visible, log-only, or decision stage
               */
              logType: 'customer_facing' | 'log' | 'decision';

              /**
               * Message ID that triggered the tool/decision workflow execution
               */
              triggerMessageId: string;

              /**
               * Workflow run identifier used to correlate tool timeline updates
               */
              workflowRunId: string;

              /**
               * Visibility of the trigger message at the time the tool was executed
               */
              triggerVisibility?: 'public' | 'private';
            }
          }
        }
      }

      export interface Type {
        /**
         * Step boundary marker - matches AI SDK StepStartUIPart
         */
        type: 'step-start';
      }

      export interface UnionMember6 {
        /**
         * IANA media type of the file
         */
        mediaType: string;

        /**
         * File attachment - matches AI SDK FileUIPart
         */
        type: 'file';

        /**
         * URL of the file (can be hosted URL or Data URL)
         */
        url: string;

        /**
         * Original filename
         */
        filename?: string;

        /**
         * Size of the file in bytes
         */
        size?: number;
      }

      export interface UnionMember7 {
        /**
         * IANA media type of the image
         */
        mediaType: string;

        /**
         * Image attachment with dimensions
         */
        type: 'image';

        /**
         * URL of the image
         */
        url: string;

        /**
         * Original filename of the image
         */
        filename?: string;

        /**
         * Height of the image in pixels
         */
        height?: number;

        /**
         * Size of the image in bytes
         */
        size?: number;

        /**
         * Width of the image in pixels
         */
        width?: number;
      }

      export interface UnionMember8 {
        /**
         * AI agent that triggered the event, if applicable
         */
        actorAiAgentId: string | null;

        /**
         * User that triggered the event, if applicable
         */
        actorUserId: string | null;

        /**
         * Type of event that occurred
         */
        eventType:
          | 'assigned'
          | 'unassigned'
          | 'participant_requested'
          | 'participant_joined'
          | 'participant_left'
          | 'status_changed'
          | 'priority_changed'
          | 'tag_added'
          | 'tag_removed'
          | 'resolved'
          | 'reopened'
          | 'visitor_blocked'
          | 'visitor_unblocked'
          | 'visitor_identified'
          | 'ai_paused'
          | 'ai_resumed';

        /**
         * AI agent targeted by the event, if applicable
         */
        targetAiAgentId: string | null;

        /**
         * User targeted by the event, if applicable
         */
        targetUserId: string | null;

        /**
         * Type of timeline part - always 'event' for event parts
         */
        type: 'event';

        /**
         * Optional human readable message attached to the event
         */
        message?: string | null;
      }

      export interface UnionMember9 {
        /**
         * Source channel through which the message was created
         */
        source: 'email' | 'widget' | 'api';

        /**
         * Type of timeline part - always 'metadata' for metadata parts
         */
        type: 'metadata';
      }
    }
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
 * Response containing paginated timeline items
 */
export interface ConversationGetTimelineResponse {
  /**
   * Whether there are more items available to fetch
   */
  hasNextPage: boolean;

  /**
   * Array of timeline items in chronological order
   */
  items: Array<ConversationGetTimelineResponse.Item>;

  /**
   * Cursor for the next page, null if no more items are available
   */
  nextCursor: string | null;
}

export namespace ConversationGetTimelineResponse {
  export interface Item {
    /**
     * ID of the AI agent that created this timeline item, if applicable
     */
    aiAgentId: string | null;

    /**
     * ID of the conversation this timeline item belongs to
     */
    conversationId: string;

    /**
     * ISO 8601 timestamp when the timeline item was created
     */
    createdAt: string;

    /**
     * ID of the organization this timeline item belongs to
     */
    organizationId: string;

    /**
     * Array of timeline parts that make up the timeline item content. Includes AI SDK
     * compatible parts (text, reasoning, tool-\*, source-url, source-document,
     * step-start, file, image) and Cossistant-specific parts (event, metadata).
     */
    parts: Array<
      | Item.UnionMember0
      | Item.UnionMember1
      | Item.UnionMember2
      | Item.UnionMember3
      | Item.UnionMember4
      | Item.Type
      | Item.UnionMember6
      | Item.UnionMember7
      | Item.UnionMember8
      | Item.UnionMember9
    >;

    /**
     * Main text content of the timeline item
     */
    text: string | null;

    /**
     * Type of timeline item - message, event, identification, or tool call
     */
    type: 'message' | 'event' | 'identification' | 'tool';

    /**
     * ID of the user who created this timeline item, if applicable
     */
    userId: string | null;

    /**
     * Visibility level of the timeline item
     */
    visibility: 'public' | 'private';

    /**
     * ID of the visitor who created this timeline item, if applicable
     */
    visitorId: string | null;

    /**
     * Unique identifier for the timeline item
     */
    id?: string;

    /**
     * ISO 8601 timestamp when the timeline item was deleted, if applicable
     */
    deletedAt?: string | null;

    /**
     * Optional tool identifier associated with this timeline item
     */
    tool?: string | null;
  }

  export namespace Item {
    export interface UnionMember0 {
      /**
       * The text content
       */
      text: string;

      /**
       * Text content part - matches AI SDK TextUIPart
       */
      type: 'text';

      /**
       * AI SDK state: 'streaming' = still processing, 'done' = complete
       */
      state?: 'streaming' | 'done';
    }

    export interface UnionMember1 {
      /**
       * The reasoning text content
       */
      text: string;

      /**
       * AI reasoning/chain-of-thought - matches AI SDK ReasoningUIPart
       */
      type: 'reasoning';

      providerMetadata?: UnionMember1.ProviderMetadata;

      /**
       * AI SDK state: 'streaming' = still processing, 'done' = complete
       */
      state?: 'streaming' | 'done';
    }

    export namespace UnionMember1 {
      export interface ProviderMetadata {
        cossistant?: ProviderMetadata.Cossistant;

        [k: string]: unknown;
      }

      export namespace ProviderMetadata {
        export interface Cossistant {
          /**
           * Reference to a Cossistant knowledge entry
           */
          knowledgeId?: string;

          /**
           * Custom progress message to display during execution
           */
          progressMessage?: string;

          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          toolTimeline?: Cossistant.ToolTimeline;

          /**
           * Part-level visibility control for filtering
           */
          visibility?: 'public' | 'private';
        }

        export namespace Cossistant {
          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          export interface ToolTimeline {
            /**
             * Tool timeline classification: conversation-visible, log-only, or decision stage
             */
            logType: 'customer_facing' | 'log' | 'decision';

            /**
             * Message ID that triggered the tool/decision workflow execution
             */
            triggerMessageId: string;

            /**
             * Workflow run identifier used to correlate tool timeline updates
             */
            workflowRunId: string;

            /**
             * Visibility of the trigger message at the time the tool was executed
             */
            triggerVisibility?: 'public' | 'private';
          }
        }
      }
    }

    export interface UnionMember2 {
      /**
       * Input parameters passed to the tool
       */
      input: { [key: string]: unknown };

      /**
       * AI SDK tool state: 'partial' = executing, 'result' = success, 'error' = failed
       */
      state: 'partial' | 'result' | 'error';

      /**
       * Unique identifier for this tool invocation
       */
      toolCallId: string;

      /**
       * Name of the tool being invoked
       */
      toolName: string;

      /**
       * Tool type following AI SDK pattern: tool-{toolName}
       */
      type: string;

      callProviderMetadata?: UnionMember2.CallProviderMetadata;

      /**
       * Error message when state is 'error'
       */
      errorText?: string;

      /**
       * Output returned by the tool (when state is 'result')
       */
      output?: unknown;

      providerMetadata?: UnionMember2.ProviderMetadata;
    }

    export namespace UnionMember2 {
      export interface CallProviderMetadata {
        cossistant?: CallProviderMetadata.Cossistant;

        [k: string]: unknown;
      }

      export namespace CallProviderMetadata {
        export interface Cossistant {
          /**
           * Reference to a Cossistant knowledge entry
           */
          knowledgeId?: string;

          /**
           * Custom progress message to display during execution
           */
          progressMessage?: string;

          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          toolTimeline?: Cossistant.ToolTimeline;

          /**
           * Part-level visibility control for filtering
           */
          visibility?: 'public' | 'private';
        }

        export namespace Cossistant {
          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          export interface ToolTimeline {
            /**
             * Tool timeline classification: conversation-visible, log-only, or decision stage
             */
            logType: 'customer_facing' | 'log' | 'decision';

            /**
             * Message ID that triggered the tool/decision workflow execution
             */
            triggerMessageId: string;

            /**
             * Workflow run identifier used to correlate tool timeline updates
             */
            workflowRunId: string;

            /**
             * Visibility of the trigger message at the time the tool was executed
             */
            triggerVisibility?: 'public' | 'private';
          }
        }
      }

      export interface ProviderMetadata {
        cossistant?: ProviderMetadata.Cossistant;

        [k: string]: unknown;
      }

      export namespace ProviderMetadata {
        export interface Cossistant {
          /**
           * Reference to a Cossistant knowledge entry
           */
          knowledgeId?: string;

          /**
           * Custom progress message to display during execution
           */
          progressMessage?: string;

          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          toolTimeline?: Cossistant.ToolTimeline;

          /**
           * Part-level visibility control for filtering
           */
          visibility?: 'public' | 'private';
        }

        export namespace Cossistant {
          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          export interface ToolTimeline {
            /**
             * Tool timeline classification: conversation-visible, log-only, or decision stage
             */
            logType: 'customer_facing' | 'log' | 'decision';

            /**
             * Message ID that triggered the tool/decision workflow execution
             */
            triggerMessageId: string;

            /**
             * Workflow run identifier used to correlate tool timeline updates
             */
            workflowRunId: string;

            /**
             * Visibility of the trigger message at the time the tool was executed
             */
            triggerVisibility?: 'public' | 'private';
          }
        }
      }
    }

    export interface UnionMember3 {
      /**
       * Unique identifier for this source
       */
      sourceId: string;

      /**
       * URL source citation - matches AI SDK SourceUrlUIPart
       */
      type: 'source-url';

      /**
       * URL of the source
       */
      url: string;

      providerMetadata?: UnionMember3.ProviderMetadata;

      /**
       * Title of the source
       */
      title?: string;
    }

    export namespace UnionMember3 {
      export interface ProviderMetadata {
        cossistant?: ProviderMetadata.Cossistant;

        [k: string]: unknown;
      }

      export namespace ProviderMetadata {
        export interface Cossistant {
          /**
           * Reference to a Cossistant knowledge entry
           */
          knowledgeId?: string;

          /**
           * Custom progress message to display during execution
           */
          progressMessage?: string;

          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          toolTimeline?: Cossistant.ToolTimeline;

          /**
           * Part-level visibility control for filtering
           */
          visibility?: 'public' | 'private';
        }

        export namespace Cossistant {
          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          export interface ToolTimeline {
            /**
             * Tool timeline classification: conversation-visible, log-only, or decision stage
             */
            logType: 'customer_facing' | 'log' | 'decision';

            /**
             * Message ID that triggered the tool/decision workflow execution
             */
            triggerMessageId: string;

            /**
             * Workflow run identifier used to correlate tool timeline updates
             */
            workflowRunId: string;

            /**
             * Visibility of the trigger message at the time the tool was executed
             */
            triggerVisibility?: 'public' | 'private';
          }
        }
      }
    }

    export interface UnionMember4 {
      /**
       * IANA media type of the document
       */
      mediaType: string;

      /**
       * Unique identifier for this source
       */
      sourceId: string;

      /**
       * Title of the document
       */
      title: string;

      /**
       * Document source citation - matches AI SDK SourceDocumentUIPart
       */
      type: 'source-document';

      /**
       * Filename of the document
       */
      filename?: string;

      providerMetadata?: UnionMember4.ProviderMetadata;
    }

    export namespace UnionMember4 {
      export interface ProviderMetadata {
        cossistant?: ProviderMetadata.Cossistant;

        [k: string]: unknown;
      }

      export namespace ProviderMetadata {
        export interface Cossistant {
          /**
           * Reference to a Cossistant knowledge entry
           */
          knowledgeId?: string;

          /**
           * Custom progress message to display during execution
           */
          progressMessage?: string;

          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          toolTimeline?: Cossistant.ToolTimeline;

          /**
           * Part-level visibility control for filtering
           */
          visibility?: 'public' | 'private';
        }

        export namespace Cossistant {
          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          export interface ToolTimeline {
            /**
             * Tool timeline classification: conversation-visible, log-only, or decision stage
             */
            logType: 'customer_facing' | 'log' | 'decision';

            /**
             * Message ID that triggered the tool/decision workflow execution
             */
            triggerMessageId: string;

            /**
             * Workflow run identifier used to correlate tool timeline updates
             */
            workflowRunId: string;

            /**
             * Visibility of the trigger message at the time the tool was executed
             */
            triggerVisibility?: 'public' | 'private';
          }
        }
      }
    }

    export interface Type {
      /**
       * Step boundary marker - matches AI SDK StepStartUIPart
       */
      type: 'step-start';
    }

    export interface UnionMember6 {
      /**
       * IANA media type of the file
       */
      mediaType: string;

      /**
       * File attachment - matches AI SDK FileUIPart
       */
      type: 'file';

      /**
       * URL of the file (can be hosted URL or Data URL)
       */
      url: string;

      /**
       * Original filename
       */
      filename?: string;

      /**
       * Size of the file in bytes
       */
      size?: number;
    }

    export interface UnionMember7 {
      /**
       * IANA media type of the image
       */
      mediaType: string;

      /**
       * Image attachment with dimensions
       */
      type: 'image';

      /**
       * URL of the image
       */
      url: string;

      /**
       * Original filename of the image
       */
      filename?: string;

      /**
       * Height of the image in pixels
       */
      height?: number;

      /**
       * Size of the image in bytes
       */
      size?: number;

      /**
       * Width of the image in pixels
       */
      width?: number;
    }

    export interface UnionMember8 {
      /**
       * AI agent that triggered the event, if applicable
       */
      actorAiAgentId: string | null;

      /**
       * User that triggered the event, if applicable
       */
      actorUserId: string | null;

      /**
       * Type of event that occurred
       */
      eventType:
        | 'assigned'
        | 'unassigned'
        | 'participant_requested'
        | 'participant_joined'
        | 'participant_left'
        | 'status_changed'
        | 'priority_changed'
        | 'tag_added'
        | 'tag_removed'
        | 'resolved'
        | 'reopened'
        | 'visitor_blocked'
        | 'visitor_unblocked'
        | 'visitor_identified'
        | 'ai_paused'
        | 'ai_resumed';

      /**
       * AI agent targeted by the event, if applicable
       */
      targetAiAgentId: string | null;

      /**
       * User targeted by the event, if applicable
       */
      targetUserId: string | null;

      /**
       * Type of timeline part - always 'event' for event parts
       */
      type: 'event';

      /**
       * Optional human readable message attached to the event
       */
      message?: string | null;
    }

    export interface UnionMember9 {
      /**
       * Source channel through which the message was created
       */
      source: 'email' | 'widget' | 'api';

      /**
       * Type of timeline part - always 'metadata' for metadata parts
       */
      type: 'metadata';
    }
  }
}

/**
 * Response confirming the visitor typing state was recorded
 */
export interface ConversationReportTypingResponse {
  /**
   * The ID of the conversation receiving the typing update
   */
  conversationId: string;

  /**
   * Echo of the reported typing state
   */
  isTyping: boolean;

  /**
   * Timestamp when the typing event was recorded
   */
  sentAt: string;

  /**
   * Preview text that was forwarded with the typing event, or null when none was
   * sent.
   */
  visitorPreview: string | null;
}

/**
 * Response confirming the conversation rating was recorded
 */
export interface ConversationSubmitRatingResponse {
  /**
   * The ID of the conversation that was rated
   */
  conversationId: string;

  /**
   * Timestamp when the rating was recorded
   */
  ratedAt: string;

  /**
   * The rating that was saved
   */
  rating: number;
}

export interface ConversationCreateParams {
  /**
   * Body param: Default timeline items to initiate the conversation with
   */
  defaultTimelineItems: Array<ConversationCreateParams.DefaultTimelineItem>;

  /**
   * Body param: Which channel the conversation is from
   */
  channel?: string;

  /**
   * Body param: Optional idempotency key for conversation creation. If provided, it
   * is scoped to one organization+website+visitor owner tuple; retries with the same
   * tuple reuse the existing conversation.
   */
  conversationId?: string;

  /**
   * Body param: Visitor ID, if not provided you must provide a visitorId in the
   * headers.
   */
  visitorId?: string;

  /**
   * Header param: Public API key for browser-based authentication. Can only be used
   * from whitelisted domains. Format: `pk_[live|test]_...`
   */
  'X-Public-Key'?: string;

  /**
   * Header param: Visitor ID from localStorage.
   */
  'X-Visitor-Id'?: string;
}

export namespace ConversationCreateParams {
  export interface DefaultTimelineItem {
    /**
     * ID of the AI agent that created this timeline item, if applicable
     */
    aiAgentId: string | null;

    /**
     * ID of the conversation this timeline item belongs to
     */
    conversationId: string;

    /**
     * ISO 8601 timestamp when the timeline item was created
     */
    createdAt: string;

    /**
     * ID of the organization this timeline item belongs to
     */
    organizationId: string;

    /**
     * Array of timeline parts that make up the timeline item content. Includes AI SDK
     * compatible parts (text, reasoning, tool-\*, source-url, source-document,
     * step-start, file, image) and Cossistant-specific parts (event, metadata).
     */
    parts: Array<
      | DefaultTimelineItem.UnionMember0
      | DefaultTimelineItem.UnionMember1
      | DefaultTimelineItem.UnionMember2
      | DefaultTimelineItem.UnionMember3
      | DefaultTimelineItem.UnionMember4
      | DefaultTimelineItem.Type
      | DefaultTimelineItem.UnionMember6
      | DefaultTimelineItem.UnionMember7
      | DefaultTimelineItem.UnionMember8
      | DefaultTimelineItem.UnionMember9
    >;

    /**
     * Main text content of the timeline item
     */
    text: string | null;

    /**
     * Type of timeline item - message, event, identification, or tool call
     */
    type: 'message' | 'event' | 'identification' | 'tool';

    /**
     * ID of the user who created this timeline item, if applicable
     */
    userId: string | null;

    /**
     * Visibility level of the timeline item
     */
    visibility: 'public' | 'private';

    /**
     * ID of the visitor who created this timeline item, if applicable
     */
    visitorId: string | null;

    /**
     * Unique identifier for the timeline item
     */
    id?: string;

    /**
     * ISO 8601 timestamp when the timeline item was deleted, if applicable
     */
    deletedAt?: string | null;

    /**
     * Optional tool identifier associated with this timeline item
     */
    tool?: string | null;
  }

  export namespace DefaultTimelineItem {
    export interface UnionMember0 {
      /**
       * The text content
       */
      text: string;

      /**
       * Text content part - matches AI SDK TextUIPart
       */
      type: 'text';

      /**
       * AI SDK state: 'streaming' = still processing, 'done' = complete
       */
      state?: 'streaming' | 'done';
    }

    export interface UnionMember1 {
      /**
       * The reasoning text content
       */
      text: string;

      /**
       * AI reasoning/chain-of-thought - matches AI SDK ReasoningUIPart
       */
      type: 'reasoning';

      providerMetadata?: UnionMember1.ProviderMetadata;

      /**
       * AI SDK state: 'streaming' = still processing, 'done' = complete
       */
      state?: 'streaming' | 'done';
    }

    export namespace UnionMember1 {
      export interface ProviderMetadata {
        cossistant?: ProviderMetadata.Cossistant;

        [k: string]: unknown;
      }

      export namespace ProviderMetadata {
        export interface Cossistant {
          /**
           * Reference to a Cossistant knowledge entry
           */
          knowledgeId?: string;

          /**
           * Custom progress message to display during execution
           */
          progressMessage?: string;

          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          toolTimeline?: Cossistant.ToolTimeline;

          /**
           * Part-level visibility control for filtering
           */
          visibility?: 'public' | 'private';
        }

        export namespace Cossistant {
          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          export interface ToolTimeline {
            /**
             * Tool timeline classification: conversation-visible, log-only, or decision stage
             */
            logType: 'customer_facing' | 'log' | 'decision';

            /**
             * Message ID that triggered the tool/decision workflow execution
             */
            triggerMessageId: string;

            /**
             * Workflow run identifier used to correlate tool timeline updates
             */
            workflowRunId: string;

            /**
             * Visibility of the trigger message at the time the tool was executed
             */
            triggerVisibility?: 'public' | 'private';
          }
        }
      }
    }

    export interface UnionMember2 {
      /**
       * Input parameters passed to the tool
       */
      input: { [key: string]: unknown };

      /**
       * AI SDK tool state: 'partial' = executing, 'result' = success, 'error' = failed
       */
      state: 'partial' | 'result' | 'error';

      /**
       * Unique identifier for this tool invocation
       */
      toolCallId: string;

      /**
       * Name of the tool being invoked
       */
      toolName: string;

      /**
       * Tool type following AI SDK pattern: tool-{toolName}
       */
      type: string;

      callProviderMetadata?: UnionMember2.CallProviderMetadata;

      /**
       * Error message when state is 'error'
       */
      errorText?: string;

      /**
       * Output returned by the tool (when state is 'result')
       */
      output?: unknown;

      providerMetadata?: UnionMember2.ProviderMetadata;
    }

    export namespace UnionMember2 {
      export interface CallProviderMetadata {
        cossistant?: CallProviderMetadata.Cossistant;

        [k: string]: unknown;
      }

      export namespace CallProviderMetadata {
        export interface Cossistant {
          /**
           * Reference to a Cossistant knowledge entry
           */
          knowledgeId?: string;

          /**
           * Custom progress message to display during execution
           */
          progressMessage?: string;

          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          toolTimeline?: Cossistant.ToolTimeline;

          /**
           * Part-level visibility control for filtering
           */
          visibility?: 'public' | 'private';
        }

        export namespace Cossistant {
          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          export interface ToolTimeline {
            /**
             * Tool timeline classification: conversation-visible, log-only, or decision stage
             */
            logType: 'customer_facing' | 'log' | 'decision';

            /**
             * Message ID that triggered the tool/decision workflow execution
             */
            triggerMessageId: string;

            /**
             * Workflow run identifier used to correlate tool timeline updates
             */
            workflowRunId: string;

            /**
             * Visibility of the trigger message at the time the tool was executed
             */
            triggerVisibility?: 'public' | 'private';
          }
        }
      }

      export interface ProviderMetadata {
        cossistant?: ProviderMetadata.Cossistant;

        [k: string]: unknown;
      }

      export namespace ProviderMetadata {
        export interface Cossistant {
          /**
           * Reference to a Cossistant knowledge entry
           */
          knowledgeId?: string;

          /**
           * Custom progress message to display during execution
           */
          progressMessage?: string;

          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          toolTimeline?: Cossistant.ToolTimeline;

          /**
           * Part-level visibility control for filtering
           */
          visibility?: 'public' | 'private';
        }

        export namespace Cossistant {
          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          export interface ToolTimeline {
            /**
             * Tool timeline classification: conversation-visible, log-only, or decision stage
             */
            logType: 'customer_facing' | 'log' | 'decision';

            /**
             * Message ID that triggered the tool/decision workflow execution
             */
            triggerMessageId: string;

            /**
             * Workflow run identifier used to correlate tool timeline updates
             */
            workflowRunId: string;

            /**
             * Visibility of the trigger message at the time the tool was executed
             */
            triggerVisibility?: 'public' | 'private';
          }
        }
      }
    }

    export interface UnionMember3 {
      /**
       * Unique identifier for this source
       */
      sourceId: string;

      /**
       * URL source citation - matches AI SDK SourceUrlUIPart
       */
      type: 'source-url';

      /**
       * URL of the source
       */
      url: string;

      providerMetadata?: UnionMember3.ProviderMetadata;

      /**
       * Title of the source
       */
      title?: string;
    }

    export namespace UnionMember3 {
      export interface ProviderMetadata {
        cossistant?: ProviderMetadata.Cossistant;

        [k: string]: unknown;
      }

      export namespace ProviderMetadata {
        export interface Cossistant {
          /**
           * Reference to a Cossistant knowledge entry
           */
          knowledgeId?: string;

          /**
           * Custom progress message to display during execution
           */
          progressMessage?: string;

          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          toolTimeline?: Cossistant.ToolTimeline;

          /**
           * Part-level visibility control for filtering
           */
          visibility?: 'public' | 'private';
        }

        export namespace Cossistant {
          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          export interface ToolTimeline {
            /**
             * Tool timeline classification: conversation-visible, log-only, or decision stage
             */
            logType: 'customer_facing' | 'log' | 'decision';

            /**
             * Message ID that triggered the tool/decision workflow execution
             */
            triggerMessageId: string;

            /**
             * Workflow run identifier used to correlate tool timeline updates
             */
            workflowRunId: string;

            /**
             * Visibility of the trigger message at the time the tool was executed
             */
            triggerVisibility?: 'public' | 'private';
          }
        }
      }
    }

    export interface UnionMember4 {
      /**
       * IANA media type of the document
       */
      mediaType: string;

      /**
       * Unique identifier for this source
       */
      sourceId: string;

      /**
       * Title of the document
       */
      title: string;

      /**
       * Document source citation - matches AI SDK SourceDocumentUIPart
       */
      type: 'source-document';

      /**
       * Filename of the document
       */
      filename?: string;

      providerMetadata?: UnionMember4.ProviderMetadata;
    }

    export namespace UnionMember4 {
      export interface ProviderMetadata {
        cossistant?: ProviderMetadata.Cossistant;

        [k: string]: unknown;
      }

      export namespace ProviderMetadata {
        export interface Cossistant {
          /**
           * Reference to a Cossistant knowledge entry
           */
          knowledgeId?: string;

          /**
           * Custom progress message to display during execution
           */
          progressMessage?: string;

          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          toolTimeline?: Cossistant.ToolTimeline;

          /**
           * Part-level visibility control for filtering
           */
          visibility?: 'public' | 'private';
        }

        export namespace Cossistant {
          /**
           * Tool timeline metadata used to classify visibility and trigger linkage
           */
          export interface ToolTimeline {
            /**
             * Tool timeline classification: conversation-visible, log-only, or decision stage
             */
            logType: 'customer_facing' | 'log' | 'decision';

            /**
             * Message ID that triggered the tool/decision workflow execution
             */
            triggerMessageId: string;

            /**
             * Workflow run identifier used to correlate tool timeline updates
             */
            workflowRunId: string;

            /**
             * Visibility of the trigger message at the time the tool was executed
             */
            triggerVisibility?: 'public' | 'private';
          }
        }
      }
    }

    export interface Type {
      /**
       * Step boundary marker - matches AI SDK StepStartUIPart
       */
      type: 'step-start';
    }

    export interface UnionMember6 {
      /**
       * IANA media type of the file
       */
      mediaType: string;

      /**
       * File attachment - matches AI SDK FileUIPart
       */
      type: 'file';

      /**
       * URL of the file (can be hosted URL or Data URL)
       */
      url: string;

      /**
       * Original filename
       */
      filename?: string;

      /**
       * Size of the file in bytes
       */
      size?: number;
    }

    export interface UnionMember7 {
      /**
       * IANA media type of the image
       */
      mediaType: string;

      /**
       * Image attachment with dimensions
       */
      type: 'image';

      /**
       * URL of the image
       */
      url: string;

      /**
       * Original filename of the image
       */
      filename?: string;

      /**
       * Height of the image in pixels
       */
      height?: number;

      /**
       * Size of the image in bytes
       */
      size?: number;

      /**
       * Width of the image in pixels
       */
      width?: number;
    }

    export interface UnionMember8 {
      /**
       * AI agent that triggered the event, if applicable
       */
      actorAiAgentId: string | null;

      /**
       * User that triggered the event, if applicable
       */
      actorUserId: string | null;

      /**
       * Type of event that occurred
       */
      eventType:
        | 'assigned'
        | 'unassigned'
        | 'participant_requested'
        | 'participant_joined'
        | 'participant_left'
        | 'status_changed'
        | 'priority_changed'
        | 'tag_added'
        | 'tag_removed'
        | 'resolved'
        | 'reopened'
        | 'visitor_blocked'
        | 'visitor_unblocked'
        | 'visitor_identified'
        | 'ai_paused'
        | 'ai_resumed';

      /**
       * AI agent targeted by the event, if applicable
       */
      targetAiAgentId: string | null;

      /**
       * User targeted by the event, if applicable
       */
      targetUserId: string | null;

      /**
       * Type of timeline part - always 'event' for event parts
       */
      type: 'event';

      /**
       * Optional human readable message attached to the event
       */
      message?: string | null;
    }

    export interface UnionMember9 {
      /**
       * Source channel through which the message was created
       */
      source: 'email' | 'widget' | 'api';

      /**
       * Type of timeline part - always 'metadata' for metadata parts
       */
      type: 'metadata';
    }
  }
}

export interface ConversationRetrieveParams {
  /**
   * Public API key for browser-based authentication. Can only be used from
   * whitelisted domains. Format: `pk_[live|test]_...`
   */
  'X-Public-Key'?: string;

  /**
   * Visitor ID from localStorage.
   */
  'X-Visitor-Id'?: string;
}

export interface ConversationListParams {
  /**
   * Query param: Number of conversations per page
   */
  limit?: number;

  /**
   * Query param: Order direction
   */
  order?: 'asc' | 'desc';

  /**
   * Query param: Field to order conversations by
   */
  orderBy?: 'createdAt' | 'updatedAt';

  /**
   * Query param: Page number for pagination
   */
  page?: number;

  /**
   * Query param: Filter by conversation status
   */
  status?: 'open' | 'closed';

  /**
   * Query param: Visitor ID to fetch conversations for.
   */
  visitorId?: string;

  /**
   * Header param: Public API key for browser-based authentication. Can only be used
   * from whitelisted domains. Format: `pk_[live|test]_...`
   */
  'X-Public-Key'?: string;

  /**
   * Header param: Visitor ID from localStorage.
   */
  'X-Visitor-Id'?: string;
}

export interface ConversationGetTimelineParams {
  /**
   * Cursor for pagination (timestamp_id format from previous response)
   */
  cursor?: string | null;

  /**
   * Number of timeline items to fetch per page
   */
  limit?: number;
}

export interface ConversationReportTypingParams {
  /**
   * Whether the visitor is currently typing
   */
  isTyping: boolean;

  /**
   * Visitor ID associated with the conversation. Optional if provided via the
   * X-Visitor-Id header.
   */
  visitorId?: string;

  /**
   * Optional preview of the visitor's message while typing. Only processed when the
   * visitor is typing.
   */
  visitorPreview?: string;
}

export interface ConversationSubmitRatingParams {
  /**
   * Visitor rating for the conversation (1-5)
   */
  rating: number;

  /**
   * Optional written feedback about the conversation
   */
  comment?: string;

  /**
   * Visitor ID associated with the conversation. Optional if provided via the
   * X-Visitor-Id header.
   */
  visitorId?: string;
}

Conversations.Seen = Seen;

export declare namespace Conversations {
  export {
    type ConversationCreateResponse as ConversationCreateResponse,
    type ConversationRetrieveResponse as ConversationRetrieveResponse,
    type ConversationListResponse as ConversationListResponse,
    type ConversationGetTimelineResponse as ConversationGetTimelineResponse,
    type ConversationReportTypingResponse as ConversationReportTypingResponse,
    type ConversationSubmitRatingResponse as ConversationSubmitRatingResponse,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationRetrieveParams as ConversationRetrieveParams,
    type ConversationListParams as ConversationListParams,
    type ConversationGetTimelineParams as ConversationGetTimelineParams,
    type ConversationReportTypingParams as ConversationReportTypingParams,
    type ConversationSubmitRatingParams as ConversationSubmitRatingParams,
  };

  export {
    Seen as Seen,
    type SeenGetSeenDataResponse as SeenGetSeenDataResponse,
    type SeenMarkAsSeenResponse as SeenMarkAsSeenResponse,
    type SeenMarkAsSeenParams as SeenMarkAsSeenParams,
  };
}
