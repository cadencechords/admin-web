import Table from "./Table";
import UserTableProfile from "./UserTableProfile";

export default function UsersTable({ users }) {
	let rows = users?.map((user) => [
		<UserTableProfile user={user} />,
		new Date(user.created_at).toDateString(),
	]);

	return <Table headers={["Name", "Joined On"]} rows={rows} />;
}
