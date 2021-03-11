function main(numOne, numTwo){
    var reminder = numOne % numTwo;
  
      return reminder;
}

console.log(main(5,2), main(15, 4), main(102, 25));

exports.module=main;