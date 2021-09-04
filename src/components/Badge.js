export default function Badge({ className, children }) {
	return (
		<div className={`rounded-md px-1 py-0.5 bg-green-500 text-white text-sm ${className}`}>
			{children}
		</div>
	);
}

Badge.defaultProps = {
	className: "",
};
