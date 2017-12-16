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
export interface GetCharactersCharacterIdAgentsResearch200Ok {
    /**
     * agent_id integer
     */
    agentId: number;
    /**
     * skill_type_id integer
     */
    skillTypeId: number;
    /**
     * started_at string
     */
    startedAt: Date;
    /**
     * points_per_day number
     */
    pointsPerDay: number;
    /**
     * remainder_points number
     */
    remainderPoints: number;
}
