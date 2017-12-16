import { Component, OnInit } from "@angular/core";

import * as moment from "moment";
import { CalendarService } from "../esi/api/calendar.service";
import { CorporationService } from "../esi/api/corporation.service";
import { OAuthService } from "angular-oauth2-oidc";

@Component({
	selector: "app-calendar",
	templateUrl: "./calendar.component.html",
	styleUrls: ["./calendar.component.css"],
})
export class CalendarComponent implements OnInit {
	// private handleEvents = null;
	private events = [];
	private structures = [];

	constructor(
		private calendarService: CalendarService,
		private corporationService: CorporationService,
		private oauthService: OAuthService
	) {}

	public get eventList() {
		return this.events;
	}

	public get calendarEvents() {
		let ret = [];

		for (let i in this.events) {
			let start = moment(this.events[i].date);
			let end = moment(start);
			end.add(this.events[i].duration, "minutes");

			ret.push({
				end: end,
				event: this.events[i],
				start: start,
			});
		}

		for (let i in this.structures) {
			// Hack list to duplicate less code.
			let list = ["current_vul", "next_vul"];

			for (let vul in list) {
				// Grab the string instead of the index.
				vul = list[vul];

				// List of things we're working with.
				let combine = [];

				// Add the current vuln for this structure.
				for (let j in this.structures[i][vul]) {
					let start = moment().startOf("week");

					if(vul == "next_vul") {
						start.add(1, "weeks");
					}

					let offset = this.structures[i][vul][j].day + 1;
					start.add(offset % 7, "days");

					offset = this.structures[i][vul][j].hour;
					start.add(offset, "hours");

					let end = moment(start);
					end.add(1, "hours");

					combine.push({
						end: end,
						start: start,
						structure: this.structures[i].structure_id,
						vul: vul,
					});
				}

				// Sort the list by start time.
				combine.sort((a, b) => {
					return a.start.diff(b.start);
				});

				// Combine items.
				for (let k = combine.length - 2; k >= 0; k--) {
					if (combine[k].end.isSame(combine[k + 1].start)) {
						let start = combine[k].start;
						let end = combine[k + 1].end;

						combine.splice(k, 2, {
							end: end,
							start: start,
							structure: this.structures[i].structure_id,
							vul: vul,
						});
					}
				}

				// Add them to the list!
				ret = ret.concat(combine);
			}
		}

		ret.sort((a, b) => {
			return a.start.diff(b.start);
		});

		return ret;
	}

	public get structureList() {
		return this.structures;
	}

	ngOnInit() {
		this.calendarService
			.getCharactersCharacterIdCalendar(
				Number(sessionStorage.getItem("verify_CharacterID")),
				undefined,
				undefined,
				undefined,
				undefined,
				"PNS Static Eve Calendar (Slack: @def_monk)"
			)
			.subscribe(
				res => {
					for (let i in res) {
						this.calendarService
							.getCharactersCharacterIdCalendarEventId(
								Number(
									sessionStorage.getItem("verify_CharacterID")
								),
								res[i]["event_id"]
							)
							.subscribe(
								res => {
									this.events.push(res);
								},
								err => {
									console.log(err);
								}
							);
					}
				},
				err => {
					console.log(err);
				}
			);

		this.corporationService
			.getCorporationsCorporationIdStructures(
				Number(sessionStorage.getItem("character_corporation_id")),
				undefined,
				undefined,
				1,
				undefined,
				undefined,
				"PNS Static Eve Calendar (Slack: @def_monk)",
				"response"
			)
			.subscribe(
				res => {
					let pages = Number(res.headers.get("x-pages"));

					for (let i = 2; i <= pages; i++) {
						this.corporationService
							.getCorporationsCorporationIdStructures(
								Number(
									sessionStorage.getItem(
										"character_corporation_id"
									)
								),
								undefined,
								undefined,
								i,
								undefined,
								undefined,
								"PNS Static Eve Calendar (Slack: @def_monk)"
							)
							.subscribe(
								res => {
									for (let i in res) {
										this.structures.push(res[i]);
									}
								},
								err => {
									console.log(err);
								}
							);
					}

					for (let i in res.body) {
						this.structures.push(res.body[i]);
					}
				},
				err => {
					console.log(err);
				}
			);
	}
}
