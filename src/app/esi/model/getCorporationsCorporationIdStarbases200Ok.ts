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
export interface GetCorporationsCorporationIdStarbases200Ok {
    /**
     * Unique ID for this starbase (POS)
     */
    starbaseId: number;
    /**
     * Starbase (POS) type
     */
    typeId: number;
    /**
     * The solar system this starbase (POS) is in, unanchored POSes have this information
     */
    systemId: number;
    /**
     * The moon this starbase (POS) is anchored on, unanchored POSes do not have this information
     */
    moonId?: number;
    /**
     * state string
     */
    state?: GetCorporationsCorporationIdStarbases200Ok.StateEnum;
    /**
     * When the POS started unanchoring, for starbases (POSes) in unanchoring state
     */
    unanchorAt?: Date;
    /**
     * When the POS will be out of reinforcement, for starbases (POSes) in reinforced state
     */
    reinforcedUntil?: Date;
    /**
     * When the POS onlined, for starbases (POSes) in online state
     */
    onlinedSince?: Date;
}
export namespace GetCorporationsCorporationIdStarbases200Ok {
    export type StateEnum = 'offline' | 'online' | 'onlining' | 'reinforced' | 'unanchoring';
    export const StateEnum = {
        Offline: 'offline' as StateEnum,
        Online: 'online' as StateEnum,
        Onlining: 'onlining' as StateEnum,
        Reinforced: 'reinforced' as StateEnum,
        Unanchoring: 'unanchoring' as StateEnum
    }
}