function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    };
};

printReverse(["a", "b", "c"]);


function isUniform(arr) {
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return false;
        };
    };
    return true;
};

console.log(isUniform([2, 2, 2, 2]));

function sumArray(arr) {
    var result = 0;

    arr.forEach((i) => {
        result += i;
    });

    return result;
};

console.log(sumArray([10,3,10,4]));


function max(arr) {
    var result = arr[0];

    arr.forEach((i) => {
        if(i > result) {
            result = i;
        };
    });
    
    return result;
};

console.log(max([10,3,10,4]));