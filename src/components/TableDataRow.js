import React from "react";
import Modal from "./Modal";

function TableDataRow({ character }) {
	return (
		<tr className="altFont">
			<td>{character.name}</td>
			<td>{character.birth_year}</td>
			<td>{character.heightFormatted}</td>
			<td>{character.weight}</td>
			<td>{character.speciesName}</td>
			<td>
				<Modal title={character.name} info={character} />
			</td>
		</tr>
	);
}

export default TableDataRow;
