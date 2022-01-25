function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var res = combine(12, 13);
console.log("the result is ", res);
var combNames = combine("Daya", "Teju");
console.log("The combined names are", combNames);
