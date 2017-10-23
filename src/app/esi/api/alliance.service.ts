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

import { GetAlliancesAllianceIdIconsNotFound } from '../model/getAlliancesAllianceIdIconsNotFound';
import { GetAlliancesAllianceIdIconsOk } from '../model/getAlliancesAllianceIdIconsOk';
import { GetAlliancesAllianceIdNotFound } from '../model/getAlliancesAllianceIdNotFound';
import { GetAlliancesAllianceIdOk } from '../model/getAlliancesAllianceIdOk';
import { GetAlliancesNames200Ok } from '../model/getAlliancesNames200Ok';
import { InternalServerError } from '../model/internalServerError';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';


@Injectable()
export class AllianceService {

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
     * List all alliances
     * List all active player alliances  --- Alternate route: &#x60;/v1/alliances/&#x60;  Alternate route: &#x60;/latest/alliances/&#x60;  Alternate route: &#x60;/legacy/alliances/&#x60;  --- This route is cached for up to 3600 seconds
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getAlliances(datasource?: string, userAgent?: string, xUserAgent?: string): Observable<Array<number>> {

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

        return this.httpClient.get<any>(`${this.basePath}/alliances/`, 
        {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    }

    /**
     * Get alliance information
     * Public information about an alliance  --- Alternate route: &#x60;/v3/alliances/{alliance_id}/&#x60;  --- This route is cached for up to 3600 seconds
     * @param allianceId An EVE alliance ID
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getAlliancesAllianceId(allianceId: number, datasource?: string, userAgent?: string, xUserAgent?: string): Observable<GetAlliancesAllianceIdOk> {
        if (allianceId === null || allianceId === undefined) {
            throw new Error('Required parameter allianceId was null or undefined when calling getAlliancesAllianceId.');
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

        return this.httpClient.get<any>(`${this.basePath}/alliances/${encodeURIComponent(String(allianceId))}/`, 
        {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    }

    /**
     * List alliance&#39;s corporations
     * List all current member corporations of an alliance  --- Alternate route: &#x60;/v1/alliances/{alliance_id}/corporations/&#x60;  Alternate route: &#x60;/latest/alliances/{alliance_id}/corporations/&#x60;  Alternate route: &#x60;/legacy/alliances/{alliance_id}/corporations/&#x60;  --- This route is cached for up to 3600 seconds
     * @param allianceId An EVE alliance ID
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getAlliancesAllianceIdCorporations(allianceId: number, datasource?: string, userAgent?: string, xUserAgent?: string): Observable<Array<number>> {
        if (allianceId === null || allianceId === undefined) {
            throw new Error('Required parameter allianceId was null or undefined when calling getAlliancesAllianceIdCorporations.');
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

        return this.httpClient.get<any>(`${this.basePath}/alliances/${encodeURIComponent(String(allianceId))}/corporations/`, 
        {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    }

    /**
     * Get alliance icon
     * Get the icon urls for a alliance  --- Alternate route: &#x60;/v1/alliances/{alliance_id}/icons/&#x60;  Alternate route: &#x60;/legacy/alliances/{alliance_id}/icons/&#x60;  Alternate route: &#x60;/latest/alliances/{alliance_id}/icons/&#x60;  --- This route is cached for up to 3600 seconds
     * @param allianceId An EVE alliance ID
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getAlliancesAllianceIdIcons(allianceId: number, datasource?: string, userAgent?: string, xUserAgent?: string): Observable<GetAlliancesAllianceIdIconsOk> {
        if (allianceId === null || allianceId === undefined) {
            throw new Error('Required parameter allianceId was null or undefined when calling getAlliancesAllianceIdIcons.');
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

        return this.httpClient.get<any>(`${this.basePath}/alliances/${encodeURIComponent(String(allianceId))}/icons/`, 
        {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    }

    /**
     * Get alliance names
     * Resolve a set of alliance IDs to alliance names  --- Alternate route: &#x60;/v2/alliances/names/&#x60;  --- This route is cached for up to 3600 seconds
     * @param allianceIds A comma separated list of alliance IDs
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getAlliancesNames(allianceIds: Array<number>, datasource?: string, userAgent?: string, xUserAgent?: string): Observable<Array<GetAlliancesNames200Ok>> {
        if (allianceIds === null || allianceIds === undefined) {
            throw new Error('Required parameter allianceIds was null or undefined when calling getAlliancesNames.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (allianceIds) {
            queryParameters = queryParameters.set('alliance_ids', allianceIds.join(COLLECTION_FORMATS['csv']));
        }
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

        return this.httpClient.get<any>(`${this.basePath}/alliances/names/`, 
        {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    }

}