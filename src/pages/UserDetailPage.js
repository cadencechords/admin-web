import { useEffect, useState } from "react";

import Divider from "../components/Divider";
import PageLoader from "../components/PageLoader";
import Title from "../components/Title";
import UserAccountDetails from "../components/UserAccountDetails";
import UserTeamsTable from "../tables/UserTeamsTable";
import UsersApi from "../api/usersApi";
import { useParams } from "react-router-dom";

export default function UserDetailPage() {
	const [user, setUser] = useState();
	const [memberships, setMemberships] = useState();
	const [loading, setLoading] = useState(false);
	const id = useParams().id;

	useEffect(() => {
		async function fetchData() {
			try {
				setLoading(true);
				let userResult = await UsersApi.getOne(id);
				setUser(userResult.data);

				let membershipsResult = await UsersApi.getMemberships(id);
				setMemberships(membershipsResult.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}

		fetchData();
	}, [id]);

	return (
		<PageLoader loading={loading} className="py-10">
			<UserAccountDetails user={user} />
			<Divider />
			<Title className="mb-4">Teams {!loading && `(${memberships?.length})`}</Title>
			<UserTeamsTable memberships={memberships} />
		</PageLoader>
	);
}
