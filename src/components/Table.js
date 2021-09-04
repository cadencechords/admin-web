export default function Table({ headers, rows }) {
	return (
		<table className="w-full">
			<thead className="font-semibold">
				{headers?.map((header, index) => (
					<td key={index}>{header}</td>
				))}
			</thead>
			<tbody>
				{rows?.map((columns, rowIndex) => (
					<tr key={rowIndex}>
						{columns?.map((column, columnIndex) => (
							<td key={columnIndex}>{column}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}
