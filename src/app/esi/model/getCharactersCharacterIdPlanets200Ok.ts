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
export interface GetCharactersCharacterIdPlanets200Ok {
    /**
     * last_update string
     */
    lastUpdate: Date;

    /**
     * num_pins integer
     */
    numPins: number;

    /**
     * owner_id integer
     */
    ownerId: number;

    /**
     * planet_id integer
     */
    planetId: number;

    /**
     * planet_type string
     */
    planetType: GetCharactersCharacterIdPlanets200Ok.PlanetTypeEnum;

    /**
     * solar_system_id integer
     */
    solarSystemId: number;

    /**
     * upgrade_level integer
     */
    upgradeLevel: number;

}
export namespace GetCharactersCharacterIdPlanets200Ok {
    export type PlanetTypeEnum = 'temperate' | 'barren' | 'oceanic' | 'ice' | 'gas' | 'lava' | 'storm' | 'plasma';
}

