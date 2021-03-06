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


/**
 * 200 ok object
 */
export interface GetCharactersCharacterIdLocationOk {
    /**
     * solar_system_id integer
     */
    solarSystemId: number;
    /**
     * station_id integer
     */
    stationId?: number;
    /**
     * structure_id integer
     */
    structureId?: number;
}
