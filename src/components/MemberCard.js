import { getFullName, getRoleDisplay, userHasName } from "../utils/model";

import Badge from "./Badge";
import ProfilePicture from "./ProfilePicture";
import { formatDateFromString } from "../utils/date";

export default function MemberCard({ member, onClick }) {
	return (
		<button
			className={
				`bg-gray-100 hover:bg-gray-200 transition-colors rounded-md py-3 px-4` +
				` flex-center flex-col cursor-pointer`
			}
			onClick={onClick}
		>
			<ProfilePicture url={member?.image_url} />

			{userHasName(member) && <h3 className="font-semibold">{getFullName(member)}</h3>}
			<div className="text-gray-600 font-semibold mb-2 whitespace-pre-wrap">{member.email}</div>
			{member.is_admin && <Badge className="mb-4">Admin</Badge>}
			<div className="text-sm w-full">
				<div className="flex-between mb-2">
					<span>Joined team:</span> {formatDateFromString(member.created_at)}
				</div>
				<div className="flex-between">
					<span>Role:</span> {getRoleDisplay(member)}
				</div>
			</div>
		</button>
	);
}
