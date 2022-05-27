import React, { memo } from "react";

function HeaderRow() {
	return (
		<thead>
			<tr className="table-warning" style={{ color: "black" }}>
				<th>Name</th>
				<th>Birthdate</th>
				<th>Height</th>
				<th>Weight (lb)</th>
				<th>Species</th>
				<th>More</th>
			</tr>
		</thead>
	);
}

export default memo(HeaderRow);
