import { ENTER_KEY_CODE } from "../utils/constants";

export default function Input({
	type,
	value,
	onChange,
	className,
	fullWidth,
	placeholder,
	onEnter,
}) {
	const handleKeyUp = ({ keyCode }) => {
		if (keyCode === ENTER_KEY_CODE) {
			onEnter();
		}
	};

	return (
		<input
			value={value}
			onChange={(e) => onChange(e.target.value)}
			placeholder={placeholder}
			className={
				`text-base rounded-md p-2 border bg-gray-50 outline-none focus:outline-none ` +
				` hover:bg-gray-100 focus:bg-gray-100 transition-colors` +
				` ${fullWidth && "w-full"} ${className}`
			}
			type={type}
			onKeyUp={handleKeyUp}
		/>
	);
}

Input.defaultProps = {
	className: "",
	onChange: () => {},
};
