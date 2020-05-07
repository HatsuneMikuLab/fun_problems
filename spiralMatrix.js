const spiralMatrix = function(n, num = 0, row = 0, col = -1, direction = 'R') {
    const directionMap = { 'R': 'D', 'D': 'L', 'L': 'U', 'U': 'R' };
    const matrix = Array(n).fill(0).map(() => Array(n).fill(0));
    
    while (num + 1 <= n ** 2) {
        switch (direction) {
            case 'R': 
                while (col + 1 < n && matrix[row][col + 1] === 0 && num <= n ** 2) matrix[row][++col] = ++num;
                break

            case 'D': 
                while (row + 1 < n && matrix[row + 1][col] === 0 && num <= n ** 2) matrix[++row][col] = ++num;
                break
            
            case 'L': 
                while (col - 1 >= 0 && matrix[row][col - 1] === 0 && num <= n ** 2) matrix[row][--col] = ++num;
                break
            
            case 'U': 
                while (row - 1 >= 0 && matrix[row - 1][col] === 0 && num <= n ** 2) matrix[--row][col] = ++num
            
        }
        
        direction = directionMap[direction]
    };
    return matrix
};

[250, 1000, 10000].forEach((size, i) => {
    const description = ['TEST #%s. Matrix size: %d: ', i, size];
    console.time(...description);
    spiralMatrix(size);
    console.timeEnd(...description);
})