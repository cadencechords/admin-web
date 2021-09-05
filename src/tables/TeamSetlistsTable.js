import Table from "./Table";
import TableBody from "./TableBody";
import TableData from "./TableData";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { formatDateFromString } from "../utils/date";

export default function TeamSetlistsTable({ setlists }) {
	if (setlists) {
		return (
			<Table>
				<TableHead headers={["Name", "Songs", "Scheduled", "Created"]} />
				<TableBody>
					{setlists.map((setlist) => (
						<TableRow key={setlist.id} selectable>
							<TableData className="py-3">{setlist.name}</TableData>
							<TableData>{setlist.songs?.length}</TableData>
							<TableData>{formatDateFromString(setlist.scheduled_date)}</TableData>
							<TableData>{formatDateFromString(setlist.created_at)}</TableData>
						</TableRow>
					))}
				</TableBody>
			</Table>
		);
	} else {
		return null;
	}
}
