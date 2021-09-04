export default function TableData({ children, className }) {
	return <td className={` ${className}`}>{children}</td>;
}

TableData.defaultProps = {
	className: "",
};
