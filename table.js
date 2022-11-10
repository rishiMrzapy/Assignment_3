const vnu=require('readline-sync');
let i,a=vnu.questionInt("Enter a number which table want you print : ");
for(i=1;i<=10;i++)
{
    console.log(`${a}`,"X",`${i}`,"=",a*i);
}