import { useEffect, useState } from "react";

import { BeatLoader } from "react-spinners";

export default function Button({
	children,
	onClick,
	className,
	variant,
	fullWidth,
	disabled,
	loading,
}) {
	const [styles, setStyles] = useState("");

	useEffect(() => {
		if (disabled) {
			setStyles("rounded-md p-2 bg-gray-100 text-gray-600 font-semibold cursor-not-allowed");
		} else if (variant === "solid") {
			setStyles(
				"rounded-md p-2 bg-green-500 hover:bg-green-600 focus:bg-green-600 transition-colors text-white font-semibold"
			);
		}
	}, [variant, disabled]);

	return (
		<button
			className={
				`flex-center focus:outline-none outline-none` +
				` ${fullWidth && "w-full"} ${styles} ${className} `
			}
			onClick={loading ? null : onClick}
			disabled={disabled}
		>
			{loading ? <BeatLoader color="white" size={8} /> : children}
		</button>
	);
}

Button.defaultProps = {
	onClick: () => {},
	className: "",
	variant: "solid",
};
