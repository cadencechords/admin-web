import { useEffect, useState } from "react";

import MemberCard from "./MemberCard";
import PageLoader from "./PageLoader";
import TeamsApi from "../api/teamsApi";
import Title from "./Title";
import { useHistory } from "react-router-dom";

export default function TeamMembersDetails({ team, members, onMembersLoaded }) {
	const [loading, setLoading] = useState(false);
	const router = useHistory();

	useEffect(() => {
		async function fetchMembers() {
			try {
				setLoading(true);
				let { data } = await TeamsApi.getMembers(team?.id);
				onMembersLoaded(data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}

		if (team && !members) {
			fetchMembers();
		}
	}, [team, members, onMembersLoaded]);

	const handleClick = (member) => {
		router.push(`/users/${member.user_id}`);
	};

	return (
		<PageLoader loading={loading}>
			<Title className="mb-4">Members {members && `(${members.length})`}</Title>
			<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
				{members?.map((member) => (
					<MemberCard key={member.id} member={member} onClick={() => handleClick(member)} />
				))}
			</div>
		</PageLoader>
	);
}
