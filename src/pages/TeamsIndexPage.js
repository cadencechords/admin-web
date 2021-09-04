import { useEffect, useState } from "react";

import PageLoader from "../components/PageLoader";
import TeamsApi from "../api/teamsApi";
import TeamsTable from "../tables/TeamsTable";
import Title from "../components/Title";

export default function TeamsIndexPage() {
	const [teams, setTeams] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchTeams() {
			try {
				setLoading(true);
				let { data } = await TeamsApi.getAll();
				setTeams(data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}
		fetchTeams();
	}, []);

	return (
		<div>
			<Title className="mb-4">All Teams {teams?.length > 0 && `(${teams.length})`}</Title>

			<PageLoader loading={loading}>
				<TeamsTable teams={teams} />
			</PageLoader>
		</div>
	);
}
