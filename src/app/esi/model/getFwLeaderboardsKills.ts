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
import { GetFwLeaderboardsActiveTotal } from './getFwLeaderboardsActiveTotal';
import { GetFwLeaderboardsLastWeek } from './getFwLeaderboardsLastWeek';
import { GetFwLeaderboardsYesterday } from './getFwLeaderboardsYesterday';


/**
 * Top 4 rankings of factions by number of kills from yesterday, last week and in total.
 */
export interface GetFwLeaderboardsKills {
    /**
     * Top 4 ranking of factions by kills in the past day
     */
    yesterday: Array<GetFwLeaderboardsYesterday>;
    /**
     * Top 4 ranking of factions by kills in the past week
     */
    lastWeek: Array<GetFwLeaderboardsLastWeek>;
    /**
     * Top 4 ranking of factions active in faction warfare by total kills. A faction is considered \"active\" if they have participated in faction warfare in the past 14 days.
     */
    activeTotal: Array<GetFwLeaderboardsActiveTotal>;
}
