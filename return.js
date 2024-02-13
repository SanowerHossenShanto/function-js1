function add(x,y){
    const sum=x+y;
    return sum;


}
const firstBookPrice=100;
console.log('1st book price:',firstBookPrice,'Tk');
const secondBookPrice=300;
console.log('2nd book price:',secondBookPrice,'Tk');
 const tootal= add(firstBookPrice,secondBookPrice);

 console.log('Total bill:', tootal,'Tk');


console.log('---------------------');



 function sub(a,c){
    const Subtraction=a-c;
    return Subtraction;
 }
 const cash=1000;
 console.log('Cash money:',cash,'Tk');


 const remain=sub(cash,tootal);
 console.log('You can get back:', remain ,'Tk');
