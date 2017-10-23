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
 * invitation object
 */
export interface PostFleetsFleetIdMembersInvitation {
    /**
     * The character you want to invite
     */
    characterId: number;

    /**
     * If a character is invited with the `fleet_commander` role, neither `wing_id` or `squad_id` should be specified. If a character is invited with the `wing_commander` role, only `wing_id` should be specified. If a character is invited with the `squad_commander` role, both `wing_id` and `squad_id` should be specified. If a character is invited with the `squad_member` role, `wing_id` and `squad_id` should either both be specified or not specified at all. If they aren’t specified, the invited character will join any squad with available positions.
     */
    role: PostFleetsFleetIdMembersInvitation.RoleEnum;

    /**
     * squad_id integer
     */
    squadId?: number;

    /**
     * wing_id integer
     */
    wingId?: number;

}
export namespace PostFleetsFleetIdMembersInvitation {
    export type RoleEnum = 'fleet_commander' | 'wing_commander' | 'squad_commander' | 'squad_member';
}


