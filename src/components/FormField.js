import Input from "./Input";

export default function FormField({
	label,
	type,
	value,
	onChange,
	className,
	placeholder,
	onEnter,
}) {
	return (
		<div className={`w-full ${className}`}>
			<label className="block mb-1 font-semibold text-gray-600">{label}</label>
			<Input
				value={value}
				type={type}
				onChange={onChange}
				placeholder={placeholder}
				fullWidth
				onEnter={onEnter}
			/>
		</div>
	);
}

FormField.defaultProps = {
	className: "",
};
