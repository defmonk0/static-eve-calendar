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
import { GetCharactersCharacterIdPlanetsPlanetIdContent } from './getCharactersCharacterIdPlanetsPlanetIdContent';
import { GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails } from './getCharactersCharacterIdPlanetsPlanetIdExtractorDetails';
import { GetCharactersCharacterIdPlanetsPlanetIdFactoryDetails } from './getCharactersCharacterIdPlanetsPlanetIdFactoryDetails';


/**
 * pin object
 */
export interface GetCharactersCharacterIdPlanetsPlanetIdPin {
    /**
     * latitude number
     */
    latitude: number;
    /**
     * longitude number
     */
    longitude: number;
    /**
     * pin_id integer
     */
    pinId: number;
    /**
     * type_id integer
     */
    typeId: number;
    /**
     * schematic_id integer
     */
    schematicId?: number;
    extractorDetails?: GetCharactersCharacterIdPlanetsPlanetIdExtractorDetails;
    factoryDetails?: GetCharactersCharacterIdPlanetsPlanetIdFactoryDetails;
    /**
     * contents array
     */
    contents?: Array<GetCharactersCharacterIdPlanetsPlanetIdContent>;
    /**
     * install_time string
     */
    installTime?: Date;
    /**
     * expiry_time string
     */
    expiryTime?: Date;
    /**
     * last_cycle_start string
     */
    lastCycleStart?: Date;
}
