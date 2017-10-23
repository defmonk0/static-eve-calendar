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
import { GetCharactersCharacterIdOpportunities200Ok } from '../model/getCharactersCharacterIdOpportunities200Ok';
import { GetOpportunitiesGroupsGroupIdOk } from '../model/getOpportunitiesGroupsGroupIdOk';
import { GetOpportunitiesTasksTaskIdOk } from '../model/getOpportunitiesTasksTaskIdOk';
import { InternalServerError } from '../model/internalServerError';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';


@Injectable()
export class OpportunitiesService {

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
     * Get a character&#39;s completed tasks
     * Return a list of tasks finished by a character  --- Alternate route: &#x60;/v1/characters/{character_id}/opportunities/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/opportunities/&#x60;  Alternate route: &#x60;/latest/characters/{character_id}/opportunities/&#x60;  --- This route is cached for up to 3600 seconds
     * @param characterId An EVE character ID
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCharactersCharacterIdOpportunities(characterId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string): Observable<Array<GetCharactersCharacterIdOpportunities200Ok>> {
        if (characterId === null || characterId === undefined) {
            throw new Error('Required parameter characterId was null or undefined when calling getCharactersCharacterIdOpportunities.');
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

        return this.httpClient.get<any>(`${this.basePath}/characters/${encodeURIComponent(String(characterId))}/opportunities/`, 
        {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    }

    /**
     * Get opportunities groups
     * Return a list of opportunities groups  --- Alternate route: &#x60;/v1/opportunities/groups/&#x60;  Alternate route: &#x60;/legacy/opportunities/groups/&#x60;  Alternate route: &#x60;/latest/opportunities/groups/&#x60;  --- This route expires daily at 11:05
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getOpportunitiesGroups(datasource?: string, userAgent?: string, xUserAgent?: string): Observable<Array<number>> {

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

        return this.httpClient.get<any>(`${this.basePath}/opportunities/groups/`, 
        {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    }

    /**
     * Get opportunities group
     * Return information of an opportunities group  --- Alternate route: &#x60;/v1/opportunities/groups/{group_id}/&#x60;  Alternate route: &#x60;/legacy/opportunities/groups/{group_id}/&#x60;  Alternate route: &#x60;/latest/opportunities/groups/{group_id}/&#x60;  --- This route expires daily at 11:05
     * @param groupId ID of an opportunities group
     * @param datasource The server name you would like data from
     * @param language Language to use in the response
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getOpportunitiesGroupsGroupId(groupId: number, datasource?: string, language?: string, userAgent?: string, xUserAgent?: string): Observable<GetOpportunitiesGroupsGroupIdOk> {
        if (groupId === null || groupId === undefined) {
            throw new Error('Required parameter groupId was null or undefined when calling getOpportunitiesGroupsGroupId.');
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

        return this.httpClient.get<any>(`${this.basePath}/opportunities/groups/${encodeURIComponent(String(groupId))}/`, 
        {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    }

    /**
     * Get opportunities tasks
     * Return a list of opportunities tasks  --- Alternate route: &#x60;/v1/opportunities/tasks/&#x60;  Alternate route: &#x60;/legacy/opportunities/tasks/&#x60;  Alternate route: &#x60;/latest/opportunities/tasks/&#x60;  --- This route expires daily at 11:05
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getOpportunitiesTasks(datasource?: string, userAgent?: string, xUserAgent?: string): Observable<Array<number>> {

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

        return this.httpClient.get<any>(`${this.basePath}/opportunities/tasks/`, 
        {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    }

    /**
     * Get opportunities task
     * Return information of an opportunities task  --- Alternate route: &#x60;/v1/opportunities/tasks/{task_id}/&#x60;  Alternate route: &#x60;/legacy/opportunities/tasks/{task_id}/&#x60;  Alternate route: &#x60;/latest/opportunities/tasks/{task_id}/&#x60;  --- This route expires daily at 11:05
     * @param taskId ID of an opportunities task
     * @param datasource The server name you would like data from
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getOpportunitiesTasksTaskId(taskId: number, datasource?: string, userAgent?: string, xUserAgent?: string): Observable<GetOpportunitiesTasksTaskIdOk> {
        if (taskId === null || taskId === undefined) {
            throw new Error('Required parameter taskId was null or undefined when calling getOpportunitiesTasksTaskId.');
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

        return this.httpClient.get<any>(`${this.basePath}/opportunities/tasks/${encodeURIComponent(String(taskId))}/`, 
        {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    }

}