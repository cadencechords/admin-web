export default function TableRow({ children, selectable, onClick }) {
	const handleClick = () => {
		if (selectable) {
			onClick?.();
		}
	};
	return (
		<tr
			className={`${selectable && "hover:bg-gray-100 transition-colors cursor-pointer"}`}
			onClick={handleClick}
		>
			{children}
		</tr>
	);
}
