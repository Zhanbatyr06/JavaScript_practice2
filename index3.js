function createString(min, max, step) {
    let result = "";
    for (let i = min; i <= max; i += step) {
        result += i + " ";
    }
    return result.trim(); 
}

console.log(createString(0, 20, 5));  
console.log(createString(0, 21, 4));  


function rangeSum1(min, max) {
    let sum = 0;
    for (let i = max; i >= min; i--) {
        for (let j = min; j < i; j++) {
            sum += j;
        }
    }
    return sum;
}

console.log(rangeSum1(0, 3)); 
console.log(rangeSum1(1, 4));  


function rangeSum2(min, max) {
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

console.log(rangeSum2(5, 10));  
console.log(rangeSum2(0, 6));   



function seriesSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / (i * i); 
    }
    return sum.toFixed(2); 
}

console.log(seriesSum(1)); 
console.log(seriesSum(5)); 
console.log(seriesSum(0)); 



function countDigits(num) {
    return num === 0 ? 1 : Math.abs(num).toString().length;
}

console.log(countDigits(123654789)); 
console.log(countDigits(252525));    
console.log(countDigits(0));         
