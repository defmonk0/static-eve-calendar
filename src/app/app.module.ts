// native
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";

// external dependencies
import { OAuthModule } from "angular-oauth2-oidc";

// generated dependencies

// internal dependencies
import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { HomeComponent } from "./home/home.component";

// routing
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		AuthenticationComponent,
		CalendarComponent,
		HomeComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		HttpModule,
		OAuthModule.forRoot(),
	],
	providers: [],
})
export class AppModule {}
