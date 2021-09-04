import Table from "./Table";
import TableBody from "./TableBody";
import TableData from "./TableData";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import UserTableProfile from "../components/UserTableProfile";
import { formatDateFromString } from "../utils/date";
import { useHistory } from "react-router-dom";

export default function UsersTable({ users }) {
	const router = useHistory();

	const handleClick = (user) => {
		router.push(`/users/${user.id}`);
	};

	return (
		<Table>
			<TableHead headers={["Name", "Joined On"]} />
			<TableBody>
				{users?.map((user) => (
					<TableRow key={user.id} selectable onClick={() => handleClick(user)}>
						<TableData>
							<UserTableProfile user={user} />
						</TableData>
						<TableData>{formatDateFromString(user.created_at)}</TableData>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
