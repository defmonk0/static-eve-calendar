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
export interface GetUniverseSystemKills200Ok {
    /**
     * system_id integer
     */
    systemId: number;
    /**
     * Number of player ships killed in this system
     */
    shipKills: number;
    /**
     * Number of NPC ships killed in this system
     */
    npcKills: number;
    /**
     * Number of pods killed in this system
     */
    podKills: number;
}
