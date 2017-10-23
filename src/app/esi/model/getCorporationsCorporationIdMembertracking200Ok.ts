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
export interface GetCorporationsCorporationIdMembertracking200Ok {
    /**
     * base_id integer
     */
    baseId?: number;

    /**
     * character_id integer
     */
    characterId: number;

    /**
     * location_id integer
     */
    locationId?: number;

    /**
     * logoff_date string
     */
    logoffDate?: Date;

    /**
     * logon_date string
     */
    logonDate?: Date;

    /**
     * ship_type_id integer
     */
    shipTypeId?: number;

    /**
     * start_date string
     */
    startDate?: Date;

}


