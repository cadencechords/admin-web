export default function Table({ children }) {
	return <table className="w-full">{children}</table>;
}

Table.defaultProps = {
	rowClasses: "",
};
