// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as IDAPI from './id';
import { ID, IDRetrieveIDResponse, IDUpdateIDParams, IDUpdateIDResponse } from './id';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Knowledge extends APIResource {
  id: IDAPI.ID = new IDAPI.ID(this._client);

  /**
   * Creates a new knowledge entry for the website
   *
   * @example
   * ```ts
   * const knowledge = await client.knowledge.create({
   *   origin: 'manual',
   *   payload: { markdown: '# Welcome to the Help Center' },
   *   type: 'url',
   * });
   * ```
   */
  create(body: KnowledgeCreateParams, options?: RequestOptions): APIPromise<KnowledgeCreateResponse> {
    return this._client.post('/v1/knowledge', { body, ...options, __security: {  } });
  }

  /**
   * Returns a paginated list of knowledge entries for the website. Supports
   * filtering by type and AI agent ID.
   *
   * @example
   * ```ts
   * const knowledges = await client.knowledge.list();
   * ```
   */
  list(query: KnowledgeListParams | null | undefined = {}, options?: RequestOptions): APIPromise<KnowledgeListResponse> {
    return this._client.get('/v1/knowledge', { query, ...options, __security: {  } });
  }
}

/**
 * Knowledge entry response
 */
export interface KnowledgeCreateResponse {
  /**
   * Knowledge entry identifier
   */
  id: string;

  /**
   * Optional AI agent identifier; null means shared at website scope
   */
  aiAgentId: string | null;

  /**
   * Deterministic hash of the payload for deduping
   */
  contentHash: string;

  /**
   * Creation timestamp
   */
  createdAt: string;

  /**
   * Identifier of the actor that created this entry
   */
  createdBy: string;

  /**
   * Soft delete timestamp
   */
  deletedAt: string | null;

  /**
   * Whether this entry is included in training
   */
  isIncluded: boolean;

  /**
   * Reference to the link source that created this entry
   */
  linkSourceId: string | null;

  /**
   * Owning organization identifier
   */
  organizationId: string;

  /**
   * How this entry was created (crawl, manual, agent, etc.)
   */
  origin: string;

  payload: KnowledgeCreateResponse.UnionMember0 | KnowledgeCreateResponse.UnionMember1 | KnowledgeCreateResponse.UnionMember2;

  /**
   * Size of this entry in bytes
   */
  sizeBytes: number;

  /**
   * Readable title captured during scraping
   */
  sourceTitle: string | null;

  /**
   * Origin URL for this entry
   */
  sourceUrl: string | null;

  /**
   * Knowledge entry type
   */
  type: 'url' | 'faq' | 'article';

  /**
   * Last update timestamp
   */
  updatedAt: string;

  /**
   * Website identifier
   */
  websiteId: string;

  /**
   * Arbitrary metadata such as locale or crawl depth
   */
  metadata?: { [key: string]: unknown } | null;
}

export namespace KnowledgeCreateResponse {
  export interface UnionMember0 {
    /**
     * Scraped markdown body
     */
    markdown: string;

    /**
     * Heuristic token count to assist chunking
     */
    estimatedTokens?: number;

    headings?: Array<UnionMember0.Heading>;

    images?: Array<UnionMember0.Image>;

    links?: Array<string>;

  [k: string]: unknown
  }

  export namespace UnionMember0 {
    export interface Heading {
      /**
       * Heading level (1-6)
       */
      level: number;

      /**
       * Heading text content
       */
      text: string;
    }

    export interface Image {
      /**
       * Optional alt text attached to the image
       */
      alt: string | null;

      /**
       * Image URL captured during scraping
       */
      src: string;
    }
  }

  export interface UnionMember1 {
    /**
     * Answer shown to customers
     */
    answer: string;

    /**
     * FAQ question
     */
    question: string;

    categories?: Array<string>;

    relatedQuestions?: Array<string>;

  [k: string]: unknown
  }

  export interface UnionMember2 {
    /**
     * Article body in markdown format
     */
    markdown: string;

