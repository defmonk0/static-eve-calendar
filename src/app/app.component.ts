import { Component } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { AuthConfigInstance } from "./oauth.config";
import { CharacterService } from "./esi/api/character.service";
import { Configuration } from "./esi/configuration";
import { OAuthService } from "angular-oauth2-oidc";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent {
	public defaultHeaders = new HttpHeaders();

	constructor(
		private apiConfig: Configuration,
		private characterService: CharacterService,
		private oauthService: OAuthService,
		protected httpClient: HttpClient
	) {
		// Set up our oauth service.
		this.oauthService.configure(AuthConfigInstance);

		// Update our config.
		this.apiConfig.accessToken = this.oauthService.getAccessToken();

		// Subscribe to oauth events.
		this.oauthService.events.subscribe(res => {
			switch (res.type) {
				case "token_received":
					let headers = this.defaultHeaders;

					headers = headers.set(
						"X-User-Agent",
						"PNS Static Eve Calendar (Slack: @def_monk)"
					);

					headers = headers.set(
						"Authorization",
						"Bearer " + this.oauthService.getAccessToken()
					);

					this.httpClient
						.get<any>("https://esi.tech.ccp.is/verify/", {
							headers: headers,
						})
						.subscribe(
							res => {
								for (var i in res) {
									sessionStorage.setItem(
										"verify_" + i,
										res[i]
									);
								}

								this.characterService
									.getCharactersCharacterId(
										Number(
											sessionStorage.getItem(
												"verify_CharacterID"
											)
										)
									)
									.subscribe(
										res => {
											for (var i in res) {
												sessionStorage.setItem(
													"character_" + i,
													res[i]
												);
											}
										},
										err => {
											console.log(err);
										}
									);
							},
							err => {
								console.log(err);
							}
						);

					// Update our config.
					this.apiConfig.accessToken = this.oauthService.getAccessToken();

					break;
				default:
					console.log(res);
					break;
			}
		});

		// Try to do our login if we need to.
		this.oauthService.tryLogin();
	}
}
