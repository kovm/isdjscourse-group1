let array = [0, -3, 6, 10, 30, 0, 4];
console.log("Array:");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
console.log("After bubble sort:");
for (let j = array.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
        if (array[i] > array[i + 1]) {
            let t = array[i];
            array[i] = array[i + 1];
            array[i + 1] = t;
        }
    }
}
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}