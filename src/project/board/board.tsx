import { FilterComponent } from "./filter/filter";
import { StatusColumnComponent } from "./StatusColumn/StatusColumn";

export function BoardComponent() {
	return (
		<div>
			<FilterComponent />
			<section>
				<StatusColumnComponent />
				<StatusColumnComponent />
				<StatusColumnComponent />
				<StatusColumnComponent />
			</section>
		</div>
	);
}
