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

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams }               from '@angular/common/http';

import { Observable }                                        from 'rxjs/Observable';
import '../rxjs-operators';

import { Forbidden } from '../model/forbidden';
import { GetCharactersCharacterIdFittings200Ok } from '../model/getCharactersCharacterIdFittings200Ok';
import { InternalServerError } from '../model/internalServerError';
import { PostCharactersCharacterIdFittingsCreated } from '../model/postCharactersCharacterIdFittingsCreated';
import { PostCharactersCharacterIdFittingsFitting } from '../model/postCharactersCharacterIdFittingsFitting';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';


@Injectable()
export class FittingsService {

    protected basePath = 'https://esi.tech.ccp.is/dev';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }



    /**
     * Delete fitting
     * Delete a fitting from a character  --- Alternate route: &#x60;/v1/characters/{character_id}/fittings/{fitting_id}/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/fittings/{fitting_id}/&#x60;  Alternate route: &#x60;/latest/characters/{character_id}/fittings/{fitting_id}/&#x60; 
     * @param characterId An EVE character ID
     * @param fittingId ID for a fitting of this character
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public deleteCharactersCharacterIdFittingsFittingId(characterId: number, fittingId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string): Observable<{}> {
        if (characterId === null || characterId === undefined) {
            throw new Error('Required parameter characterId was null or undefined when calling deleteCharactersCharacterIdFittingsFittingId.');
        }
        if (fittingId === null || fittingId === undefined) {
            throw new Error('Required parameter fittingId was null or undefined when calling deleteCharactersCharacterIdFittingsFittingId.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (token !== undefined) {
            queryParameters = queryParameters.set('token', <any>token);
        }
        if (userAgent !== undefined) {
            queryParameters = queryParameters.set('user_agent', <any>userAgent);
        }

        let headers = this.defaultHeaders;
        if (xUserAgent !== undefined && xUserAgent !== null) {
            headers = headers.set('X-User-Agent', String(xUserAgent));
        }

        // authentication (evesso) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        return this.httpClient.delete<any>(`${this.basePath}/characters/${encodeURIComponent(String(characterId))}/fittings/${encodeURIComponent(String(fittingId))}/`, 
        {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    }

    /**
     * Get fittings
     * Return fittings of a character  --- Alternate route: &#x60;/v1/characters/{character_id}/fittings/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/fittings/&#x60;  Alternate route: &#x60;/latest/characters/{character_id}/fittings/&#x60;  --- This route is cached for up to 300 seconds
     * @param characterId An EVE character ID
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCharactersCharacterIdFittings(characterId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string): Observable<Array<GetCharactersCharacterIdFittings200Ok>> {
        if (characterId === null || characterId === undefined) {
            throw new Error('Required parameter characterId was null or undefined when calling getCharactersCharacterIdFittings.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (token !== undefined) {
            queryParameters = queryParameters.set('token', <any>token);
        }
        if (userAgent !== undefined) {
            queryParameters = queryParameters.set('user_agent', <any>userAgent);
        }

        let headers = this.defaultHeaders;
        if (xUserAgent !== undefined && xUserAgent !== null) {
            headers = headers.set('X-User-Agent', String(xUserAgent));
        }

        // authentication (evesso) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        return this.httpClient.get<any>(`${this.basePath}/characters/${encodeURIComponent(String(characterId))}/fittings/`, 
        {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    }

    /**
     * Create fitting
     * Save a new fitting for a character  --- Alternate route: &#x60;/v1/characters/{character_id}/fittings/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/fittings/&#x60;  Alternate route: &#x60;/latest/characters/{character_id}/fittings/&#x60; 
     * @param characterId An EVE character ID
     * @param datasource The server name you would like data from
     * @param fitting Details about the new fitting
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public postCharactersCharacterIdFittings(characterId: number, datasource?: string, fitting?: PostCharactersCharacterIdFittingsFitting, token?: string, userAgent?: string, xUserAgent?: string): Observable<PostCharactersCharacterIdFittingsCreated> {
        if (characterId === null || characterId === undefined) {
            throw new Error('Required parameter characterId was null or undefined when calling postCharactersCharacterIdFittings.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (token !== undefined) {
            queryParameters = queryParameters.set('token', <any>token);
        }
        if (userAgent !== undefined) {
            queryParameters = queryParameters.set('user_agent', <any>userAgent);
        }

        let headers = this.defaultHeaders;
        if (xUserAgent !== undefined && xUserAgent !== null) {
            headers = headers.set('X-User-Agent', String(xUserAgent));
        }

        // authentication (evesso) required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        return this.httpClient.post<any>(`${this.basePath}/characters/${encodeURIComponent(String(characterId))}/fittings/`, fitting, 
        {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    }

}
