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
 * movement object
 */
export interface PutFleetsFleetIdMembersMemberIdMovement {
    /**
     * If a character is moved to the `fleet_commander` role, neither `wing_id` or `squad_id` should be specified. If a character is moved to the `wing_commander` role, only `wing_id` should be specified. If a character is moved to the `squad_commander` role, both `wing_id` and `squad_id` should be specified. If a character is moved to the `squad_member` role, both `wing_id` and `squad_id` should be specified.
     */
    role: PutFleetsFleetIdMembersMemberIdMovement.RoleEnum;

    /**
     * squad_id integer
     */
    squadId?: number;

    /**
     * wing_id integer
     */
    wingId?: number;

}
export namespace PutFleetsFleetIdMembersMemberIdMovement {
    export type RoleEnum = 'fleet_commander' | 'wing_commander' | 'squad_commander' | 'squad_member';
}


