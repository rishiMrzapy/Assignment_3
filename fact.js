const vnu=require('readline-sync')
let i, a=vnu.questionInt("Enter a Number :  ");
let fact=1;
for(i=1;i<=a;i++)
{
    fact=fact*i;
}
console.log("Factorial of",`${a}`,"is :",`${fact}`);