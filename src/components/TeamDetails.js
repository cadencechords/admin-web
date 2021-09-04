import Data from "./Data";
import Divider from "./Divider";
import ProfilePicture from "./ProfilePicture";
import { formatDateFromString } from "../utils/date";

export default function TeamDetails({ team }) {
	if (team) {
		return (
			<div className="flex-center flex-col pt-10 mb-4">
				<div className="flex items-center mb-4">
					<ProfilePicture url={team?.image_url} size="xl" className="mr-5" />

					<h2 className="font-semibold text-2xl">{team.name}</h2>
				</div>
				<Divider />
				<Data label="Id" value={team.id} className="mb-2" />
				<Data label="Created" value={formatDateFromString(team.created_at)} className="mb-2" />
				<Data label="Members" value={team.memberships?.length} />
			</div>
		);
	} else {
		return null;
	}
}