    /**
     * Article title
     */
    title: string;

    heroImage?: UnionMember2.HeroImage;

    keywords?: Array<string>;

    /**
     * Short synopsis or excerpt
     */
    summary?: string | null;

  [k: string]: unknown
  }

  export namespace UnionMember2 {
    export interface HeroImage {
      /**
       * Optional alt text attached to the image
       */
      alt: string | null;

      /**
       * Image URL captured during scraping
       */
      src: string;
    }
  }
}

/**
 * Paginated list of knowledge entries
 */
export interface KnowledgeListResponse {
  /**
   * Array of knowledge entries
   */
  items: Array<KnowledgeListResponse.Item>;

  /**
   * Pagination metadata
   */
  pagination: KnowledgeListResponse.Pagination;
}

export namespace KnowledgeListResponse {
  /**
   * Knowledge entry response
   */
  export interface Item {
    /**
     * Knowledge entry identifier
     */
    id: string;

    /**
     * Optional AI agent identifier; null means shared at website scope
     */
    aiAgentId: string | null;

    /**
     * Deterministic hash of the payload for deduping
     */
    contentHash: string;

    /**
     * Creation timestamp
     */
    createdAt: string;

    /**
     * Identifier of the actor that created this entry
     */
    createdBy: string;

    /**
     * Soft delete timestamp
     */
    deletedAt: string | null;

    /**
     * Whether this entry is included in training
     */
    isIncluded: boolean;

    /**
     * Reference to the link source that created this entry
     */
    linkSourceId: string | null;

    /**
     * Owning organization identifier
     */
    organizationId: string;

    /**
     * How this entry was created (crawl, manual, agent, etc.)
     */
    origin: string;

    payload: Item.UnionMember0 | Item.UnionMember1 | Item.UnionMember2;

    /**
     * Size of this entry in bytes
     */
    sizeBytes: number;

    /**
     * Readable title captured during scraping
     */
    sourceTitle: string | null;

    /**
     * Origin URL for this entry
     */
    sourceUrl: string | null;

    /**
     * Knowledge entry type
     */
    type: 'url' | 'faq' | 'article';

    /**
     * Last update timestamp
     */
    updatedAt: string;

    /**
     * Website identifier
     */
    websiteId: string;

    /**
     * Arbitrary metadata such as locale or crawl depth
     */
    metadata?: { [key: string]: unknown } | null;
  }

  export namespace Item {
    export interface UnionMember0 {
      /**
       * Scraped markdown body
       */
      markdown: string;

      /**
       * Heuristic token count to assist chunking
       */
      estimatedTokens?: number;

      headings?: Array<UnionMember0.Heading>;

      images?: Array<UnionMember0.Image>;

      links?: Array<string>;

    [k: string]: unknown
    }

    export namespace UnionMember0 {
      export interface Heading {
        /**
         * Heading level (1-6)
         */
        level: number;

        /**
         * Heading text content
         */
        text: string;
      }

      export interface Image {
        /**
         * Optional alt text attached to the image
         */
        alt: string | null;

        /**
         * Image URL captured during scraping
         */
        src: string;
      }
    }

    export interface UnionMember1 {
      /**
       * Answer shown to customers
       */
      answer: string;

      /**
       * FAQ question
       */
      question: string;

      categories?: Array<string>;

      relatedQuestions?: Array<string>;

    [k: string]: unknown
    }

    export interface UnionMember2 {
      /**
       * Article body in markdown format
       */
      markdown: string;

      /**
       * Article title
       */
      title: string;

      heroImage?: UnionMember2.HeroImage;

      keywords?: Array<string>;

      /**
       * Short synopsis or excerpt
       */
      summary?: string | null;

    [k: string]: unknown
    }

    export namespace UnionMember2 {
      export interface HeroImage {
        /**
         * Optional alt text attached to the image
         */
        alt: string | null;

