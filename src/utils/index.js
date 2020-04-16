
export const replaceAt = (str, index, replacement) => {
    return str.substr(0, index) + replacement + str.substr(index + replacement.length);
}

export const generate_sudoku = (initialStr) => {
    let su_arr = split_sudoku(initialStr)
    for (let i = 0; i < su_arr.length; i++) {
        let row = Math.floor(i / 9);
        let col = i % 9;
        if (su_arr[i] === '0') {
            checkValueForSudoku(row, col, i, su_arr)
        } else {
            return;
        }
    }

    let sudoku_string = '';
    for (let i = 0; i < su_arr.length; i++) {
        if(i !== 0 && i % 3 === 0) {
            sudoku_string += ' ';
        }
        sudoku_string += su_arr[i];
    }
    return sudoku_string;
}

function checkValueForSudoku(row, col, i, su_arr) {
    let numList = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    numList = shuffle(numList);

    for (let value of numList) {
        let row_arr = su_arr.slice(row * 9, row * 9 + 8);
        if (!row_arr.includes(value)) {
            if (value !== su_arr[col] && value !== su_arr[col + 9] && value !== su_arr[col + 18] && value !== su_arr[col + 27] &&
                value !== su_arr[col + 36] && value !== su_arr[col + 45] && value !== su_arr[col + 54] && value !== su_arr[col + 63] &&
                value !== su_arr[col + 72]) {
                if (row >= 0 && row < 3) {
                    if (checkSquare(col, 0, value, su_arr)) {
                        su_arr[i] = value;
                    }
                    return;
                } else if (row >= 3 && row < 6) {
                    if (checkSquare(col, 1, value, su_arr)) {
                        su_arr[i] = value;
                    }
                    return;
                } else if (row >= 6 && row < 9) {
                    if (checkSquare(col, 2, value, su_arr)) {
                        su_arr[i] = value;
                    }
                    return;
                }
            } else {
                return;
            }
        } else {
            return;
        }
    }
}

function checkSquare(col, rowSection, value, su_arr) {
    if (col >= 0 && col < 3) {
        if (value !== su_arr[rowSection * 27] && value !== su_arr[rowSection * 27 + 1] && value !== su_arr[rowSection * 27 + 2] &&
            value !== su_arr[rowSection * 27 + 9] && value !== su_arr[rowSection * 27 + 10] && value !== su_arr[rowSection * 27 + 11] &&
            value !== su_arr[rowSection * 27 + 18] && value !== su_arr[rowSection * 27 + 19] && value !== su_arr[rowSection * 27 + 20]) {
            return true;
        } else {
            return false;
        }
    } else if (col >= 3 && col < 6) {
        if (value !== su_arr[rowSection * 27 + 3] && value !== su_arr[rowSection * 27 + 4] && value !== su_arr[rowSection * 27 + 5] &&
            value !== su_arr[rowSection * 27 + 12] && value !== su_arr[rowSection * 27 + 13] && value !== su_arr[rowSection * 27 + 14] &&
            value !== su_arr[rowSection * 27 + 21] && value !== su_arr[rowSection * 27 + 22] && value !== su_arr[rowSection * 27 + 23]) {
            return true;
        } else {
            return false;
        }
    } else if (col >= 6 && col < 9) {
        if (value !== su_arr[rowSection * 27 + 6] && value !== su_arr[rowSection * 27 + 7] && value !== su_arr[rowSection * 27 + 8] &&
            value !== su_arr[rowSection * 27 + 15] && value !== su_arr[rowSection * 27 + 16] && value !== su_arr[rowSection * 27 + 17] &&
            value !== su_arr[rowSection * 27 + 24] && value !== su_arr[rowSection * 27 + 25] && value !== su_arr[rowSection * 27 + 26]) {
            return true;
        } else {
            return false;
        }
    }
}

function shuffle(array) {
    var currentIndex = array.length, temp, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
}

function split_sudoku(str) {
    return str.replace(/ /g, '').split('');
}