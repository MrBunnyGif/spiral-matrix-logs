const matrix3x3 = [
	[1, 2, 3],
	[8, 9, 4],
	[7, 6, 5]
];
const matrix4x4 = [
	[1, 2, 3, 4],
	[12, 13, 14, 5],
	[11, 16, 15, 6],
	[10, 9, 8, 7]
];
const matrix5x5 = [
	[1, 2, 3, 4, 5],
	[16, 17, 18, 19, 6],
	[15, 24, 25, 20, 7],
	[14, 23, 22, 21, 8],
	[13, 12, 11, 10, 9]
];
const matrix3x4 = [
	[1, 2, 3, 4],
	[10, 11, 12, 5],
	[9, 8, 7, 6]
];

const matrix5x4 = [
	[1, 2, 3, 4],
	[14, 15, 16, 5],
	[13, 20, 17, 6],
	[12, 19, 18, 7],
	[11, 10, 9, 8]
];

function runMatrix(matrix, matrixName) {
	if (!matrix.length)
		return console.log("no items")

	const rows = matrix.length
	const cols = matrix[0].length
	const totalItems = rows * cols
	const checkedValues = []
	const checkedIndexes = []
	const pointerMovesOrder = {
		right: "down",
		down: "left",
		left: "up",
		up: "right"
	}

	const pointer = {
		posCol: -1,
		posRow: 0,
		currMove: "right",
		up: () => ({ posRow: pointer.posRow + 1, posCol: pointer.posCol }),
		down: () => ({ posRow: pointer.posRow - 1, posCol: pointer.posCol }),
		left: () => ({ posCol: pointer.posCol - 1, posRow: pointer.posRow }),
		right: () => ({ posCol: pointer.posCol + 1, posRow: pointer.posRow }),
		move: () => {
			const next = pointer[pointer.currMove]()
			const nextIndex = `${next.posRow}${next.posCol}`
			if (matrix?.[next.posRow]?.[next.posCol] && !checkedIndexes.includes(nextIndex)) {
				checkedIndexes.push(nextIndex)
				checkedValues.push(matrix[next.posRow][next.posCol])
				pointer.posCol = next.posCol
				pointer.posRow = next.posRow
			}
			else {
				pointer.currMove = pointerMovesOrder[pointer.currMove]
			}
		}
	}

	while (checkedIndexes.length < totalItems) {
		pointer.move()
	}

	return console.log(`${matrixName}: ${checkedValues.join(" ")}`)
}

runMatrix(matrix3x3, "matrix3x3")
// runMatrix(matrix4x4, "matrix4x4")
// runMatrix(matrix5x5, "matrix5x5")
// runMatrix(matrix5x4, "matrix5x4")
// runMatrix(matrix3x4, "matrix3x4")