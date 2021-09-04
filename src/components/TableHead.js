export default function TableHead({ headers }) {
	return (
		<thead className="font-semibold">
			<tr>
				{headers?.map((header, index) => (
					<td key={index}>{header}</td>
				))}
			</tr>
		</thead>
	);
}
