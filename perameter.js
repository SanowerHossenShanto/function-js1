function square(x){
    const sq=x*x;
console.log(sq);
}
square(5);


function add(x,y){
    console.log(x+y);
}
add(10,25);


function sub(a,b){
    console.log('Subtraction:',a-b);
}
sub(100,3);
function mul(w,x,y,z){
    const multiplication=w*x*y*z;
    console.log('Multiplication:',multiplication);
}
mul(10,20,30,40)


console.log('---------------------------------')
function ageCal(x,y,n){
    const fatherAge=n*(x)+(y);
    console.log('Times of son of age:',n);
    console.log('From son age:',y);
    console.log('Now father age is:', fatherAge);

}
const times=2;
const moreOrLess=7;
const sonAge=15;
ageCal(sonAge,moreOrLess,times);
