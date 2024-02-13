function arraySum(x){
    console.log(x.length);
let sum=0;
for(const element of x){
    console.log(element);
    sum=sum+element;
   
}
 return sum;

}
const num=[1,3,5,7,9,11,33,55,77,99];
const summation=arraySum(num);
console.log(summation);
// arraySum(num);

