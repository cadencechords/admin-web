import Tabs from "./Tabs";
import TeamMembersDetails from "./TeamMembersDetails";
import TeamSongsDetails from "./TeamSongsDetails";

export default function TeamTabs({
	team,
	members,
	binders,
	songs,
	onMembersLoaded,
	onSongsLoaded,
}) {
	return (
		<div>
			<Tabs
				tabs={["Members", "Songs", "Binders", "Sets"]}
				panels={[
					<TeamMembersDetails members={members} team={team} onMembersLoaded={onMembersLoaded} />,
					<TeamSongsDetails songs={songs} team={team} onSongsLoaded={onSongsLoaded} />,
				]}
			/>
		</div>
	);
}
