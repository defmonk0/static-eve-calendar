import { Component } from "@angular/core";

import { AuthConfigInstance } from "./oauth.config";
import { OAuthService } from "angular-oauth2-oidc";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent {
	constructor(private oauthService: OAuthService) {
		this.oauthService.configure(AuthConfigInstance);

		this.oauthService.events.subscribe(e => {
			console.log(e);
		});

		this.oauthService.tryLogin({
			onTokenReceived: context => {
				console.log("logged in");
				console.log(context);
				// https://github.com/swagger-api/swagger-codegen/issues/3221#issuecomment-314757762
			},
		});
	}
}
