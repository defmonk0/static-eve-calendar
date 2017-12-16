import { Component, OnInit } from "@angular/core";

import * as moment from "moment";
import { CalendarEvent, CalendarEventTitleFormatter } from "angular-calendar";
import { CalendarService } from "../esi/api/calendar.service";
import { CorporationService } from "../esi/api/corporation.service";
import { OAuthService } from "angular-oauth2-oidc";
import { UniverseService } from "../esi/api/universe.service";

import { CustomEventTitleFormatter } from "./cetf.provider";

@Component({
	selector: "app-calendar",
	templateUrl: "./calendar.component.html",
	styleUrls: ["./calendar.component.css"],
	providers: [
		{
			provide: CalendarEventTitleFormatter,
			useClass: CustomEventTitleFormatter,
		},
	],
})
export class CalendarComponent implements OnInit {
	// private handleEvents = null;
	private events = [];
	private structures = [];
	public activeDayIsOpen = false;
	public view = "month";
	public viewDate = new Date();
	public selectedEvent = { type: null };

	constructor(
		private calendarService: CalendarService,
		private corporationService: CorporationService,
		private oauthService: OAuthService,
		private universeService: UniverseService
	) {}

	public get calendarEvents() {
		let ret = [];

		for (let i in this.events) {
			let start = moment(this.events[i].date);

			let end = moment(start);
			end.add(this.events[i].duration, "minutes");

			ret.push({
				color: {
					primary: "#00ee00",
					secondary: "#ddffdd",
				},
				end: end,
				original: this.events[i],
				start: start,
				title: this.events[i].title,
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

					if (vul == "next_vul") {
						start.add(1, "weeks");
					}

					let offset = this.structures[i][vul][j].day + 1;
					start.add(offset % 7, "days");

					offset = this.structures[i][vul][j].hour;
					start.add(offset, "hours");

					let end = moment(start);
					end.add(1, "hours");

					combine.push({
						color: {
							primary: "#ee0000",
							secondary: "#eedddd",
						},
						end: end,
						original: this.structures[i],
						start: start,
						title: "Structure Vulnerability",
					});
				}

				// Sort the list by start time.
				combine.sort((a, b) => {
					let ma = moment(a.start);
					let mb = moment(b.start);
					return ma.diff(mb);
				});

				// Combine items.
				for (let k = combine.length - 2; k >= 0; k--) {
					if (combine[k].end.isSame(combine[k + 1].start)) {
						let start = combine[k].start;
						let end = combine[k + 1].end;

						combine.splice(k, 2, {
							color: combine[k].color,
							end: end,
							original: combine[k].original,
							start: start,
							title: combine[k].title,
						});
					}
				}

				// Add them to the list!
				ret = ret.concat(combine);
			}
		}

		ret.sort((a, b) => {
			let ma = moment(a.start);
			let mb = moment(b.start);
			return ma.diff(mb);
		});

		ret.map(item => {
			item.start = item.start.toDate();
			item.end = item.end.toDate();
			return item;
		});

		return ret;
	}

	public dayClicked = (date: Date, events: CalendarEvent[]) => {
		let mdate = moment(date["date"]);
		let vdate = moment(this.viewDate);

		if (mdate.isSame(vdate, "month")) {
			if (mdate.isSame(vdate, "day")) {
				this.activeDayIsOpen =
					!this.activeDayIsOpen && events.length > 0;
			} else {
				this.activeDayIsOpen = events.length > 0;
				this.viewDate = date["date"];
			}
		}

		if (!this.activeDayIsOpen) {
			this.selectedEvent = { type: null };
		}
	};

	public eventClicked = (event: CalendarEvent) => {
		this.selectedEvent = event["original"];

		if (event["original"]["type"] == "structure") {
			console.log(event);
			this.universeService
				.getUniverseStructuresStructureId(
					Number(event["original"]["structure_id"]),
					undefined,
					undefined,
					undefined,
					"PNS Static Eve Calendar (Slack: @def_monk)"
				)
				.subscribe(
					res => {
						console.log(res);
					},
					err => {
						console.log(err);
					}
				);
		}
	};

	public timeUntil = date => {
		return moment().to(date);
	};

	ngOnInit() {
		if (sessionStorage.getItem("verify_CharacterID") != undefined) {
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
										sessionStorage.getItem(
											"verify_CharacterID"
										)
									),
									res[i]["event_id"]
								)
								.subscribe(
									res => {
										res["type"] = "calendar";
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
		}

		if (sessionStorage.getItem("character_corporation_id") != undefined) {
			var getStructDetailsAndPush = struct => {
				struct["type"] = "structure";

				this.universeService
					.getUniverseStructuresStructureId(
						struct["structure_id"],
						undefined,
						undefined,
						undefined,
						"PNS Static Eve Calendar (Slack: @def_monk)"
					)
					.subscribe(
						res => {
							struct["details"] = res;
							this.structures.push(struct);
						},
						err => {
							console.log(err);
						}
					);
			};

			var successfulFirstPage = res => {
				console.log(res);
				let pages = Number(res.headers.get("x-pages"));

				for (let i = 2; i <= pages; i++) {
					getCorpStructs(i, res => {
						for (let i in res) {
							getStructDetailsAndPush(res.body[i]);
						}
					});
				}
				for (let i in res.body) {
					getStructDetailsAndPush(res.body[i]);
				}
			};

			var getCorpStructs = (page, callback) => {
				this.corporationService
					.getCorporationsCorporationIdStructures(
						Number(
							sessionStorage.getItem("character_corporation_id")
						),
						undefined,
						undefined,
						page,
						undefined,
						undefined,
						"PNS Static Eve Calendar (Slack: @def_monk)",
						"response"
					)
					.subscribe(callback, err => {
						console.log(err);
					});
			};

			getCorpStructs(1, successfulFirstPage);
		}
	}
}
