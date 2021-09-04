import { useEffect, useState } from "react";

import PageLoader from "./PageLoader";
import TeamSongsTable from "../tables/TeamSongsTable";
import TeamsApi from "../api/teamsApi";
import Title from "./Title";

export default function TeamSongsDetails({ team, songs, onSongsLoaded }) {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchSongs() {
			try {
				setLoading(true);
				let { data } = await TeamsApi.getSongs(team.id);
				onSongsLoaded(data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}

		if (team && !songs) {
			fetchSongs();
		}
	}, [team, songs, onSongsLoaded]);
	return (
		<PageLoader loading={loading}>
			<Title className="mb-4">Songs {songs && `(${songs.length})`}</Title>
			<TeamSongsTable songs={songs} />
		</PageLoader>
	);
}
