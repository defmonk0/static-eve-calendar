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

import { GetUniverseStargatesStargateIdDestination } from './getUniverseStargatesStargateIdDestination';
import { GetUniverseStargatesStargateIdPosition } from './getUniverseStargatesStargateIdPosition';


/**
 * 200 ok object
 */
export interface GetUniverseStargatesStargateIdOk {
    destination?: GetUniverseStargatesStargateIdDestination;

    /**
     * name string
     */
    name: string;

    position?: GetUniverseStargatesStargateIdPosition;

    /**
     * stargate_id integer
     */
    stargateId: number;

    /**
     * The solar system this stargate is in
     */
    systemId: number;

    /**
     * type_id integer
     */
    typeId: number;

}

