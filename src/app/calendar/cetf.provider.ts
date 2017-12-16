import * as moment from "moment";
import { CalendarEventTitleFormatter, CalendarEvent } from "angular-calendar";

export class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
	monthTooltip(event: CalendarEvent): string {
		return null;
	}

	weekTooltip(event: CalendarEvent): string {
		return null;
	}

	dayTooltip(event: CalendarEvent): string {
		return null;
	}

	month(event: CalendarEvent): string {
		var ms = moment(event.start);
		var me = moment(event.end);
		var ret = "";
		ret += '<span class="event-month-title-date">[';
		ret += ms.format("lll");
		ret += " - ";
		ret += me.format("lll");
		ret += "]</span> ";
		ret += event.title;
		return ret;
	}
}
