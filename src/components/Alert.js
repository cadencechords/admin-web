export default function Alert({ children, type, className }) {
	return <div className={` ${className}`}></div>;
}

Alert.defaultProps = {
	className: "",
};
