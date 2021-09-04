import { BeatLoader } from "react-spinners";

export default function PageLoader({ children, loading, className }) {
	if (loading) {
		return (
			<div className={`flex-center ${className}`}>
				<BeatLoader color="#10B981" />
			</div>
		);
	} else {
		return children;
	}
}

PageLoader.defaultProps = {
	className: "",
};
