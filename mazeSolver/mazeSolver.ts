type Coordinate = {
    x: number;
    y: number;
};

const dir : [-1|0|1, -1|0|1][] = [
    [ -1, 0 ],
    [ 1, 0 ],
    [ 0, -1 ],
    [ 0, 1 ],
];


const walk = (maze: string[], wall: string, curr: Coordinate, end: Coordinate, seen: boolean[][], path: Coordinate[]) : boolean => {
    // BASE CASES:
    // 1. Off the map
    if(curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length) {
        return false;
    }

    // 2. If it's a wall:
    if(maze[curr.y][curr.x] === wall) {
        return false;
    }

    // 3. If it's at the end (hurrah!)
    if(curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    // 4. If it's been seen before
    if(seen[curr.y][curr.x]) {
        return false;
    }

    // Recurse in all directions
    // pre
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // recurse the 4 directions we want to go
    for(let i = 0; i < dir.length; ++i) {
        const [ x, y ] = dir[i];
        if(walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)) {
            return true;
        }
    }

    // post
    path.pop();
    return false;
}


const mazeSolver = (maze: string[], wall: string, start: Coordinate, end: Coordinate) => {
    const seen: boolean[][] = [];
    const path : Coordinate[] = [];

    for(let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }


    walk(maze, wall, start, end, seen, path);

    return path;
};

module.exports = mazeSolver;