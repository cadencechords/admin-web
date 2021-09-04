export default function UserTableProfile({ user }) {
	const hasName = () => {
		return user.first_name || user.last_name;
	};

	return (
		<div className="py-3 flex">
			<div className="w-12 h-12 mr-4">
				<div
					className={`w-full h-full rounded-full bg-gray-200 `}
					style={{
						backgroundImage: `url('${user.image_url}')`,
						backgroundPosition: "center",
						backgroundSize: "cover",
					}}
				></div>
			</div>
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
