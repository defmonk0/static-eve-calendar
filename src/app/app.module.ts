import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { HomeComponent } from "./home/home.component";

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		AuthenticationComponent,
		CalendarComponent,
		HomeComponent,
	],
	imports: [AppRoutingModule, BrowserModule],
	providers: [],
})
export class AppModule {}
