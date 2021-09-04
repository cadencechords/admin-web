import Tabs from "./Tabs";
import TeamMembersDetails from "./TeamMembersDetails";

export default function TeamTabs({ team, members, binders, songs, onMembersLoaded }) {
	return (
		<div>
			<Tabs
				tabs={["Members", "Songs", "Binders", "Sets"]}
				panels={[
					<TeamMembersDetails members={members} team={team} onMembersLoaded={onMembersLoaded} />,
				]}
			/>
		</div>
	);
}
