export default function Data({ className, label, value }) {
	return (
		<div className={`flex w-full gap-8 font-semibold ${className}`}>
			<div className="w-2/5 text-right text-gray-500">{label}</div>
			<div className="w-3/5 flex items-center justify-start">{value}</div>
		</div>
	);
}

Data.defaultProps = {
	className: "",
};
