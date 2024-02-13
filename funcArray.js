function sumOfArray(numbers){
    let sum=0;
    console.log(numbers.length());
    
    for(const number of numbers){
        console.log(number);
        sum=sum+number;

    }
    return sum;

}
const numbers=[2,5,7,8,9,22,55,88,77,11];

const sum=sumOfArray(numbers);
console.log(sum);