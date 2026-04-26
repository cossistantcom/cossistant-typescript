// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Messages extends APIResource {
  /**
   * Send a new message (timeline item) to an existing conversation.
   */
  send(params: MessageSendParams, options?: RequestOptions): APIPromise<MessageSendResponse> {
    const { 'X-Public-Key': xPublicKey, 'X-Visitor-Id': xVisitorID, ...body } = params
    return this._client.post('/v1/messages', { body, ...options, headers: buildHeaders([{...(xPublicKey != null ? { 'X-Public-Key': xPublicKey } : undefined), ...(xVisitorID != null ? { 'X-Visitor-Id': xVisitorID } : undefined)}, options?.headers]), __security: {  } });
  }
}

/**
 * Response containing the created timeline item
 */
export interface MessageSendResponse {
  /**
   * The created timeline item
   */
  item: MessageSendResponse.Item;
}

export namespace MessageSendResponse {
  /**
   * The created timeline item
   */
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
    parts: Array<Item.UnionMember0 | Item.UnionMember1 | Item.UnionMember2 | Item.UnionMember3 | Item.UnionMember4 | Item.Type | Item.UnionMember6 | Item.UnionMember7 | Item.UnionMember8 | Item.UnionMember9>;

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

      [k: string]: unknown
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

      [k: string]: unknown
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

      [k: string]: unknown
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

      [k: string]: unknown
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

      [k: string]: unknown
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
      eventType: 'assigned' | 'unassigned' | 'participant_requested' | 'participant_joined' | 'participant_left' | 'status_changed' | 'priority_changed' | 'tag_added' | 'tag_removed' | 'resolved' | 'reopened' | 'visitor_blocked' | 'visitor_unblocked' | 'visitor_identified' | 'ai_paused' | 'ai_resumed';

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

export interface MessageSendParams {
  /**
   * Body param: ID of the conversation to send the timeline item to
   */
  conversationId: string;

  /**
   * Body param
   */
  item: MessageSendParams.Item;

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

export namespace MessageSendParams {
  export interface Item {
    /**
     * Main text content of the timeline item
     */
    text: string;

    /**
     * Optional client-generated ID for the timeline item
     */
    id?: string;

    /**
     * ID of the AI agent creating this timeline item
     */
    aiAgentId?: string | null;

    /**
     * Optional timestamp for the timeline item
     */
    createdAt?: string;

    /**
     * Array of timeline parts that make up the timeline item content. Includes AI SDK
     * compatible parts (text, reasoning, tool-\*, source-url, source-document,
     * step-start, file, image) and Cossistant-specific parts (event, metadata).
     */
    parts?: Array<Item.UnionMember0 | Item.UnionMember1 | Item.UnionMember2 | Item.UnionMember3 | Item.UnionMember4 | Item.Type | Item.UnionMember6 | Item.UnionMember7 | Item.UnionMember8 | Item.UnionMember9>;

    /**
     * Optional tool identifier when sending non-message timeline items
     */
    tool?: string | null;

    /**
     * Type of timeline item - defaults to MESSAGE
     */
    type?: 'message' | 'event';

    /**
     * ID of the user creating this timeline item
     */
    userId?: string | null;

    /**
     * Visibility level of the timeline item
     */
    visibility?: 'public' | 'private';

    /**
     * ID of the visitor creating this timeline item
     */
    visitorId?: string | null;
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

      [k: string]: unknown
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

      [k: string]: unknown
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

      [k: string]: unknown
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

      [k: string]: unknown
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

      [k: string]: unknown
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
      eventType: 'assigned' | 'unassigned' | 'participant_requested' | 'participant_joined' | 'participant_left' | 'status_changed' | 'priority_changed' | 'tag_added' | 'tag_removed' | 'resolved' | 'reopened' | 'visitor_blocked' | 'visitor_unblocked' | 'visitor_identified' | 'ai_paused' | 'ai_resumed';

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

export declare namespace Messages {
  export {
    type MessageSendResponse as MessageSendResponse,
    type MessageSendParams as MessageSendParams
  };
}
