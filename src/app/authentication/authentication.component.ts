import { Component, OnInit } from "@angular/core";

import { OAuthService } from "angular-oauth2-oidc";

@Component({
	selector: "app-authentication",
	templateUrl: "./authentication.component.html",
	styleUrls: ["./authentication.component.css"],
})
export class AuthenticationComponent implements OnInit {
	constructor(private oauthService: OAuthService) {}

	public login() {
		this.oauthService.initImplicitFlow();
	}

	public logout() {
		this.oauthService.logOut();
		sessionStorage.clear();
	}

	public get token() {
		if (!this.oauthService.getAccessToken()) {
			return false;
		}

		return true;
	}

	ngOnInit() {}
}
