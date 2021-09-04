import { getFullName, userHasName } from "../utils/model";

import CheckCircleIcon from "@heroicons/react/solid/CheckCircleIcon";
import Data from "./Data";
import Divider from "./Divider";
import ProfilePicture from "./ProfilePicture";
import XCircleIcon from "@heroicons/react/solid/XCircleIcon";
import { formatDateFromString } from "../utils/date";

export default function UserAccountDetails({ user }) {
	if (user) {
		return (
			<div className="flex-center flex-col pt-10 mb-4">
				<div className="flex items-center mb-4">
					<ProfilePicture url={user?.image_url} size="xl" className="mr-5" />
					{userHasName(user) ? (
						<div>
							<h2 className="font-semibold text-2xl">{getFullName(user)}</h2>
							<h3 className="font-semibold text-gray-500">{user.email}</h3>
						</div>
					) : (
						<h2 className="font-semibold text-2xl">{user.email}</h2>
					)}
				</div>
				<Divider />
				<Data label="Id" value={user.id} className="mb-2" />
				<Data label="Joined on" value={formatDateFromString(user.created_at)} className="mb-2" />
				<Data
					label="Planning Center"
					value={
						user.pco_connected ? (
							<CheckCircleIcon className="w-4 h-4 text-green-600" />
						) : (
							<XCircleIcon className="w-4 h-4 text-gray-400" />
						)
					}
				/>
			</div>
		);
	} else {
		return null;
	}
}
