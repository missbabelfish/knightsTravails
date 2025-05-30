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

const onBoard = ([x,y]) => x >= 0 && x <= 7 &&  y >=0 && y <= 7 

const knightMoves = (start, end) => {
    const positionToString = ([x,y]) => `${x},${y}`;
    const visited = {
        [positionToString(start)] : true
    }
    const toVisit = [{
        position: start,
        path: [start]
    }]
    
    while (toVisit.length > 0) {
        const { position, path } = toVisit.shift()
        // check to see if target is reached, print steps visited
        if (positionToString(position) === positionToString(end)) {
            return createPathString(path)
        }

        for (const [dx, dy] of possibleMoves) {
            const nextMove = [position[0] + dx, position[1] + dy]
            const nextMoveString = positionToString(nextMove)
            if (onBoard(nextMove) && !visited[nextMoveString]) {
                if (nextMoveString === positionToString(end)) {
                    return createPathString([...path, nextMove])
                }
                visited[nextMoveString] = true;
                toVisit.push( {
                    position: nextMove,
                    path: [...path, nextMove]
                })
            }
        }
    }
}

const createPathString = path => {
    const pathString = `You made it in ${path.length-1} moves! Here's your path:\n${path.map(step => `[${step.join(',')}]`).join('\n')}`
    console.log(pathString)
}

// knightMoves([3,3],[4,6])