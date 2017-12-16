// native
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

// external dependencies
import { CalendarModule } from "angular-calendar";
import { OAuthModule } from "angular-oauth2-oidc";

// generated dependencies
import { ApiModule } from "./esi/api.module";
import { Configuration } from "./esi/configuration";

// internal dependencies
import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { HomeComponent } from "./home/home.component";
import { ServiceListPipe } from "./utils/serviceList.pipe";

// routing
import { AppRoutingModule } from "./app-routing.module";

// esi api config
export const apiConfig = new Configuration({});
export function getApiConfig() {
	return apiConfig;
}

@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		ServiceListPipe,
		AuthenticationComponent,
		CalendarComponent,
		HomeComponent,
	],
	imports: [
		ApiModule.forRoot(getApiConfig),
		AppRoutingModule,
		BrowserModule,
		CalendarModule.forRoot(),
		CommonModule,
		HttpClientModule,
		NoopAnimationsModule,
		OAuthModule.forRoot(),
	],
	exports: [ServiceListPipe],
	providers: [],
})
export class AppModule {}
