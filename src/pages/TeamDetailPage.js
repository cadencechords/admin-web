import { useEffect, useState } from "react";

import PageLoader from "../components/PageLoader";
import TeamDetails from "../components/TeamDetails";
import TeamsApi from "../api/teamsApi";
import { useParams } from "react-router-dom";

export default function TeamDetailPage() {
	const [team, setTeam] = useState();
	const [loading, setLoading] = useState(false);
	const id = useParams().id;

	useEffect(() => {
		async function fetchTeam() {
			try {
				setLoading(true);
				let { data } = await TeamsApi.getOne(id);
				setTeam(data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}

		fetchTeam();
	}, [id]);

	return (
		<PageLoader loading={loading}>
			<TeamDetails team={team} />
		</PageLoader>
	);
}
