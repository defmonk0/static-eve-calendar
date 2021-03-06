/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 0.7.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { GetCorporationsCorporationIdStructuresCurrentVul } from './getCorporationsCorporationIdStructuresCurrentVul';
import { GetCorporationsCorporationIdStructuresNextVul } from './getCorporationsCorporationIdStructuresNextVul';
import { GetCorporationsCorporationIdStructuresService } from './getCorporationsCorporationIdStructuresService';


/**
 * 200 ok object
 */
export interface GetCorporationsCorporationIdStructures200Ok {
    /**
     * The Item ID of the structure
     */
    structureId: number;
    /**
     * The type id of the structure
     */
    typeId: number;
    /**
     * ID of the corporation that owns the structure
     */
    corporationId: number;
    /**
     * The solar system the structure is in
     */
    systemId: number;
    /**
     * The id of the ACL profile for this citadel
     */
    profileId: number;
    /**
     * This week's vulnerability windows, Monday is day 0
     */
    currentVul: Array<GetCorporationsCorporationIdStructuresCurrentVul>;
    /**
     * Next week's vulnerability windows, Monday is day 0
     */
    nextVul: Array<GetCorporationsCorporationIdStructuresNextVul>;
    /**
     * Date on which the structure will run out of fuel
     */
    fuelExpires?: Date;
    /**
     * Contains a list of service upgrades, and their state
     */
    services?: Array<GetCorporationsCorporationIdStructuresService>;
    /**
     * Date at which the structure entered it's current state
     */
    stateTimerStart?: Date;
    /**
     * Date at which the structure will move to it's next state
     */
    stateTimerEnd?: Date;
    /**
     * Date at which the structure will unanchor
     */
    unanchorsAt?: Date;
}
