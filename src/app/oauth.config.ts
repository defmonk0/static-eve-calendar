import { AuthConfig } from "angular-oauth2-oidc";

export const AuthConfigInstance: AuthConfig = {
	clientId: "a1e36096b8d8472c9e15bbb1a3e23db6",
	loginUrl: "https://login.eveonline.com/oauth/authorize/",
	oidc: false,
	redirectUri: window.location.origin + "/authentication",
	scope:
		"esi-calendar.respond_calendar_events.v1" +
		" " +
		"esi-calendar.read_calendar_events.v1" +
		" " +
		"esi-corporations.read_structures.v1" +
		" " +
		"esi-universe.read_structures.v1",
	tokenEndpoint: "https://login.eveonline.com/oauth/token/",
};
