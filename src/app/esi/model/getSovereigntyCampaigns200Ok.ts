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

import { GetSovereigntyCampaignsParticipant } from './getSovereigntyCampaignsParticipant';


/**
 * 200 ok object
 */
export interface GetSovereigntyCampaigns200Ok {
    /**
     * Score for all attacking parties, only present in Defense Events. 
     */
    attackersScore?: number;

    /**
     * Unique ID for this campaign.
     */
    campaignId: number;

    /**
     * The constellation in which the campaign will take place. 
     */
    constellationId: number;

    /**
     * Defending alliance, only present in Defense Events 
     */
    defenderId?: number;

    /**
     * Score for the defending alliance, only present in Defense Events. 
     */
    defenderScore?: number;

    /**
     * Type of event this campaign is for. tcu_defense, ihub_defense and station_defense are referred to as \"Defense Events\", station_freeport as \"Freeport Events\". 
     */
    eventType: GetSovereigntyCampaigns200Ok.EventTypeEnum;

    /**
     * Alliance participating and their respective scores, only present in Freeport Events. 
     */
    participants?: Array<GetSovereigntyCampaignsParticipant>;

    /**
     * The solar system the structure is located in. 
     */
    solarSystemId: number;

    /**
     * Time the event is scheduled to start. 
     */
    startTime: Date;

    /**
     * The structure item ID that is related to this campaign. 
     */
    structureId: number;

}
export namespace GetSovereigntyCampaigns200Ok {
    export type EventTypeEnum = 'tcu_defense' | 'ihub_defense' | 'station_defense' | 'station_freeport';
}

