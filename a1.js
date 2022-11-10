const vnu=require('readline-sync')
let i,j, a=vnu.questionInt("Enter a Number :  ");
// for(i=1;i<a;i++)
// {
//     for(j=i;j<a;j++)
//     {
//       process.stdout.write("*");
      
//     }
//     console.log();
// }
// Q-5
// for(i=0;i<a;i++)
// {
//     for(j=0;j<=i;j++) 
//     {
//         process.stdout.write("*");
//     }
//     console.log()
// }
//Q-6
// for(i=1;i<=a;i++)
// {
//     for(j=1;j<=i;j++)
//     {
//     process.stdout.write(`${j}`);
//     }
//     console.log();
// }
//Q-7
// for(i=1;i<=a;i++)
// {
//     for(j=1;j<=i;j++)
//     {
//     process.stdout.write(`${i}`);
//     }
//     console.log();
// }
//Q-8
for(i=1;i<=a;i++)
{
    for(j=a;j>=i;j--)
    {
    process.stdout.write(`${j}`);
    }
    console.log();
}



