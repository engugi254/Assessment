//What will be logged to the console from the below expression. explain why.


let sum = 5+ 5+"5";

console.log(sum);
//105 will be logged into console.
/*Here's why: The five in quotation is recognized as a string while the fives outside the quotation are recognized 
  as numbers. Hence, the fives outside quotation will be added to each other to become 10 and then the five in quotations
  is added at the end since it is a string to become 105 */ 