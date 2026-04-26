// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Uploads extends APIResource {
  /**
   * Creates a temporary signed URL that can be used to upload a file directly to the
   * configured S3 bucket.
   *
   * @example
   * ```ts
   * const response = await client.uploads.createSignURL({
   *   contentType: 'image/png',
   *   scope: {
   *     conversationId: 'conv_01HZYFJ5P7DQ0VE8F68G5VYBAQ',
   *     organizationId: 'org_01HZYFG9W5V6YB5R6T6V7N9M2Q',
   *     type: 'conversation',
   *     websiteId: 'site_01HZYFH3KJ3MYHJJ3JJ6Y2RNAV',
   *   },
   *   websiteId: 'websiteId',
   * });
   * ```
   */
  createSignURL(body: UploadCreateSignURLParams, options?: RequestOptions): APIPromise<UploadCreateSignURLResponse> {
    return this._client.post('/v1/uploads/sign-url', { body, ...options, __security: {  } });
  }
}

/**
 * Response payload containing the signed upload URL.
 */
export interface UploadCreateSignURLResponse {
  /**
   * Name of the S3 bucket that will receive the upload.
   */
  bucket: string;

  /**
   * MIME type that should be used when uploading the file.
   */
  contentType: string;

  /**
   * ISO timestamp indicating when the signed URL will expire.
   */
  expiresAt: string;

  /**
   * Resolved object key that can be used to reference the uploaded asset.
   */
  key: string;

  /**
   * Publicly accessible URL (or CDN URL when requested) that can be used to read the
   * uploaded file.
   */
  publicUrl: string;

  /**
   * Pre-signed URL that accepts a PUT request to upload the file to S3.
   */
  uploadUrl: string;
}

export interface UploadCreateSignURLParams {
  /**
   * MIME type of the file to upload.
   */
  contentType: string;

  /**
   * Defines how uploaded files should be grouped inside the S3 bucket.
   */
  scope: UploadCreateSignURLParams.UnionMember0 | UploadCreateSignURLParams.UnionMember1 | UploadCreateSignURLParams.UnionMember2 | UploadCreateSignURLParams.UnionMember3;

  websiteId: string;

  /**
   * Number of seconds before the signed URL expires. Defaults to 900 seconds (15
   * minutes).
   */
  expiresInSeconds?: number;

  /**
   * Optional file extension without the leading dot. Use this when providing a
   * custom file name without an extension.
   */
  fileExtension?: string;

  /**
   * Optional file name to use for the object. Invalid characters will be sanitized
   * on the server side.
   */
  fileName?: string;

  /**
   * Optional relative path used to group uploads inside the bucket. Nested paths are
   * supported.
   */
  path?: string;

  /**
   * Set to true to place the file under the /cdn prefix so it is cached by the CDN.
   */
  useCdn?: boolean;
}

export namespace UploadCreateSignURLParams {
  /**
   * Scope uploads to a specific conversation. Files will be placed under
   * /{organizationId}/{websiteId}/{conversationId}.
   */
  export interface UnionMember0 {
    /**
     * Conversation identifier that will scope the uploaded asset.
     */
    conversationId: string;

    /**
     * Identifier of the organization that owns the uploaded file.
     */
    organizationId: string;

    type: 'conversation';

    /**
     * Identifier of the website associated with the uploaded file.
     */
    websiteId: string;
  }

  /**
   * Scope uploads to a specific user. Files will be placed under
   * /{organizationId}/{websiteId}/{userId}.
   */
  export interface UnionMember1 {
    /**
     * Identifier of the organization that owns the uploaded file.
     */
    organizationId: string;

    type: 'user';

    /**
     * User identifier that will scope the uploaded asset.
     */
    userId: string;

    /**
     * Identifier of the website associated with the uploaded file.
     */
    websiteId: string;
  }

  /**
   * Scope uploads to a specific contact. Files will be placed under
   * /{organizationId}/{websiteId}/{contactId}.
   */
  export interface UnionMember2 {
    /**
     * Contact identifier that will scope the uploaded asset.
     */
    contactId: string;

    /**
     * Identifier of the organization that owns the uploaded file.
     */
    organizationId: string;

    type: 'contact';

    /**
     * Identifier of the website associated with the uploaded file.
     */
    websiteId: string;
  }

  /**
   * Scope uploads to a specific visitor. Files will be placed under
   * /{organizationId}/{websiteId}/{visitorId}.
   */
  export interface UnionMember3 {
    /**
     * Identifier of the organization that owns the uploaded file.
     */
    organizationId: string;

    type: 'visitor';

    /**
     * Visitor identifier that will scope the uploaded asset.
     */
    visitorId: string;

    /**
     * Identifier of the website associated with the uploaded file.
     */
    websiteId: string;
  }
}

export declare namespace Uploads {
  export {
    type UploadCreateSignURLResponse as UploadCreateSignURLResponse,
    type UploadCreateSignURLParams as UploadCreateSignURLParams
  };
}
