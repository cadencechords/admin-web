import { useEffect, useState } from "react";

import PageLoader from "./PageLoader";
import TeamSetlistsTable from "../tables/TeamSetlistsTable";
import TeamsApi from "../api/teamsApi";
import Title from "./Title";

export default function TeamSetlistsDetails({ team, setlists, onSetlistsLoaded }) {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchSetlists() {
			try {
				setLoading(true);
				let { data } = await TeamsApi.getSetlists(team.id);
				onSetlistsLoaded(data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}

		if (team && !setlists) {
			fetchSetlists();
		}
	}, [team, setlists, onSetlistsLoaded]);
	return (
		<PageLoader loading={loading}>
			<Title className="mb-4">Setlists {setlists && `(${setlists.length})`}</Title>
			<TeamSetlistsTable setlists={setlists} />
		</PageLoader>
	);
}
