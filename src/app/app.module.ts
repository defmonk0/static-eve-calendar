// native
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

// external dependencies
import { OAuthModule } from "angular-oauth2-oidc";

// generated dependencies
import { ApiModule } from "./esi/api.module";
import { Configuration } from "./esi/configuration";

// internal dependencies
import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { HomeComponent } from "./home/home.component";

// routing
import { AppRoutingModule } from "./app-routing.module";

export const apiConfig = new Configuration({});
export function getApiConfig() {
	return apiConfig;
}

@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		AuthenticationComponent,
		CalendarComponent,
		HomeComponent,
	],
	imports: [
		ApiModule.forRoot(getApiConfig),
		AppRoutingModule,
		BrowserModule,
		HttpClientModule,
		OAuthModule.forRoot(),
	],
	providers: [],
})
export class AppModule {}
