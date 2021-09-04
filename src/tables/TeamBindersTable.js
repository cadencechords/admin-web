import Table from "./Table";
import TableBody from "./TableBody";
import TableData from "./TableData";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { formatDateFromString } from "../utils/date";

export default function TeamBindersTable({ binders }) {
	if (binders) {
		return (
			<Table>
				<TableHead headers={["Name", "Songs", "Added On"]} />
				<TableBody>
					{binders.map((binder) => (
						<TableRow key={binder.id} selectable>
							<TableData className="py-3">{binder.name}</TableData>
							<TableData>{binder.songs?.length}</TableData>
							<TableData>{formatDateFromString(binder.created_at)}</TableData>
						</TableRow>
					))}
				</TableBody>
			</Table>
		);
	} else {
		return null;
	}
}
