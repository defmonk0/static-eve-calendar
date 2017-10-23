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
export interface GetFleetsFleetIdOk {
    /**
     * Is free-move enabled
     */
    isFreeMove: boolean;

    /**
     * Does the fleet have an active fleet advertisement
     */
    isRegistered: boolean;

    /**
     * Is EVE Voice enabled
     */
    isVoiceEnabled: boolean;

    /**
     * Fleet MOTD in CCP flavoured HTML
     */
    motd: string;

}


