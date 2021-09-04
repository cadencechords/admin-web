import { useEffect, useState } from "react";

import PageLoader from "./PageLoader";
import TeamBindersTable from "../tables/TeamBindersTable";
import TeamsApi from "../api/teamsApi";
import Title from "./Title";

export default function TeamBindersDetails({ team, binders, onBindersLoaded }) {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchBinders() {
			try {
				setLoading(true);
				let { data } = await TeamsApi.getBinders(team.id);
				onBindersLoaded(data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}

		if (team && !binders) {
			fetchBinders();
		}
	}, [team, binders, onBindersLoaded]);
	return (
		<PageLoader loading={loading}>
			<Title className="mb-4">Binders {binders && `(${binders.length})`}</Title>
			<TeamBindersTable binders={binders} />
		</PageLoader>
	);
}
