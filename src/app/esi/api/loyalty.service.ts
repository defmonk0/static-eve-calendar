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
import { GetCharactersCharacterIdLoyaltyPoints200Ok } from '../model/getCharactersCharacterIdLoyaltyPoints200Ok';
import { GetLoyaltyStoresCorporationIdOffers200Ok } from '../model/getLoyaltyStoresCorporationIdOffers200Ok';
import { InternalServerError } from '../model/internalServerError';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';


@Injectable()
export class LoyaltyService {

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
     * Get loyalty points
     * Return a list of loyalty points for all corporations the character has worked for  --- Alternate route: &#x60;/v1/characters/{character_id}/loyalty/points/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/loyalty/points/&#x60;  Alternate route: &#x60;/latest/characters/{character_id}/loyalty/points/&#x60;  --- This route is cached for up to 3600 seconds
     * @param characterId An EVE character ID
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCharactersCharacterIdLoyaltyPoints(characterId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string): Observable<Array<GetCharactersCharacterIdLoyaltyPoints200Ok>> {
        if (characterId === null || characterId === undefined) {
            throw new Error('Required parameter characterId was null or undefined when calling getCharactersCharacterIdLoyaltyPoints.');
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

        return this.httpClient.get<any>(`${this.basePath}/characters/${encodeURIComponent(String(characterId))}/loyalty/points/`, 
        {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    }

    /**
     * List loyalty store offers
     * Return a list of offers from a specific corporation&#39;s loyalty store  --- Alternate route: &#x60;/v1/loyalty/stores/{corporation_id}/offers/&#x60;  Alternate route: &#x60;/legacy/loyalty/stores/{corporation_id}/offers/&#x60;  Alternate route: &#x60;/latest/loyalty/stores/{corporation_id}/offers/&#x60;  --- This route expires daily at 11:05
     * @param corporationId An EVE corporation ID
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getLoyaltyStoresCorporationIdOffers(corporationId: number, datasource?: string, userAgent?: string, xUserAgent?: string): Observable<Array<GetLoyaltyStoresCorporationIdOffers200Ok>> {
        if (corporationId === null || corporationId === undefined) {
            throw new Error('Required parameter corporationId was null or undefined when calling getLoyaltyStoresCorporationIdOffers.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (userAgent !== undefined) {
            queryParameters = queryParameters.set('user_agent', <any>userAgent);
        }

        let headers = this.defaultHeaders;
        if (xUserAgent !== undefined && xUserAgent !== null) {
            headers = headers.set('X-User-Agent', String(xUserAgent));
        }

        return this.httpClient.get<any>(`${this.basePath}/loyalty/stores/${encodeURIComponent(String(corporationId))}/offers/`, 
        {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    }

}
