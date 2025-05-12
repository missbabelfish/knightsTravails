const possibleMoves = [
    [1,2],
    [2,1],
    [-1,2],
    [-2,1],
    [-1,-2],
    [-2,-1],
    [1,-2],
    [2,-1]
]

const onBoard = (x, y) => 0 <= x && x <= 7 && 0 <= y && y <= 7 

// create visited list
// create steps list
// visit vertex
// create discovered list - make sure possible vertex is onBoard
// pop next vertex off list
// check if is target - use .join()
// if not target, 
// create discovered list of its valid edges

const knightMoves = (start, end) => {
    const steps = []
    const visited = []
    const toVisit = []
    const knight = start

    

    
}
