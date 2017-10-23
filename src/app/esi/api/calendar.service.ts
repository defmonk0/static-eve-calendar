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
import { GetCharactersCharacterIdCalendar200Ok } from '../model/getCharactersCharacterIdCalendar200Ok';
import { GetCharactersCharacterIdCalendarEventIdAttendees200Ok } from '../model/getCharactersCharacterIdCalendarEventIdAttendees200Ok';
import { GetCharactersCharacterIdCalendarEventIdOk } from '../model/getCharactersCharacterIdCalendarEventIdOk';
import { InternalServerError } from '../model/internalServerError';
import { PutCharactersCharacterIdCalendarEventIdResponse } from '../model/putCharactersCharacterIdCalendarEventIdResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';


@Injectable()
export class CalendarService {

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
     * List calendar event summaries
     * Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event.  --- Alternate route: &#x60;/v1/characters/{character_id}/calendar/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/calendar/&#x60;  Alternate route: &#x60;/latest/characters/{character_id}/calendar/&#x60;  --- This route is cached for up to 5 seconds
     * @param characterId An EVE character ID
     * @param datasource The server name you would like data from
     * @param fromEvent The event ID to retrieve events from
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCharactersCharacterIdCalendar(characterId: number, datasource?: string, fromEvent?: number, token?: string, userAgent?: string, xUserAgent?: string): Observable<Array<GetCharactersCharacterIdCalendar200Ok>> {
        if (characterId === null || characterId === undefined) {
            throw new Error('Required parameter characterId was null or undefined when calling getCharactersCharacterIdCalendar.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (datasource !== undefined) {
            queryParameters = queryParameters.set('datasource', <any>datasource);
        }
        if (fromEvent !== undefined) {
            queryParameters = queryParameters.set('from_event', <any>fromEvent);
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

        return this.httpClient.get<any>(`${this.basePath}/characters/${encodeURIComponent(String(characterId))}/calendar/`, 
        {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    }

    /**
     * Get an event
     * Get all the information for a specific event  --- Alternate route: &#x60;/v3/characters/{character_id}/calendar/{event_id}/&#x60;  Alternate route: &#x60;/latest/characters/{character_id}/calendar/{event_id}/&#x60;  --- This route is cached for up to 5 seconds
     * @param characterId An EVE character ID
     * @param eventId The id of the event requested
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCharactersCharacterIdCalendarEventId(characterId: number, eventId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string): Observable<GetCharactersCharacterIdCalendarEventIdOk> {
        if (characterId === null || characterId === undefined) {
            throw new Error('Required parameter characterId was null or undefined when calling getCharactersCharacterIdCalendarEventId.');
        }
        if (eventId === null || eventId === undefined) {
            throw new Error('Required parameter eventId was null or undefined when calling getCharactersCharacterIdCalendarEventId.');
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

        return this.httpClient.get<any>(`${this.basePath}/characters/${encodeURIComponent(String(characterId))}/calendar/${encodeURIComponent(String(eventId))}/`, 
        {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    }

    /**
     * Get attendees
     * Get all invited attendees for a given event  --- Alternate route: &#x60;/v1/characters/{character_id}/calendar/{event_id}/attendees/&#x60;  Alternate route: &#x60;/latest/characters/{character_id}/calendar/{event_id}/attendees/&#x60;  Alternate route: &#x60;/legacy/characters/{character_id}/calendar/{event_id}/attendees/&#x60;  --- This route is cached for up to 600 seconds
     * @param characterId An EVE character ID
     * @param eventId The id of the event requested
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public getCharactersCharacterIdCalendarEventIdAttendees(characterId: number, eventId: number, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string): Observable<Array<GetCharactersCharacterIdCalendarEventIdAttendees200Ok>> {
        if (characterId === null || characterId === undefined) {
            throw new Error('Required parameter characterId was null or undefined when calling getCharactersCharacterIdCalendarEventIdAttendees.');
        }
        if (eventId === null || eventId === undefined) {
            throw new Error('Required parameter eventId was null or undefined when calling getCharactersCharacterIdCalendarEventIdAttendees.');
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

        return this.httpClient.get<any>(`${this.basePath}/characters/${encodeURIComponent(String(characterId))}/calendar/${encodeURIComponent(String(eventId))}/attendees/`, 
        {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    }

    /**
     * Respond to an event
     * Set your response status to an event  --- Alternate route: &#x60;/v3/characters/{character_id}/calendar/{event_id}/&#x60;  Alternate route: &#x60;/latest/characters/{character_id}/calendar/{event_id}/&#x60; 
     * @param characterId An EVE character ID
     * @param eventId The ID of the event requested
     * @param response The response value to set, overriding current value.
     * @param datasource The server name you would like data from
     * @param token Access token to use if unable to set a header
     * @param userAgent Client identifier, takes precedence over headers
     * @param xUserAgent Client identifier, takes precedence over User-Agent
     */
    public putCharactersCharacterIdCalendarEventId(characterId: number, eventId: number, response: PutCharactersCharacterIdCalendarEventIdResponse, datasource?: string, token?: string, userAgent?: string, xUserAgent?: string): Observable<{}> {
        if (characterId === null || characterId === undefined) {
            throw new Error('Required parameter characterId was null or undefined when calling putCharactersCharacterIdCalendarEventId.');
        }
        if (eventId === null || eventId === undefined) {
            throw new Error('Required parameter eventId was null or undefined when calling putCharactersCharacterIdCalendarEventId.');
        }
        if (response === null || response === undefined) {
            throw new Error('Required parameter response was null or undefined when calling putCharactersCharacterIdCalendarEventId.');
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

        return this.httpClient.put<any>(`${this.basePath}/characters/${encodeURIComponent(String(characterId))}/calendar/${encodeURIComponent(String(eventId))}/`, response, 
        {
            params: queryParameters,
            headers: headers,
            withCredentials: this.configuration.withCredentials,
        });
    }

}