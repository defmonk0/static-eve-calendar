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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Forbidden } from '../model/forbidden';
import { GetCharactersCharacterIdOrders200Ok } from '../model/getCharactersCharacterIdOrders200Ok';
import { GetCorporationsCorporationIdOrders200Ok } from '../model/getCorporationsCorporationIdOrders200Ok';
import { GetMarketsGroupsMarketGroupIdNotFound } from '../model/getMarketsGroupsMarketGroupIdNotFound';
import { GetMarketsGroupsMarketGroupIdOk } from '../model/getMarketsGroupsMarketGroupIdOk';
import { GetMarketsPrices200Ok } from '../model/getMarketsPrices200Ok';
import { GetMarketsRegionIdHistory200Ok } from '../model/getMarketsRegionIdHistory200Ok';
import { GetMarketsRegionIdHistoryUnprocessableEntity } from '../model/getMarketsRegionIdHistoryUnprocessableEntity';
import { GetMarketsRegionIdOrders200Ok } from '../model/getMarketsRegionIdOrders200Ok';
import { GetMarketsRegionIdOrdersUnprocessableEntity } from '../model/getMarketsRegionIdOrdersUnprocessableEntity';
import { GetMarketsStructuresStructureId200Ok } from '../model/getMarketsStructuresStructureId200Ok';
import { InternalServerError } from '../model/internalServerError';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class MarketService {

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
     * List orders from a character
     * List market orders placed by a character  --- Alternate route: &#x60;/latest/characters/{character_id}/orders/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/orders/&#x60;  Alternate route: &#x60;/v1/characters/{character_id}/orders/&#x60;  --- This route is cached for up to 3600 seconds
     * @param characterId An EVE character ID
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCharactersCharacterIdOrders(characterId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GetCharactersCharacterIdOrders200Ok>>;
    public getCharactersCharacterIdOrders(characterId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetCharactersCharacterIdOrders200Ok>>>;
    public getCharactersCharacterIdOrders(characterId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetCharactersCharacterIdOrders200Ok>>>;
    public getCharactersCharacterIdOrders(characterId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (characterId === null || characterId === undefined) {
            throw new Error('Required parameter characterId was null or undefined when calling getCharactersCharacterIdOrders.');
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

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<GetCharactersCharacterIdOrders200Ok>>(`${this.basePath}/characters/${encodeURIComponent(String(characterId))}/orders/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List orders from a corporation
     * List market orders placed on behalf of a corporation  --- Alternate route: &#x60;/latest/corporations/{corporation_id}/orders/&#x60;  Alternate route: &#x60;/legacy/corporations/{corporation_id}/orders/&#x60;  Alternate route: &#x60;/v1/corporations/{corporation_id}/orders/&#x60;  --- This route is cached for up to 3600 seconds  --- Requires one of the following EVE corporation role(s): Accountant, Trader 
     * @param corporationId An EVE corporation ID
     * @param datasource The server name you would like data from
     * @param page Which page of results to return
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCorporationsCorporationIdOrders(corporationId: number, datasource?: string, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GetCorporationsCorporationIdOrders200Ok>>;
    public getCorporationsCorporationIdOrders(corporationId: number, datasource?: string, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetCorporationsCorporationIdOrders200Ok>>>;
    public getCorporationsCorporationIdOrders(corporationId: number, datasource?: string, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetCorporationsCorporationIdOrders200Ok>>>;
    public getCorporationsCorporationIdOrders(corporationId: number, datasource?: string, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (corporationId === null || corporationId === undefined) {
            throw new Error('Required parameter corporationId was null or undefined when calling getCorporationsCorporationIdOrders.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', <any>page);
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

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<GetCorporationsCorporationIdOrders200Ok>>(`${this.basePath}/corporations/${encodeURIComponent(String(corporationId))}/orders/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get item groups
     * Get a list of item groups  --- Alternate route: &#x60;/latest/markets/groups/&#x60;  Alternate route: &#x60;/legacy/markets/groups/&#x60;  Alternate route: &#x60;/v1/markets/groups/&#x60;  --- This route expires daily at 11:05
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMarketsGroups(datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<number>>;
    public getMarketsGroups(datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<number>>>;
    public getMarketsGroups(datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<number>>>;
    public getMarketsGroups(datasource?: string, userAgent?: string, xUserAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<number>>(`${this.basePath}/markets/groups/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get item group information
     * Get information on an item group  --- Alternate route: &#x60;/latest/markets/groups/{market_group_id}/&#x60;  Alternate route: &#x60;/legacy/markets/groups/{market_group_id}/&#x60;  Alternate route: &#x60;/v1/markets/groups/{market_group_id}/&#x60;  --- This route expires daily at 11:05
     * @param marketGroupId An Eve item group ID
     * @param datasource The server name you would like data from
     * @param language Language to use in the response
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMarketsGroupsMarketGroupId(marketGroupId: number, datasource?: string, language?: string, userAgent?: string, xUserAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<GetMarketsGroupsMarketGroupIdOk>;
    public getMarketsGroupsMarketGroupId(marketGroupId: number, datasource?: string, language?: string, userAgent?: string, xUserAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetMarketsGroupsMarketGroupIdOk>>;
    public getMarketsGroupsMarketGroupId(marketGroupId: number, datasource?: string, language?: string, userAgent?: string, xUserAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetMarketsGroupsMarketGroupIdOk>>;
    public getMarketsGroupsMarketGroupId(marketGroupId: number, datasource?: string, language?: string, userAgent?: string, xUserAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (marketGroupId === null || marketGroupId === undefined) {
            throw new Error('Required parameter marketGroupId was null or undefined when calling getMarketsGroupsMarketGroupId.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (language !== undefined) {
            queryParameters = queryParameters.set('language', <any>language);
        }
        if (userAgent !== undefined) {
            queryParameters = queryParameters.set('user_agent', <any>userAgent);
        }

        let headers = this.defaultHeaders;
        if (xUserAgent !== undefined && xUserAgent !== null) {
            headers = headers.set('X-User-Agent', String(xUserAgent));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<GetMarketsGroupsMarketGroupIdOk>(`${this.basePath}/markets/groups/${encodeURIComponent(String(marketGroupId))}/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List market prices
     * Return a list of prices  --- Alternate route: &#x60;/latest/markets/prices/&#x60;  Alternate route: &#x60;/legacy/markets/prices/&#x60;  Alternate route: &#x60;/v1/markets/prices/&#x60;  --- This route is cached for up to 3600 seconds
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMarketsPrices(datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GetMarketsPrices200Ok>>;
    public getMarketsPrices(datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetMarketsPrices200Ok>>>;
    public getMarketsPrices(datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetMarketsPrices200Ok>>>;
    public getMarketsPrices(datasource?: string, userAgent?: string, xUserAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<GetMarketsPrices200Ok>>(`${this.basePath}/markets/prices/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List historical market statistics in a region
     * Return a list of historical market statistics for the specified type in a region  --- Alternate route: &#x60;/latest/markets/{region_id}/history/&#x60;  Alternate route: &#x60;/legacy/markets/{region_id}/history/&#x60;  Alternate route: &#x60;/v1/markets/{region_id}/history/&#x60;  --- This route is cached for up to 3600 seconds
     * @param regionId Return statistics in this region
     * @param typeId Return statistics for this type
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMarketsRegionIdHistory(regionId: number, typeId: number, datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GetMarketsRegionIdHistory200Ok>>;
    public getMarketsRegionIdHistory(regionId: number, typeId: number, datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetMarketsRegionIdHistory200Ok>>>;
    public getMarketsRegionIdHistory(regionId: number, typeId: number, datasource?: string, userAgent?: string, xUserAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetMarketsRegionIdHistory200Ok>>>;
    public getMarketsRegionIdHistory(regionId: number, typeId: number, datasource?: string, userAgent?: string, xUserAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (regionId === null || regionId === undefined) {
            throw new Error('Required parameter regionId was null or undefined when calling getMarketsRegionIdHistory.');
        }
        if (typeId === null || typeId === undefined) {
            throw new Error('Required parameter typeId was null or undefined when calling getMarketsRegionIdHistory.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (typeId !== undefined) {
            queryParameters = queryParameters.set('type_id', <any>typeId);
        }
        if (userAgent !== undefined) {
            queryParameters = queryParameters.set('user_agent', <any>userAgent);
        }

        let headers = this.defaultHeaders;
        if (xUserAgent !== undefined && xUserAgent !== null) {
            headers = headers.set('X-User-Agent', String(xUserAgent));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<GetMarketsRegionIdHistory200Ok>>(`${this.basePath}/markets/${encodeURIComponent(String(regionId))}/history/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List orders in a region
     * Return a list of orders in a region  --- Alternate route: &#x60;/latest/markets/{region_id}/orders/&#x60;  Alternate route: &#x60;/legacy/markets/{region_id}/orders/&#x60;  Alternate route: &#x60;/v1/markets/{region_id}/orders/&#x60;  --- This route is cached for up to 300 seconds
     * @param orderType Filter buy/sell orders, return all orders by default. If you query without type_id, we always return both buy and sell orders.
     * @param regionId Return orders in this region
     * @param datasource The server name you would like data from
     * @param page Which page of results to return
     * @param typeId Return orders only for this type
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMarketsRegionIdOrders(orderType: string, regionId: number, datasource?: string, page?: number, typeId?: number, userAgent?: string, xUserAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GetMarketsRegionIdOrders200Ok>>;
    public getMarketsRegionIdOrders(orderType: string, regionId: number, datasource?: string, page?: number, typeId?: number, userAgent?: string, xUserAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetMarketsRegionIdOrders200Ok>>>;
    public getMarketsRegionIdOrders(orderType: string, regionId: number, datasource?: string, page?: number, typeId?: number, userAgent?: string, xUserAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetMarketsRegionIdOrders200Ok>>>;
    public getMarketsRegionIdOrders(orderType: string, regionId: number, datasource?: string, page?: number, typeId?: number, userAgent?: string, xUserAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (orderType === null || orderType === undefined) {
            throw new Error('Required parameter orderType was null or undefined when calling getMarketsRegionIdOrders.');
        }
        if (regionId === null || regionId === undefined) {
            throw new Error('Required parameter regionId was null or undefined when calling getMarketsRegionIdOrders.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (orderType !== undefined) {
            queryParameters = queryParameters.set('order_type', <any>orderType);
        }
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (typeId !== undefined) {
            queryParameters = queryParameters.set('type_id', <any>typeId);
        }
        if (userAgent !== undefined) {
            queryParameters = queryParameters.set('user_agent', <any>userAgent);
        }

        let headers = this.defaultHeaders;
        if (xUserAgent !== undefined && xUserAgent !== null) {
            headers = headers.set('X-User-Agent', String(xUserAgent));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<GetMarketsRegionIdOrders200Ok>>(`${this.basePath}/markets/${encodeURIComponent(String(regionId))}/orders/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List type IDs relevant to a market
     * Return a list of type IDs that have active orders in the region, for efficient market indexing.  --- Alternate route: &#x60;/latest/markets/{region_id}/types/&#x60;  Alternate route: &#x60;/legacy/markets/{region_id}/types/&#x60;  Alternate route: &#x60;/v1/markets/{region_id}/types/&#x60;  --- This route is cached for up to 600 seconds
     * @param regionId Return statistics in this region
     * @param datasource The server name you would like data from
     * @param page Which page of results to return
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMarketsRegionIdTypes(regionId: number, datasource?: string, page?: number, userAgent?: string, xUserAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<number>>;
    public getMarketsRegionIdTypes(regionId: number, datasource?: string, page?: number, userAgent?: string, xUserAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<number>>>;
    public getMarketsRegionIdTypes(regionId: number, datasource?: string, page?: number, userAgent?: string, xUserAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<number>>>;
    public getMarketsRegionIdTypes(regionId: number, datasource?: string, page?: number, userAgent?: string, xUserAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (regionId === null || regionId === undefined) {
            throw new Error('Required parameter regionId was null or undefined when calling getMarketsRegionIdTypes.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (userAgent !== undefined) {
            queryParameters = queryParameters.set('user_agent', <any>userAgent);
        }

        let headers = this.defaultHeaders;
        if (xUserAgent !== undefined && xUserAgent !== null) {
            headers = headers.set('X-User-Agent', String(xUserAgent));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<number>>(`${this.basePath}/markets/${encodeURIComponent(String(regionId))}/types/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List orders in a structure
     * Return all orders in a structure  --- Alternate route: &#x60;/latest/markets/structures/{structure_id}/&#x60;  Alternate route: &#x60;/legacy/markets/structures/{structure_id}/&#x60;  Alternate route: &#x60;/v1/markets/structures/{structure_id}/&#x60;  --- This route is cached for up to 300 seconds
     * @param structureId Return orders in this structure
     * @param datasource The server name you would like data from
     * @param page Which page of results to return
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMarketsStructuresStructureId(structureId: number, datasource?: string, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GetMarketsStructuresStructureId200Ok>>;
    public getMarketsStructuresStructureId(structureId: number, datasource?: string, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetMarketsStructuresStructureId200Ok>>>;
    public getMarketsStructuresStructureId(structureId: number, datasource?: string, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetMarketsStructuresStructureId200Ok>>>;
    public getMarketsStructuresStructureId(structureId: number, datasource?: string, page?: number, token?: string, userAgent?: string, xUserAgent?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (structureId === null || structureId === undefined) {
            throw new Error('Required parameter structureId was null or undefined when calling getMarketsStructuresStructureId.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', <any>page);
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

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<GetMarketsStructuresStructureId200Ok>>(`${this.basePath}/markets/structures/${encodeURIComponent(String(structureId))}/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
