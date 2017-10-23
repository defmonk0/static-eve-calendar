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
 * blocked object
 */
export interface GetCharactersCharacterIdChatChannelsBlocked {
    /**
     * ID of a blocked channel member
     */
    accessorId: number;

    /**
     * accessor_type string
     */
    accessorType: GetCharactersCharacterIdChatChannelsBlocked.AccessorTypeEnum;

    /**
     * Time at which this accessor will no longer be blocked
     */
    endAt?: Date;

    /**
     * Reason this accessor is blocked
     */
    reason?: string;

}
export namespace GetCharactersCharacterIdChatChannelsBlocked {
    export type AccessorTypeEnum = 'character' | 'corporation' | 'alliance';
}


