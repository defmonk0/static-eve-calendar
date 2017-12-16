import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "serviceList",
})
export class ServiceListPipe implements PipeTransform {
	transform(list): string {
		if (list == undefined || list == null || list.length == 0) {
			return "None";
		}

		let strs = list.map(item => {
			let pre = "";

			if (item.state === "online") {
				pre = '<span class="green-text">';
			} else {
				pre = '<span class="red-text">';
			}

			return pre + item.name + "</span>";
		});

		return strs.join(", ");
	}
}
