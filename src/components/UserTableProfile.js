import ProfilePicture from "./ProfilePicture";

export default function UserTableProfile({ user }) {
	const hasName = () => {
		return user.first_name || user.last_name;
	};

	return (
		<div className="px-2 py-3 flex">
			<ProfilePicture url={user.image_url} className="mr-4" />
			<div className="flex flex-col items-start justify-center">
				{hasName && (
					<div>
						{user.first_name} {user.last_name}
					</div>
				)}
				<div className="text-sm text-gray-700">{user.email}</div>
			</div>
		</div>
	);
}
