import StarIcon from "@heroicons/react/solid/StarIcon";
import Table from "./Table";
import TableBody from "./TableBody";
import TableData from "./TableData";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { formatDateFromString } from "../utils/date";

export default function UserTeamsTable({ memberships }) {
	return (
		<Table>
			<TableHead headers={["Team", "Joined", "Admin", "Position"]} />
			<TableBody>
				{memberships?.map((membership) => (
					<TableRow key={membership.id} selectable>
						<TableData className="py-3">{membership?.team?.name}</TableData>
						<TableData>{formatDateFromString(membership.created_at)}</TableData>
						<TableData>
							{membership.is_admin && <StarIcon className="w-4 h-4 text-green-600" />}
						</TableData>
						<TableData>{membership?.position}</TableData>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
