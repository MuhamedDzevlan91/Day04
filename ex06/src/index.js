function main(numOne, numTwo){
    
    var myQuotient= numOne / numTwo;
    

return myQuotient.toFixed(1);
   

}

console.log(main(5.0, 2.0), main(16.5, 5.5), main(102.00, 25.5));

module.exports = main;