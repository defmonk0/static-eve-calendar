/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.6.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { GetCharactersCharacterIdPlanetsPlanetIdHead } from './getCharactersCharacterIdPlanetsPlanetIdHead';


/**
 * extractor_details object
 */
export interface GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails {
    /**
     * in seconds
     */
    cycleTime?: number;

    /**
     * head_radius number
     */
    headRadius?: number;

    /**
     * heads array
     */
    heads: Array<GetCharactersCharacterIdPlanetsPlanetIdHead>;

    /**
     * product_type_id integer
     */
    productTypeId?: number;

    /**
     * qty_per_cycle integer
     */
    qtyPerCycle?: number;

}

