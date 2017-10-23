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
export interface GetCorporationsCorporationIdOrders200Ok {
    /**
     * Numer of days for which order is valid (starting from the issued date). An order expires at time issued + duration
     */
    duration: number;

    /**
     * For buy orders, the amount of ISK in escrow
     */
    escrow: number;

    /**
     * True for a bid (buy) order. False for an offer (sell) order
     */
    isBuyOrder: boolean;

    /**
     * Date and time when this order was issued
     */
    issued: Date;

    /**
     * ID of the location where order was placed
     */
    locationId: number;

    /**
     * For bids (buy orders), the minimum quantity that will be accepted in a matching offer (sell order)
     */
    minVolume: number;

    /**
     * Unique order ID
     */
    orderId: number;

    /**
     * Cost per unit for this order
     */
    price: number;

    /**
     * Valid order range, numbers are ranges in jumps
     */
    range: GetCorporationsCorporationIdOrders200Ok.RangeEnum;

    /**
     * ID of the region where order was placed
     */
    regionId: number;

    /**
     * Current order state
     */
    state: GetCorporationsCorporationIdOrders200Ok.StateEnum;

    /**
     * The type ID of the item transacted in this order
     */
    typeId: number;

    /**
     * Quantity of items still required or offered
     */
    volumeRemain: number;

    /**
     * Quantity of items required or offered at time order was placed
     */
    volumeTotal: number;

    /**
     * Wallet division of which this order used
     */
    walletDivision: number;

}
export namespace GetCorporationsCorporationIdOrders200Ok {
    export type RangeEnum = '1' | '10' | '2' | '20' | '3' | '30' | '4' | '40' | '5' | 'region' | 'solarsystem' | 'station';
    export type StateEnum = 'cancelled' | 'character_deleted' | 'closed' | 'expired' | 'open' | 'pending';
}


