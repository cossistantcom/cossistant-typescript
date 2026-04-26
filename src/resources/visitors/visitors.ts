// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as IDAPI from './id';
import { ID, IDRetrieveIDResponse, IDUpdateIDParams, IDUpdateIDResponse, IDUpdateMetadataParams, IDUpdateMetadataResponse } from './id';

export class Visitors extends APIResource {
  id: IDAPI.ID = new IDAPI.ID(this._client);
}

Visitors.ID = ID;

export declare namespace Visitors {
  export {
    ID as ID,
    type IDRetrieveIDResponse as IDRetrieveIDResponse,
    type IDUpdateIDResponse as IDUpdateIDResponse,
    type IDUpdateMetadataResponse as IDUpdateMetadataResponse,
    type IDUpdateIDParams as IDUpdateIDParams,
    type IDUpdateMetadataParams as IDUpdateMetadataParams
  };
}
