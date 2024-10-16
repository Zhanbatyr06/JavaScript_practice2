function getMin(a, b, c){
    return Math.min(a, b, c);
}

console.log(getMin(5, 9, 7));
console.log(getMin(5, 0, -7));

function evenOrOdd(x, y, z){
    if(x % 2 === 0 && y % 2 === 0 && z % 2 == 0){
        return "even";
    }
    else if(x % 2 !== 0 && y % 2 !== 0 && z % 2 !== 0){
        return "odd";
    }
    else{
        return "even/odd"
    }
}

console.log(evenOrOdd(1, 3, 11))
console.log(evenOrOdd(2, 4, 8))
console.log(evenOrOdd(2, 5, 8))

function inOrOutRange(x, y, num) {
    if (num >= x && num <= y) {
        return "In range";
    } else {
        return "Out of range";
    }
}

console.log(inOrOutRange(5, 10, 8)); 
console.log(inOrOutRange(0, 6, 11));  