function digitalRoot(n) {
    let number = n
    while (number > 9) {
    let arr = number.toString().split("");
    let numarr = [];
    let sum = 0;
    arr.map((elem) => {
      numarr.push(parseInt(elem));
    });
    for (let i = 0; i < numarr.length; i++) {
      sum += numarr[i];
    }
    (number = sum);
  }
  return number;
}

console.log(digitalRoot(942));
