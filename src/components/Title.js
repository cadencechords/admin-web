export default function Title({ children, className }) {
	return <h1 className={`text-xl ${className}`}>{children}</h1>;
}

Title.defaultProps = {
	className: "",
};
