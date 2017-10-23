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

import { GetCharactersCharacterIdBookmarksCoordinates } from './getCharactersCharacterIdBookmarksCoordinates';
import { GetCharactersCharacterIdBookmarksItem } from './getCharactersCharacterIdBookmarksItem';


/**
 * 200 ok object
 */
export interface GetCharactersCharacterIdBookmarks200Ok {
    /**
     * bookmark_id integer
     */
    bookmarkId: number;

    coordinates?: GetCharactersCharacterIdBookmarksCoordinates;

    /**
     * created string
     */
    created: Date;

    /**
     * creator_id integer
     */
    creatorId: number;

    /**
     * folder_id integer
     */
    folderId?: number;

    item?: GetCharactersCharacterIdBookmarksItem;

    /**
     * label string
     */
    label: string;

    /**
     * location_id integer
     */
    locationId: number;

    /**
     * notes string
     */
    notes: string;

}

