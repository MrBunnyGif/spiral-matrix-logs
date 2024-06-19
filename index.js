const matrix = [
	[1, 2, 3],
	[8, 9, 4],
	[7, 6, 5]
]

if (!matrix.length)
	return console.log("no items")

const rows = matrix.length
const cols = matrix[0].length
const totalItems = matrix[0].length * matrix.length
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
console.log("➡️", checkedValues.join(" "))
