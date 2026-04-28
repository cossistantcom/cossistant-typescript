// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class ID extends APIResource {
  /**
   * Soft deletes a knowledge entry
   *
   * @example
   * ```ts
   * await client.knowledge.id.deleteID();
   * ```
   */
  deleteID(options?: RequestOptions): APIPromise<void> {
    return this._client.delete('/v1/knowledge/:id', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __security: {},
    });
  }

  /**
   * Retrieves a single knowledge entry by ID
   *
   * @example
   * ```ts
   * const response = await client.knowledge.id.retrieveID();
   * ```
   */
  retrieveID(options?: RequestOptions): APIPromise<IDRetrieveIDResponse> {
    return this._client.get('/v1/knowledge/:id', { ...options, __security: {} });
  }

  /**
   * Updates an existing knowledge entry
   *
   * @example
   * ```ts
   * const response = await client.knowledge.id.updateID();
   * ```
   */
  updateID(
    body: IDUpdateIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IDUpdateIDResponse> {
    return this._client.patch('/v1/knowledge/:id', { body, ...options, __security: {} });
  }
}

/**
 * Knowledge entry response
 */
export interface IDRetrieveIDResponse {
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

  payload:
    | IDRetrieveIDResponse.UnionMember0
    | IDRetrieveIDResponse.UnionMember1
    | IDRetrieveIDResponse.UnionMember2;

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

export namespace IDRetrieveIDResponse {
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

    [k: string]: unknown;
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

    [k: string]: unknown;
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

    [k: string]: unknown;
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
 * Knowledge entry response
 */
export interface IDUpdateIDResponse {
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

  payload:
    | IDUpdateIDResponse.UnionMember0
    | IDUpdateIDResponse.UnionMember1
    | IDUpdateIDResponse.UnionMember2;

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

export namespace IDUpdateIDResponse {
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

    [k: string]: unknown;
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

    [k: string]: unknown;
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

    [k: string]: unknown;
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

export interface IDUpdateIDParams {
  /**
   * Update AI agent association
   */
  aiAgentId?: string | null;

  /**
   * Arbitrary metadata such as locale or crawl depth
   */
  metadata?: { [key: string]: unknown } | null;

  payload?: IDUpdateIDParams.UnionMember0 | IDUpdateIDParams.UnionMember1 | IDUpdateIDParams.UnionMember2;

  /**
   * Update readable title
   */
  sourceTitle?: string | null;

  /**
   * Update origin URL
   */
  sourceUrl?: string | null;
}

export namespace IDUpdateIDParams {
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

    [k: string]: unknown;
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

    [k: string]: unknown;
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

    [k: string]: unknown;
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

export declare namespace ID {
  export {
    type IDRetrieveIDResponse as IDRetrieveIDResponse,
    type IDUpdateIDResponse as IDUpdateIDResponse,
    type IDUpdateIDParams as IDUpdateIDParams,
  };
}
