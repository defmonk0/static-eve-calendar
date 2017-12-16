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
 * operator object
 */
export interface GetCharactersCharacterIdChatChannelsOperator {
    /**
     * ID of a channel operator
     */
    accessorId: number;
    /**
     * accessor_type string
     */
    accessorType: GetCharactersCharacterIdChatChannelsOperator.AccessorTypeEnum;
}
export namespace GetCharactersCharacterIdChatChannelsOperator {
    export type AccessorTypeEnum = 'character' | 'corporation' | 'alliance';
    export const AccessorTypeEnum = {
        Character: 'character' as AccessorTypeEnum,
        Corporation: 'corporation' as AccessorTypeEnum,
        Alliance: 'alliance' as AccessorTypeEnum
    }
}
