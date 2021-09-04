import ProfilePicture from "../components/ProfilePicture";
import Table from "./Table";
import TableBody from "./TableBody";
import TableData from "./TableData";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { formatDateFromString } from "../utils/date";
import { useHistory } from "react-router-dom";

export default function TeamsTable({ teams }) {
	const router = useHistory();

	const handleClick = (team) => {
		router.push(`/teams/${team.id}`);
	};

	return (
		<Table>
			<TableHead headers={["", "Name", "Created On", "Members"]} />
			<TableBody>
				{teams?.map((team) => (
					<TableRow key={team.id} selectable onClick={() => handleClick(team)}>
						<TableData>
							<ProfilePicture url={team.image_url} size="xs" />
						</TableData>
						<TableData className="py-3">{team.name}</TableData>
						<TableData>{formatDateFromString(team.created_at)}</TableData>
						<TableData>{team.memberships?.length}</TableData>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
