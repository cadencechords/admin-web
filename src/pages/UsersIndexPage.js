import { useEffect, useState } from "react";

import Title from "../components/Title";
import UsersApi from "../api/usersApi";
import UsersTable from "../components/UsersTable";

export default function UsersIndexPage() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function fetchUsers() {
			try {
				let { data } = await UsersApi.getAll();
				setUsers(data);
			} catch (error) {
				console.log(error);
			}
		}

		fetchUsers();
	}, []);
	return (
		<div>
			<Title className="mb-4">All Users {users?.length > 0 && `(${users.length})`}</Title>
			<UsersTable users={users} />
		</div>
	);
}
