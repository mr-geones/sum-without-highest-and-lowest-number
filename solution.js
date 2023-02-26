function sumArray(arr) {
  if(Array.isArray(arr) && arr.length > 2) {
    arr.sort((a, b) => a - b);
    arr.pop();
    arr.shift();
    return arr.reduce((a, b) => a + b);
  } else {
    return 0;
  }
}
