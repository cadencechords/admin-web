import Table from "./Table";
import TableBody from "./TableBody";
import TableData from "./TableData";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { formatDateFromString } from "../utils/date";

export default function TeamSongsTable({ songs }) {
	if (songs) {
		return (
			<Table>
				<TableHead headers={["Name", "Source", "Added On"]} />
				<TableBody>
					{songs.map((song) => (
						<TableRow key={song.id} selectable>
							<TableData className="py-3">{song.name}</TableData>
							<TableData>{song.source}</TableData>
							<TableData>{formatDateFromString(song.created_at)}</TableData>
						</TableRow>
					))}
				</TableBody>
			</Table>
		);
	} else {
		return null;
	}
}