        /**
         * Image URL captured during scraping
         */
        src: string;
      }
    }
  }

  /**
   * Pagination metadata
   */
  export interface Pagination {
    /**
     * Whether there are more items available
     */
    hasMore: boolean;

    /**
     * Items per page
     */
    limit: number;

    /**
     * Current page number
     */
    page: number;

    /**
     * Total number of items
     */
    total: number;
  }
}

export interface KnowledgeCreateParams {
  /**
   * How this entry was created (crawl, manual, agent, etc.)
   */
  origin: string;

  /**
   * Structured payload for raw page content
   */
  payload: KnowledgeCreateParams.UnionMember0 | KnowledgeCreateParams.UnionMember1 | KnowledgeCreateParams.UnionMember2;

  /**
   * Knowledge entry type
   */
  type: 'url' | 'faq' | 'article';

  /**
   * Optional AI agent ID; null/omit for shared at website scope
   */
  aiAgentId?: string | null;

  /**
   * Arbitrary metadata such as locale or crawl depth
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * Readable title
   */
  sourceTitle?: string | null;

  /**
   * Origin URL for this entry
   */
  sourceUrl?: string | null;
}

export namespace KnowledgeCreateParams {
  /**
   * Structured payload for raw page content
   */
  export interface UnionMember0 {
    /**
     * Scraped markdown body
     */
    markdown: string;

    /**
     * Heuristic token count to assist chunking
     */
    estimatedTokens?: number;

    headings?: Array<UnionMember0.Heading>;

    images?: Array<UnionMember0.Image>;

    links?: Array<string>;
  }

  export namespace UnionMember0 {
    export interface Heading {
      /**
       * Heading level (1-6)
       */
      level: number;

      /**
       * Heading text content
       */
      text: string;
    }

    export interface Image {
      /**
       * Optional alt text attached to the image
       */
      alt: string | null;

      /**
       * Image URL captured during scraping
       */
      src: string;
    }
  }

  /**
   * Payload describing a single FAQ entry
   */
  export interface UnionMember1 {
    /**
     * Answer shown to customers
     */
    answer: string;

    /**
     * FAQ question
     */
    question: string;

    categories?: Array<string>;

    relatedQuestions?: Array<string>;
  }

  /**
   * Payload describing a full article or help doc
   */
  export interface UnionMember2 {
    /**
     * Article body in markdown format
     */
    markdown: string;

    /**
     * Article title
     */
    title: string;

    heroImage?: UnionMember2.HeroImage;

    keywords?: Array<string>;

    /**
     * Short synopsis or excerpt
     */
    summary?: string | null;
  }

  export namespace UnionMember2 {
    export interface HeroImage {
      /**
       * Optional alt text attached to the image
       */
      alt: string | null;

      /**
       * Image URL captured during scraping
       */
      src: string;
    }
  }
}

export interface KnowledgeListParams {
  /**
   * Filter by AI agent ID. Pass a valid ULID to filter by agent, pass "null" or
   * empty string to filter for shared/website-scoped entries only, or omit entirely
   * to return all entries.
   */
  aiAgentId?: 'null' | '' | (string & {});

  /**
   * Items per page (max 100)
   */
  limit?: number;

  /**
   * Page number (1-indexed)
   */
  page?: number;

  /**
   * Filter by knowledge type
   */
  type?: 'url' | 'faq' | 'article';
}

Knowledge.ID = ID;

export declare namespace Knowledge {
  export {
    type KnowledgeCreateResponse as KnowledgeCreateResponse,
    type KnowledgeListResponse as KnowledgeListResponse,
    type KnowledgeCreateParams as KnowledgeCreateParams,
    type KnowledgeListParams as KnowledgeListParams
  };

  export {
    ID as ID,
    type IDRetrieveIDResponse as IDRetrieveIDResponse,
    type IDUpdateIDResponse as IDUpdateIDResponse,
    type IDUpdateIDParams as IDUpdateIDParams
  };
}
