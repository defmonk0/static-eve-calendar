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



/**
 * 200 ok object
 */
export interface GetUniverseRaces200Ok {
    /**
     * The alliance generally associated with this race
     */
    allianceId: number;

    /**
     * description string
     */
    description: string;

    /**
     * name string
     */
    name: string;

    /**
     * race_id integer
     */
    raceId: number;

}


