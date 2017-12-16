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
export interface GetCharactersCharacterIdCorporationhistory200Ok {
    /**
     * start_date string
     */
    startDate: Date;
    /**
     * corporation_id integer
     */
    corporationId: number;
    /**
     * True if the corporation has been deleted
     */
    isDeleted?: boolean;
    /**
     * An incrementing ID that can be used to canonically establish order of records in cases where dates may be ambiguous
     */
    recordId: number;
}
