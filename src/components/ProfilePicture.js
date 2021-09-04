export default function ProfilePicture({ url, size, className }) {
	return (
		<div className={`${SIZES[size]} ${className}`}>
			<div
				className={`w-full h-full rounded-full bg-gray-200 `}
				style={{
					backgroundImage: `url('${url}')`,
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			></div>
		</div>
	);
}

const SIZES = {
	sm: "w-12 h-12",
	md: "w-16 h-16",
	lg: "w-20 h-20",
	xl: "w-32 h-32",
};

ProfilePicture.defaultProps = {
	size: "sm",
	className: "",
};
