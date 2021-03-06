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
export interface GetCorporationsCorporationIdOk {
    /**
     * the full name of the corporation
     */
    name: string;
    /**
     * the short name of the corporation
     */
    ticker: string;
    /**
     * member_count integer
     */
    memberCount: number;
    /**
     * ceo_id integer
     */
    ceoId: number;
    /**
     * ID of the alliance that corporation is a member of, if any
     */
    allianceId?: number;
    /**
     * description string
     */
    description?: string;
    /**
     * tax_rate number
     */
    taxRate: number;
    /**
     * date_founded string
     */
    dateFounded?: Date;
    /**
     * creator_id integer
     */
    creatorId: number;
    /**
     * url string
     */
    url?: string;
    /**
     * faction_id integer
     */
    factionId?: number;
    /**
     * home_station_id integer
     */
    homeStationId?: number;
    /**
     * shares integer
     */
    shares?: number;
}
