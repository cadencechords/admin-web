export default function Title({ children, className }) {
	return <h1 className={`text-xl font-semibold ${className}`}>{children}</h1>;
}

Title.defaultProps = {
	className: "",
};
