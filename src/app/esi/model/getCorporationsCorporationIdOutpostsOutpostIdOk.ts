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
import { GetCorporationsCorporationIdOutpostsOutpostIdCoordinates } from './getCorporationsCorporationIdOutpostsOutpostIdCoordinates';
import { GetCorporationsCorporationIdOutpostsOutpostIdService } from './getCorporationsCorporationIdOutpostsOutpostIdService';


/**
 * 200 ok object
 */
export interface GetCorporationsCorporationIdOutpostsOutpostIdOk {
    /**
     * The entity that owns the station (e.g. the entity whose logo is on the station services bar)
     */
    ownerId: number;
    /**
     * The ID of the solar system the outpost rests in
     */
    systemId: number;
    /**
     * docking_cost_per_ship_volume number
     */
    dockingCostPerShipVolume: number;
    /**
     * office_rental_cost integer
     */
    officeRentalCost: number;
    /**
     * The type ID of the given outpost
     */
    typeId: number;
    /**
     * reprocessing_efficiency number
     */
    reprocessingEfficiency: number;
    /**
     * reprocessing_station_take number
     */
    reprocessingStationTake: number;
    /**
     * The owner ID that sets the ability for someone to dock based on standings.
     */
    standingOwnerId: number;
    coordinates: GetCorporationsCorporationIdOutpostsOutpostIdCoordinates;
    /**
     * A list of services the given outpost provides
     */
    services: Array<GetCorporationsCorporationIdOutpostsOutpostIdService>;
}
